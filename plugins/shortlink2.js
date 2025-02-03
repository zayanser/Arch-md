const axios = require("axios")
const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")

let handler = async (m, { ednut, example, text, LoadDataBase }) => {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.mess.ban)
if (!text) return m.reply(example("input a link"))
if (!text.startsWith("http://") && !text.startsWith("https://")) return m.reply("input a valid link")
await axios.get(`https://widipe.com/isgd?link=${text.toLowerCase()}`).then(async (e) => {
let result = e.data
const link = `  
* *Shortlink by is.gd*
 ${result.hasil.shorturl}
`.toString()
return m.reply(link)
}).catch(e => m.reply("Error!" + e))
}

handler.command = ["shortlink2"]

module.exports = handler