//TODO these should be enums maybe?
const bools = [true, false];
const form_factors = ["desktop", "portable"];
const stealths = ["obvious", "so-so", "stealthy"];
const butanes = ["mandatory", "optional", "electric"];
const glasses = ["mandatory", "optional", "inconvenient"];
const heating_types = ["convection", "conduction", "hybrid"];

class Device {
    constructor(bowl_size, form_factor, stealth, has_session, has_on_demand, butane, price, glass, heating) {
        // In grams
        console.assert(typeof(bowl_size) === "number", "Error: Invalid price");
        this.bowl_size = bowl_size;

        console.assert(form_factors.includes(form_factor), "Error: Invalid form factor");
        this.form_factor = form_factor;

        console.assert(stealths.includes(stealth), "Error: Invalid stealth");
        this.stealth = stealth;

        console.assert(bools.includes(has_session), "Error: Invalid has_session");
        this.has_session = has_session;

        console.assert(bools.includes(has_on_demand), "Error: Invalid has_on_demand");
        this.has_on_demand = has_on_demand;

        console.assert(butanes.includes(butane), "Error: Invalid butane type");
        this.butane = butane;

        // In USD
        console.assert(typeof(price) === "number", "Error: Invalid price");
        this.price = price;

        console.assert(glasses.includes(glass), "Error: Invalid glass type");
        this.glass = glass;

        console.assert(heating_types.includes(heating), "Error: Invalid heating type");
        this.heating = heating;
    }
}

const devices = [
];

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const amount_consumed = document.getElementById('amount_consumed').value;
    const participants = document.getElementById('participants').value;
    const portability = document.getElementById('portability').value;
    const stealth = document.getElementById('stealth').value;
    const speed = document.getElementById('speed').value;
    const butane = document.getElementById('butane').value;
    const budget = document.getElementById('budget').value;
    const glass = document.getElementById('glass').value;
    const heating = document.getElementById('heating').value;

    const summary = `Name: ${name}<br>Email: ${email}<br>Message: ${message}`;

    document.getElementById('summary').innerHTML = `<h2>Summary</h2>${summary}`;
});
