module.exports = (client, message, queue) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.music + " Queue Empty")
        .setDescription("The Queue is empty now.")
    message.channel.send(e);
};