module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    const Version = require("../utils/Version")
    var end = ""
    if(Version.dev) {
        end = "-DEV"
    }
    if(Version.beta) {
        end = "-BETA"
    }
    if(Version.stable) {
        end = ""
    }
    client.user.setActivity(Version.name + " " + Version.version + end);
};