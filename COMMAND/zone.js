const settings = require('../settings.json');

function GenerationPrompt(client, message, params, perms) {
  message.channel.send(`Zone \`${message.zone}\` does not exist.`)
}

function AccessEarth(client, message, params, perms) {
  client.db.collection('Zones').doc(message.zone).get()
  .then(doc => {
    if (!doc.exists) {
      GenerationPrompt(client, message, params, perms)
    } else {
      message.channel.send(`Zone \`${message.zone}\` exists.`)
    }
  })
  .catch(err => {
    console.error('Google AccessEarth Error', err)
  })
}

exports.run = (client, message, params, perms) => {
  /// Coord Auth Chain
  if (!params[0]) return message.reply(`Specify coordinates.`)
  coords = params[0].split(',')
  ///
  let LAT = parseFloat(coords[0]).toFixed(3)
  if (LAT > 90) LAT = (90).toFixed(3)
  if (LAT < 0) LAT = (0).toFixed(3)
  ///
  let LON = parseFloat(coords[1]).toFixed(3)
  if (LON > 180) LON = (180).toFixed(3)
  if (LON < -180) LON = (-180).toFixed(3)
  ///
  if (isNaN(LAT) || isNaN(LON)) return message.reply(`Coordinates not numbers \`LAT(${LAT}),LONG(${LON})\``)

  message.zone = `${LAT},${LON}`

  AccessEarth(client, message, params, perms)

  //message.reply(`Zone recognized \`(${LAT},${LON})\``)
  //message.channel.send(`= ${message.author.tag} =`, {code:'asciidoc'})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'peek', 'examine', 'panel', 'peer'],
  permLevel: 0
};

exports.help = {
  name: 'zone',
  description: 'Inspect a zone.',
  usage: 'zone 75.1234567,-33.65432'
};
