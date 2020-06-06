const settings = require('../settings.json');
var exec = require('child_process').exec;
var Counter = 1

exports.run = (client, message, params, perms) => {
  let date_ob = new Date();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  Who = message.author.tag;
  LOGGED = `${Counter} :: ${message.author.tag} @ ${hours}:${minutes}:${seconds}`
  console.log(LOGGED)
  Counter = Counter + 1
  exec(`mpg123 '/home/cpi/program/gsnet/Tone-v2.mp3'`,
    function(error, stdout, stderr) {
      message.reply(`Alarm Delivered.`)
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['callshadow'],
  permLevel: 1
};

exports.help = {
  name: 'page',
  description: 'Sends a notification to shadowsword.',
  usage: 'page'
};
