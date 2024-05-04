//TODO these should be enums maybe?
const form_factors = ["desktop", "portable"];
const heat_sources = ["butane", "butane/induction", "electric"];
const heating_types = ["convection", "conduction", "hybrid"];
const zero_five_scale = [0,1,2,3,4,5];

class Device {
    constructor(name, bowl_size, form_factor, stealth, has_session, has_on_demand, heat_source, price, glass_friendliness, glass_free_friendliness, heating, url) {
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
    new Device("Dynavap B", 0.05, "portable", 1, true, true, "butane/induction", 39, 4, 5, "hybrid", "https://www.dynavap.com/products/the-b"),
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
        case "discreet":
            stealth_weigth = 1;
        case "invisible":
            stealth_weigth = 0;
    }

    const speed = document.getElementById('speed').value;
    const butane_ok = document.getElementById('butane_ok').value;
    const budget = document.getElementById('budget').value;
    const glass = document.getElementById('glass_fraction').value * 10;
    const heating = document.getElementById('heating').value;

    let desired_convection_fraction;
    switch (heating) {
        case "conduction":
            desired_convection_fraction = 0;
        case "convection":
            desired_convection_fraction = 1;
        case "hybrid":
            desired_convection_fraction = 0.5;
    }

    console.log(devices);

    const viable_devices = devices
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

    console.log(viable_devices);

    const device_suitabilities = viable_devices.map(device => {
        score = Math.sqrt(device.bowl_size / (amount_consumed * participants), 5) // Does the device hold enough herb?
              + 5 - stealth_weigth * (5-device.stealth)
              + 5 * (1- Math.abs(device.convection_fraction() - desired_convection_fraction));

        return {device: device, score: score};
    });

    device_suitabilities.sort((d1, d2) => d1.score - d2.score);


    document.getElementById('summary').innerHTML = makeDeviceList(device_suitabilities);
});

makeDeviceList = function(device_scores) {
    var device_ids = device_scores.map(d => d.device.name);
    str = "<ul>";

    device_ids.forEach(d_id => {
        str += "<li>" + d_id + "</li>";
    });

    str += "</ul>";

    return str;
}

document.getElementById("glass_fraction_display").innerHTML = "50%";
document.getElementById("glass_fraction").oninput = function() {
    document.getElementById("glass_fraction_display").innerHTML = this.value*10 + "%";
}

document.getElementById("budget_display").innerHTML = "$150";
document.getElementById("budget").oninput = function() {
    document.getElementById("budget_display").innerHTML = "$" + this.value*10;
}
