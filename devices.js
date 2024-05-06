import { Device } from "./Device.js";

export const devices = [
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
        name: "Healthy Rips Rogue",
        bowl_size: 0.2,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: true,
        heat_source: "electric",
        price: 139,
        glass_friendliness: 3,
        glass_free_friendliness: 5,
        heating: "convection",
        url: "https://www.healthyrips.com/store/p114/ROGUE_DHE_Device.html",
        bowls_per_charge: 15,
        hard_hittingness: 2,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Healthy Rips Fury Edge",
        bowl_size: 0.2,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 129,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "convection",
        url: "https://www.healthyrips.com/store/p113/FURY_EDGE_DHE_Device.html",
        bowls_per_charge: 12,
        hard_hittingness: 2,
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
        name: "Arizer Air MAX",
        bowl_size: 0.2,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 220,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://arizer.com/airmax/",
        bowls_per_charge: 13,
        hard_hittingness: 2,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Arizer Solo II",
        bowl_size: 0.15,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: false,
        heat_source: "electric",
        price: 170,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://arizer.com/solo2/",
        bowls_per_charge: 13,
        hard_hittingness: 2,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Arizer Solo III",
        bowl_size: 0.2,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: true,
        heat_source: "electric",
        price: 345,
        glass_friendliness: 3,
        glass_free_friendliness: 5,
        heating: "convection",
        url: "https://arizer.com/solo3/",
        bowls_per_charge: 13,
        hard_hittingness: 3,
        ease_of_use: 5
    }),
    Device.from_obj({
        name: "Air Vape Legacy Pro",
        bowl_size: 0.3,
        form_factor: "portable",
        stealth: 4,
        has_session: true,
        has_on_demand: true,
        heat_source: "electric",
        price: 270,
        glass_friendliness: 1,
        glass_free_friendliness: 5,
        heating: "convection",
        url: "https://airvapeusa.com/products/airvape-legacy-pro",
        bowls_per_charge: 10,
        hard_hittingness: 3,
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
