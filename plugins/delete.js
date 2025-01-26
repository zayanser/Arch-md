let handler = async ( m, {ednut, isCreator, example, Reply, LoadDataBase }) => {
if (global.db.users[m.sender].banned) return m.reply(global.mess.ban)
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (!m.quoted) return m.reply("reply to the message")
if (m.quoted.fromMe) {
ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply(example("reply to the chat"))
ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}

handler.command = ["delete", "del"]

module.exports = handler
