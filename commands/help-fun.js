const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
      let helpfunembed = new Discord.RichEmbed()
  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help fun"
}