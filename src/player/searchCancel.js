module.exports = (client, message, query, tracks) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.error + " Error")
        .setDescription("You have to provide a vaid response. Please try again")
    message.channel.send(e);
};