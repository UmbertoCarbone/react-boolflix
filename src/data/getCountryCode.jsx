// Funzione di utilità per convertire il codice lingua in codice paese (per le bandiere)
export function getCountryCode(lang) {
  const map = {
    af: "ZA", am: "ET", ar: "SA", az: "AZ", be: "BY", bg: "BG", bn: "BD", bs: "BA",
    ca: "ES", cs: "CZ", cy: "GB", da: "DK", de: "DE", el: "GR", en: "GB", eo: "PL",
    es: "ES", et: "EE", eu: "ES", fa: "IR", fi: "FI", fo: "FO", fr: "FR", fy: "NL",
    ga: "IE", gl: "ES", gu: "IN", he: "IL", hi: "IN", hr: "HR", hu: "HU", hy: "AM",
    id: "ID", is: "IS", it: "IT", ja: "JP", jv: "ID", ka: "GE", kk: "KZ", km: "KH",
    kn: "IN", ko: "KR", ku: "TR", ky: "KG", lb: "LU", lo: "LA", lt: "LT", lv: "LV",
    mg: "MG", mk: "MK", ml: "IN", mn: "MN", mr: "IN", ms: "MY", mt: "MT", ne: "NP",
    nl: "NL", no: "NO", oc: "FR", pl: "PL", ps: "AF", pt: "PT", qu: "PE", rm: "CH",
    ro: "RO", ru: "RU", rw: "RW", se: "NO", sk: "SK", sl: "SI", so: "SO", sq: "AL",
    sr: "RS", sv: "SE", sw: "KE", ta: "IN", te: "IN", th: "TH", tk: "TM", tr: "TR",
    uk: "UA", ur: "PK", uz: "UZ", vi: "VN", vo: "DE", wa: "BE", xh: "ZA", yi: "IL",
    yo: "NG", zh: "CN"
  };
  return map[lang] || lang.toUpperCase();
}