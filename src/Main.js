const Discord = require("discord.js");
const fs = require('fs');
const { Player } = require('discord-player');

const Color = require("./utils/Color");
const Logger = require("./utils/Logger");
const Version = require("./utils/Version");

const client = new Discord.Client({ disableMentions: 'everyone' });

client.color = Color;
client.logger = Logger;
client.version = Version;
client.player = new Player(client);
client.commands = new Discord.Collection();
client.emotes = {
    off: ':x:',
    error: ':warning:',
    queue: ':bar_chart:',
    music: ':musical_note:',
    success: ':white_check_mark:'
};

const commands = fs.readdirSync(`./src/commands`).filter(files => files.endsWith('.js'));
const events = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./src/player').filter(file => file.endsWith('.js'));

for (const file of commands) {
    const command = require(`./commands/${file}`);
    console.log(`Loading command ${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};










module.exports.start = (settings) => {
    client.login(settings["token"]);
    client.settings = settings;
    client.filters = ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding']

}
