const settings = require('../settings.json')
module.exports = client => {
  client.user.setStatus("dnd") // online/offline/dnd/invisible/idle
  console.log(`0 GSMAIN READY v${settings.version}\n0 GSMAIN READY v${settings.version}`)
};
