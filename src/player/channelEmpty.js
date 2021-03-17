module.exports = (client, message, queue) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.error + " Stopped")
        .setDescription("The player has stopped because no one is in the voice channel")
    message.channel.send(e);
};