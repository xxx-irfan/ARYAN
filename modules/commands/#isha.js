const fs = require("fs");
module.exports.config = {
  name: "isha",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("isha") ||
     react.includes("ISHA") || react.includes("Isha Khan") || react.includes("iSHA") ||
react.includes("Isha") ||
react.includes("ISHA") ||     
react.includes("isha")) {
    var msg = {
        body: `${name}💐𝐊𝐈𝐒 𝐍𝐄 𝐘𝐀𝐀𝐃 𝐊𝐈𝐘𝐀 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐊𝐎 𝐁𝐔𝐑𝐈 𝐍𝐀𝐙𝐀𝐑 𝐖𝐀𝐋𝐎 𝐓𝐔𝐌𝐇𝐀𝐑𝐀 𝐌𝐔𝐇 𝐊𝐀𝐋𝐀😹💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/isha.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
