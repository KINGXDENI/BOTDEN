const fs = require('fs-extra')
const {prefix} = JSON.parse(fs.readFileSync('./settings/setting.json'))

const menud = (pushname,role,point,level, premi , _registered , coloo , tod) => {
    return `
┏━━❉ *PROFIL* ❉━━┓
┃  *NAMA  \t: ${pushname}*
┃  *LEVEL \t: ${premi}*
┃  *XP  \t\t\t: ${point}*
┃  *ROLE  \t: ${role}*
┃  *PREM  \t: ${level}*
┗━━━━━━━━━━━━━━
┏━━❉ *LIST MENU* ❉━━┓
┣⊱ *${prefix}systemmenu*
┣⊱ *${prefix}mediamenu*
┣⊱ *${prefix}toolmenu*
┣⊱ *${prefix}animemenu*
┣⊱ *${prefix}nsfwmenu*
┣⊱ *${prefix}premmenu*
┣⊱ *${prefix}tobatmenu*
┣⊱ *${prefix}stickermenu*
┣⊱ *${prefix}nulismenu*
┣⊱ *${prefix}downloadmenu*
┣⊱ *${prefix}imagemenu*
┣⊱ *${prefix}logomenu*
┣⊱ *${prefix}gamemenu*
┣⊱ *${prefix}groupmenu*
┣⊱ *${prefix}ownermenu*
┣⊱ *${prefix}adminmenu*
┣━━❀ *RUNTIME* ❀━━
┣⊱ *JAM: ${tod}*
┣━━❀ *USER* ❀━━
┣⊱ *TOTAL USER: ${coloo.length}*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
    `
}
exports.menud = menud
const systemmenu = (prefix) => {
    return `
┏━━❉ *SYSTEM* ❉━━━
┣⊱ *${prefix}bcgrup*
┣⊱ *${prefix}bcimg*
┣⊱ *${prefix}bc*
┣⊱ *${prefix}botstat*
┣⊱ *${prefix}eval*
┣⊱ *${prefix}addupdate*
┣⊱ *${prefix}update*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}buypremium*
┣⊱ *${prefix}bugreport*
┣⊱ *${prefix}ownerbot*
┣⊱ *${prefix}gantiprofile*
┣⊱ *${prefix}setpictmenu*
┣⊱ *${prefix}ping*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.systemmenu = systemmenu

const mediamenuu = (prefix) => {
    return `
┏━━❉ *MEDIA* ❉━━━
┣⊱ *${prefix}ssphone*
┣⊱ *${prefix}sspc*
┣⊱ *${prefix}tiktokstalk*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}tomp3*
┣⊱ *${prefix}toptt*
┣⊱ *${prefix}bass*
┣⊱ *${prefix}tts <kodenegara> [text]*
┣⊱ *${prefix}film [query]*
┣⊱ *${prefix}ptl*
┣⊱ *${prefix}kpop bts*
┣⊱ *${prefix}kpop exo*
┣⊱ *${prefix}kpop blackpink*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.mediamenuu = mediamenuu

const mediamenu = (prefix) => {
    return `
┏━━❉ *MEDIA* ❉━━━
┣⊱ *${prefix}ssphone*
┣⊱ *${prefix}sspc*
┣⊱ *${prefix}tiktokstalk*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}tomp3*
┣⊱ *${prefix}toptt*
┣⊱ *${prefix}bass*
┣⊱ *${prefix}tts <kodenegara> [text]*
┣⊱ *${prefix}film [query]*
┣⊱ *${prefix}ptl*
┣⊱ *${prefix}kpop bts*
┣⊱ *${prefix}kpop exo*
┣⊱ *${prefix}kpop blackpink*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.mediamenu = mediamenu

const toolmenu = (prefix) => {
    return `
┏━━❉ *TOOLS* ❉━━━
┣⊱ *${prefix}addbacot*
┣⊱ *${prefix}spotifysearch*
┣⊱ *${prefix}listbacot*
┣⊱ *${prefix}artinama*
┣⊱ *${prefix}cekjodoh*
┣⊱ *${prefix}readmore*
┣⊱ *${prefix}wasted*
┣⊱ *${prefix}gayy*
┣⊱ *${prefix}playstore*
┣⊱ *${prefix}shopee*
┣⊱ *${prefix}spekhp*
┣⊱ *${prefix}distance*
┣⊱ *${prefix}maps*
┣⊱ *${prefix}playbutton*
┣⊱ *${prefix}fakta*
┣⊱ *${prefix}pantun*
┣⊱ *${prefix}katabijak*
┣⊱ *${prefix}quote*
┣⊱ *${prefix}covidindo*
┣⊱ *${prefix}totext*
┣⊱ *${prefix}say*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.toolmenu = toolmenu

const animemenu = (prefix) => {
    return `
┏━━❉ *ANIME* ❉━━━
┣⊱ *${prefix}dewabatch*
┣⊱ *${prefix}loli*
┣⊱ *${prefix}shota*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}wallpaperanime*
┣⊱ *${prefix}wallpaperanime2*
┣⊱ *${prefix}mywaifu*
┣⊱ *${prefix}faceanime*
┣⊱ *${prefix}anime husbu*
┣⊱ *${prefix}anime waifu*
┣⊱ *${prefix}anime neko*
┣⊱ *${prefix}genshin*
┣⊱ *${prefix}charsgenshin*
┣⊱ *${prefix}nekonime*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.animemenu = animemenu

const menu18 = (prefix) => {
    return `
┏━━❉ *18+* ❉━━━
┣⊱ *${prefix}randomhentai*
┣⊱ *${prefix}indohot*
┣⊱ *${prefix}rhentai*
┣⊱ *${prefix}neko18*
┣⊱ *${prefix}kemem*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}gifhentai*
┣⊱ *${prefix}pussy*
┣⊱ *${prefix}fetish armpits*
┣⊱ *${prefix}fetish feets*
┣⊱ *${prefix}fetish thighs*
┣⊱ *${prefix}fetish ass*
┣⊱ *${prefix}fetish boobs*
┣⊱ *${prefix}fetish belly*
┣⊱ *${prefix}fetish sideboobs*
┣⊱ *${prefix}fetish ahegao*
┣⊱ *${prefix}xnxx*
┣⊱ *${prefix}xnxxdl*
┣⊱ *${prefix}xvideos*
┣⊱ *${prefix}xvidl*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.menu18 = menu18

const nulismenu = (prefix) => {
    return `
┏━━❉ *NULIS* ❉━━━
┣⊱ *${prefix}nuliskiri*
┣⊱ *${prefix}foliokiri*
┣⊱ *${prefix}nuliskanan*
┣⊱ *${prefix}foliokanan*
┣⊱ *${prefix}nulishd*
┣⊱ *${prefix}quiziz <id>*
┣⊱ *${prefix}brainly <query>*
┣⊱ *${prefix}resep*
┣⊱ *${prefix}wiki*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.nulismenu = nulismenu

const tobatmenu = (prefix) => {
    return `
┏━━❉ *TOBAT* ❉━━━
┣⊱ *${prefix}js*
┣⊱ *${prefix}ALaudio*
┣⊱ *${prefix}tafsir*
┣⊱ *${prefix}surah*
┣⊱ *${prefix}infosurah*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.tobatmenu = tobatmenu

const stickermenu = (prefix) => {
    return `
┏━━❉ *STICKER* ❉━━━
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}stickergif*
┣⊱ *${prefix}stickergiphy*
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}findsticker*
┣⊱ *${prefix}linesticker*
┣⊱ *${prefix}stikerteks*
┣⊱ *${prefix}emojisticker*
┣⊱ *${prefix}takestick*
┣⊱ *${prefix}addsticker*
┣⊱ *${prefix}getsticker*
┣⊱ *${prefix}delsticker*
┣⊱ *${prefix}liststicker*
┣⊱ *${prefix}stickerwm*
┣⊱ *${prefix}stickermeme*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.stickermenu = stickermenu

const imagemenu = (prefix) => {
    return `
┏━━❉ *IMAGE* ❉━━━
┣⊱ *${prefix}qrcode*
┣⊱ *${prefix}qrread*
┣⊱ *${prefix}ttp [text]*
┣⊱ *${prefix}puisirandom*
┣⊱ *${prefix}darkjokes*
┣⊱ *${prefix}images*
┣⊱ *${prefix}quotemaker*
┣⊱ *${prefix}hartatahta*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.imagemenu = imagemenu

const logomenu = (prefix) => {
    return `
┏━━❉ *LOGO* ❉━━━
┣⊱ *${prefix}ninja*
┣⊱ *${prefix}firemaker*
┣⊱ *${prefix}wolf*
┣⊱ *${prefix}wolf*
┣⊱ *${prefix}gmlogo*
┣⊱ *${prefix}ffmaker*
┣⊱ *${prefix}phcomment*
┣⊱ *${prefix}thunder*
┣⊱ *${prefix}pornhub*
┣⊱ *${prefix}glowtext*
┣⊱ *${prefix}blackpink*
┣⊱ *${prefix}trumptweet *
┣⊱ *${prefix}hilang*
┣⊱ *${prefix}valentine*
┣⊱ *${prefix}slidingtext*
┣⊱ *${prefix}glitext*
┣⊱ *${prefix}dropwater*
┣⊱ *${prefix}style*
┣⊱ *${prefix}breakwall*
┣⊱ *${prefix}sandsummer*
┣⊱ *${prefix}minion*
┣⊱ *${prefix}holo*
┣⊱ *${prefix}silver*
┣⊱ *${prefix}tahunbaru*
┣⊱ *${prefix}blood*
┣⊱ *${prefix}halloween*
┣⊱ *${prefix}joker*
┣⊱ *${prefix}kembangapi*
┣⊱ *${prefix}daun*
┣⊱ *${prefix}bokeh*
┣⊱ *${prefix}toxic*
┣⊱ *${prefix}strawberry*
┣⊱ *${prefix}roadwarning*
┣⊱ *${prefix}icecold*
┣⊱ *${prefix}luxury*
┣⊱ *${prefix}cloud*
┣⊱ *${prefix}summersand*
┣⊱ *${prefix}christmas*
┣⊱ *${prefix}steel3d*
┣⊱ *${prefix}kopi*
┣⊱ *${prefix}love*
┣⊱ *${prefix}shadow*
┣⊱ *${prefix}wood*
┣⊱ *${prefix}metal*
┣⊱ *${prefix}pubg*
┣⊱ *${prefix}csgo*
┣⊱ *${prefix}crossfire*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.logomenu = logomenu

const gamemenu = (prefix) => {
    return `
┏━━❉ *GAME* ❉━━━
┣⊱ *${prefix}tebakgambar*
┣⊱ *${prefix}nextkuiz (tebak gambar)*
┣⊱ *${prefix}stopkuiz (tebak gambar)*
┣⊱ *${prefix}caklontong*
┣⊱ *${prefix}tod*
┣⊱ *${prefix}family100*
┣⊱ *${prefix}points*
┣⊱ *${prefix}kuismtk*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.gamemenu = gamemenu

const groupmenu = (prefix) => {
    return `
┏━━❉ *GROUP* ❉━━━
┣⊱ *${prefix}mutegrup on|off*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}mute*
┣⊱ *${prefix}profile*
┣⊱ *${prefix}antilink*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}del*
┣⊱ *${prefix}getpic*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}santet*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}howbucins*
┣⊱ *${prefix}babi*
┣⊱ *${prefix}gay*
┣⊱ *${prefix}jadian*
┣⊱ *${prefix}cantik*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}tod*
┣⊱ *${prefix}ganteng*
┣⊱ *${prefix}kutuk*
┣⊱ *${prefix}antiporn <FITUR VIP>*
┣⊱ *${prefix}bokep < Enable / Disable >*
┣⊱ *${prefix}antilink*
┣⊱ *${prefix}antisticker*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}afk*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.groupmenu = groupmenu

const downloadmenu = (prefix) => {
    return `
┏━━❉ *DOWNLOAD* ❉━━━
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}igstory*
┣⊱ *${prefix}play*
┣⊱ *${prefix}playv*
┣⊱ *${prefix}playvn*
┣⊱ *${prefix}tiktok*
┣⊱ *${prefix}tiktokmusic*
┣⊱ *${prefix}instagram*
┣⊱ *${prefix}facebook*
┣⊱ *${prefix}joox*
┣⊱ *${prefix}spotify*
┣━━━━━━━━━━━━━━
┃    *BOT BY DENI*
┗━━━━━━━━━━━━━━
`
}
exports.downloadmenu = downloadmenu
