module.exports = (client, message, queue) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.error + " Stopped")
        .setDescription("The player has stopped because I got disconnected from the channel.")
    message.channel.send(e);
};