# gsnet
NodeJS Firebase Express Discord.js CRUD Application dubbed Global Shadownet or Gameshell Net

![node](https://img.shields.io/badge/Node-v12.18.0-yellowgreen?logo=node.js&style=plastic)
![phase](https://img.shields.io/badge/Phase-Hiatus-critical?logo=atom&style=plastic)

## **Development has been temporarily suspended.**

Waiting on server hardware. Yes we did it, we acquired a rackmount server! Expect server installation by the end of this month. We were unable to proceed with building this project due to the lack of **computing power.** $1600CAD of Equipment is being shipped now.

# Purpose
**Provide a "vibes" based coordinate reference platform allowing users to record psychic data on a geogrid position.**
* (0) Users can take "ownership" of 50 zones.
* (1) Helper+ users can create zone areas.
* (2) Moderator+ users can lock users out from accessing the system.
* (3) Administrators have the power to delete zones.
* (4) Operators also have direct FireStore access, therefore have full CRUD permissions.

## Development Tracking
![](https://img.shields.io/badge/Authorizations-Permissions%20Overhaul-success?style=plastic)

## Research
https://firebase.google.com/docs/firestore/manage-data/add-data#node.js_1
https://maps.google.com/
https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-on-supported-platforms
https://github.com/cuu/gsnotify
https://www.fairfieldparanormalsociety.com/levels-of-paranormal-activity
https://discordjs.guide/popular-topics/reactions.html#awaiting-reactions
https://discordjs.guide/popular-topics/embeds.html#attaching-images
https://discordjs.guide/popular-topics/embeds.html#attaching-images-2
https://discordjs.guide/popular-topics/canvas.html

## Plan
Produce a geolocation data matrix based on coordinates fed into Discord. Ease of operation is necessary and intended.

## Structure
* ASSET
  * Images, CSS, HTML
* COMMAND
  * Modular Command Modules
* EVENTS
  * Discord API Events, Message/Auth to Database Handling
* SYSTEM
  * Recursive Matrices

## settings.json
* version
* prefix (g.)
* owner
* adminrole (role id)
* modrole (role id)
* helpers (role id)
* token (for discord bot)

## User Data Organization Notice
* Users/Zones
* Zones > Zone ID

## Pager Configuration
Pager based on gsnotify, node should write to /home/cpi/GS.log, gsnotify job updates

## Dependencies

![discord](https://img.shields.io/badge/Discord.js-From%20NPM%20v12-informational?logo=discord&style=plastic)
![express](https://img.shields.io/badge/Express-From%20NPM-informational?logo=node.js&style=plastic)
![firebase](https://img.shields.io/badge/firebase%20admin-From%20NPM-informational?logo=firebase&style=plastic)
![mpg123](https://img.shields.io/badge/mpg123-apt-informational?logo=linux&style=plastic)

![Linux](https://img.shields.io/badge/Linux%20Operating%20System-Designed%20for%20the%20GameShell-important?logo=linux&style=plastic)
