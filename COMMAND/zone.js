const settings = require('../settings.json');
const Discord = require('discord.js')

function pZone(client, message, params, perms) {

  let stat_despair = 0
  let stat_love = 0
  let stat_submission = 0
  let stat_dominance = 0
  let stat_contempt = 0
  let stat_shivers = 0
  let stat_aggressive = 0
  let stat_sentimental = 0
  var vibes = '';
  vibes += `:skull: ${stat_despair} Despair\n`
  vibes += `:blue_heart: ${stat_love} Love\n`
  vibes += `:no_mouth: ${stat_submission} Submission\n`
  vibes += `:face_with_monocle: ${stat_dominance} Dominance\n`
  vibes += `:smirk: ${stat_contempt} Contempt\n`
  vibes += `:cold_face: ${stat_shivers} Shivers\n`
  vibes += `:rage: ${stat_aggressive} Aggression\n`
  vibes += `:cry: ${stat_sentimental} Sentimental\n`
  var observations = '';
  observations += `:nazar: Psychic Activity\n`
  observations += `\`Indexed: June 6, 2020\``
  message.channel.send(vibes)
//  return message.channel.send({
//    pZonePrint = {
//      color: 0x001347,
//      title: message.zone,
//      url: 'https://github.com/shir0tetsuo/gsnet',
//      author: {
//        name: 'GSNet',
//        icon_url: client.user.avatarURL({
//          dynamic: true
//        }),
//        url: 'https://github.com/shir0tetsuo/gsnet',
//      },
//      description: 'Zone Data',
//      thumbnail: {
//        url: 'https://i.imgur.com/wSTFkRM.png',
//      },
//      fields: [{
//          name: 'VIBES',
//          value: 'test',
//        },
//        {
//          name: '\u200b',
//          value: '\u200b',
//          inline: false,
//        },
//        {
//          name: 'Ownership',
//          value: 'Some value here',
//          inline: true,
//        },
//        {
//          name: 'Observations',
//          value: 'test',
//          inline: true,
//        },
//        {
//          name: 'Link',
//          value: `https://www.google.com/maps/@${message.zone},18z`,
//          inline: true,
//        },
//      ],
//      image: {
//        url: 'https://github.com/shir0tetsuo/gsnet/ASSET/gsnet.png',
//      },
//      timestamp: new Date(),
//      footer: {
//        text: message.author.tag,
//        icon_url: message.author.avatarURL({
//          dynamic: true
//        }),
//      }
//    }
  }

function GenerationPrompt(client, message, params, perms) {
  message.channel.send(`Zone \`${message.zone}\` does not exist.`)
}

function AccessEarth(client, message, params, perms) {
  client.db.collection('Zones').doc(message.zone).get()
    .then(doc => {
      if (!doc.exists) {
        GenerationPrompt(client, message, params, perms)
      } else {
        pZone(client, message, params, perms) //.then()
        //message.channel.send(`Zone \`${message.zone}\` exists.`)
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
