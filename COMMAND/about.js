const settings = require('../settings.json');

exports.run = (client, message, params, perms) => {
  var Txt = ''
  Txt += `v${settings.version}\n`
  Txt += `https://github.com/shir0tetsuo/gsnet\n`
  Txt += `NodeJS Firebase Express Discord.js CRUD Application dubbed Global Shadownet or Gameshell Net for Scientific Purposes. `
  Txt += `Designed by shadowsword#0179. System handles geocoordinate data to the base thousandth place and generates `
  Txt += `a dynamic response with authorization CRUD return. User can save zones/panels and system `
  Txt += `calculates adjacent zones/panels. User can review data in the system and input. User can remove their `
  Txt += `own data operators can use various other functions given their permission level. User can also page the `
  Txt += `creator of the system directly with a pager function.`
  message.reply(Txt)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['what'],
  permLevel: 0
};

exports.help = {
  name: 'about',
  description: 'Displays information about the bot.',
  usage: 'about'
};
