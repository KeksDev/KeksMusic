module.exports = (client, error, message, ...args) => {
    const { MessageEmbed } = require("discord.js");
    switch (error) {
        case 'NotPlaying':
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("The player is not active on this guild.")
            message.channel.send(e);
            break;
        case 'NotConnected':
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("You must be in a Voice Channel to use this command.")
            message.channel.send(e);
            break;
        case 'UnableToJoin':
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Missing Permissions")
                .setDescription("I haven't enough permissions to join your channel.")
            message.channel.send(e);
            break;
        case 'VideoUnavailable':
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Not Avaiable")
                .setDescription(args[0].title + " is not avaiable in your country! Skipping...")
            message.channel.send(e);
            break;
        case 'MusicStarting':
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Starting")
                .setDescription("The player is starting...")
            message.channel.send(e);
            break;
        default:
            var e = new MessageEmbed()
                .setTitle(client.emotes.error + " Error")
                .setDescription("Something is wrong here... Error: ```txt \n " + error + "```")
            message.channel.send(e);
    };
};