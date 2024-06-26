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
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 1,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 1,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 1,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 3,
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
        bowls_per_charge: 5,
        hard_hittingness: 1,
        ease_of_use: 5,
        airflow: "open",
        battery_replaceability: "no",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 5,
        airflow: "open",
        battery_replaceability: "no",
        flavour: 3,
    }),
    Device.from_obj({
        name: "Venty",
        bowl_size: 0.35,
        form_factor: "portable",
        stealth: 3,
        has_session: true,
        has_on_demand: true,
        heat_source: "electric",
        price: 449,
        glass_friendliness: 2,
        glass_free_friendliness: 5,
        heating: "hybrid",
        url: "https://www.storz-bickel.com/en-us/venty",
        bowls_per_charge: 12,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "adjustable",
        battery_replaceability: "no",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "open",
        battery_replaceability: "n/a",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 3,
        ease_of_use: 1,
        airflow: "adjustable",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 3,
        ease_of_use: 0,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 4,
        ease_of_use: 0,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 4,
        ease_of_use: 0,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 0,
        airflow: "restricted",
        battery_replaceability: "n/a",
        flavour: 5,
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
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "yes",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 3,
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
        bowls_per_charge: 15,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 3,
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
        bowls_per_charge: 12,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 1,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 3,
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
        bowls_per_charge: 6,
        hard_hittingness: 4,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "yes",
        flavour: 4,
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
        bowls_per_charge: 5,
        hard_hittingness: 0,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 2,
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
        bowls_per_charge: 10,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "open",
        battery_replaceability: "n/a",
        flavour: 3,
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
        bowls_per_charge: 13,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "yes",
        flavour: 4,
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
        bowls_per_charge: 13,
        hard_hittingness: 2,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 3.5,
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
        bowls_per_charge: 13,
        hard_hittingness: 3,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "no",
        flavour: 3.5,
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
        bowls_per_charge: 10,
        hard_hittingness: 3,
        ease_of_use: 5,
        airflow: "restricted",
        battery_replaceability: "yes",
        flavour: 3,
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
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1,
        airflow: "open",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1,
        airflow: "open",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1,
        airflow: "open",
        battery_replaceability: "n/a",
        flavour: 4,
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
        bowls_per_charge: 10,
        hard_hittingness: 5,
        ease_of_use: 1,
        airflow: "open",
        battery_replaceability: "n/a",
        flavour: 4,
    }),
];
