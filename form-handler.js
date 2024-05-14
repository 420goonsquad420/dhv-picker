import { devices } from "./devices.js";

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const amount_consumed = document.getElementById('amount_consumed').value;
    const participants = document.getElementById('participants').value;
    const portability = document.getElementById('portability').value;
    const stealth = document.getElementById('stealth').value;
    let stealth_weight;

    switch (stealth) {
        case "invisible":
            stealth_weight = 5;
            break;
        case "discreet":
            stealth_weight = 3;
            break;
        case "open":
            stealth_weight = 0;
            break;
    }

    const speed = document.getElementById('speed').value;
    const butane_ok = document.getElementById('butane_ok').value;
    const own_torch_heater = document.getElementById('own_torch_heater').value;
    const budget = document.getElementById('budget').value*10;
    const glass_frac = document.getElementById('glass_fraction').value/10;
    const heating = document.getElementById('heating').value;
    const ease_weight = document.getElementById('ease_weight').value;
    const airflow = document.getElementById('airflow').value;
    const flavour_importance = document.getElementById('flavour_importance').value;

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

    // Filter and adjust the price of butane devices based on:
    // - whether they will be used with a torch or an induction heater
    // - whether the user already has a torch or induction heater
    const amended_devices = devices.flatMap(device => {
        const amended_devices = [];

        // TODO butane_ok has changed
        if (["electric"].includes(device.heat_source)){
            amended_devices.push(device.copy());
        } else if (
             ["yes", "prefer"].includes(butane_ok)
          && ["torch", "both"].includes(own_torch_heater)
          && ["butane", "butane/induction"].includes(device.heat_source)
        ) {
            amended_devices.push(device.copy());
            amended_devices.at(-1).heat_source = "butane";
        } else if (
             ["induction", "both"].includes(own_torch_heater)
          && ["butane/induction"].includes(device.heat_source)
        ) {
            amended_devices.push(device.copy());
            amended_devices.at(-1).heat_source = "induction";
        } else {
            if (
                ["yes", "yes_but, prefer"].includes(butane_ok)
             && ["butane", "butane/induction"].includes(device.heat_source)
            ){
                amended_devices.push(device.copy())
                if (!["torch", "both"].includes(own_torch_heater)) {
                    amended_devices.at(-1).name += " + Butane Torch";
                    amended_devices.at(-1).price += 5;
                }
                amended_devices.at(-1).heat_source = "butane";
            }

            if (
                ["no", "yes_but"].includes(butane_ok)
             && ["butane/induction"].includes(device.heat_source)
            ){
                amended_devices.push(device.copy())
                if (!["induction", "both"].includes(own_torch_heater)) {
                    amended_devices.at(-1).name += " + Ispire Wand";
                    amended_devices.at(-1).price += 130;
                }
                amended_devices.at(-1).heat_source = "induction";
            }
        }

        return amended_devices;
    });

    const viable_devices = amended_devices
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

        const bowls_per_person_per_day = amount_consumed / device.bowl_size;
        const bowl_score = bowls_per_person_per_day < 1 ? 5 * bowls_per_person_per_day : -5/19 * (device.bowl_size - 1)/amount_consumed + 5;

        const stealth_score = stealth_weight * -(5-device.stealth);

        const heat_type_score = 5 * (1 - Math.abs(device.convection_fraction() - desired_convection_fraction));

        const price_score = 5 * (1 - (device.price / budget)**2);

        const bowls_per_day = bowls_per_person_per_day * participants
        const battery_life_score = ((portability == "desktop") && (device.form_factor == "desktop")) ? 0 : 1 *-(bowls_per_day / device.bowls_per_charge);

        const butane_score = (["yes_but"].includes(butane_ok) && ["butane"].includes(device.heat_source)) ? -4
            : (["prefer"].includes(butane_ok) && ["butane"].includes(device.heat_source)) ? 4 : 0;

        const convenience_score = glass_frac * device.glass_friendliness + (1-glass_frac) * device.glass_free_friendliness + ease_weight * device.ease_of_use;

        const hit_score = device.hard_hittingness * ((speed == "on_demand" ? 2 : 1) + amount_consumed/4);

        const flavour_score = 1.2 * flavour_importance * (device.flavour - 3);

        const airflow_score = 5 * (device.airflow == airflow ? 1 : 0);

        const score = bowl_score + stealth_score + heat_type_score + price_score + battery_life_score + butane_score + convenience_score + hit_score + airflow_score + flavour_score;

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

    return `${score}: ${device.name}`;
}

document.getElementById("glass_fraction").oninput = function() {
    document.getElementById("glass_fraction_display").innerHTML = this.value*10 + "%";
}
document.getElementById("glass_fraction_display").innerHTML = document.getElementById("glass_fraction").value*10 + "%";

document.getElementById("budget").oninput = function() {
    document.getElementById("budget_display").innerHTML = "$" + this.value*10;
}
document.getElementById("budget_display").innerHTML = "$" + document.getElementById("budget").value*10;
