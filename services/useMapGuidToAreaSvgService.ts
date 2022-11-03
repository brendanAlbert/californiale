const useMapGuidToAreaSvgService = (county: string) => {
    const guidToAreaSvgMap: { [key: string]: string } = {
        alameda: "alameda",
        alpine: "alpine",
        amador: "amador",
        butte: "butte",
        calaveras: "calaveras",
        colusa: "colusa",
        "contra costa": "contra costa",
        "del norte": "del norte",
        "el dorado": "el dorado",
        fresno: "fresno",
        glenn: "glenn",
        humboldt: "humboldt",
        imperial: "imperial",
        inyo: "inyo",
        kern: "kern",
        kings: "kings",
        lake: "lake",
        lassen: "lassen",
        "los angeles": "los angeles",
        madera: "madera",
        marin: "marin",
        mariposa: "mariposa",
        mendocino: "mendocino",
        merced: "merced",
        modoc: "modoc",
        mono: "mono",
        monterey: "monterey",
        napa: "napa",
        nevada: "nevada",
        orange: "orange",
        placer: "placer",
        plumas: "plumas",
        riverside: "riverside",
        sacramento: "sacramento",
        "san benito": "san benito",
        "san bernardino": "san bernardino",
        "san diego": "san diego",
        "san francisco": "san francisco",
        "san joaquin": "san joaquin",
        "san luis obispo": "san luis obispo",
        "san mateo": "san mateo",
        "santa barbara": "santa barbara",
        "santa clara": "santa clara",
        "santa cruz": "santa cruz",
        shasta: "shasta",
        sierra: "sierra",
        siskiyou: "siskiyou",
        solano: "solano",
        sonoma: "sonoma",
        stanislaus: "stanislaus",
        sutter: "sutter",
        tehama: "tehama",
        trinity: "trinity",
        tulare: "tulare",
        tuolumne: "tuolumne",
        ventura: "ventura",
        yolo: "yolo",
        yuba: "yuba",
    };

    const stateSvgGuid = guidToAreaSvgMap[county];

    return {
        stateSvgGuid,
    };
};

export default useMapGuidToAreaSvgService;
