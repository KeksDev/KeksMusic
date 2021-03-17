module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
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

        if (!args[0]) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("Please provide a vaid filter.")
            message.channel.send(e);
            return
        }

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("Please provide a vaid filter.")
            message.channel.send(e);
            return
        }

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) {
            var e = new MessageEmbed()
                .setTitle(client.emotes.success + " Success")
                .setDescription("I'll add the filter. Please Wait.")
            message.channel.send(e);
            return
        } else {
            var e = new MessageEmbed()
                .setTitle(client.emotes.success + " Success")
                .setDescription("I'll remove the filter. Please Wait.")
            message.channel.send(e);
            return
        }   
    },
};