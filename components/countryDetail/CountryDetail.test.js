import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetail from "./CountryDetail";

test("Should render details of country", () => {
  const data = {
      name: {
        common: "Haiti",
        official: "Republic of Haiti",
        nativeName: {
          fra: { official: "République d'Haïti", common: "Haïti" },
          hat: { official: "Repiblik Ayiti", common: "Ayiti" },
        },
      },
      tld: [".ht"],
      cca2: "HT",
      ccn3: "332",
      cca3: "HTI",
      cioc: "HAI",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { HTG: { name: "Haitian gourde", symbol: "G" } },
      idd: { root: "+5", suffixes: ["09"] },
      capital: ["Port-au-Prince"],
      altSpellings: [
        "HT",
        "Republic of Haiti",
        "République d'Haïti",
        "Repiblik Ayiti",
      ],
      region: "Americas",
      subregion: "Caribbean",
      languages: { fra: "French", hat: "Haitian Creole" },
      translations: {
        ara: { official: "جمهورية هايتي", common: "هايتي" },
        ces: { official: "Republika Haiti", common: "Haiti" },
        cym: { official: "Republic of Haiti", common: "Haiti" },
        deu: { official: "Republik Haiti", common: "Haiti" },
        est: { official: "Haiti Vabariik", common: "Haiti" },
        fin: { official: "Haitin tasavalta", common: "Haiti" },
        fra: { official: "République d'Haïti", common: "Haïti" },
        hrv: { official: "Republika Haiti", common: "Haiti" },
        hun: { official: "Haiti Köztársaság", common: "Haiti" },
        ita: { official: "Repubblica di Haiti", common: "Haiti" },
        jpn: { official: "ハイチ共和国", common: "ハイチ" },
        kor: { official: "아이티 공화국", common: "아이티" },
        nld: { official: "Republiek Haïti", common: "Haïti" },
        per: { official: "جمهوری هائیتی", common: "هائیتی" },
        pol: { official: "Republika Haiti", common: "Haiti" },
        por: { official: "República do Haiti", common: "Haiti" },
        rus: { official: "Республика Гаити", common: "Гаити" },
        slk: { official: "Haitská republika", common: "Haiti" },
        spa: { official: "República de Haití", common: "Haití" },
        swe: { official: "Republiken Haiti", common: "Haiti" },
        urd: { official: "جمہوریہ ہیٹی", common: "ہیٹی" },
        zho: { official: "海地共和国", common: "海地" },
      },
      latlng: [19, -72.41666666],
      landlocked: false,
      borders: ["DOM"],
      area: 27750,
      demonyms: {
        eng: { f: "Haitian", m: "Haitian" },
        fra: { f: "Haïtienne", m: "Haïtien" },
      },
      flag: "🇭🇹",
      maps: {
        googleMaps: "https://goo.gl/maps/9o13xtjuUdqFnHbn9",
        openStreetMaps: "https://www.openstreetmap.org/relation/307829",
      },
      population: 11402533,
      gini: { 2012: 41.1 },
      fifa: "HAI",
      car: { signs: ["RH"], side: "right" },
      timezones: ["UTC-05:00"],
      continents: ["North America"],
      flags: {
        png: "https://flagcdn.com/w320/ht.png",
        svg: "https://flagcdn.com/ht.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/ht.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/ht.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [18.53, -72.33] },
      postalCode: { format: "HT####", regex: "^(?:HT)*(\\d{4})$" },
    };

  const borders = [
    {
      "name": {
        "common": "Dominican Republic",
        "official": "Dominican Republic",
        "nativeName": {
          "spa": {
            "official": "República Dominicana",
            "common": "República Dominicana"
          }
        }
      },
      "tld": [".do"],
      "cca2": "DO",
      "ccn3": "214",
      "cca3": "DOM",
      "cioc": "DOM",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": { "DOP": { "name": "Dominican peso", "symbol": "$" } },
      "idd": { "root": "+1", "suffixes": ["809", "829", "849"] },
      "capital": ["Santo Domingo"],
      "altSpellings": ["DO"],
      "region": "Americas",
      "subregion": "Caribbean",
      "languages": { "spa": "Spanish" },
      "translations": {
        "ara": {
          "official": "جمهورية الدومينيكان",
          "common": "جمهورية الدومينيكان"
        },
        "ces": {
          "official": "Dominikánská republika",
          "common": "Dominikánská republika"
        },
        "cym": {
          "official": "Gweriniaeth Dominica",
          "common": "Gweriniaeth Dominica"
        },
        "deu": {
          "official": "Dominikanische Republik",
          "common": "Dominikanische Republik"
        },
        "est": {
          "official": "Dominikaani Vabariik",
          "common": "Dominikaani Vabariik"
        },
        "fin": {
          "official": "Dominikaaninen tasavalta",
          "common": "Dominikaaninen tasavalta"
        },
        "fra": {
          "official": "République Dominicaine",
          "common": "République dominicaine"
        },
        "hrv": {
          "official": "Dominikanska Republika",
          "common": "Dominikanska Republika"
        },
        "hun": {
          "official": "Dominikai Köztársaság",
          "common": "Dominikai Köztársaság"
        },
        "ita": {
          "official": "Repubblica Dominicana",
          "common": "Repubblica Dominicana"
        },
        "jpn": { "official": "ドミニカ共和国", "common": "ドミニカ共和国" },
        "kor": { "official": "도미니카 공화국", "common": "도미니카 공화국" },
        "nld": {
          "official": "Dominicaanse Republiek",
          "common": "Dominicaanse Republiek"
        },
        "per": { "official": "جمهوری دومینیکن", "common": "جمهوری دومینیکن" },
        "pol": { "official": "Republika Dominikańska", "common": "Dominikana" },
        "por": {
          "official": "República Dominicana",
          "common": "República Dominicana"
        },
        "rus": {
          "official": "Доминиканская Республика",
          "common": "Доминиканская Республика"
        },
        "slk": {
          "official": "Dominikánska republika",
          "common": "Dominikánska republika"
        },
        "spa": {
          "official": "República Dominicana",
          "common": "República Dominicana"
        },
        "swe": {
          "official": "Dominikanska republiken",
          "common": "Dominikanska republiken"
        },
        "urd": { "official": "جمہوریہ ڈومینیکن", "common": "ڈومینیکن" },
        "zho": { "official": "多明尼加共和国", "common": "多明尼加" }
      },
      "latlng": [19, -70.66666666],
      "landlocked": false,
      "borders": ["HTI"],
      "area": 48671,
      "demonyms": {
        "eng": { "f": "Dominican", "m": "Dominican" },
        "fra": { "f": "Dominicaine", "m": "Dominicain" }
      },
      "flag": "🇩🇴",
      "maps": {
        "googleMaps": "https://goo.gl/maps/soxooTHxEeiAbn3UA",
        "openStreetMaps": "https://www.openstreetmap.org/relation/307828"
      },
      "population": 10847904,
      "gini": { "2019": 41.9 },
      "fifa": "DOM",
      "car": { "signs": ["DOM"], "side": "right" },
      "timezones": ["UTC-04:00"],
      "continents": ["North America"],
      "flags": {
        "png": "https://flagcdn.com/w320/do.png",
        "svg": "https://flagcdn.com/do.svg"
      },
      "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/do.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/do.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": { "latlng": [18.47, -69.9] },
      "postalCode": { "format": "#####", "regex": "^(\\d{5})$" }
    }
  ];

  render(<CountryDetail data={data} borders={borders} />);
  const countryDetail = screen.queryByTestId(/Country__Details/i);
  expect(countryDetail).toBeInTheDocument();
});
