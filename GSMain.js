const Discord = require("discord.js"); // discord client
const client = new Discord.Client(); // discord client
console.log("0 PAGER INIT")
const settings = require('./settings.json')
var exec = require('child_process').exec;

////////////////////////////////////////////////////////////////////////////////
client.login(settings.token);
////////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
  console.log("0 PAGER READY\n0 PAGER READY")
  client.user.setPresence({ game: { name: `DM: page, who`, type: 0}})
  client.user.setStatus("idle")
});
var Counter = 1
var Who = '';
//let AlarmUp = new Set();
////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === "who") {
      message.reply(`Last person to use: ${Who}`)

    }
    if (message.content.toLowerCase() === "page") {
        let date_ob = new Date();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        message.reply('Delivering alarm.\n\`System abuse may lead to having this privilege revoked.\`')
        Who = message.author.tag;
        LOGGED = `${Counter} :: ${message.author.tag} @ ${hours}:${minutes}:${seconds}`
        console.log(LOGGED)
        Counter = Counter+1
        exec(`mpg123 '/home/cpi/program/nodejs/Tone-v2.mp3'`,
      function(error, stdout, stderr) {
        message.reply(`Alarm ended.`)
      })

    };
  }
  /////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
})

client.on('error', console.error)
