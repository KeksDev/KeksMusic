module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        const { MessageEmbed } = require("discord.js");
        if (!message.member.voice.channel) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("You must be in a Voice Channel to use this command.")
            message.channel.send(e);
            return
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("You must be in the same Voice Channel to use this command.")
            message.channel.send(e);
            return
        }

        if (!client.player.getQueue(message)) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("The Queue is already empty.")
            message.channel.send(e);
            return
        }

        if (client.player.getQueue(message).tracks.length <= 1) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("There is only one song in the queue.")
            message.channel.send(e);
            return
        }

        client.player.clearQueue(message);

        var e = new MessageEmbed()
                .setTitle(client.emotes.success + " Success")
                .setDescription("The queue got cleared.")
            message.channel.send(e);
    },
};