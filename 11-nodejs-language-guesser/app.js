const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const inpArr = process.argv.slice(2);
const input = inpArr.join(" ");
const langCode = franc(input);
const foundLang = langs.where("3", langCode);

if (foundLang !== null && foundLang !== undefined) {
    langName = foundLang.name;
    console.log(langName.green);
} else {
    console.error("Could not find a language".red);
}