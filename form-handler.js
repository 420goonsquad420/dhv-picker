import { devices } from "./devices.js";

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const amount_consumed = document.getElementById('amount_consumed').value;
    const participants = document.getElementById('participants').value;
    const portability = document.getElementById('portability').value;
    const stealth = document.getElementById('stealth').value;
    let stealth_weigth;

    switch (stealth) {
        case "invisible":
            stealth_weigth = 5;
            break;
        case "discreet":
            stealth_weigth = 3;
            break;
        case "open":
            stealth_weigth = 0;
            break;
    }

    const speed = document.getElementById('speed').value;
    const butane_ok = document.getElementById('butane_ok').value;
    const budget = document.getElementById('budget').value*10;
    const glass_frac = document.getElementById('glass_fraction').value/10;
    const heating = document.getElementById('heating').value;
    const ease_weight = document.getElementById('ease_weight').value;

    let desired_convection_fraction;
    switch (heating) {
        case "conduction":
            desired_convection_fraction = 0;
            break;
        case "convection":
            desired_convection_fraction = 1;
            break;
        case "hybrid":
            desired_convection_fraction = 0.5;
            break;
    }

    // Adjust the price of butane devices based on whether they will be used with a torch or an induction heater
    const amended_devices = devices.map(device => {
        const amended_device = device.copy();

        if ((butane_ok == "no" || butane_ok == "yes_but_pay") && (device.heat_source == "butane/induction")) {
            amended_device.name += " + Ispire Wand";
            amended_device.price += 130;
        } else if (device.heat_source != "electric") {
            amended_device.name += " + Butane Torch";
            amended_device.price += 5;
        }

        return amended_device;
    });

    const viable_devices = amended_devices
        // Remove butane devices if user doesn't want to use torch
        .filter(device => !((butane_ok == "no") && (device.heat_source == "butane")))
        // Remove desktops if user needs a portable
        .filter(device => !((portability == "portable") && (device.form_factor == "desktop")))
        // Cap to devices within budget
        .filter(device => device.price <= budget)
        // Remove glass-only devices for users who want a handheld, and glass-incompatible devices for users who want to use glass
        .filter(device => {
            let can_use = true;
            if (glass_frac != 1) {
                can_use = device.glass_free_friendliness != 0;
            }
            if (glass_frac != 0) {
                can_use = can_use && device.glass_friendliness != 0;
            }

            return can_use;
        })
        // Remove conspicuous devices for users who need a lot of stealth
        .filter(device => !((stealth == "invisible") && (device.stealth < 2)))
        // Ensure device can do session/on-demand as desired
        .filter(device => {
            switch(speed) {
                case "session":
                    return device.has_session;
                case "on_demand":
                    return device.has_on_demand;
                default:
                    return true
            }
        });

    const device_suitabilities = viable_devices.map(device => {


        const bowl_score = -0.5 * Math.max(device.bowl_size, amount_consumed) / Math.min(device.bowl_size, amount_consumed);

        const stealth_score = stealth_weigth * -(5-device.stealth);

        const heat_type_score = 5 * (1 - Math.abs(device.convection_fraction() - desired_convection_fraction));

        const cost_score = 5 * (1 - (device.price / budget));

        const bowls_per_day = (amount_consumed * participants) / device.bowl_size;
        const battery_life_score = (portability == "portable" ? 1 : 0.2)*-(bowls_per_day / device.bowls_per_charge);

        const butane_score = (["yes_but", "yes_but_pay"].includes(butane_ok) && device.heat_source == "butane") || (butane_ok == "yes_but" && device.heat_source == "butane/induction") ? -5 : 0;
        const convenience_score = glass_frac * device.glass_friendliness + (1-glass_frac) * device.glass_free_friendliness + ease_weight * device.ease_of_use;

        const hit_score = device.hard_hittingness * ((speed == "on_demand" ? 2 : 1) + amount_consumed/4);

        const score = bowl_score + stealth_score + heat_type_score + cost_score + battery_life_score + butane_score + convenience_score + hit_score;

        return {device: device, score: score};
    });

    device_suitabilities.sort((d1, d2) => d2.score - d1.score);

    document.getElementById('summary').innerHTML = makeDeviceList(device_suitabilities);
});

function makeDeviceList(device_scores) {
    let str = "<ul>";

    device_scores.forEach(d => {
        str += "<li>" + makeDeviceItem(d) + "</li>";
    });

    str += "</ul>";

    return str;
}

function makeDeviceItem(device_score) {
    const device = device_score.device;
    const score = device_score.score.toPrecision(3);

    return `${score}: <a href=${device.url}>${device.name}</a>`;
}

document.getElementById("glass_fraction").oninput = function() {
    document.getElementById("glass_fraction_display").innerHTML = this.value*10 + "%";
}
document.getElementById("glass_fraction_display").innerHTML = document.getElementById("glass_fraction").value*10 + "%";

document.getElementById("budget").oninput = function() {
    document.getElementById("budget_display").innerHTML = "$" + this.value*10;
}
document.getElementById("budget_display").innerHTML = "$" + document.getElementById("budget").value*10;
