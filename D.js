//Jangan jual bang
//Ketauan jual next w enc 
const {
        WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage,
		Browsers	    	    
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { EmojiAPI } = require("emoji-api")
const phoneNum = require('awesome-phonenumber')
const emoji = new EmojiAPI()
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const emojidl = new EmojiAPI()
const Math_js = require('mathjs')
const crypto = require('crypto')
const yts = require( 'yt-search')
const premium = require("./lib/premium");
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const fbdl = require('fb-video-downloader');

const Exif = require('./lib/exif');
const exif = new Exif();
var kuis = false
hit_today = []
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let control = JSON.parse(fs.readFileSync('./control.json'))
owner = `${control.NomorOwner}`
banChats = false;
LolApi = "Deffbotz" //Ganti sama Api
target = `${control.NomorOwner}@s.whatsapp.net`//Ganti jadi nomor lu

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const hx = require('hxz-api')
const { dungeon } = require('./lib/rpg/dungeon.js') 
const { msgFilter } = require('./lib/antispam')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
const { limitCount, gcount} = require('./control.json') 
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/bot/user.json'))


//database 
const _sewa = require("./lib/sewa");
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const level = require("./lib/level");
const atm = require("./lib/atm");
const tebakkalimat = JSON.parse(fs.readFileSync('./database/tebakkalimat.json'))
const fake = fs.readFileSync ('./gambar/menu.jpg','base64')
const afk = require("./lib/afk");
const { recognize } = require('./lib/ocr')
const reminder = require ('./lib/reminder') 
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const tebakgambar = fs.readFileSync("./database/result/tebakgambar.json");
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
const stick = fs.readFileSync("./database/result/randomstic.json");
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const banc = JSON.parse(fs.readFileSync('./database/banchat.json'))
const limit = JSON.parse(fs.readFileSync('./lib/bot/limit.json'))
const balance = JSON.parse(fs.readFileSync('./lib/bot/balance.json'));0
const _reminder = JSON.parse(fs.readFileSync('./database/reminder.json'));
const tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/tekateki.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
//

let mrpg = fs.readFileSync('./gambar/menu.jpg')
let devil = fs.readFileSync('./media/devil.jpg')
let slime = fs.readFileSync('./media/slime.jpg')
let demon = fs.readFileSync('./media/demon.jpg')
let goblin = fs.readFileSync('./media/goblin.jpg')
let demonking = fs.readFileSync('./media/demonking.jpg')
let behemoth = fs.readFileSync('./media/behemoth.jpg')
// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) //5 detik bang
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = deff = async (deff, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const deff1 = ['1','2','3','4','5','6','7','8','9']
        const deff2 = ['1','2','3','4','5','6','7','8','9'] 
        const deff3 = deff1[Math.floor(Math.random() * (deff1.length))]
        const deff4 = deff2[Math.floor(Math.random() * (deff2.length))] 
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '#'
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''		
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd       
        const c = args.join(' ')
        const q = args.join(' ')
        const Rfake = fs.readFileSync ('./gambar/thumb.jpg','base64')
  
        const botNumber = deff.user.jid
        const ownerNumber = `${control.NomorOwner}`
		const ownerName = `${control.NamaOwner}`
		const botName = `${control.NamaBot}`
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? deff.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await deff.chats.all()
		const groupMetadata = isGroup ? await deff.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? deff.user.jid : deff.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? deff.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)                
        const isSimi = samih.includes(from)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
        const isEventon = isGroup ? event.includes(from) : false
        const isBanned = ban.includes(sender)
        const isBanchat = banc.includes(from)
        const isPetualang = checkPetualangUser(sender)
       

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `)-----[BOT WHATSAPP]-----(`, orderTitle: 'deffpratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `)-----[BOT WHATSAPP]-----(`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`)-----[BOT WHATSAPP]-----(`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `)-----[BOT WHATSAPP]-----(`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `)-----[BOT WHATSAPP]-----(`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`)-----[BOT WHATSAPP]-----(`, "h": `Hmm`,'seconds': '99999', 'caption': `)-----[BOT WHATSAPP]-----(`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `)-----[BOT WHATSAPP]-----(`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `@BY DEFF`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;@BY DEFF,;;;\nFN:@BY DEFF,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`), thumbnail: fs.readFileSync(`./gambar/thumb.jpg`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            deff.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./gambar/thumb.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`)-----[BOT WHATSAPP]-----(`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
        
        
var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}
		// Kalo Make Kasi WM Made By Febriansyah Ajg!!          

        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
                    
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = control.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = deff.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return deff.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply2 = (teks) => {
            deff.sendMessage(from, teks, text, {quoted:ftroli})
        }
        const reply1 = (teks) => {
			deff.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6289501060783`}}})
		}
		const reply = (teks) => {
            deff.sendMessage(from, teks, text, {quoted: mek})
        }
		const fakestatus = (teks) => {
            deff.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `[DEFFBOTZ]`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`gambar/thumb.jpg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const sendMess = (hehe, teks) => {
           deff.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? deff.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : deff.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           deff.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return deff.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./gambar/thumb.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       deff.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await deff.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = deff.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await deff.groupRemove(to, [i])
        } else {
           await deff.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       deff.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       deff.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
      const hideTag = async function(from, text){
	       let anu = await deff.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       deff.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('gambar/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const huluh = (text) => {
      const K = new RegExp("[AIUEOaiueo]", "g")
      text = text.replace(K, "u") 
      return text
      }
      const holoh = (text) => {
        const K = new RegExp("[AIUEOaiueo]", "g")
        text = text.replace(K, "o") 
        return text
        }
        const hilih = (text) => {
          const K = new RegExp("[AIUEOaiueo]", "g")
          text = text.replace(K, "i") 
          return text
          }
          const heleh = (text) => {
            const K = new RegExp("[AIUEOaiueo]", "g")
            text = text.replace(K, "e") 
            return text
            }
            const halah = (text) => {
              const K = new RegExp("[AIUEOaiueo]", "g")
              text = text.replace(K, "a") 
              return text
              }
 let sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      let kma = vid1;
      let mhan = await deff.prepareMessage(from, kma, video);
      let buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      deff.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
	kma = doc1
	mhan = await deff.prepareMessage(from, media, document, kma)
	const buttonMessages = {
	documentMessage: mhan.message.documentMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: "DOCUMENT"
	}
	deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           deff.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return deff.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }        
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
        }
        
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isRegistered = checkRegisteredUser(sender)
 ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      deff.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           deff.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
deff.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
deff.sendMessage(from, hasil, type, options).catch(e => {
deff.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       deff.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       deff.sendMessage(from, hasil, type, options).catch(e => {
	       deff.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await deff.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = deff.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await deff.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
           const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await deff.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = deff.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await deff.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = deff.contacts[from] != undefined ? deff.contacts[from].vname || deff.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
	try {
		pporang = await deff.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }       
	const ofrply = await getBuffer(pporang)	       
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '🌉Good Night'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
const levelRole = level.getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
}  

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
  
//--------------------[ANTI TOXIC]--------------------\\
if (bad.includes(messagesD)) {
if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
kntl = `${args.join(' ')}`
nama = ("TOXIC DETECTED")
impostor = ("NIH PERGI KE ARAB, TOBAT SONO\nSUPAYA GAK TOXIC")
deff.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, MessageType.liveLocation, {quoted:floc})
}
//--------------------[ANTI TOXIC]--------------------\\
//--------------------[STIKER ANJENG]--------------------\\
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					deff.sendMessage(to, media, sticker, {quoted:fkontak})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
//--------------------[STIKER ANJENG]--------------------\\

//--------------------[LEVELING]--------------------\\

   if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}   
//--------------------[LEVELING]--------------------\\
         
//--------------------[AFK]--------------------\\
	if (isGroup) {
		if (!mek.key.fromMe && banChats === true) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
		}
	    }
//--------------------[AFK]--------------------\\
   
//--------------------[ANTILINK]--------------------\\ 
      const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
      if (isGroup && isAntiLink && !isOwner && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
                setTimeout( () => {
		deff.groupRemove(from, [sender]).catch((e) => { deff.reply(from, global.db.mess.BotAdmin, mek) })
		}, 7000)
        setTimeout( () => {
        deff.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        deff.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        deff.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        deff.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick dalam 3 Detik❗`, MessageType.text)
        }, 0)               
               
        }
        }

//--------------------[ANTILINK]--------------------\\on


//--------------------[ANTIVIRTEX]--------------------\\
//Anti virtex time by Lord_deff
if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 1200) {
        if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
        deff.updatePresence(from, Presence.composing)
        let ayhd = "\n".repeat(420)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`        
		setTimeout( () => {
		deff.groupRemove(from, [kic]).catch((e) => { deff.reply(from, global.db.mess.BotAdmin, mek) })
		deff.sendMessage(`6289501060783@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n telah mengirim Virtex ❗`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BOT WHATSAPP",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6289501060783"}}})            
        }, 7000)
        setTimeout( () => {
        deff.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        deff.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        deff.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        deff.reply(from, `${ayhd}\nAnti Virtex Terdeteksi, pengguna ${kic} Telah Mengirimkan Virtex\n\nMaaf ${pushname} Anda akan di kick 3 detik lagi❗`, mek)                
        }, 0)               
               
        }
        }
//--------------------[ANTIVIRTEX]--------------------\\    

//--------------------[SIMI]--------------------\\
/*if (isSimi) {		
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=ID`)
                     sami = simi.success
                        deff.sendMessage(from, `${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }*/
//--------------------[SIMI]--------------------\\                      
	    
	    
	    
//--------------------[AUTO KETIK]--------------------\\	    
	    deff.updatePresence(from, Presence.composing)// hapus aja bang kalo risih
//--------------------[AUTO KETIK]--------------------\\

//--------------------[AUTO READ]--------------------\\		
        deff.chatRead(from, "read")// hapus aja bang kalo risih
//--------------------[AUTO READ]--------------------\\  

//--------------------[AUTO BIO]--------------------\\
runt = process.uptime() 
           deff.setStatus(`Aktif Selama : ${kyun(runt)} `).catch((_)=>_);

           settingstatus = new Date() * 1;            
//--------------------[AUTO BIO]--------------------\\
        
//--------------------[CMD]--------------------\\
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(100), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(100), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
addBalance(sender, randomNomor(80), balance)
//Anti spam by Deff, Fix bug gak respon & Gak fungsi & 
const spam1 = ` Sabar!,\n Kamu Terdeteksi Menggunakan Commnad Tanpa Jeda\n Harap Tunggu 3 Detik`
const spam2 = 'Jangan spam️'
const spam3 = [{
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `OWNER `,
            },
            type: 1,}]
 //--------------------< Auto Read >--------------------//
//--------------------< Anti Spam >--------------------//
function _0x22d9(){var _0x5bba24=['11319XdCIwS','addFilter','isFiltered','4328VkDOMU','1523446TCrRpX','15kOiPYZ','12924mkUfjw','1225956rWTfnE','495294omkKGx','30XDognR','1868109XjnHxv','31116210SRovwL'];_0x22d9=function(){return _0x5bba24;};return _0x22d9();}var _0x32621f=_0x389e;function _0x389e(_0x42b15f,_0x3c2d7d){var _0x22d935=_0x22d9();return _0x389e=function(_0x389e7b,_0x58b2fa){_0x389e7b=_0x389e7b-0x10d;var _0x36576e=_0x22d935[_0x389e7b];return _0x36576e;},_0x389e(_0x42b15f,_0x3c2d7d);}(function(_0x817a59,_0x50eabc){var _0x156ebc=_0x389e,_0x55c07a=_0x817a59();while(!![]){try{var _0x32f37d=parseInt(_0x156ebc(0x117))/0x1+-parseInt(_0x156ebc(0x113))/0x2+-parseInt(_0x156ebc(0x10d))/0x3+-parseInt(_0x156ebc(0x116))/0x4*(parseInt(_0x156ebc(0x114))/0x5)+parseInt(_0x156ebc(0x118))/0x6*(-parseInt(_0x156ebc(0x10f))/0x7)+parseInt(_0x156ebc(0x112))/0x8*(-parseInt(_0x156ebc(0x115))/0x9)+parseInt(_0x156ebc(0x10e))/0xa;if(_0x32f37d===_0x50eabc)break;else _0x55c07a['push'](_0x55c07a['shift']());}catch(_0x33d09b){_0x55c07a['push'](_0x55c07a['shift']());}}}(_0x22d9,0x7e7ad));if(isCmd&&msgFilter[_0x32621f(0x111)](from))return sendButMessage(from,spam1,spam2,spam3,{'quoted':mek});if(isCmd)msgFilter[_0x32621f(0x110)](from);
//==============================================================================================        
                   
        if (budy.toLowerCase() === `5173`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    deff.sendMessage(from, teks, text, {quoted: freply })
}          if (!mek.key.fromMe && banChats === true) return 
	   
	                       switch(command){
	//masih error & males benerin wkkw ntar aja lah
	/*case 'epen':
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break      
		  case 'event':
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButMessage(from, pp, 'Klik tombol untuk mengaktifkan', but, ftroli)
          break        
case 'profile': case 'rpgmenu':
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
 but = [
          { buttonId: `!inventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', mrpg, but, {quoted: mek})
          break
    case 'joinrpg':
          if (!isGroup) return reply(mess.only.group)  
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
		  if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
	   	  _petualang.push(sender)
		  fs.writeFileSync('./lib/data/inventori.json', JSON.stringify(_petualang))        
	      addInventori(sender)
	      addLevelingId(sender) 
          const name = args[0]
          try {
		  ppimg = await deff.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		  } catch {
	      ppimg = 'https://telegra.ph/file/ea03e6d664f8406465f00.jpg'	
		  }
		  const serialUser = createSerial(14)
          const anuu = monospace(`「 SUKSES JOIN RPG 」\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
          haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${name}&member=${pendaftar.length} User&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/d34e017b7d744bdcbfac3.jpg`)
          but = [
          { buttonId: `!rpgmenu`, buttonText: { displayText: 'RPG MENU' }, type: 1 }]
          sendButLocation(from, anuu, 'Rpg Game@^1.2.3', haitod, but, {quoted: mek})  
          break
    case 'mybag':
    case 'cekinven':
    case 'inventori':
    case 'myinventori':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
          but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButMessage(from, done, 'Inventori User', but)
          break

case 'kues': case 'quest': case 'misi':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var lordpebri = deff.prepareMessageFromContent(from, {
                        "listMessage": {
						"title": "Hallo kak, Aku deff!!\nAku adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan kakak!\nGabung ke petualang pro untuk membuka quest mode demon",
						"description": "\n*Jadi petualangan pro untuk dapatkan hadiah sepesial>_<*",
						"buttonText": "Silahkan Pilih Misinya Kak!",
						"footerText": "@Quest game",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Misi Ke-1",
								"rows": [
									{
										"title": "Membunuh Slime",
										"description": "Berburu slime untuk mendapatkan hadiah",
										"rowId": "!slime"
									}
								]
							},
							{
								"title": "Misi Ke-2", 
								"rows": [
									{
										"title": "Membunuh Goblin",
										"description": "Membunuh goblin untuk mendapatkan hadiah",
										"rowId": "!goblin"
									}
								]
							},
							{
								"title": "Misi Ke-3", 
								"rows": [
									{
										"title": "Membunuh Monster Evil Eye",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!devil"
									}
								]
							},
							{
								"title": "Misi Ke-4",
								"rows": [
									{
										"title": "Membunuh Monster Behemoth",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!behemoth"
									}
								]
							},
                            {
								"title": "Misi Ke-5",
								"rows": [
									{
										"title": "Membunuh Demon Four Fiends | VIP",
										"description": "Membunuh demon untuk mendapatkan hadiah",
										"rowId": "!demon"
									}
								]
							},
                            {
								"title": "Misi Ke-6",
								"rows": [
									{
										"title": "Membunuh Demon King | VIP",
										"description": "Membunuh demon king untuk mendapatkan hadiah spesial",
										"rowId": "!demonking"
                                  }
								]
							}
						]
					}
				},
			{}
	      )
	      deff.relayWAMessage(lordpebri, {waitForAck: true})     
          break
    case 'slime': case 'killslime':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 400)
          addLevelingXp(sender, ez)
          a = randomNomor(55)
          b = randomNomor(400)
          c = randomNomor(80)
          d = randomNomor(3)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', slime, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break      
    case 'goblin': case 'killgoblin':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 500)
          addLevelingXp(sender, ez)
          a = randomNomor(65)
          b = randomNomor(500)
          c = randomNomor(90)
          d = randomNomor(5)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', goblin, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                      
    case 'devil': case 'killdevil':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 600)
          addLevelingXp(sender, ez)
          a = randomNomor(70)
          b = randomNomor(600)
          c = randomNomor(95)
          d = randomNomor(6)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', devil, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break
    case 'behemoth': case 'killbehemoth':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 700)
          addLevelingXp(sender, ez)
          a = randomNomor(75)
          b = randomNomor(600)
          c = randomNomor(100)
          d = randomNomor(7)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3',behemoth, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break   
    case 'demon': case 'killdemond': 
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
		  if (!isPremium) return reply('Upss sepertinya kakak bukan petualang pro!\nchat ownet untuk menjadi petualang pro')
          ez = Math.ceil(Math.random() * 850)
          addLevelingXp(sender, ez)
          a = randomNomor(90)
          b = randomNomor(900)
          c = randomNomor(120)
          d = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demon, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break  
    case 'demonking': case 'killdemondking':
	      if (!isGroup) return reply(mess.only.group)    
          if (!isOwner) return reply ('Hanya Untuk GM')    
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 1000)
          addLevelingXp(sender, ez)
          addLevelingXp(sender, ez)
          addBalance(sender, 1999, balance)
          addEmas(sender, 99)          
          addBesi(sender, 99)
          addDm(sender, 99)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demonking, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                    
    case 'leaderboard':
	case 'lb':
	      if (!isGroup) return reply(mess.only.group)
	      _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
          let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
          let nom = 0
          try {
          for (let i = 0; i < 10; i++) {
          nom++
          leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
          }
          await reply(leaderboardlvl)
          } catch (err) {
          console.error(err)
          await reply(`minimal 10 user untuk bisa mengakses database`)
          }
          break
    case 'sellikan':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break                                      
    case 'mancing':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  deff.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  deff.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  deff.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
    case 'adventure':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./lib/rpg/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer('https://i.ibb.co/9pKDV3C/072ab52b8430e4b8e71d2e13047ec81c.jpg')  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  deff.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  deff.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  deff.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit)         
          break
   	case 'mining':   
   	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   	      if (!isGroup) return reply(mess.only.group)                         
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)                              
          if (!isPetualang) return reply(mess.only.player)
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButMessage(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  reply('sedang menambang') 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  reply('Mendapatkan emas') 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  reply('done') 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  deff.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
	      break	  
    case 'luckyday':  case 'luckytime':
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')
          if (isPremium) {
          ez = Math.ceil(Math.random() * 450)
          a = randomNomor(99)
          b = randomNomor(500)
          c = randomNomor(150)
          addBalance(sender, b, balance)
          addLevelingXp(sender, ez)
          addEmas(sender, a)
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButMessage(from, za, '@LuckyTime', but, mek)   
          }else{
          ez = Math.ceil(Math.random() * 300)
          addLevelingXp(sender, ez)
          a = randomNomor(49)
          b = randomNomor(300)
          c = randomNomor(70)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButMessage(from, za, '@LuckyTime', but, mek)          
          }  
          gameAdd(sender, glimit) 
          break	              
	case 'suratto': // Case By M4N1K
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await deff.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6285737134572|Hai Juga
║╚▸
╚═══ ◤ *${NamaBot}* ◢ `
				deff.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break*/
case 'ocr': 
					// Fix Case By Wahyu/Ganss⛔
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const mediau = await deff.downloadAndSaveMediaMessage(encmedia)
						reply('Sedang scanning gambar untuk diubah menjadi text') 
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					limitAdd(sender, limit)
					break
	case 'fdeface': 
if (isBanned) return reply(mess.baned)
if (isLimit(sender,isGroupAdmins, isOwner, gcount, glimit)) return reply(`Limit kamu sudah habis`)
  ge = args.join('');
  var pe = ge.split('|')[0];
  var pen = ge.split('|')[1];
  var pn = ge.split('|')[2];
  var be = ge.split('|')[3];
  let fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
  if (args.length < 1) return reply(fde);
  let dipes =
    isQuotedSticker || isQuotedImage
      ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message
          .extendedTextMessage.contextInfo
      : mek;
  let tipes = await deff.downloadAndSaveMediaMessage(dipes);
  let bufer = fs.readFileSync(tipes);
  let desc = `${pn}`;
  let title = `${pen}`;
  let url = `${pe}`;
  let buu = `https://${be}`;
  var  anu = {
    detectLinks: false,
  };
  var mat = await deff.generateLinkPreview(url);
  mat.title = title;
  mat.description = desc;
  mat.jpegThumbnail = bufer;
  mat.canonicalUrl = buu;
  deff.sendMessage(from, mat, MessageType.extendedText, anu);
  limitAdd(sender, limit)
  break;  
	case 'reminder': // by Slavyan 
	
if (isBanned) return reply(mess.baned)
if (isLimit(sender, isGroupAdmins, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis`)
          if (!q)
            return reply(
              `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
            );
          teks = body.slice(10);
          let messRemind = teks.split('/')[0];
          let timeRemind = teks.split('/')[1];
          typeRemind = 'Text';
          if (isQuotedImage) typeRemind = 'Image';
          if (isQuotedSticker) typeRemind = 'Sticker';
          if (isQuotedAudio) typeRemind = 'Audio';
          if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
            typeRemind = 'Text';
          let parsedTime = ms(toMs(timeRemind));
          reminder.addReminder(
            sender,
            messRemind,
            typeRemind,
            timeRemind,
            _reminder
          );
          if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
            await deff.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Text
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                deff.sendMessage(
                  from,
                  `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                  text,
                  { contextInfo: { mentionedJid: [sender] } }
                );
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          } else if (isQuotedSticker) {
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm'))
              .message.extendedTextMessage.contextInfo;
            media = await deff.downloadAndSaveMediaMessage(encmedia);
            await deff.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Sticker
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                deff.sendMessage(
                  from,
                  `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                  text,
                  { contextInfo: { mentionedJid: [sender] } }
                );
                deff.sendMessage(from, fs.readFileSync(media), sticker);
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          } else if (isQuotedImage) {
            encmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message
                  .extendedTextMessage.contextInfo
              : mek;
            media = await deff.downloadAndSaveMediaMessage(encmedia);
            await deff.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Image
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                teks = `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
  deff.sendMessage(from, media, image, {
                  contextInfo: { mentionedJid: [sender] },
                  caption: teks,
                });
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          } else if (isQuotedAudio) {
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm'))
              .message.extendedTextMessage.contextInfo;
            media = await deff.downloadAndSaveMediaMessage(encmedia);
            await deff.sendMessage(
              from,
              `── 「 REMINDER 」 ──
      
  Reminder berhasil diaktifkan!
  ➸ Pesan: ${messRemind}
  ➸ Type: Audio
  ➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
                parsedTime.seconds
              } detik
  ➸ Untuk: @${sender.split('@')[0]}
      `,
              text,
              { contextInfo: { mentionedJid: [sender] } }
            );
            let intervRemind = setInterval(async () => {
              if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                anu = await reminder.getReminderMsg(sender, _reminder);
                deff.sendMessage(
                  from,
                  `── 「 REMINDER 」 ──
  
  ⏰ @${sender.split('@')[0]} ⏰
  ➸ Pesan: ${messRemind}
  ➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                  text,
                  { contextInfo: { mentionedJid: [sender] } }
                );
                deff.sendMessage(from, fs.readFileSync(media), audio, {
                  contextInfo: { mentionedJid: [sender] },
                  mimetype: 'audio/mp4',
                  ptt: true,
                  caption: teks,
                });
                _reminder.splice(
                  reminder.getReminderPosition(sender, _reminder),
                  1
                );
                fs.writeFileSync(
                  './database/reminder.json',
                  JSON.stringify(_reminder)
                );
                clearInterval(intervRemind);
              }
            }, 1000);
          }
          limitAdd(sender, limit)
          break;
   case 'limit': case 'ceklimit': case 'balance': case 'glimit':
  tiyo = `*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Balance : ${getBalance(sender, balance)}`}`
  sendButMessage(from, tiyo, `CLICK DIBAWAH UNTUK MEMBELI LIMIT`, [
              {              
                buttonId: `${prefix}buylimit`,
                buttonText: {
                  displayText: `💸BUYLIMIT`,
                },
                type: 1,
              },
            ]);                  
          break;   
          
case 'buylimit':
  if (!q)return reply(`Example : ${prefix + command} 10 1 limit = 100 balance`)
  if (isNaN(q)) return reply(`Harus berupa angka`)
  payout = body.slice[10]
  yumm = 100 * payout
  if (getBalance(sender, balance) < yumm) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
  kurangBalance(sender, yumm, balance)
  giveLimit(sender, parseInt(args[0]), limit)
  tiyu = `PEMBELIAN SEBANYAK ${q}`
  sendButMessage(from, tiyu, `*Kamu telah berhasil membeli limit*`, [
            {
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECK LIMIT`,
              },
              type: 1,
            },
          ]);               
          break;
case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN: ${control.NamaOwner}\n` +
            `item1.TEL;waid=${control.NomorOwner}:${control.NomorOwner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:daffayudhistira93@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/c/DEFFBOTZZ/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ DEFFBOTZ Owner\n` +
            'END:VCARD'.trim()
deff.sendMessage(from, {displayName: `DEFF`, vcard: vcard3}, contact,) 
     break          
case 'set':
	      case 'mode':

        if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `👤 SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `👥 PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
        
case 'self':

              if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              reply(' ```「 SELF MODE 」``` ')
              break       
case 'public':

        	  if (!mek.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              reply(' ```「 PUBLIC MODE 」``` ')
              break

    case 'menu':
case 'help':
case 'daffa':
deff.sendMessage(from, 'Loading... ', text)
groups = deff.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = deff.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
const Tag = `${control.NomorOwner}`
  let giid = []
  thu = await deff.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  const boy = `${control.NomorOwner}@s.whatsapp.net`
  const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
  const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
  parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
  }
  totalChat = await deff.chats.all()
  groups = deff.chats.array.filter(v => v.jid.endsWith('g.us'))
  privat = deff.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
  total = math(`${groups.length}*${privat.length}`)
  timestampe = speed();
  latensie = speed() - timestampe
 lol = `
_🌐GRUB TOTAL : ${groups.length}_
_🎲PRIBADI CHAT : ${privat.length}_
_🎭BATERAI : ${baterai}% ${charger}_
_🌠TOTAL CHAT : ${totalChat.length}_
_🏳‍🌈KECEPATAN : ${latensie.toFixed(4)} Detik_
_𓃲RUNTIME : ${runtime(process.uptime())}_
_🏴‍☠️PLATFORM : ${os.platform()}_
_🎲LIMIT: ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
 `
  buttons = [{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝙾𝚆𝙽𝙴𝚁' }, type: 1 }, { buttonId: `${prefix}rules`, buttonText: { displayText: '𝚁𝚄𝙻𝙴𝚂' }, type: 1 },]

  imageMsg = (await deff.prepareMessageMedia(fs.readFileSync(`./gambar/menu.jpg`), 'imageMessage', { thumbnail: fs.readFileSync(`./gambar/menu.jpg`) })).imageMessage

  buttonsMessage = {
    contentText: `${lol}`,
    footerText:`
┏━━━━━━━⬣
┃「 OWNER 」	        
┃⎙ ${prefix}delete
┃⎙ ${prefix}del
┃⎙ ${prefix}d
┃⎙ ${prefix}bc
┃⎙ ${prefix}broadcast
┃⎙ ${prefix}bc2
┃⎙ ${prefix}broadcast2
┃⎙ ${prefix}bc3
┃⎙ ${prefix}broadcast3
┃⎙ ${prefix}ban
┃⎙ ${prefix}banned
┃⎙ ${prefix}unban
┃⎙ ${prefix}unbanned
┃⎙ ${prefix}listban
┃⎙ ${prefix}banchat
┃⎙ ${prefix}unbanchat
┃⎙ ${prefix}mode
┃⎙ ${prefix}setppbot
┃⎙ ${prefix}setfotomenu
┃⎙ ${prefix}join link
┗━━━━━━━━━━━⬣
┏━━━━━━━━⬣
┃「 GRUPMENU 」	
┃⎙ ${prefix}antilink
┃⎙ ${prefix}antivirtex
┃⎙ ${prefix}welcome
┃⎙ ${prefix}kick
┃⎙ ${prefix}add
┃⎙ ${prefix}hidetag
┃⎙ ${prefix}demote
┃⎙ ${prefix}promote
┃⎙ ${prefix}reminder 
┃⎙ ${prefix}linkgc
┗━━━━━━━━━━━━⬣
┏━━━━━━━━━━⬣
┃[「 DOWNLOAD 」	
┃⎙ ${prefix}play *query* 
┃⎙ ${prefix}tiktokdl *link* 
┃⎙ ${prefix}mediafire *link* 
┗━━━━━━━━━━━━━━━⬣
┏━━━━━━⬣
┃「 FUN 」	
┃⎙ ${prefix}ganteng 
┃⎙ ${prefix}cantik  
┃⎙ ${prefix}goblok 
┃⎙ ${prefix}jelek
┃⎙ ${prefix}bego 
┃⎙ ${prefix}pinter 
┃⎙ ${prefix}nolep 
┃⎙ ${prefix}gantengcek
┃⎙ ${prefix}cantikcek
┃⎙ ${prefix}nolepcek
┃⎙ ${prefix}begocek
┃⎙ ${prefix}cekwatak
┃⎙ ${prefix}hobby (Limit) 
┃⎙ ${prefix}wangy (Limit) 
┃⎙ ${prefix}hilih *text*
┃⎙ ${prefix}holoh *text*
┃⎙ ${prefix}halah *text*
┃⎙ ${prefix}huluh *text*
┃⎙ ${prefix}heleh *text*
┗━━━━━━━━━━━⬣
┏━━━━━━━━━━━⬣
┃「 GAME 」
┃⎙ ${prefix}tictactoe 
┃⎙ ${prefix}truth
┃⎙ ${prefix}dare
┃⎙ ${prefix}tebakgambar
┃⎙ ${prefix}caklontong
┃⎙ ${prefix}tebakkalimat
┃⎙ ${prefix}family100
┗━━━━━━━━━━━⬣
┏━━━━━━━⬣
┃「 SEARCH 」
┃⎙ ${prefix}ytsearch *query*
┃⎙ ${prefix}joox *query*
┃⎙ ${prefix}otakudesu *query*
┃⎙ ${prefix}otakudesusearch
┃⎙ ${prefix}google
┃⎙ ${prefix}xnxx query
┃⎙ ${prefix}play query
┃⎙ ${prefix}play4
┃⎙ ${prefix}play3
┃⎙ ${prefix}ytmp4
┃⎙ ${prefix}ytmp3
┗━━━━━━━━━━━⬣
┏━━━━━━━⬣
┃「 TOOLS 」
┃⎙ ${prefix}nulis 
┃⎙ ${prefix}tourl 
┃⎙ ${prefix}image *query* 
┃⎙ ${prefix}pinterest
┃⎙ ${prefix}take *reply gambar* 
┃⎙ ${prefix}tomp3
┃⎙ ${prefix}linkwa 
┃⎙ ${prefix}translate
┃⎙ ${prefix}fdeface link|title|desk|teks 
┗━━━━━━━━━━━━━━━━━⬣ 
┏━━━━━━━━━━⬣
┃ 「 RANDOM TEXT」
┃⎙ ${prefix}quotes
┃⎙ ${prefix}quotesanime
┃⎙ ${prefix}pantun
┃⎙ ${prefix}quotesimage
┃⎙ ${prefix}quotesdilan
┃⎙ ${prefix}image
┃⎙ ${prefix}katabijak
┃⎙ ${prefix}bucin
┗━━━━━━━⬣
┏━━━━━━━⬣
┃「 STICKER 」
┃⎙ ${prefix}toimg
┃⎙ ${prefix}sticker *reply gambar
┃⎙ ${prefix}stickergif
┃⎙ .smeme
┃⎙ ${prefix}pmeme
┗━━━━━━━━━━━⬣
┏━━━━━━━⬣
┃「 MAKER 」
┃⎙ ${prefix}pornhub
┃⎙ ${prefix}blackpink
┃⎙ ${prefix}halloween
┃⎙ ${prefix}halloween2
┃⎙ ${prefix}3dgradient
┃⎙ ${prefix}naturalleaves
┃⎙ ${prefix}dropwater
┃⎙ ${prefix}blood
┃⎙ ${prefix}blood2
┃⎙ ${prefix}snow
┃⎙ ${prefix}cloud
┃⎙ ${prefix}neondevil
┃⎙ ${prefix}neon
┃⎙ ${prefix}glowingneonlight
┃⎙ ${prefix}neonlightglitch
┃⎙ ${prefix}neonlightonbrickwall
┃⎙ ${prefix}neonlight
┃⎙ ${prefix}neonlight2
┃⎙ ${prefix}neonlight3
┃⎙ ${prefix}greenneon
┃⎙ ${prefix}toxic
┃⎙ ${prefix}matrix
┃⎙ ${prefix}thunder
┃⎙ ${prefix}thunder2
┃⎙ ${prefix}bokeh
┃⎙ ${prefix}carbontext
┃⎙ ${prefix}christmas
┃⎙ ${prefix}breakwale
┃⎙ ${prefix}roadwarning
┃⎙ ${prefix}engraved3d
┃⎙ ${prefix}embossed
┃⎙ ${prefix}3dstone
┃⎙ ${prefix}futuristic
┃⎙ ${prefix}sketch
┃⎙ ${prefix}bluecircuit
┃⎙ ${prefix}space
┃⎙ ${prefix}magmahot
┃⎙ ${prefix}artpapercut
┃⎙ ${prefix}3dluxurygold
┃⎙ ${prefix}robotr2d2
┃⎙ ${prefix}harrypotter
┃⎙ ${prefix}glitch3
┃⎙ ${prefix}greenhorror
┃⎙ ${prefix}horrorgift
┃⎙ ${prefix}hotmetal
┃⎙ ${prefix}erodedmetal
┃⎙ ${prefix}3dglowingmetal
┃⎙ ${prefix}blackmetal
┃⎙ ${prefix}bluemetal
┃⎙ ${prefix}shynimetal
┃⎙ ${prefix}rustymetal
┃⎙ ${prefix}metalpurple
┃⎙ ${prefix}metalrainbow
┃⎙ ${prefix}metaldarkgold
┃⎙ ${prefix}colorfullluxurymetal
┃⎙ ${prefix}glossybluemetal
┃⎙ ${prefix}3dglossymetal
┃⎙ ${prefix}metallic
┃⎙ ${prefix}brokenglass
┃⎙ ${prefix}3drealisti
┃⎙ ${prefix}3dunderwater
┃⎙ ${prefix}writeinsandsummerbeach
┃⎙ ${prefix}sandwriting
┃⎙ ${prefix}foilballoon
┃⎙ ${prefix}3dglue
┃⎙ ${prefix}minion
┃⎙ ${prefix}doubleexpesure
┃⎙ ${prefix}holographic3d
┃⎙ ${prefix}deluxegold
┃⎙ ${prefix}deluxesilver
┃⎙ ${prefix}glossycarbon
┃⎙ ${prefix}fabric
┃⎙ ${prefix}xmascards3d
┃⎙ ${prefix}wicker
┃⎙ ${prefix}fireworksparkle
┃⎙ ${prefix}skeleton
┃⎙ ${prefix}ultragloss
┃⎙ ${prefix}denim
┃⎙ ${prefix}decorategreen
┃⎙ ${prefix}peridot
┃⎙ ${prefix}rock
┃⎙ ${prefix}lava
┃⎙ ${prefix}rainbowequalizer
┃⎙ ${prefix}purpleglass
┃⎙ ${prefix}decorativeglass
┃⎙ ${prefix}chocolatecake
┃⎙ ${prefix}strawberry
┃⎙ ${prefix}koifish
┃⎙ ${prefix}bread
┃⎙ ${prefix}3dbox
┃⎙ ${prefix}freeadvancedglow
┃⎙ ${prefix}honey
┃⎙ ${prefix}marble
┃⎙ ${prefix}marbleslabs
┃⎙ ${prefix}icecold
┃⎙ ${prefix}fruitjuice
┃⎙ ${prefix}abstragold
┃⎙ ${prefix}biscuit
┃⎙ ${prefix}bagel
┃⎙ ${prefix}wood
┃⎙ ${prefix}hexagolden
┃⎙ ${prefix}3ddeepseametal
┃⎙ ${prefix}leddisplayscreen
┃⎙ ${prefix}wonderfulgraffitiart
┗━━━━━━━━━━━━━━━━⬣
┏━━━━━━━⬣
┃「 CEK MENU 」
┃⎙ ${prefix}gantengcek
┃⎙ ${prefix}cantikcek
┃⎙ ${prefix}jelekcek
┃⎙ ${prefix}goblokcek
┃⎙ ${prefix}pintercek
┃⎙ ${prefix}jagocek
┃⎙ ${prefix}begocek
┃⎙ ${prefix}nolepcek
┃⎙ ${prefix}babicek
┃⎙ ${prefix}bebancek
┃⎙ ${prefix}baikcek
┃⎙ ${prefix}anjingcek
┃⎙ ${prefix}haramcek
┃⎙ ${prefix}kontolcek
┃⎙ ${prefix}pakboycek
┃⎙ ${prefix}pakgirlcek
┃⎙ ${prefix}sangecek
┃⎙ ${prefix}bapercek
┗━━━━━━━━━━⬣
┏━━━━━━━⬣
┃「 SOUND」
┃⎙ ${prefix}sound1
┃⎙ ${prefix}sound2
┃⎙ ${prefix}sound3
┃⎙ ${prefix}sound4
┃⎙ ${prefix}sound5
┃⎙ ${prefix}sound6
┃⎙ ${prefix}sound7
┃⎙ ${prefix}sound8
┃⎙ ${prefix}sound9
┃⎙ ${prefix}sound10
┃⎙ ${prefix}sound11
┃⎙ ${prefix}sound12
┃⎙ ${prefix}sound13
┃⎙ ${prefix}sound14
┃⎙ ${prefix}sound15
┃⎙ ${prefix}sound16
┃⎙ ${prefix}sound17
┃⎙ ${prefix}sound18
┃⎙ ${prefix}sound19
┃⎙ ${prefix}sound20
┃⎙ ${prefix}sound21
┃⎙ ${prefix}sound22
┃⎙ ${prefix}sound23
┃⎙ ${prefix}sound24
┃⎙ ${prefix}sound25
┃⎙ ${prefix}sound26
┃⎙ ${prefix}sound27
┃⎙ ${prefix}sound28
┃⎙ ${prefix}sound29
┃⎙ ${prefix}sound30
┃⎙ ${prefix}sound31
┃⎙ ${prefix}sound32
┃⎙ ${prefix}sound33
┃⎙ ${prefix}sound34
┃⎙ ${prefix}sound35
┃⎙ ${prefix}sound36
┃⎙ ${prefix}sound37
┃⎙ ${prefix}sound38
┃⎙ ${prefix}sound39
┃⎙ ${prefix}sound40
┃⎙ ${prefix}sound41
┃⎙ ${prefix}sound42
┃⎙ ${prefix}sound43
┃⎙ ${prefix}sound44
┃⎙ ${prefix}sound45
┃⎙ ${prefix}sound46
┃⎙ ${prefix}sound47
┃⎙ ${prefix}sound48
┃⎙ ${prefix}sound49
┃⎙ ${prefix}sound50
┃⎙ ${prefix}sound51
┃⎙ ${prefix}sound52
┃⎙ ${prefix}sound53
┃⎙ ${prefix}sound54
┃⎙ ${prefix}sound55
┃⎙ ${prefix}sound56
┃⎙ ${prefix}sound57
┃⎙ ${prefix}sound58
┃⎙ ${prefix}sound59
┃⎙ ${prefix}sound60
┃⎙ ${prefix}sound61
┃⎙ ${prefix}sound62
┃⎙ ${prefix}sound63
┃⎙ ${prefix}sound64
┃⎙ ${prefix}sound65
┃⎙ ${prefix}sound66
┃⎙ ${prefix}sound67
┃⎙ ${prefix}sound68
┃⎙ ${prefix}sound69
┃⎙ ${prefix}sound70
┗━━━━━━━━━━━⬣
┏━━━━━━━━⬣
┃⎙ ${prefix}speed
┃⎙ ${prefix}owner
┃⎙ ${prefix}rules
┗━━━━━━━⬣
┏━━━━━━━━⬣
┃「 STORAGE 」
┃⎙ ${prefix}addcmd *Owner*
┃⎙ ${prefix}delcmd *Owner*
┃⎙ ${prefix}listcmd
┗━━━━━━━━━⬣
┏━━━━━━━⬣
┃「 XP & LIMIT 」
┃⎙ ${prefix}ceklimit
┃⎙ ${prefix}buylimit
┗━━━━━━━⬣



   ❤️TQ TO❤️
   ~ALLAH SWT
   ~ORTU
   ~DeffBotz
   ~Yeriko Nata
   ~Zeeone Ofc
   ~Rimuru Botz
   ~XyoraOfficial
  
    `
  , imageMessage: imageMsg,
    buttons: buttons,
    headerType: 4
  }

  prep = await deff.prepareMessageFromContent(from, { buttonsMessage }, {
    quoted: ftroli, contextInfo: {
mentionedJid: parseMention(lol), externalAdReply: {
  title: `𝘏𝘌𝘓𝘓𝘖 ${pushname} `,
  body: `${ucapanWaktu} Semoga harimu menyenangkan`,
  mediaType: 2,
  mediaUrl: "https://youtu.be/5DXNC4_Bj_U",
  thumbnail: fs.readFileSync('./gambar/menu.jpg'),
}, forwardingScore: 508, isForwarded: false, mentionedJid: [Tag + '@s.whatsapp.net', senderr]
    }
  })
  deff.relayWAMessage(prep)
  break

case 'setfotomenu':
           if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await deff.downloadMediaMessage(boij)
			fs.writeFileSync(`./gambar/menu.jpg`, delb)
			reply('Sukses')
        	} else {
            reply(`Reply Gambar Dengan Caption ${prefix}setfotomenu`)
          	}
			break	
        case 'd':
        case 'del':
        case 'delete':
 
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               deff.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
      
     case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await deff.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                deff.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await deff.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
              
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            deff.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            limitAdd(sender, limit) 
            break  
        
       case 'welcome':

               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
             
               break                  
                                                           
       case 'take':
       case 'colong':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              if (!isQuotedSticker) return reply('Stiker aja om')
              if (args.length < 1) return reply(`Teksnya mana kak?`)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await deff.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `deff`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, deff, mek, from)
              limitAdd(sender, limit) 
              break
case 'ytdl':
case 'play':		
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)			
              if (!c) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${c}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${c}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await deff.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{})

deff.relayWAMessage(prep)
break               	        	
               	        	 	        	
        case 'playy':
case 'lagu':


if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
              
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: ftroli, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
}
limitAdd(sender, limit) 
break
case 'play2':
   

				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=ApideffBot`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer1 = await getBuffer(anu.result.url_video)
				deff.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break               	        	 	        	 	        	

      
	 case 'tiktok':
	 case 'tiktokdl':
   
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${play}`)
				sendMediaURL(from, anu.result.nowatermark)
				limitAdd(sender, limit) 
					break 
      case 'igstory':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    deff.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    deff.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            limitAdd(sender, limit) 
            break    
               	        	 	        	 	        	 	        	 	        	 	        	 	        	 	        	     	        	 	        	 	        	 	        	 	        	 	        	 	        	 	        	
       case 'image':
       case 'gimage':
       case 'googleimage':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
             if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
limitAdd(sender, limit) 
             break
          

//==========[SIMI/AUTO BALAS]==========\\
case 'simi':
              
              if (args[0] === 'enable'){
              if (isSimi) return reply(`Udah aktif`)
              samih.push(from)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = samih.indexOf(from)
              samih.splice(anu, 1)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!simi enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!simi disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `©Atsair` ,
buttons: buttonss,
headerType: 1
}
deff.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case 'ban':
if (isOwner && mek.key.fromMe) return             
              if (args[0] === 'enable'){
              if (isBanchat) return reply(`Udah aktif`)
              banc.push(from)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(banc))
              reply('SUKSES BANCHAT')
              } else if (args[0] === 'disable'){
              let anu = banc.indexOf(from)
              banc.splice(anu, 1)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(banc))
              reply('SUKSES UNBANCHAT')
              } 
              break                            
              case "banchat":
if (isOwner && mek.key.fromMe) return
        sendButMessage(from, `Ban Chat disini?`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}ban enable`,
            buttonText: {
              displayText: `DONE❗ `,
            },
            type: 1,
          },  
          ]);        
        break     
        case "unbanchat":
if (isOwner && mek.key.fromMe) return
        sendButMessage(from, `UnBan Chat disini?`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}ban disable`,
            buttonText: {
              displayText: `DONE❗ `,
            },
            type: 1,
          }, 
          ]);         
          break   



case 'hidetag':
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (!isGroup) return reply(mess.only.group)
      if (isOwner) return reply(`Kamu bukan owner ku`)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break

case 'pinterest':

        if (!q) return reply("gambar apa?");
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await deff.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'[ • BOTWEA • ]︎', imageMessage: imageMsg,
              contentText:`Follow ig owner @BY Atsair`,buttons,headerType:4}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              deff.relayWAMessage(prep)
        break



case 'nulis':
        case 'tulis':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
              
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               deff.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
limitAdd(sender, limit) 
               break
// Text Maker 3d
case 'kick':

if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
kick(from, mentionUser)
break
case 'add':

if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
deff.groupAdd(from, [entah])
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
deff.groupAdd(from, [entah])
}
break

case "demote":

if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
if (!isGroup) return;
if (!isBotGroupAdmins) return reply("Bot not admin");
deff.groupDemoteAdmin(from, mentionUser)
break;
case "promote":

if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
if (!isGroup) return;
if (!isBotGroupAdmins) return reply("Bot not admin");
deff.groupMakeAdmin(from, mentionUser)
break;


case 'broadcast':
  if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
  list_chat = await deff.chats.all()
  ini_text = args.join(" ")
  for (let chat of list_chat) {
    sendMess(chat.jid, ini_text)
  }
  break
if (args.length < 1) return reply('teks?')
anu = await deff.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await deff.downloadMediaMessage(encmedia)
for (let _ of anu) {
deff.sendMessage(_.jid, bc, image, {quoted:ftroli,caption: `*「 BROADCAST [ • BOTWEA • ] 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 BOTWEA BROADCAST 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break

case 'bc2':
case 'broadcast2':

             if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
             if (args.length < 1) return reply('teks?')
             reply('Wait.....')
             anu = await deff.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await deff.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             deff.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • BOTWEA • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
deff.sendMessage(_.jid, 
	    {"contentText": `*「 BROADCAST [ • BOTWEA • ] 」*\n\n${body.slice(4)}`,
	    "footerText": '©DEFF',
	    "buttons": [
	    {"buttonId": `!owner`,
	    "buttonText": {"displayText": "OWNER"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
case 'bc3':
case 'broadcast3':

             if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
            if (args.length < 1) return reply('teks?')
             anu = await deff.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc2 = await deff.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             deff.sendMessage(_.jid, { contentText: `*🔖 BROADCAST [ • BOTWEA • ] 🔖*\n\n${body.slice(4)}`, footerText: '©DEFF', buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
break
case 'tictactoe':
case 'ttt':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
deff.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
limitAdd(sender, limit) 
break


case 'antilink':

              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (args[0] === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo ${pushname} klik button atau Gunakan ${prefix + command }antilink enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!antilink enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!antilin disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `©DEFF` ,
buttons: buttonss,
headerType: 1
}
deff.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case "antivirtex":

        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;          
case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pinter': 
case 'jago': 
case 'nolep': 
case 'monyet':                 	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply('Khusus group kak') 
jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
jds.push(C1.jid)
mentions(D1, jds, true)
break
limitAdd(sender, limit) 
case 'gantengcek':
                      	  
                    
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':
                      	  
                    
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':
  
                                          	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':
                      	  
                    
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':
                      	  
                    
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':
                      	  
                     
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':
                      	  
                     
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':
                      	  
                     
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':
                      	  
                     
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':
                      	  
                    
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':
                      	  
                     
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':
                      	  
                     
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':
                      	  
                     
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':
                      	  
                    
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🥴`
                    reply(N)
                    break  
      case 'kontolcek':
                      	  
                     
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🙂`
                    reply(N)
                    break 
       case 'pakboycek':
                      	  
                     
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':
                      	  
                    	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':
                      	                      
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':
                      	                      
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${deff3}${deff4}%* 😘`
                    reply(N)
                    break                  
       case 'cekwatak':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              var namao = pushname
              var prfx = await deff.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Coldas','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
             limitAdd(sender, limit) 
               break
       case 'hobby':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              deff.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
             limitAdd(sender, limit) 
               break
case 'waifuhd':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
v = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
reply(mess.wait)              
buff = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await deff.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
deff.relayWAMessage(prep)
limitAdd(sender, limit) 
break
case 'tourl':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)              
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await deff.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
limitAdd(sender, limit) 
break
case 'imgtourl':
case 'img2url':
              
reply(mess.wait)
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  deff.downloadAndSaveMediaMessage(encmedia)       
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
deff.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
.catch(err => {
throw err
})
break


//===========[ Premium ]==========\\
case 'toimg':  
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)              
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await deff.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              deff.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
limitAdd(sender, limit) 
              break


case 'linkwa':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
limitAdd(sender, limit) 
case "tes":

        sendButMessage(from, `Siap Lapor!, Bot Aktif!`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}runtime`,
            buttonText: {
              displayText: `⬡ RUNTIME `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `⬡ MENU`,
            },
            type: 1,
          },
        ]);
        break
case 'runtime':

textImg(`${runtime(process.uptime())}`)
break       
case 'ping':
case 'speed':
              
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *[ • BOTWEA • ]* 」\n //==[${latensie.toFixed(4)} detik 💬]==\\`)
break
case 'addcmd': 
case 'setcmd':

if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
textImg("Done!")
} else {
reply('tag stickenya')
}
break
case 'delcmd':

if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
textImg("Done!")
break
case 'listcmd':

let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
case 'wangy':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
limitAdd(sender, limit) 
break
case 'waktu':

reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
break
case 'cekmati':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(mess.wrongFormat)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
limitAdd(sender, limit) 
break
case 'spam':

if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 5000) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
deff.sendMessage(from, argzi[0], MessageType.text)
}
break
case 'spamsw':
if (isOwner && mek.key.fromMe) return reply(mess.only.owner)

if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
deff.sendMessage('status@broadcast', argzi[0], MessageType.text)
}
break
case 'tagall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
case 'tag':

if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
deff.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':

var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
deff.sendMessage(from, tagu, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break    	
case 'upswteks':

if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
deff.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'kalkulator':

var mtk = body.slice(12)
teks = `${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
break
case "totag":

       if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await deff.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await deff.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          deff.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await deff.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await deff.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          deff.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await deff.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await deff.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          deff.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await deff.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await deff.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          deff.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
case 'rules':
               
anjeng = `
)-----[RULES BOT]-----(

1.teks dan nama pengguna whatsapp
anda akan kami simpan di dalam
server selama bot aktif
2.data akan di hapus ketika bot offline
3.kami tidak menyimpan
gambar,video,file,audio,dan dokumen
yang anda kirim
4.kami tidak akan pernah meminta
anda untuk memberikan informasi
pribadi
5.jika menemukan bug/error silahkan
langsung lapor ke owner bot
6.jangan spam bot,sangsi block
7.jangan telepon bot,sangsi block
permanen
8.apapun yang anda perintahkan
pada bot ini,KAMI TIDAK AKAN
BERTANGGUNG JAWAB!
TERIMAKASIH TELAH
MENGGUNAKAN BOT KAMI
Owner ATSAIRBOTZ:

wa.me/6282393072006`
sendButMessage(from, anjeng, `Baca rulesnya!, Jangan di baca doang, Patuhi juga ajg❗`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `💾MENU `,
},
type: 1,
},]);
break;


case 'truth':
       
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
deff.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
case 'dare':
       
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
imageMsg = (await deff.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
deff.relayWAMessage(prep)
break
case 'tebakgambar':
               
data = tebakgambar
jsonData = JSON.parse(data);
xmm1 = Math.floor(Math.random() * jsonData.length);
xmm2 = jsonData[xmm1];
ngebuff = await getBuffer(xmm2.result.soalImg)
tebak = `➸ Jawaban : ${xmm2.result.jawaban}`
setTimeout( () => {
deff.sendMessage(from, tebak, text, {quoted: fkontak})
}, 30000)
setTimeout( () => {
deff.sendMessage(from, '_10 Detik lagi..._', text, {quoted: fkontak})
}, 20000)
setTimeout( () => {
deff.sendMessage(from, '_20 Detik lagi..._', text, {quoted: fkontak})
}, 10000)
setTimeout( () => {
deff.sendMessage(from, '_30 Detik lagi..._', text, {quoted: fkontak})
}, 2500)
setTimeout( () => {
deff.sendMessage(from, ngebuff, image, { caption: '_Hayo jawabannya apa😅, Kalo salah donasj ya😀_', quoted: freply })
}, 0)
break
case 'leveling':

if (!isGroup) return reply(mess.only.group)
if (ar[0] === 'enable') {
if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Fitur leveling berhasil diaktifkan.')
} else if (ar[0] === 'disable') {
var anup = _leveling.indexOf(from)
_leveling.splice(anup, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Fitur leveling berhasil dimatikan.')
} else {
var ini_deff =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `#leveling enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `#leveling disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_deff,
footerText: `©DEFF` ,
buttons: buttonss,
headerType: 1
}
deff.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • BOTWEA • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case 'ban':
case 'banned':
if (!isOwner && !mek.key.fromMe) return reply(mess.own)
bnnd = body.slice(5)
ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
break
case 'unban': 
case 'unbanned':
if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
delp = body.slice(7)
ban.splice(`${delp}@s.whatsapp.net`, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
break
case 'listban':
case 'banlist':
teks = '*List Ban:*\n\n'
for (let deffgans of ban) {
teks += `- ${deffgans}\n`
}
teks += `\n*Total : ${ban.length}*`
deff.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
break
case 'yts':
case 'ytsearch':
  if (!q) return reply(mess.wrongFormat)
  reply(mess.wait)
  try {
    res = await yts(q)
    a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE SEARCH
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!\n`
    for (let i of res.all) {
a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
    }
    b = a.trim()
    sendFileFromUrl(res.all[0].image, image, { quoted: ftroli, caption: b })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
  break
  
case 'translate':
  reply(mess.wait) 
  if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
  kode_negara = args[0]
  args.shift()
  ini_txt = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${control.lolkey}&text=${ini_txt}`)
  get_result = get_result.result
  init_txt = `From : ${get_result.from}\n`
  init_txt += `To : ${get_result.to}\n`
  init_txt += `Original : ${get_result.original}\n`
  init_txt += `Translated : ${get_result.translated}\n`
  init_txt += `Pronunciation : ${get_result.pronunciation}\n`
  reply(init_txt)
  break
  case 'huluh':				
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await huluh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = deff.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await holoh(entah)
                    reply(imni)
									}
                    break
                    case 'hilih':				
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await hilih(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = deff.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await hilih(entah)
                    reply(imni)
									}
                    break
                    case 'holoh':				
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await holoh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = deff.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await holoh(entah)
                    reply(imni)
									}
                    break
                    case 'heleh':				
                    if (arg.length > 1) {
                      entah = body.slice(7)
                      imni = await heleh(entah)
                      reply(imni)
                    } else if (arg.length < 1) {
            entah = deff.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                      imni = await heleh(entah)
                      reply(imni)
                    }
                      break
                      case 'halah':				
                      if (arg.length > 1) {
                        entah = body.slice(7)
                        imni = await halah(entah)
                        reply(imni)
                      } else if (arg.length < 1) {
              entah = deff.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                        imni = await halah(entah)
                        reply(imni)
                      }
                      break
case 'joox':
  //////
  deff.sendMessage(from, `Tunggu Sebentar`, text) 
  if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
  query = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${control.lolkey}&query=${query}`)
  get_result = get_result.result
  ini_txt = `Title : ${get_result.info.song}\n`
  ini_txt += `Artists : ${get_result.info.singer}\n`
  ini_txt += `Duration : ${get_result.info.duration}\n`
  ini_txt += `Album : ${get_result.info.album}\n`
  ini_txt += `Uploaded : ${get_result.info.date}\n`
  ini_txt += `Lirik :\n ${get_result.lirik}\n`
  thumbnail = await getBuffer(get_result.image)
  await deff.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
  get_audio = await getBuffer(get_result.audio[0].link)
  await deff.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ftroli })
  break
case 'setppbot':
					if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
				    deff.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await deff.downloadAndSaveMediaMessage(enmedia)
					await deff.updateProfilePicture(botNumber, media)
					reply('Sukses terubah')
					break 
case 'fire':
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli })
  break
//====================================================================
case 'fire1':
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, video, { quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output })
  break
//sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
//====================================================================
case 'fire2':
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, audio, { quoted: ftroli, mimetype: 'video/mp3', filename: res[0].output })
  break
//====================================================================
case 'mediafire':
  //////
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `Media Fire Downloader

🌐Nama : ${res[0].nama}
🥊Ukuran : ${res[0].size}
🚖Link : ${res[0].link}

Tunggu Proses Mengirim Media......`
  sendButMessage(from, result, `𝚖𝚊𝚞 𝚍𝚒𝚔𝚒𝚛𝚒𝚖 𝚕𝚎𝚠𝚊𝚝 𝚊𝚙𝚊 𝚔𝚊𝚔\n𝙷𝚊𝚛𝚊𝚙 𝚖𝚎𝚖𝚒𝚕𝚒𝚑 𝚏𝚘𝚛𝚖𝚊𝚝 𝚜𝚎𝚜𝚞𝚊𝚒 𝚕𝚒𝚗𝚔 𝚢𝚐 𝚖𝚊𝚞 𝚍𝚒 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍`, [
    {
buttonId: `${prefix}fire ${teks}`,
buttonText: {
  displayText: `𝘋𝘰𝘤𝘶𝘮𝘦𝘯𝘵`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire1 ${teks}`,
buttonText: {
  displayText: `𝘝𝘪𝘥𝘦𝘰`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire2 ${teks}`,
buttonText: {
  displayText: `𝘈𝘶𝘥𝘪𝘰`,
},
type: 1,
    },
  ]);
  limitAdd(sender, limit) 
  break;
case 'imgtourl':
      case 'img2url':
      case 'tourl':

        reply(mess.wait)
        var imgbb = require('imgbb-uploader')
        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(deff).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : deff
        var media = await deff.downloadAndSaveMediaMessage(encmedia)
        imgbb('39d895963468b814fad0514bd28787e2', media)
          .then(data => {
            var caps = `IMAGE TO URL\n\n*>  ID :* ${data.id}\n*>  MimeType :* ${data.image.mime}\n*>  Extension :* ${data.image.extension}\n*>  URL :* ${data.display_url}`
            ibb = fs.readFileSync(media)
            deff.sendMessage(from, ibb, image, { quoted: freply, caption: caps })
          })
          .catch(err => {
            throw err
          })
        break
case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${control.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${control.lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
case 'quotes':
        quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${control.lolkey}`)
        quotes = quotes.result
        author = quotes.by
        quotes = quotes.quote
        reply(`${quotes}\n\n*â€• ${author}*`)
        break
      case 'quotesanime':
        quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${control.lolkey}`)
        quotes = quotes.result
        quote = quotes.quote
        char = quotes.character
        anime = quotes.anime
        episode = quotes.episode
        reply(`${quote}\n\n*â€• ${char}\nâ€• ${anime} ${episode}*`)
        break
      case 'quotesdilan':
        quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${control.lolkey}`)
        reply(quotedilan.result)
        break
      case 'quotesimage':
        get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${control.lolkey}`)
        await deff.sendMessage(from, get_result, image, { quotes: fvn })
        break
      case 'faktaunik':
      case 'katabijak':
      case 'pantun':
      case 'bucin':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${control.lolkey}`)
        reply(get_result.result)
        break
      case 'google':
        if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${control.lolkey}&query=${query}`)
        get_result = get_result.result
        ini_txt = 'Google Search : \n'
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`
          ini_txt += `Link : ${x.link}\n`
          ini_txt += `Desc : ${x.desc}\n\n`
        }
        reply(ini_txt)
        break
case 'tovideo':
        if ((isMedia && !deff.message.videoMessage || isQuotedSticker) && args.length == 0) {
          reply(mess.wait)
          encmedia = JSON.parse(JSON.stringify(deff).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
          mediaaa = await deff.downloadAndSaveMediaMessage(encmediaaa)
          a = await webp2gifFile(mediaaa)
          mp4 = await getBuffer(a.result)
          deff.sendMessage(from, mp4, video, { mimetype: 'video/mp4', quoted: freply, caption: mess.success })
          fs.unlinkSync(mediaaa)
        } else {
          reply('salah tuh')
        }
        break
case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				await limitAdd(sender, limit)
					break   
case 'tebakkalimat':{
		
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = result.soal
                    deff.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                    await gameAdd(sender, glimit)}
					break   
case 'nsfw':
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'del' : case 'delete': case 'd':
try{
if(!isQuotedMsg)return reply('Reply pesan Bot!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
if (!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator)return reply(mess.only.admin)
deff.deleteMessage(from,pp)
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
break
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
//SEARCH MENU//
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					deff.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					await limitAdd(sender, limit)
					break       
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            await limitAdd(sender, limit)
					break   
    case 'otaku':
            if(!q) return reply('Judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
           var ram = await getBuffer(anime.img)
            deff.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            await limitAdd(sender, limit)
			break   
//MAKER MENU//
case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlightglitch':
case 'neonlightonbrickwall':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=NisaaCantik&text=${teks}`)
oke = await getBuffer(anu.result)
deff.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
//CEK MENU//
case 'gantengcek':	
N = `KE *GANTENGAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😎`
reply(N)
break 
case 'cantikcek':	
N = `KE *CANTIKAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}% 😁*`
reply(N)
break
case 'jelekcek': 
N = `KE *J3L3K4N* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
reply(N)
break 
case 'goblokcek':	
N = `KE *GOBLOKAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
reply(N)
break 
case 'begocek':	 
N = `KE *BEGO* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😂`
reply(N)
break 
case 'pintercek':	
N = `KE *PINTARAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😗`
reply(N)
break 
case 'jagocek':	 
N = `KE *JAGOAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 💪`
reply(N)
break 
case 'nolepcek':	
N = `KE *NOLEPAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
reply(N)
break 
case 'babicek':	
N = `KE *BABIAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
reply(N)
break 
case 'bebancek':	
N = `KE *BEBANAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
reply(N)
break 
case 'baikcek':	
N = `KE *BAIKAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😇`
reply(N)
break 
case 'jahatcek':	
N = `KE *JAHATAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😈`
reply(N)
break 
case 'anjingcek':	
N = `KE *ANJINGAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 👀`
reply(N)
break
case 'haramcek':	
N = `KE *HARAMAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
reply(N)
break
case 'kontolcek':	
N = `KE *KOMTOLAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
reply(N)
break 
case 'pakboycek':	
N = `KE *PAKBOYZ* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😏`
reply(N)
break 
case 'pakgirlcek':
N = `KE *PAKGILR* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😏`
reply(N)
break 
case 'sangecek':
N = `JIWA *SANGE* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
reply(N)
break
case 'bapercek':
N = `JIWA *BEPERAN* KAMU\n`
N += `ADALAH : *${mekla3}${mekla4}%* 😘`
reply(N)
break 
case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            deff.user.jid,
          ];
          deff.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
case 'setdesc':
if (!isGroup) return reply(onlygc())
if (!isGroupAdmins) return reply(lang.onlygcAdmin())
if (!isBotGroupAdmins) return reply(lang.botNotAdm())
deff.groupUpdateDescription(from, `${body.slice(9)}`)
deff.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
break   
case 'xnxx':
        //////
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${control.lolkey}&url=${query}`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Duration : ${get_result.duration}\n`
        ini_txt += `View : ${get_result.view}\n`
        ini_txt += `Rating : ${get_result.rating}\n`
        ini_txt += `Like : ${get_result.like}\n`
        ini_txt += `Dislike : ${get_result.dislike}\n`
        ini_txt += `Comment : ${get_result.comment}\n`
        ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
        ini_txt += `Description : ${get_result.description}\n`
        ini_txt += "Link : \n"
        ini_link = get_result.link
        for (var x of ini_link) {
          ini_txt += `${x.type} - ${x.link}\n\n`
        }
        thumbnail = await getBuffer(get_result.thumbnail)
        await deff.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
        break
//kasi case di atas⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
case 'linkgc':
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
linkgc = await deff.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nXyiraofficial *${groupName}*`
deff.sendMessage(from, yeh, text, {quoted: mek})
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
reply(mess.wait)
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
deff.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'vietnam': case 'malaysia': case 'korea': case 'indonesia': case 'japan': case 'thailand': case 'china':
reply(mess.wait)
cantik = await fetchJson(`https://rest2yeriko.herokuapp.com/api/cewe/${command}?apikey=Yuzzu`)
cantok = await getBuffer(cantik.result.url)
deff.sendButImage(from, `Cewe *${command}* Wangy Wangy`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantok, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break
case 'script':
const isc = fs.readFileSync('./gambar/menu.jpg')
mastahb =`BELI 10K MINAT?HUB OWNER
wa.me/6282393072006
`
deff.sendMessage(from, isc, image, {quoted: mek, caption: mastahb})
break
case 'caklontong':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
get_result = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kuis/caklontong?apikey=Yuzzu`)
jawaban = get_result.result.result.jawaban
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
console.log(color("Jawaban: " + jawaban))
deff.sendMessage(from, `_Cak Lontong_\n\nSoal : ${get_result.result.result.soal}\n\nKisi Kisi : ${kisi_kisi}\n\nWaktu 60Detik`, text, { quoted: mek}).then(() => {
console.log(color("Jawaban: " + jawaban))
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
await sleep(60000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("_WAKTU HABIS_\n\n*Jawaban*: " + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
break
case 'family100':
game4 = await fetchJson(`https://api.zeks.me/api/family100?apikey=${apizeks}`)
setTimeout ( () => {
reply(`${kotak}Pertanyaan : *${game4.data.pertanyaan}*`)
}, 0)
setTimeout ( () => {
reply(`_WAKTU HABIS_\nJawaban : ${game4.data.jawaban.string}`)
}, 60000)
break
case 'stickergif':
case 'stikergif':
case 'sgif':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await dha.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.stick)
})
.on('end', function () {
console.log('Subrek Fernazer')
buffer = fs.readFileSync(ran)
deff.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await deff.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(`Wait Kak ${pushname}`)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
deff.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
}
break
case 'togif':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await deff.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
deff.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
break
case 'smeme': case 'stickmeme': case 'sm':
 {
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  deff.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendWebp(from, `${anu1}`)
} else {
reply('Gunakan foto!')
} 
}
break
case 'potomeme': case 'pmeme':
try {
if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
reply(mess.wait)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
var imgbb = require('imgbb-uploader')
var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await deff.downloadAndSaveMediaMessage(enmedia)
var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
deff.sendMessage(from, resu, image, {quoted: mek})
fs.unlinkSync(media)
} catch (e) {
return reply(`${e}`)
console.log(e)
}
break
//UBAH MUSIJ//
case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await deff.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply('Ulangi Kak Tadi Error')
hah = fs.readFileSync(ran)
deff.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await deff.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
deff.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break
case 'balik':
encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await deff.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
deff.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break
case 'bass':
encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await deff.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
deff.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break
case 'join':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
 if (args.length < 1) return reply('Link nya mana?')
deff.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'ytplay':
case 'play':
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
reply(mess.wait)
gett = await fetchJson(`https://apidhani.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=NisaaCantik`)
yt1 =`*🏷️Judul :* ${gett.title}\n\n*👤Author :* ${gett.channel}\n*📆Dipublikasikan :* ${gett.published}\n*👀Views :*\n${gett.views}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = await getBuffer(gett.thumb)
but = [
{ buttonId: `${prefix}play4 ${args.join(" ")}`, buttonText: { displayText: 'MP4 [ VIDEO ]' }, type: 1 },
{ buttonId: `${prefix}paly3 ${args.join(" ")}`, buttonText: { displayText: '️MP3 [ MUSIC ]' }, type: 1 }
]
sendButImage(from, yt1, yt2, ytg, but)
break
case 'play4':
case 'playmp4':
if (args.length ==0)return reply('Judul nya Mana Kak?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apidhani.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=NisaaCantik`)
p4 = await getBuffer(ini.url)
deff.sendMessage(from, p4, video)
break
case 'play3':
case 'playmp3':
if (args.length ==0)return reply('Judul nya Mana Kak?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apidhani.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=NisaaCantik`)
p3 = await getBuffer(ini.url)
deff.sendMessage(from, p3, audio)
break
case 'ytmp4':
try {
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${ini_link}&apikey=NisaaCantik`)
anu = ini.result
ini_txt =`*🏷️Judul* : ${anu.title}\n*👤Author* : ${anu.channel}\n*📆Publis* : ${anu.published}\n*👀Views* : ${anu.views}`
yt4 = await getBuffer(anu.thumb)
dha.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
deff.sendMessage(from, res, video)
} catch (e) { 
reply(`${e}`)
}
break
case 'ytmp3':
try {
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${ini_link}&apikey=NisaaCantik`)
get = ini.result
ini_txt =`*🏷️Judul* : ${get.title}\n*👤Author* : ${get.channel}\n*📆Publis* : ${get.published}\n*👀Views* : ${get.views}`
yt3 = await getBuffer(get.thumb)
deff.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
deff.sendMessage(from, res, audio)
} catch (e) { 
reply(`${e}`)
}
break
case 'awoo':
					reply(mess.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    deff.sendMessage(from, buffer, image, anu)
					break   
			case 'blowjob2':
					reply(mess.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    deff.sendMessage(from, buffer, image, anu)
					
					break   
			case 'megumin':
				    reply(mess.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    deff.sendMessage(from, buffer, image, anu)
					
					break   
			case 'trapnime':
					reply(mess.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    deff.sendMessage(from, buffer, image, anu)
					
					break   

























































default:
/* Panduan bagi yang belum paham aja
   ini balasan otomatis
   
if (budy.includes(``)) { /Di dalam kurung (``) isi teks yang akan di balas bot
                reply(``) /Di dalam kurung (``) isi balasan bot  
                }  
                
// bisa anda tiru seperti di bawah ini  ↓
*/                                                           
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
if (budy.includes(`assalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                  
if (budy.includes(`Assalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
if (budy.includes(`asalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }    
if (budy.includes(`asalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }   
if (budy.includes(`Asalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  } 
if (budy.includes(`Asalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                                                                
		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }   



if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   deff.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		deff.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  deff.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
deff.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
deff.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
deff.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
deff.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🎟️👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 deff.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (isCmd) {
return sendButMessage(from, `Maaf kak @${senderr.split('@')[0]} command ${command}tidak terdaftar dalam menu`, 'BACA MENUNYA\n©deff', [
{
"buttonId": ".menu",
"buttonText": {
"displayText": "MENU"
},
"type": "RESPONSE"
}
], {quoted:ftroli})
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		

} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     deff.sendMessage(`${target}`, `─────「 *EROR DITEMUKAN* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BOT WHATSAPP",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6289501060783"}}})
	}
    }
    }
    }
    }
    }
    }