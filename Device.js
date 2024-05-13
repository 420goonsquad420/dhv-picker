const form_factors = ["desktop", "portable"];
const heat_sources = ["butane", "butane/induction", "electric"];
const heating_types = ["convection", "conduction", "hybrid"];
const zero_five_scale = [0,1,2,3,4,5];
const airflows = ["open", "restricted", "adjustable"];
const battery_replaceabilities = ["yes", "no", "n/a"];

export class Device {
    constructor(
        name, 
        bowl_size, 
        form_factor, 
        stealth, 
        has_session, 
        has_on_demand, 
        heat_source, 
        price, 
        glass_friendliness, 
        glass_free_friendliness, 
        heating, 
        bowls_per_charge, 
        hard_hittingness, 
        ease_of_use,
        airflow,
        battery_replaceability,
    ) {
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

        console.assert(typeof(bowls_per_charge) === "number" && bowls_per_charge > 0, "Error: Invalid bowls_per_charge");
        console.assert(!(form_factor == "desktop" && heat_source == "electric" && bowls_per_charge != 1000), "Desktops electrics should have '1000 bowls per charge'")
        this.bowls_per_charge = bowls_per_charge;

        console.assert(zero_five_scale.includes(hard_hittingness), "Error: Invalid hard_hittingness");
        this.hard_hittingness = hard_hittingness;

        console.assert(zero_five_scale.includes(ease_of_use), "Error: Invalid ease_of_use");
        console.assert(!(heat_source == "butane" && ease_of_use > 0), "Butane is more challenging to use");
        console.assert(!(heat_source == "butane/induction" && ease_of_use > 1), "Induction is more challenging to use");
        this.ease_of_use = ease_of_use;

        console.assert(airflows.includes(airflow), "Not a valid airflow");
        this.airflow = airflow;

        console.assert(battery_replaceabilities.includes(battery_replaceability), "Not a valid battery_replaceability");
        this.battery_replaceability = battery_replaceability;
    }

    static from_obj(obj) {

        return new Device(
            obj.name, 
            obj.bowl_size, 
            obj.form_factor, 
            obj.stealth, 
            obj.has_session, 
            obj.has_on_demand, 
            obj.heat_source, 
            obj.price, 
            obj.glass_friendliness, 
            obj.glass_free_friendliness, 
            obj.heating, 
            obj.bowls_per_charge, 
            obj.hard_hittingness, 
            obj.ease_of_use,
            obj.airflow,
            obj.battery_replaceability,
        );
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

