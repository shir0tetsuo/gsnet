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
  vibes += `:skull: \`${stat_despair}\` Despair\n`
  vibes += `:blue_heart: \`${stat_love}\` Love\n`
  vibes += `:no_mouth: \`${stat_submission}\` Submission\n`
  vibes += `:face_with_monocle: \`${stat_dominance}\` Dominance\n`
  vibes += `:smirk: \`${stat_contempt}\` Contempt\n`
  vibes += `:cold_face: \`${stat_shivers}\` Shivers\n`
  vibes += `:rage: \`${stat_aggressive}\` Aggression\n`
  vibes += `:cry: \`${stat_sentimental}\` Sentimental\n`
  let stat_psychic = 0
  let stat_psionic = 0
  let stat_et = 0
  let stat_cosmic = 0
  let stat_temporal = 0
  let stat_spiritual = 0
  let stat_chi = 0
  let stat_em = 0
  let stat_cryptid = 0
  var anomaly = '';
  anomaly += `:nazar: \`${stat_psychic}\` Psychic\n`
  anomaly += `:rosette: \`${stat_psionic}\` Psychokinetic/Psionic`
  anomaly += `:ringed_planet: \`${stat_et}\` ET\n`
  anomaly += `:comet: \`${stat_cosmic}\` Cosmic\n`
  anomaly += `:dizzy: \`${stat_temporal}\` Temporal/Gravimetric\n`
  anomaly += `:raised_hand: \`${stat_spiritual}\` Spiritual\n`
  anomaly += `:stars: \`${stat_chi}\` Chi/Energy\n`
  anomaly += `:zap: \`${stat_em}\` Electromagnetic`
  anomaly += `:bat: \`${stat_cryptid}\` Cryptid\n`
  anomaly += `\`Indexed: June 6, 2020\``
//  message.channel.send(vibes)

  const Embed = {
    color: 0x233f47,
    title: message.zone,
    url: `https://www.google.com/maps/@${message.zone},17.5z`,
    author: {
      name: 'GlobalShadowNet',
      icon_url: `${client.user.avatarURL()}`,
      url: 'https://github.com/shir0tetsuo/gsnet',
    },
    description: 'Some description here',
    thumbnail: {
      url: 'https://i.imgur.com/wSTFkRM.png',
    },
    fields: [{
        name: 'Ownership',
        value: 'shadowsword#0179 \`Indexed June 7, 2020\`\n\`303309686264954881\`',
      },
      {
        name: 'Observation',
        value: `${anomaly}`,
        inline: true,
      },
      {
        name: 'Vibes',
        value: `${vibes}`,
        inline: true,
      },
      {
        name: 'Properties',
        value: '\`Layer:\` 0 \`Area:\` Earth-Meta',
        inline: false,
      },
      {
        name: 'Reaction Controller',
        value: '\`\`\`asciidoc\n= Menu =\n👍👎\`\`\`',
        inline: false,
      },
    ],
    image: {
      url: 'https://github.com/shir0tetsuo/gsnet/ASSET/gsnet.png',
    },
    timestamp: new Date(),
    footer: {
      text: `${message.author.tag} (${(new Date()) - message.ActionTime.getTime()}ms) ${(new Date())}`,
      icon_url: `${message.author.avatarURL()}`,
    },
  };
  const ZComposite = new Discord.MessageAttachment('../ASSETS/gsnet.png');

  message.channel.send({ files: [ZComposite], embed: Embed })


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
        message.zonedoc = doc
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
