//TODO these should be enums maybe?
const form_factors = ["desktop", "portable"];
const heat_sources = ["butane", "butane/induction", "electric"];
const heating_types = ["convection", "conduction", "hybrid"];
const zero_five_scale = [0,1,2,3,4,5];

class Device {
    constructor(name, bowl_size, form_factor, stealth, has_session, has_on_demand, heat_source, price, glass_friendliness, glass_free_friendliness, heating, url, bowls_per_charge) {
        this.name = name;

        // In grams 
        console.assert(typeof(bowl_size) === "number", "Error: Invalid price");
        this.bowl_size = bowl_size;

        console.assert(form_factors.includes(form_factor), "Error: Invalid form factor");
        this.form_factor = form_factor;

        console.assert(zero_five_scale.includes(stealth), "Error: Invalid stealth");
        console.assert(!((form_factor == "desktop") && (stealth != "obvious")));
        console.assert(!((heat_source == "butane") && (stealth != "obvious")));
        console.assert(!((heat_source == "butane/induction") && (stealth == "stealthy")));
        this.stealth = stealth;

        console.assert(typeof(has_session) === "boolean", "Error: Invalid has_session");
        this.has_session = has_session;

        console.assert(typeof(has_on_demand) === "boolean", "Error: Invalid has_on_demand");
        this.has_on_demand = has_on_demand;

        console.assert(heat_sources.includes(heat_source), "Error: Invalid heat_source type");
        this.heat_source = heat_source;

        // In USD
        console.assert(typeof(price) === "number" && price > 0, "Error: Invalid price");
        this.price = price;

        console.assert(zero_five_scale.includes(glass_friendliness), "Error: Invalid glass_friendliness type");
        this.glass_friendliness = glass_friendliness;

        console.assert(zero_five_scale.includes(glass_free_friendliness), "Error: Invalid glass_free_friendliness type");
        this.glass_free_friendliness = glass_free_friendliness;

        console.assert(heating_types.includes(heating), "Error: Invalid heating type");
        this.heating = heating;

        console.assert(typeof(url) === "string", "Error: Invalid url");
        this.url = url;

        console.assert(typeof(bowls_per_charge) === "number" && bowls_per_charge > 0, "Error: Invalid bowls_per_charge");
        this.bowls_per_charge = bowls_per_charge;
    }

    convection_fraction() {
        switch (this.heating) {
            case "conduction":
                return 0;
            case "convection":
                return 1;
            case "hybrid":
                return 0.5;
        }
    }
}

const devices = [
    new Device("Dynavap B", 0.05, "portable", 1, true, true, "butane/induction", 39, 4, 5, "hybrid", "https://www.dynavap.com/products/the-b", 10),
    new Device("Dynavap M7", 0.1, "portable", 1, true, true, "butane/induction", 75, 4, 5, "hybrid", "https://www.dynavap.com/products/the-b", 10),
    new Device("Dynavap M7 XL", 0.1, "portable", 1, true, true, "butane/induction", 100, 4, 5, "hybrid", "https://www.dynavap.com/products/the-b", 10),
    new Device("Crafty+", 0.3, "portable", 4, true, false, "electric", 279, 3, 5, "hybrid", "https://www.storz-bickel.com/en-ca/crafty-plus-c", 5),
    new Device("Mighty+", 0.3, "portable", 4, true, false, "electric", 279, 3, 5, "hybrid", "https://www.storz-bickel.com/en-ca/crafty-plus-c", 10),
];

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const amount_consumed = document.getElementById('amount_consumed').value;
    const participants = document.getElementById('participants').value;
    const portability = document.getElementById('portability').value;
    const stealth = document.getElementById('stealth').value;
    let stealth_weigth;

    switch (stealth) {
        case "invisible":
            stealth_weigth = 2;
            break;
        case "discreet":
            stealth_weigth = 1;
            break;
        case "open":
            stealth_weigth = 0;
            break;
    }

    const speed = document.getElementById('speed').value;
    const butane_ok = document.getElementById('butane_ok').value;
    const budget = document.getElementById('budget').value*10;
    const glass = document.getElementById('glass_fraction').value * 10;
    const heating = document.getElementById('heating').value;

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
        const amended_device = {...device};
        // Fuck javascript
        amended_device.convection_fraction = device.convection_fraction;

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
        .filter(device => !((portability == "portable") && (device.portability == "desktop")))
        // Cap to devices within budget
        .filter(device => device.price <= budget)
        // Remove glass-only devices for users who want a handheld, and glass-incompatible devices for users who want to use glass
        .filter(device => {
            if (glass == 0) {
                return device.glass_free_friendliness != 0;
            } else if (glass != 0) {
                return device.glass_friendliness != 0;
            }
        })
        // Remove conspicuous devices for users who need a lot of stealth
        .filter(device => !((stealth == "invisible") && (device.stealth < 2)))
        // Ensure device can do session/on-demand as desired
        .filter(device => {
            if (speed == "session") {
                return device.has_session;
            } else if (speed == "on_demand") {
                return device.has_on_demand;
            } else {
                return true;
            }
        });

    const device_suitabilities = viable_devices.map(device => {
        const bowl_score = Math.min(Math.sqrt(10*device.bowl_size / (amount_consumed * participants)), 10); // Does the device hold enough herb?
        const stealth_score = 5 * stealth_weigth * device.stealth;
        const heat_type_score = 5 * (1- Math.abs(device.convection_fraction() - desired_convection_fraction));
        const cost_score = 5 - 10*(device.price / budget); 
        const battery_life_score = Math.min(10, device.bowls_per_charge);
        const butane_score = (["yes_but", "yes_but_pay"].includes(butane_ok) && device.heat_source == "butane") || (butane_ok == "yes_but" && device.heat_source == "butane/induction") ? -2 : 0;

        console.log(`Stealth: ${device.stealth}`);
        console.log(`Stealth weight: ${stealth_weigth}`);
        console.log("Scores:");
        //console.log(bowl_score);
        console.log(stealth_score);
        //console.log(heat_type_score);
        //console.log(cost_score);
        //console.log(battery_life_score);
        //console.log(butane_score);

        const score = bowl_score + stealth_score + heat_type_score + cost_score + battery_life_score + butane_score;

        return {device: device, score: score};
    });

    device_suitabilities.sort((d1, d2) => d2.score - d1.score);

    document.getElementById('summary').innerHTML = makeDeviceList(device_suitabilities);
});

makeDeviceList = function(device_scores) {
    str = "<ul>";

    device_scores.forEach(d => {
        str += "<li>" + makeDeviceListing(d) + "</li>";
    });

    str += "</ul>";

    return str;
}

makeDeviceListing = function(device_score) {
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
