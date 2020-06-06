
console.log("0 GSMAIN INIT")

// https://discordjs.guide/additional-info/changes-in-v12.html#send

// require express
// require mongodb
const settings = require('./settings.json') // settings
const fs = require("fs") // filesystem mgmt
const Discord = require("discord.js"); // discord client
const client = new Discord.Client(); // discord client

require('./SYSTEM/events.js')(client); // ** sys/eventLoader

var initDate = new Date();
////////////////////////////////////////////////////////////////////////////////
client.login(settings.token);

////////////
// FIRESTORE
////////////
var admin = require("firebase-admin");

var serviceAccount = require("./FirebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gsnet-a64df.firebaseio.com"
});

//const db = admin.firestore();
client.db = admin.firestore();
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
////////////////////////////////////////////////////////////////////////////////

client.on('error', console.error)
