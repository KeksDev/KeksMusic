module.exports = (client, message, query) => {
    const { MessageEmbed } = require("discord.js");
    var e = new MessageEmbed()
        .setTitle(client.emotes.error + " Error")
        .setDescription("I haven't found any results. Please check the query and then try again.")
    message.channel.send(e);
};