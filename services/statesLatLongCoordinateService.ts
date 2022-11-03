import { IStatele } from "../interfaces/IStatele";

const states: IStatele[] = [
    {
        state: "alameda",
        lat: 37.65,
        lon: -121.91,
    },
    {
        state: "alpine",
        lat: 38.58,
        lon: -119.8,
    },
    {
        state: "amador",
        lat: 38.44,
        lon: -120.66,
    },
    {
        state: "butte",
        lat: 39.66,
        lon: -121.6,
    },
    {
        state: "calaveras",
        lat: 38.21,
        lon: -120.55,
    },
    {
        state: "colusa",
        lat: 39.18,
        lon: -122.24,
    },
    {
        state: "contra costa",
        lat: 37.93,
        lon: -121.95,
    },
    {
        state: "del norte",
        lat: 41.74,
        lon: -123.96,
    },
    {
        state: "el dorado",
        lat: 38.78,
        lon: -120.53,
    },
    {
        state: "fresno",
        lat: 36.75,
        lon: -119.65,
    },
    {
        state: "glenn",
        lat: 39.59,
        lon: -122.39,
    },
    {
        state: "humboldt",
        lat: 40.8,
        lon: -123.8,
    },
    {
        state: "imperial",
        lat: 33.04,
        lon: -115.35,
    },
    {
        state: "inyo",
        lat: 36.35,
        lon: -117.25,
    },
    {
        state: "kern",
        lat: 35.34,
        lon: -118.72,
    },
    {
        state: "kings",
        lat: 36.07,
        lon: -119.81,
    },
    {
        state: "lake",
        lat: 39.09,
        lon: -122.76,
    },
    {
        state: "lassen",
        lat: 40.65,
        lon: -120.58,
    },
    {
        state: "los angeles",
        lat: 34.3,
        lon: -118.15,
    },
    {
        state: "madera",
        lat: 37.22,
        lon: -119.77,
    },
    {
        state: "marin",
        lat: 38.04,
        lon: -122.74,
    },
    {
        state: "mariposa",
        lat: 37.58,
        lon: -119.91,
    },
    {
        state: "mendocino",
        lat: 39.4692,
        lon: -123.3942,
    },
    {
        state: "merced",
        lat: 37.19,
        lon: -120.71,
    },
    {
        state: "modoc",
        lat: 41.6,
        lon: -120.72,
    },
    {
        state: "mono",
        lat: 37.55,
        lon: -118.52,
    },
    {
        state: "monterey",
        lat: 36.24,
        lon: -121.31,
    },
    {
        state: "napa",
        lat: 38.5,
        lon: -122.32,
    },
    {
        state: "nevada",
        lat: 39.3,
        lon: -120.77,
    },
    {
        state: "orange",
        lat: 33.67,
        lon: -117.78,
    },
    {
        state: "placer",
        lat: 39.06,
        lon: -120.73,
    },
    {
        state: "plumas",
        lat: 40.01,
        lon: -120.83,
    },
    {
        state: "plumas",
        lat: 40.01,
        lon: -120.83,
    },
    {
        state: "riverside",
        lat: 33.73,
        lon: -115.98,
    },
    {
        state: "sacramento",
        lat: 38.45,
        lon: -121.35,
    },
    {
        state: "san benito",
        lat: 36.61,
        lon: -121.08,
    },
    {
        state: "san bernardino",
        lat: 34.83,
        lon: -116.19,
    },
    {
        state: "san diego",
        lat: 33.02,
        lon: -116.77,
    },
    {
        state: "san francisco",
        lat: 37.7775,
        lon: -122.416389,
    },
    {
        state: "san joaquin",
        lat: 37.9,
        lon: -121.2,
    },
    {
        state: "san luis obispo",
        lat: 35.38,
        lon: -120.45,
    },
    {
        state: "san mateo",
        lat: 37.44,
        lon: -122.36,
    },
    {
        state: "santa barbara",
        lat: 34.54,
        lon: -120.03,
    },
    {
        state: "santa clara",
        lat: 37.14,
        lon: -121.43,
    },
    {
        state: "santa cruz",
        lat: 37.03,
        lon: -122.01,
    },
    {
        state: "shasta",
        lat: 40.76,
        lon: -122.04,
    },
    {
        state: "sierra",
        lat: 39.59,
        lon: -120.5,
    },
    {
        state: "siskiyou",
        lat: 41.35,
        lon: -122.3,
    },
    {
        state: "solano",
        lat: 38.27,
        lon: -121.94,
    },
    {
        state: "sonoma",
        lat: 38.51,
        lon: -122.93,
    },
    {
        state: "stanislaus",
        lat: 37.56,
        lon: -120.99,
    },
    {
        state: "sutter",
        lat: 39.04,
        lon: -121.69,
    },
    {
        state: "tehama",
        lat: 40.13,
        lon: -122.23,
    },
    {
        state: "trinity",
        lat: 40.66,
        lon: -123.12,
    },
    {
        state: "tulare",
        lat: 36.23,
        lon: -118.8,
    },
    {
        state: "tuolumne",
        lat: 38.02,
        lon: -119.94,
    },
    {
        state: "ventura",
        lat: 34.36,
        lon: -119.15,
    },
    {
        state: "yolo",
        lat: 38.553889,
        lon: -121.738056,
    },
    {
        state: "yuba",
        lat: 39.27,
        lon: -121.35,
    },
];

export const getLatLonStateObject = (state: string) =>
    states.filter((s) => s.state === state)[0];
