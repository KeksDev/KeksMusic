module.exports = (client, message, queue, track) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.music + " Added")
        .setDescription(`**${track.title}** has been added to the queue!`)
    message.channel.send(e);
};