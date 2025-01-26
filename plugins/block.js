let handler = async (m, { ednut, isCreator, example, Reply, text, LoadDataBase }) => {
if (global.db.users[m.sender].banned) return m.reply(global.mess.ban)
if (!isCreator) return m.reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("tag/number"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await ednut.updateBlockStatus(mem, "block");
if (m.isGroup) ednut.sendMessage(m.chat, {text: `Successfully blocked @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}

handler.command = ["block","blok"]

module.exports = handler