module.exports = (client, message, track) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.music + " Playing")
        .setDescription(`**${track.title}** is playing now...`)
    message.channel.send(e);
};