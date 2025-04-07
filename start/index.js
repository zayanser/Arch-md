//================= { MODULE } =================\\
require('../settings/config');
const {
    default: RaolLatestXConnect,
    useMultiFileAuthState,
    makeWASocket,
    DisRaolLatestXectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    DisconnectReason,
    getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");

//================= { DISCORD } =================\\
/*
require('../src/discord');
*/
//================= { LIBRARY } =================\\
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const {
    createInterface
} = require('readline');
const {
    say
} = require('cfonts')
const {
    Boom
} = require('@hapi/boom');
const NodeCache = require('node-cache');
const resolveMsgBuffer = new NodeCache();
const FileType = require('file-type');
const figlet = require('figlet');
const PhoneNumber = require('awesome-phonenumber');
const { writeExif } = require('./lib/native');
const {
    spawn
} = require('child_process');
const colors = require('@colors/colors/safe');
const CFonts = require('cfonts');
const moment = require('moment-timezone');
const Spinnies = require('spinnies');
const { getSession } = require("./byme")
const spinnies = new Spinnies()

// Function to fetch data from a URL
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (error) {
        const errorMessage = error.response ?
            `Server error: ${error.response.status} - ${error.response.statusText}` :
            `Network error: ${error.message}`;
        throw new Error(errorMessage);
    }
};

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => readline.question(query, resolve));

// Import custom functions and libraries
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require('./lib/exif');
const {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep
} = require('./lib/myfunction');
const {
    color
} = require('./lib/color');

const DataBase = require('./database');
const database = new DataBase();
(async () => {
	const loadData = await database.read()
	if (loadData && Object.keys(loadData).length === 0) {
		global.db = {
			users: {},
			groups: {},
			database: {},
			sticker: {},
			game: {},
			settings : {}, 
			...(loadData || {}),
		}
		await database.write(global.db)
	} else {
		global.db = loadData
	}
	
	setInterval(async () => {
		if (global.db) await database.write(global.db)
	}, 3500)
})();

require("events").EventEmitter.defaultMaxListeners = 600;
// Create an in-memory store
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
});

// Get the current time and determine a greeting based on the time
const now = moment().tz(`${global.timezone}`);
const time = now.format("HH:mm:ss");
let ucapanWaktu;

if (time < "03:00:00") {
    ucapanWaktu = "Good night🌃";
} else if (time < "06:00:00") {
    ucapanWaktu = "Enjoy nap🌆";
} else if (time < "11:00:00") {
    ucapanWaktu = "Good morning🏙️";
} else if (time < "15:00:00") {
    ucapanWaktu = "Good afternoon🏞️";
} else if (time < "19:00:00") {
    ucapanWaktu = "Good afternoon🌄";
} else {
    ucapanWaktu = "Good evening🌃";
}

// Get time in different time zones
const wib = now.clone().tz(`${global.timezone}`).locale("ng").format("HH:mm:ss z");
const wita = now.clone().tz(`${global.timezone}`).locale("ng").format("HH:mm:ss z");
const wit = now.clone().tz(`${global.timezone}`).locale("ng").format("HH:mm:ss z");
const salam = now.clone().tz(`${global.timezone}`).locale("ng").format("a");

// Define some constants
const moji = ['📚', '💭', '💫', '🌌', '🌏', '✨', '🌷', '🍁', '🪻'];
const randomemoji = moji[Math.floor(Math.random() * moji.length)];
const listcolor = ['aqua', 'red', 'blue', 'purple', 'magenta'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor2 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor3 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor4 = listcolor[Math.floor(Math.random() * listcolor.length)];
const randomcolor5 = listcolor[Math.floor(Math.random() * listcolor.length)];

//================= { CONSOLE DISPLAY } =================\\
const welcomeMessage = `
👋 Hii, I Am ${global.botname}
${ucapanWaktu}
Time    : ${ucapanWaktu}
`;

//================= { PAIRING } =================\\
async function keyoptions(url, options) {
    try {
        const methodskey = await axios({
            method: "GET",
            url: url,
            headers: {
                'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            },
            ...options
        });
        return methodskey.data;
    } catch (err) {
        return err;
    }
}

//================= { GLOBAL VARIABLES } =================\\
const loginInfoPath = path.join(__dirname, 'loginInfo.json');
/* const usePairingCode = global.paircode; */

//================= { MAIN FUNCTION } =================\\
async function EdnutStart() {

    const { state, saveCreds } = await useMultiFileAuthState('./start/src'); 
    
    const ednut = makeWASocket({
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 30000,
        emitOwnEvents: false,
        fireInitQueries: false,
        generateHighQualityLinkPreview: false,
        syncFullHistory: false,
        markOnlineOnConnect: false,
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        version: [2, 3000, 1017531287],
        browser: ["macOS", "Safari", "17.0"],
        resolveMsgBuffer
    });

/*    if (usePairingCode && ! ednut.authState.creds.registered) {
        try {
            console.log(chalk.hex("#800080").bold("Enter your WhatsApp number: "));

            const phoneNumber = await question("");

            if (!phoneNumber?.trim()) {
                console.log(chalk.red("Invalid number. Please try again."));
                return;
            }

            let code = await ednut.requestPairingCode(phoneNumber.trim());
            code = code.match(/.{1,4}/g)?.join(" - ") || code;

            console.log(chalk.hex("#800080").bold("Your Pairing Code :"), chalk.yellow.bold(code));
        } catch (error) {
            console.log(chalk.red("An error occurred while processing the number: " + error.message));
        }
    }
*/    
    //================= { WARNING } =================\\ 
    ednut.public = true

    ednut.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    ednut.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = ednut.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    ednut.setStatus = (status) => {
        ednut.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        });
        return status;
    };
    
    ednut.reply = (jid, text = '', quoted, options) => {
        return Buffer.isBuffer(text) ? ednut.sendFile(jid, text, 'file', '', quoted, false, options) : ednut.sendMessage(jid, { ...options, text }, { quoted, ...options })
}

    ednut.sendText = (jid, text, quoted = '', options) => ednut.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted
    });
    
    ednut.getName = (jid, withoutContact = false) => {
        id = ednut.decodeJid(jid)
        withoutContact = ednut.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = ednut.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === ednut.decodeJid(ednut.user.id) ?
            ednut.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    ednut.sendContact = async (jid, kon, desk = "Contact Owner", quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: botname,
  vcard: 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    `N:;${botname};;;\n` +
    `FN:${botname}\n` +
    'ORG:null\n' +
    'TITLE:\n' +
    `item1.TEL;waid=${i}:${i}\n` +
    'item1.X-ABLabel:Ponsel\n' +
    `X-WA-BIZ-DESCRIPTION:${desk}\n` +
    `X-WA-BIZ-NAME:${botname}\n` +
    'END:VCARD'
})
}
ednut.sendMessage(jid, { contacts: { displayName: `${list.length} contact`, contacts: list }, ...opts }, { quoted })
}

    ednut.serializeM = (m) => smsg(ednut, m, store);

    ednut.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update;
        try {
            if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
                if (reason === DisconnectReason.badSession) {
                    console.log(chalk.red.bold(`🚨 Bad Session Detected! Deleting corrupted session files...`));
                    const sessionDir = `./start/src`;
                    if (fs.existsSync(sessionDir)) {
                        fs.rm(sessionDir, { recursive: true }, (err) => {
                            if (err) {
                                console.error(chalk.red.bold(`❌ Error deleting session files: ${err}`));
                            } else {
                                console.log(chalk.green.bold(`🗑️ Session files deleted. Restarting in 5 seconds...`));
                            }
                        });
                    }
                    setTimeout(() => EdnutStart(), 5000);
                } else if (reason === DisconnectReason.connectionClosed) {
                    console.log("Connection closed, reconnecting....");
                    EdnutStart();
                } else if (reason === DisconnectReason.connectionLost) {
                    console.log("Connection Lost from Server, reconnecting...");
                    EdnutStart();
                } else if (reason === DisconnectReason.connectionReplaced) {
                    console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                    EdnutStart();
                } else if (reason === DisconnectReason.loggedOut) {
                    console.log(`Device Logged Out, Please Scan Again And Run.`);
                    EdnutStart();
                } else if (reason === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    EdnutStart();
                } else if (reason === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    EdnutStart();
                } else {
                    ednut.end(`Unknown DisconnectReason: ${reason}|${connection}`);
                }
            }
            if (update.connection === "connecting" || update.receivedPendingNotifications === "false") {
                console.log(color(`📑 Connecting`, `${randomcolor3}`));
            }

            if (update.connection === "open" || update.receivedPendingNotifications === "true") {
                console.log(color(`📑 Whatsapp Connected ✅`, `${randomcolor}`));
                console.log(color(`📑 welcome to arch database 🧬`));
         await sleep(2000);
    if (global.startup) {
      ednut.sendMessage(ednut.user.id.split(":")[0] + "@s.whatsapp.net", { text: `\`\`\`Arch Md connected successfully\`\`\`\n\n\`\`\`prefix:-  ${global.prefix}\`\`\`\n\n\`\`\`channel :- https://whatsapp.com/channel/0029VbAQfFGBVJl6W26JXy2n\n\nsupport :- https://chat.whatsapp.com/GmHOFOqQsM8A160ZCjcVnb\n\nnote if bot doesn't respond kindly restart from host don't forget to follow up for latest update on arch Md thanks for using 👋 Regards\n𝓔𝓭𝓷𝓾𝓽\`\`\`` })
      
    }
  }
} catch (err) {
  console.log('Error in Connection.update ' + err);
  EdnutStart();
}
});

    ednut.ev.on('messages.update', async chatUpdate => {
        for (const {
                key,
                update
            }
            of chatUpdate) {
            if (update.pollUpdates && key.fromMe) {
                const pollCreation = await getMessage(key)
                if (pollCreation) {
                    const pollUpdate = await getAggregateVotesInPollMessage({
                        message: pollCreation,
                        pollUpdates: update.pollUpdates,
                    })
                    var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
                    if (toCmd == undefined) return
                    var prefCmd = prefix + toCmd
                    ednut.appenTextMessage(prefCmd, chatUpdate)
                }
            }
        }
    })
    ednut.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        let mime = '';
        let res = await axios.head(url)
        mime = res.headers['content-type']
        if (mime.split("/")[1] === "gif") {
            return ednut.sendMessage(jid, {
                video: await getBuffer(url),
                caption: caption,
                gifPlayback: true,
                ...options
            }, {
                quoted: quoted,
                ...options
            })
        }
        let type = mime.split("/")[0] + "Message"
        if (mime === "application/pdf") {
            return ednut.sendMessage(jid, {
                document: await getBuffer(url),
                mimetype: 'application/pdf',
                caption: caption,
                ...options
            }, {
                quoted: quoted,
                ...options
            })
        }
        if (mime.split("/")[0] === "image") {
            return ednut.sendMessage(jid, {
                image: await getBuffer(url),
                caption: caption,
                ...options
            }, {
                quoted: quoted,
                ...options
            })
        }
        if (mime.split("/")[0] === "video") {
            return ednut.sendMessage(jid, {
                video: await getBuffer(url),
                caption: caption,
                mimetype: 'video/mp4',
                ...options
            }, {
                quoted: quoted,
                ...options
            })
        }
        if (mime.split("/")[0] === "audio") {
            return ednut.sendMessage(jid, {
                audio: await getBuffer(url),
                caption: caption,
                mimetype: 'audio/mpeg',
                ...options
            }, {
                quoted: quoted,
                ...options
            })
        }
    }
    ednut.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
        return ednut.sendMessage(jid, {
            poll: {
                name,
                values,
                selectableCount
            }
        })
    }
    ednut.sendText = (jid, text, quoted = '', options) => ednut.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    ednut.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ednut.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    ednut.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ednut.sendMessage(jid, {
            video: buffer,
            caption: caption,
            gifPlayback: gif,
            ...options
        }, {
            quoted
        })
    }
    ednut.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ednut.sendMessage(jid, {
            audio: buffer,
            ptt: ptt,
            ...options
        }, {
            quoted
        })
    }
    ednut.sendTextWithMentions = async (jid, text, quoted, options = {}) => ednut.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    ednut.sendAsSticker = async (jid, path, quoted, options = {}) => {
		const buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
		let buffer
	 if (options && (options.packname || options.author)) {
            buffer = await writeExif(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
		await ednut.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
		return buff;
	}
    ednut.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await ednut.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    ednut.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await ednut.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    ednut.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    ednut.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    ednut.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await ednut.getFile(path, true)
        let {
            mime,
            ext,
            res,
            data,
            filename
        } = types
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            } catch (e) {
                if (e.json) throw e.json
            }
        }
        let type = '',
            mimetype = mime,
            pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let {
                writeExif
            } = require('./lib/exif')
            let media = {
                mimetype: mime,
                data
            }
            pathFile = await writeExif(media, {
                packname: options.packname ? options.packname : global.packname,
                author: options.author ? options.author : global.author,
                categories: options.categories ? options.categories : []
            })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        } else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await ednut.sendMessage(jid, {
            [type]: {
                url: pathFile
            },
            caption,
            mimetype,
            fileName,
            ...options
        }, {
            quoted,
            ...options
        })
        return fs.promises.unlink(pathFile)
    }
    ednut.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
        if (options.readViewOnce) {
            message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
            vtype = Object.keys(message.message.viewOnceMessage.message)[0]
            delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
            delete message.message.viewOnceMessage.message[vtype].viewOnce
            message.message = {
                ...message.message.viewOnceMessage.message
            }
        }

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
        let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await ednut.relayMessage(jid, waMessage.message, {
            messageId: waMessage.key.id
        })
        return waMessage
    }
    
   ednut.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await ednut.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await ednut.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await ednut.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}

    ednut.cMod = (jid, copy, text = '', sender = ednut.user.id, options = {}) => {
        //let copy = message.toJSON()
        let mtype = Object.keys(copy.message)[0]
        let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
        let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
        else if (content.caption) content.caption = text || content.caption
        else if (content.text) content.text = text || content.text
        if (typeof content !== 'string') msg[mtype] = {
            ...content,
            ...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
        copy.key.remoteJid = jid
        copy.key.fromMe = sender === ednut.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }
    
ednut.getFile = async (PATH, save) => {
  let res
  let data = Buffer.isBuffer(PATH) 
    ? PATH 
    : /^data:.*?\/.*?;base64,/i.test(PATH) 
      ? Buffer.from(PATH.split(',')[1], 'base64') 
      : /^https?:\/\//.test(PATH) 
        ? await (res = await getBuffer(PATH)) 
        : fs.existsSync(PATH) 
          ? (filename = PATH, fs.readFileSync(PATH)) 
          : typeof PATH === 'string' 
            ? PATH 
            : Buffer.alloc(0)
  
  let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' }
  
  filename = path.join(__dirname, './tmp/media/' + new Date().getTime() + '.' + type.ext)
  
  if (data && save) fs.promises.writeFile(filename, data)
  
  return { res, filename, size: await getSizeMedia(data), ...type, data }
}

    ednut.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid == 'status@broadcast') {
  if (global.db.settings.readsw && global.db.settings.readsw == true) {
    ednut.readMessages([mek.key])
  } else return
}
		if (!mek.message) return
		if (!ednut.public && !mek.key.fromMe && !mek.key.global.owner && message.type === 'notify') return
		if (global.db.settings.autoread && global.db.settings.autoread == true) ednut.readMessages([mek.key])
		if (global.db.settings.autotyping && global.db.settings.autotyping == true && !mek.key.fromMe) ednut.sendPresenceUpdate('composing', mek.key.remoteJid)
				if (global.db.settings.available && global.db.settings.available == true && !mek.key.fromMe) ednut.sendPresenceUpdate('available', mek.key.remoteJid)
						if (global.db.settings.unavailable && global.db.settings.unavailable == true && !mek.key.fromMe) ednut.sendPresenceUpdate('unavailable', mek.key.remoteJid)
				if (global.db.settings.autorecording && global.db.settings.autorecording == true && !mek.key.fromMe) ednut.sendPresenceUpdate('recording', mek.key.remoteJid)
            if (!ednut.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('Raol')) return
            m = smsg(ednut, mek, store)
            require("../start/run")(ednut, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

ednut.ev.on('group-participants.update', async (anu) => {
try {
let metadata = await ednut.groupMetadata(anu.id)
const groupDesc = metadata.desc || 'no description';
const moment = require("moment-timezone");
const welDate = moment.tz(`${global.timezone}`).format('DD/MM/YYYY')
let members = metadata.participants.length
const participants = anu.participants

for (let num of participants) {
  // Get Profile Picture User
  try {
    ppuser = await ednut.profilePictureUrl(num, 'image')
  } catch {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }

  // Welcome Message
  if (global.db.groups && global.db.groups[anu.id] && global.db.groups[anu.id].welcome && anu.action == 'add') {
    let wel = `Hello 🤗 @${num.split("@")[0]} welcome to  ${metadata.subject}\n*READ GROUP DESCRIPTION!!!*\n${groupDesc}`
    await ednut.sendMessage(anu.id, { image: { url: ppuser }, caption: wel }).catch(e => { })
  }

  // Goodbye Message
  if (global.db.groups && global.db.groups[anu.id] && global.db.groups[anu.id].goodbye && (anu.action === 'remove' || anu.action === 'leave')) {
    let txtLeft = `Bye 😣 @${num.split("@")[0]} leaving group  ${metadata.subject}`
    await ednut.sendMessage(anu.id, { image: { url: ppuser }, caption: txtLeft })
  }
}
} catch (err) {
console.log(err)
}
})

ednut.ev.on('call', async (call) => {
  if (call[0].status == 'offer') {
    if (global.db.settings.anticall) {
      await ednut.sendMessage(ednut.user.id, { text: "call detected call ended", quoted: call[0] });
      await ednut.rejectCall(call[0].id, call[0].from);
    }
    if (global.db.settings.anticall2) {
      await ednut.sendMessage(ednut.user.id, { text: "call detected caller blocked", quoted: call[0] });
      await ednut.rejectCall(call[0].id, call[0].from);
      await sleep(2000);
      await ednut.updateBlockStatus(call[0].from, "block");
    }
  }
  return !0;
});

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


ednut.ev.process(async (events) => {
  if (events['presence.update']) {
    await ednut.sendPresenceUpdate('unavailable');
  }
  if (events['messages.upsert']) {
    const upsert = events['messages.upsert'];
    for (let msg of upsert.messages) {
      if (msg.message?.protocolMessage) return;
    }
  }
  if (events['creds.update']) {
    await saveCreds();
  }
})
return ednut
}

//========= { WHATSAPP START } =========\\
async function startBot() {
try {
	await getSession(global.session);
        EdnutStart();
} catch (error) {
	console.log("Encountered Error", error)
}
}


startBot();
//========= { AUTO CLEAN SESSION } =========\\
function clearSessionFiles(isShutdown = false) {
    const sessionDir = `./start/src`;

    try {
        if (!fs.existsSync(sessionDir)) {
            console.log(chalk.blue.bold('📂 [AUTO CLEAN] Session directory does not exist. Skipping cleanup.'));
            return;
        }

        const files = fs.readdirSync(sessionDir);
        if (files.length === 0) {
            console.log(chalk.blue.bold('📂 [AUTO CLEAN] No session files to clean. Everything is tidy! 📑'));
            return;
        }

        const filesToDelete = files.filter(file => 
            file.startsWith('pre-key') ||
            file.startsWith('sender-key') ||
            file.startsWith('session-') ||
            file.startsWith('app-state')
        );

        if (filesToDelete.length === 0) {
            console.log(chalk.blue.bold('📂 [AUTO CLEAN] No session files to clean. Everything is tidy! 📑'));
            return;
        }

        const logType = isShutdown ? 'SHUTDOWN CLEAN' : 'AUTO CLEAN';
        console.log(chalk.yellow.bold(`📂 [${logType}] Found ${filesToDelete.length} session files to clean... 🗃️`));

        filesToDelete.forEach(file => {
            const filePath = path.join(sessionDir, file);
            try {
                fs.unlinkSync(filePath);
                console.log(chalk.green.bold(`🗑️ Deleted: ${file}`));
            } catch (error) {
                console.error(chalk.red.bold(`❌ Failed to delete ${file}: ${error.message}`));
            }
        });

        console.log(chalk.green.bold(`🗃️ [${logType}] Successfully removed ${filesToDelete.length} session files! 📂`));
    } catch (error) {
        console.error(chalk.red.bold(`📑 [${logType} ERROR]`), chalk.red.bold(error.message));
    }
}

function autoClearSession() {
    const clearInterval = 2 * 60 * 60 * 1000;
    setInterval(() => clearSessionFiles(false), clearInterval);
    console.log(chalk.yellow.bold(`🔄 [AUTO CLEAN] Auto clear session is running every 2 hours.`));
}

process.on('SIGINT', () => {
    console.log(chalk.red.bold('\n🚨 [SHUTDOWN] Bot is shutting down...'));
    clearSessionFiles(true);
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log(chalk.red.bold('\n🚨 [SHUTDOWN] Bot is shutting down...'));
    clearSessionFiles(true);
    process.exit(0);
});

process.on('SIGTSTP', () => {
    console.log(chalk.red.bold('\n🚨 [SHUTDOWN] Bot is shutting down...'));
    clearSessionFiles(true);
    process.exit(0);
});

process.on('beforeExit', () => {
    console.log(chalk.red.bold('\n🚨 [SHUTDOWN] Bot is shutting down...'));
    clearSessionFiles(true);
});

process.on('exit', () => {
    console.log(chalk.red.bold('\n🚨 [SHUTDOWN] Bot is shutting down...'));
    clearSessionFiles(true);
});


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.yellowBright(`Latest File Update ${__filename}`));
    delete require.cache[file];
    require(file);
});