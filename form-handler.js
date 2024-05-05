//TODO these should be enums maybe?
const form_factors = ["desktop", "portable"];
const heat_sources = ["butane", "butane/induction", "electric"];
const heating_types = ["convection", "conduction", "hybrid"];
const zero_five_scale = [0,1,2,3,4,5];

class Device {
    constructor(name, bowl_size, form_factor, stealth, has_session, has_on_demand, heat_source, price, glass_friendliness, glass_free_friendliness, heating, url, bowls_per_charge, hard_hittingness, ease_of_use) {
        this.name = name;

        // In grams 
        console.assert(typeof(bowl_size) === "number", "Error: Invalid bowl size type");
        console.assert(bowl_size > 0, "Error: Invalid bowl size");
        this.bowl_size = bowl_size;

        console.assert(form_factors.includes(form_factor), "Error: Invalid form factor");
        this.form_factor = form_factor;

        console.assert(zero_five_scale.includes(stealth), "Error: Invalid stealth");
        console.assert(!((form_factor == "desktop") && (stealth != 0)), "Desktops are not stealthy");
        console.assert(!((heat_source == "butane") && (stealth != 0)), "Butane is not stealthy");
        console.assert(!((heat_source == "butane/induction") && (stealth > 2)), "Induction can be somewhat stealthy");
        this.stealth = stealth;

        console.assert(typeof(has_session) === "boolean", "Error: Invalid has_session type");
        this.has_session = has_session;

        console.assert(typeof(has_on_demand) === "boolean", "Error: Invalid has_on_demand type");
        this.has_on_demand = has_on_demand;

        console.assert(heat_sources.includes(heat_source), "Error: Invalid heat_source type");
        this.heat_source = heat_source;

        // In USD
        console.assert(typeof(price) === "number" && price > 0, "Error: Invalid price");
        this.price = price;

        console.assert(zero_five_scale.includes(glass_friendliness), "Error: Invalid glass_friendliness");
        this.glass_friendliness = glass_friendliness;

        console.assert(zero_five_scale.includes(glass_free_friendliness), "Error: Invalid glass_free_friendliness");
        this.glass_free_friendliness = glass_free_friendliness;

        console.assert(heating_types.includes(heating), "Error: Invalid heating type");
        this.heating = heating;

        console.assert(typeof(url) === "string", "Error: Invalid url");
        this.url = url;

        console.assert(typeof(bowls_per_charge) === "number" && bowls_per_charge > 0, "Error: Invalid bowls_per_charge");
        this.bowls_per_charge = bowls_per_charge;

        console.assert(zero_five_scale.includes(hard_hittingness), "Error: Invalid hard_hittingness");
        this.hard_hittingness = hard_hittingness;

        console.assert(zero_five_scale.includes(ease_of_use), "Error: Invalid ease_of_use");
        console.assert(!(heat_source == "butane" && ease_of_use > 0), "Butane is more challenging to use");
        console.assert(!(heat_source == "butane/induction" && ease_of_use > 1), "Induction is more challenging to use");
        this.ease_of_use = ease_of_use;
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
    new Device("Dynavap B", 0.05, "portable", 1, true, true, "butane/induction", 39, 4, 5, "hybrid", "https://www.dynavap.com/products/the-b", 10, 1, 1),
    new Device("Dynavap M7", 0.1, "portable", 1, true, true, "butane/induction", 75, 4, 5, "hybrid", "https://www.dynavap.com/products/the-m-7", 10, 2, 1),
    new Device("Dynavap M7 XL", 0.1, "portable", 1, true, true, "butane/induction", 100, 4, 5, "hybrid", "https://www.dynavap.com/products/the-m-7-xl", 10, 2, 1),
    new Device("Crafty+", 0.3, "portable", 4, true, false, "electric", 279, 2, 5, "hybrid", "https://www.storz-bickel.com/en-ca/crafty-plus-c", 5, 1, 5),
    new Device("Mighty+", 0.3, "portable", 3, true, false, "electric", 279, 2, 5, "hybrid", "https://www.storz-bickel.com/en-us/mighty-plus", 10, 1, 5),
    new Device("Volcano Hybrid", 0.75, "desktop", 0, true, false, "electric", 699, 0, 5, "hybrid", "https://www.storz-bickel.com/en-ca/volcanohybrid", 10, 2, 5),
    new Device("Dani Fusion 2.0", 0.18, "portable", 1, true, true, "butane/induction", 139, 5, 5, "hybrid", "https://batteryfreeganz.com/products/dani-fusion-2-0-metal-stem-new", 10, 3, 1),
    new Device("Terpsicle", 0.5, "desktop", 0, false, true, "butane", 56, 5, 0, "hybrid", "https://theroguewaxworks.com/collections/glass-vaporizers/products/conduction-convection-the-terpcicle-14mm-short?variant=40194797633610", 10, 3, 0),
    new Device("Quartz Cap", 0.5, "desktop", 0, false, true, "butane", 40, 5, 0, "hybrid", "https://theroguewaxworks.com/collections/glass-vaporizers/products/glass-cap-beta?variant=39928465129546", 10, 4, 0),
    new Device("Quartz Cap Mega", 0.75, "desktop", 0, false, true, "butane", 45, 5, 0, "hybrid", "https://theroguewaxworks.com/collections/glass-vaporizers/products/conduction-convection-quartz-cap-mega", 10, 4, 0),
    new Device("Vapman Inox", 0.15, "portable", 0, true, true, "butane", 191, 0, 5, "conduction", "https://www.planetofthevapes.com/products/vapman-vaporizer?variant=41767684079811", 10, 1, 0),
    new Device("POTV Lobo", 0.2, "portable", 4, true, false, "electric", 160, 2, 5, "hybrid", "https://www.planetofthevapes.com/products/planet-of-the-vapes-lobo", 10, 2, 5),
    new Device("POTV ONE", 0.1, "portable", 4, true, false, "electric", 100, 2, 5, "hybrid", "https://www.planetofthevapes.com/products/potv-one-vaporizer", 10, 1, 5),
    new Device("XMAX V3 Pro", 0.15, "portable", 5, true, true, "electric", 110, 2, 5, "convection", "https://www.planetofthevapes.com/products/xmax-v3-pro-vaporizer", 10, 1, 5),
    new Device("Tinymight 2", 0.5, "portable", 4, true, true, "electric", 349, 2, 5, "convection", "https://www.planetofthevapes.com/products/tinymight-2-vaporizer", 6, 4, 5),
    new Device("Pax Plus", 0.3, "portable", 5, true, false, "electric", 160, 0, 5, "conduction", "https://www.pax.com/vapes/pax-plus", 5, 0, 5),
    new Device("Arizer XQ2", 0.5, "desktop", 0, true, false, "electric", 250, 0, 5, "hybrid", "https://arizer.com/xq2/", 10, 2, 5),
    new Device("Cloud Connoisseur Omega", 1, "desktop", 0, false, true, "electric", 170, 5, 0, "convection", "https://cloud-connoisseur.company.site/Omega-Coiled-Kit-Lite-p578084717", 10, 5, 1),
    new Device("Cloud Connoisseur Zeal", 1, "desktop", 0, false, true, "electric", 126, 5, 0, "convection", "https://cloud-connoisseur.company.site/SS-Zeal-Kit-Lite-p611851552", 10, 5, 1),
    new Device("Flowerpot B0", 1, "desktop", 0, false, true, "electric", 309, 5, 0, "convection", "https://www.cannabishardware.com/products/flowerpot-bzero-bundle", 10, 5, 1),
    new Device("Freight Train", 1, "desktop", 0, false, true, "electric", 400, 5, 0, "convection", "https://oldheadtc.com/products/freight-train-pro-kit-w-pro-engine", 10, 5, 1),
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
            if (speed == "session") {
                return device.has_session;
            } else if (speed == "on_demand") {
                return device.has_on_demand;
            } else {
                return true;
            }
        });

    const device_suitabilities = viable_devices.map(device => {

        const bowls_per_day = (amount_consumed * participants) / device.bowl_size;

        const bowl_score = -bowls_per_day; 
        const stealth_score = stealth_weigth * device.stealth;
        const heat_type_score = 5 * (1- Math.abs(device.convection_fraction() - desired_convection_fraction));
        const cost_score = 5 - 10*(device.price / budget); 
        const battery_life_score = -bowls_per_day / device.bowls_per_charge;
        const butane_score = (["yes_but", "yes_but_pay"].includes(butane_ok) && device.heat_source == "butane") || (butane_ok == "yes_but" && device.heat_source == "butane/induction") ? -2 : 0;
        const convenience_score = glass_frac * device.glass_friendliness + (1-glass_frac) * device.glass_free_friendliness + ease_weight * device.ease_of_use;
        const hit_score = speed == "on_demand" ? 2 * device.hard_hittingness : device.hard_hittingness;

        const score = bowl_score + stealth_score + heat_type_score + cost_score + battery_life_score + butane_score + convenience_score + hit_score;

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
