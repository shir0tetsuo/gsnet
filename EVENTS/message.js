const settings = require('../settings.json');


// mongodb and express might be required

let timeout = new Set();

module.exports = message => {
  let client = message.client;
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
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if (cmd.conf.guildOnly == true && message.channel.type === "dm") return;
    cmd.run(client, message, params, perms);
  }



};
