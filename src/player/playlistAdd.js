module.exports = (client, message, queue, playlist) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.music + " Added")
        .setDescription(`**${playlist.title}** has been added to the queue (**${playlist.tracks.length}** songs) !`)
    message.channel.send(e);
};