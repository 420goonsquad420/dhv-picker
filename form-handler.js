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

    static from_obj(obj) {
        return new Device(obj.name, obj.bowl_size, obj.form_factor, obj.stealth, obj.has_session, obj.has_on_demand, obj.heat_source, obj.price, obj.glass_friendliness, obj.glass_free_friendliness, obj.heating, obj.url, obj.bowls_per_charge, obj.hard_hittingness, obj.ease_of_use);
    }

    copy() {
        return Device.from_obj({...this});
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
    Device.from_obj({
        name: "Dynavap B",
        bowl_size: 0.05,
        form_factor: "portable",
        stealth: 1,
        has_session: true,
        has_on_demand: true,
        heat_source: "butane/induction",
        price: 39,
        glass_friendliness: 4,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.dynavap.com/products/the-b",
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Dynavap M7",
        bowl_size: 0.1,
        form_factor: "portable",
        stealth: 1,
        has_session: true,
        has_on_demand: true,
        heat_source: "butane/induction",
        price: 75,
        glass_friendliness: 4,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.dynavap.com/products/the-m-7",
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Dynavap M7 XL",
        bowl_size: 0.1,
        form_factor: "portable",
        stealth: 1,
        has_session: true,
        has_on_demand: true,
        heat_source: "butane/induction",
        price: 100,
        glass_friendliness: 4,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.dynavap.com/products/the-m-7-xl",
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Crafty+",
        bowl_size: 0.3,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 279,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.storz-bickel.com/en-ca/crafty-plus-c",
        bowls_per_charge: 5,
        hard_hittingness: 1,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Mighty+",
        bowl_size: 0.3,
        form_factor: "portable",
        stealth: 3,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 279,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.storz-bickel.com/en-us/mighty-plus",
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Volcano Hybrid",
        bowl_size: 0.75,
        form_factor: "desktop",
        stealth: 0,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 699,
        glass_friendliness: 0,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.storz-bickel.com/en-ca/volcanohybrid",
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Dani Fusion 2.0",
        bowl_size: 0.18,
        form_factor: "portable",
        stealth: 1,
        has_session: true,
        has_on_demand: true,
        heat_source: "butane/induction",
        price: 139,
        glass_friendliness: 5,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://batteryfreeganz.com/products/dani-fusion-2-0-metal-stem-new",
        bowls_per_charge: 10,
        hard_hittingness: 3,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Terpsicle",
        bowl_size: 0.5,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "butane",
        price: 56,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "hybrid",
        url: "https://theroguewaxworks.com/collections/glass-vaporizers/products/conduction-convection-the-terpcicle-14mm-short?variant=40194797633610",
        bowls_per_charge: 10,
        hard_hittingness: 3,
        ease_of_use: 0
    }),
    Device.from_obj({
        name: "Quartz Cap",
        bowl_size: 0.5,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "butane",
        price: 40,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "hybrid",
        url: "https://theroguewaxworks.com/collections/glass-vaporizers/products/glass-cap-beta?variant=39928465129546",
        bowls_per_charge: 10,
        hard_hittingness: 4,
        ease_of_use: 0
    }),
    Device.from_obj({
        name: "Quartz Cap Mega",
        bowl_size: 0.75,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "butane",
        price: 45,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "hybrid",
        url: "https://theroguewaxworks.com/collections/glass-vaporizers/products/conduction-convection-quartz-cap-mega",
        bowls_per_charge: 10,
        hard_hittingness: 4,
        ease_of_use: 0
    }),
    Device.from_obj({
        name: "Vapman Inox",
        bowl_size: 0.15,
        form_factor: "portable",
        stealth: 0,
        has_session: true,
        has_on_demand: true,
        heat_source: "butane",
        price: 191,
        glass_friendliness: 0,
        glass_free_friendliness: 5,
        heating: "conduction",
        url: "https://www.planetofthevapes.com/products/vapman-vaporizer?variant=41767684079811",
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 0
    }),
    Device.from_obj({
        name: "POTV Lobo",
        bowl_size: 0.2,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 160,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.planetofthevapes.com/products/planet-of-the-vapes-lobo",
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "POTV ONE",
        bowl_size: 0.1,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 100,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.planetofthevapes.com/products/potv-one-vaporizer",
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "XMAX V3 Pro",
        bowl_size: 0.15,
        form_factor: "portable",
        stealth: 5,
        has_session: true,
        has_on_demand: true,
        heat_source: "electric",
        price: 110,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "convection",
        url: "https://www.planetofthevapes.com/products/xmax-v3-pro-vaporizer",
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Tinymight 2",
        bowl_size: 0.5,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: true,
        heat_source: "electric",
        price: 349,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "convection",
        url: "https://www.planetofthevapes.com/products/tinymight-2-vaporizer",
        bowls_per_charge: 6,
        hard_hittingness: 4,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Pax Plus",
        bowl_size: 0.3,
        form_factor: "portable",
        stealth: 5,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 160,
        glass_friendliness: 0,
        glass_free_friendliness: 5,
        heating: "conduction",
        url: "https://www.pax.com/vapes/pax-plus",
        bowls_per_charge: 5,
        hard_hittingness: 0,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Arizer XQ2",
        bowl_size: 0.5,
        form_factor: "desktop",
        stealth: 0,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 250,
        glass_friendliness: 0,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://arizer.com/xq2/",
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Cloud Connoisseur Omega",
        bowl_size: 1,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "electric",
        price: 170,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "convection",
        url: "https://cloud-connoisseur.company.site/Omega-Coiled-Kit-Lite-p578084717",
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Cloud Connoisseur Zeal",
        bowl_size: 1,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "electric",
        price: 126,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "convection",
        url: "https://cloud-connoisseur.company.site/SS-Zeal-Kit-Lite-p611851552",
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Flowerpot B0",
        bowl_size: 1,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "electric",
        price: 309,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "convection",
        url: "https://www.cannabishardware.com/products/flowerpot-bzero-bundle",
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1
    }),
    Device.from_obj({
        name: "Freight Train",
        bowl_size: 1,
        form_factor: "desktop",
        stealth: 0,
        has_session: false,
        has_on_demand: true,
        heat_source: "electric",
        price: 400,
        glass_friendliness: 5,
        glass_free_friendliness: 0,
        heating: "convection",
        url: "https://oldheadtc.com/products/freight-train-pro-kit-w-pro-engine",
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1
    }),
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
