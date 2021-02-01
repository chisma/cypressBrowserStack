//Creates dynamic menus for each supported language
const fs = require("fs")
const sv_SE = require("../../locales/sv_SE.json")
const en_EN = require("../../locales/en_EN.json")
const pl_PL = require("../../locales/pl_PL.json")

//Create JSON object with 3 menus
const menu = { "sv": Array.of(sv_SE["navBar.services"], 
    sv_SE["navBar.case"], 
    sv_SE["navBar.career"], 
    sv_SE["navBar.aboutUs"],
    sv_SE["navBar.events"],
    sv_SE["navBar.news"],
    sv_SE["navBar.contact"],
    sv_SE["navBar.IR"]),
    "en": Array.of(en_EN["navBar.services"],
    en_EN["navBar.career"],
    en_EN["navBar.case"],
    en_EN["navBar.aboutUs"],
    en_EN["navBar.events"],
    en_EN["avBar.news"],
    en_EN["navBar.contact"])
}

fs.writeFileSync(`${__dirname}/../fixtures/navBarMenus.json`, JSON.stringify(menu))

