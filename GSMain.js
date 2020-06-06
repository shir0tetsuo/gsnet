
console.log("0 GSMAIN INIT")

// https://discordjs.guide/additional-info/changes-in-v12.html#send

// require express
// require mongodb
const settings = require('./settings.json')
const fs = require("fs")
const Discord = require("discord.js"); // discord client
const client = new Discord.Client(); // discord client

require('./SYSTEM/events.js')(client); // ** sys/eventLoader

var initDate = new Date();
////////////////////////////////////////////////////////////////////////////////
client.login(settings.token);
////////////////////////////////////////////////////////////////////////////////


// main -- commands
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./COMMAND/', (err, files) => { // ** main
  if (err) console.err(err);
  console.log(`${files.length} Plugins Found in ./COMMAND/`)
  files.forEach(f => {
    let fileread = require(`./COMMAND/${f}`);
    var initEndDate = new Date();
    console.log(`NODE: ${fileread.help.name} (${initEndDate.getTime() - initDate.getTime()}ms)`)
    client.commands.set(fileread.help.name, fileread);
    fileread.conf.aliases.forEach(alias => {
      client.aliases.set(alias, fileread.help.name);
    })
  })
})


client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === settings.owner) permlvl = 4;
  // at this point we are going to need MongoDB
  //if (message.author.id === settings.jess) permlvl = 3;
  return permlvl;
}


//let AlarmUp = new Set();
////////////////////////////////////////////////////////////////////////////////

client.on('error', console.error)
