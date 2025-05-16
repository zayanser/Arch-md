const run  = function(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " d " : " d ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
const fontx = (text, style = 1) => {
            var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
            var ehz = {
                1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
            };
            var replacer = [];
            abc.map((v, i) =>
                replacer.push({
                    original: v,
                    convert: ehz[style].split('')[i]
                })
            );
            var str = text.toLowerCase().split('');
            var output = [];
            str.map((v) => {
                const find = replacer.find((x) => x.original == v);
                find ? output.push(find.convert) : output.push(v);
            });
            return output.join('');
        };
let { getDevice } = require('baileys')
let fs = require("fs")
let os = require('os');
let speed = require('performance-now');
let moment = require('moment-timezone');
let nou = require("node-os-utils");
let { sizeFormatter } = require('human-readable');
const timestamp = speed()
const welDate = moment.tz(`${global.timezone}`).format('DD/MM/YYYY')
const mark = "0@s.whatsapp.net"
var tot = nou.drive.info();
const getTime = (format, date) => {
	if (date) {
		return moment(date).locale('en').format(format)
	} else {
		return moment.tz(`${global.timezone}`).locale('en').format(format)
	}
}
const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { ednut, ednutdev, reply4 }) => {
let timestampe = speed()
let latensi = speed() - timestampe
let me = m.sender
let { getDevice } = require('baileys')
  if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.msg.ban)
let archmenu = `Hi  ${m.pushName} 👋 here's my menu list


• Mode
choose your desired mode type 
mode private (make the bot for private and sudo user only)
mode public (make it vulnerable for all users)
mode pc (make the bot work in private chat only)
mode group (make the bot work in group only)
mode off (turn settings on return to default mode)

• Areact
areact cmd (auto send a await reaction to bot and remove it after few seconds)
areact all (make the bot to react to all messages)

• Setbio
set your bot bio easily with text

• Restart
restart the bot process

• Advertise
make a broadcast to group by replying to the message/image/video/audio

• Delete
delete a message by replying to your message (if group bot must be admin to delete other messages)

• Join
join a group via the group invite link

• Leave
leave a group 

• Logout
logout all link devices (including the bot)

• Unblock
unblock a Whatsapp user easily

• Block
block a Whatsapp user

• Setsudo
give owner access to your bot even when in private mode or public mode

• Delsudo
remove owner access to your bot

• Getsudo
get a list of sudo users

• Listblock
get a list of all your block users

• Listgroup
get all the group you are in including jid and info

• Ban
ban user from using the bot if in public mode

• Unban
unban user to use the bot

• Setppbot
set profile picture for bot number

• Delppbot
delete profile picture for bot number

• Save
save media to your direct message text/image/video/audio

• Status
post to status hide mention and tag group or chat

• Play
download song directly from youtube 

• Video
download video directly from youtube

• Fb 
download Facebook video via facebook link no watermark

• Tiktok
download tiktok video via tiktok link no watermark

• Tiktokmp3
download tiktok audio via TikTok link

• Mediafire
download mediafire files via mediafire link 

• Gitclone
download github files or media via github repository

• Ytmp4
download youtube video via youtube media link 

• Ytmp3
download youtube audio via YouTube media link

• Img
download Pinterest image via query set amonut with number

• Yts
search for youtube link video without going to YouTube directly 

• Xvideodl
search for xvideo link videos

• Shortlink-dl
download shortlink video in a url

• Twitter
download twitter video no water mark

• Setcmd
set bot command under sticker when you send the sticker the command will be trigged

• Delcmd
del command set under sticker

• Update
check if theres any update made on the bot repository 

• Update now
update your bot to latest version

• Filter
set auto reply for your bot either in group or direct message when the set message is been sent the bot will auto reply

• Delfilter
delete auto reply that was set for the bot

• Listfilter
get a list of the auto reply set

• Truth
get a random truth game

• Dare 
get a random dare game

• Autostatus
make the bot auto view your status

• Online
the bot will always mark online even if you are offline

• Autotyping
the bot will change your presence to auto typing and it will show typing for other viewers

• Autorecording
the bot will change your presence to auto recording and it will show recording for other viewers

• Autoread
the bot will auto read all new messages received on it on

• Unavailable
the bot will show offline when you are offline leaving your current presence

• Antidelete
send all deleted media or text to your direct message including status

• Anticall
Anticall reject (Automatically reject all calls)
Anticall block (Reject call and block caller immediately)

• Autolevelup 
send an auto level up for all user just for fun

• Autostatuslike
send a random emoji after viewing status

• Ping
check bot response speed

• Runtime
check bot runtime process

• Ai
talk to a gemini ai with text and get a response 

• Test
check if bots online

• Alive
check bot alive message 
setalive (use this to set your preffered alive message #alive for runtime #ping for bot speed #quote to get random quote)

• Hidetag
hidetag and tag all members to text or media in group without them knowing

• Gcinfo
get group info 

• Tagall
tag all group member either using a text or null

• Tagadmin
mention all admin in a specific group

• Grouplink
get group link 

• Revoke
reset group link

• Add
add a member to group via quoted or number or tag

• Kick
remove a member to group via quoted or tag or number 

• Promote 
give administrator to user

• Demote
remove administrator from user 

• Mute 
lock a group to only admin can send message

• Unmute
unlock a group to all members can send message

• Antilink
antilink delete (detect link and delete link only)
antilink warn (delete link and give a warning from global.warn when warn completed automatically kick lick sender from group)
antilink kick (delete and kick link sender immediately)

• Antibot
kick alternative bot in the group

• Closetime
set a defualt hour to auto lock group using a 24 hrs format

• Opentime
set a default open hour to auto open group using a 24 hrs format

• Stoptime
stop auto lock group

• Welcome 
send a welcome message to new members joining a group

• Goodbye
send a goodbye message to member leaving a group

• Setwelcome 
set a welcome message to use when welcoming new members

• Setgoodbye
set a goodbye messaage when group members are leaving

• Pdm
send a promote or demote alert when the action trigged in a group

• Request
get request of member requesting to join a group

• Approve 
approve join request

• Warn
send a group warning in direct message to warned user with reason (if reason added)

• Delwarn
delete 1 warn from warn count 

• Resetwarn 
reset all user warn to default global.warn

• Antitag
kick user that use the tag or tagall command

• Kickall
kick all member from group only except from admins

• Banchat
ban bot from working in the group

• Unbanchat
unban bot to work in the group

• Sticker
create a sticker via photo or video

• Toimg
turn sticker to images

• Tomp3
turn video to audio

• Tomp4
turn animation sticker to video

• Tovn
turn audio to voice note

• Tovv
change image or video to view once 

• Write
create sticker with text

• Shorturl
create short url link 

• Ssweb
make screenshot to web url

• Tourl
get a url for your media

• Bass
add bass sound to audio

• Robot
add robot sound to audio

• Nightcore
add nightcore sound to audio

• Fat
add fat sound to audio

• Fast
add fast sound to audio

• Reverse
add reverse sound to audio

• Slow
add slow sound to audio

• Smooth
add smooth sound to audio

• Squirrel 
add squirrel sound to audio

• Blown
add blown to sound audio

• Deep
add deep to sound audio

• Stickersearch
search for a random sticker link

• Xnxxsearch
search +18 video link from xnxx

• Xvideosearch
search +18 video link from xvideo 

• Npmsearch
search npm package link

• Githubsearch
search for a repository link

• Tiktoksearch
search for a random tiktok video

• Writetext - Lighteffects
create a photo360 logo

• Getdevice
get a quoted user device

• Owner 
show bot owner contact

• Say
get an audio text to speech from ai

• Trackip
track ip info via ip adress

• Readmore
create a readmore

• Vv
turn view once to media and sent in current chat

• Vv2
turn view once to media and sent in private chat

• Fancy
make a font via text

• Charge
make a fancy animation

• Support
Get arch md bot info

• Take
change sticker packname and author 

• Getpp
get profile picture of a Whatsapp user 

• Weather 
get weather condition in given location 

• Translate 
translate any language to given country code

• Get
html only

• Repo
show bot repository info

• Lyrics
get music lyrics from query

• jid
get chat whatsapp identity 


© ᴀʀᴄʜ ᴍᴅ`
if (menutype === 'v1') {
                    ednut.sendMessage(m.chat, {
                        text: fontx(archmenu),
                        contextInfo: {
                            externalAdReply: {
                              showAdAttribution: true,
                                title: botname,
                                body: 'menu list',
                                thumbnailUrl: `${global.thumb}`,
                                sourceUrl: '',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }), {
                        quoted: m
                    }
} else if (menutype === 'v2' ) {
                    ednut.sendMessage(m.chat, { text:fontx(archmenu) }, {
                        quoted: m
                    })
 } else if (menutype === 'v3' )
 {
reply4(fontx(archmenu))
}
}

handler.command = ["list","help"]

module.exports = handler