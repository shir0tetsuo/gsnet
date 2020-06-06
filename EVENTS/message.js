const settings = require('../settings.json');


// mongodb and express might be required

let timeout = new Set();

module.exports = message => {
  let ActionTime = new Date();
  let client = message.client;
  // client.db is firestore
  if (message.author.bot) return;
  if (message === null) return;

  if (!message.content.toLowerCase().startsWith(settings.prefix)) return;
  if (timeout.has(message.author.id)) return message.author.send("Slow down, Speedy! I can only \`BEEP\` * So Fast!")
  timeout.add(message.author.id);
  setTimeout(() => {
    timeout.delete(message.author.id);
  }, 2000)

  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

// check user elevation

  if(cmd){
    let perms = 0;
    if (cmd.conf.guildOnly == true && message.channel.type === "dm") return;
    client.db.collection('Users').doc(message.author.id).get()
    .then(doc => {

      if (!doc.exists) {
        if (message.channel.type === "dm") {
          perms = 0;
        } else {
          // Its totally fine if we have an Update Permission command
          perms = 0;
          if (message.member.roles.cache.has(settings.adminrole)) perms = 3;
          if (message.member.roles.cache.has(settings.modrole)) perms = 2;
          if (message.member.roles.cache.has(settings.helpers)) perms = 1;
        }

        let firedata = {
          perms: perms
        }
        let setDoc = client.db.collection('Users').doc(message.author.id).set(firedata)

        if (perms < cmd.conf.permLevel) return;

        console.log('ptime', (new Date()) - ActionTime.getTime())
        cmd.run(client, message, params, perms); // EXECUTE

      } else {
        // Read user's permission
        let perms = doc._fieldsProto.perms['integerValue'];
        if (!perms) perms = 0;

        if (perms < cmd.conf.permLevel) return;

        console.log('ptime', (new Date()) - ActionTime.getTime())
        cmd.run(client, message, params, perms); // EXECUTE
      }
    })
    .catch(err => {
      console.error('Document RCV or Command Execution Error', err);
      process.exit();
    })
  }


};
