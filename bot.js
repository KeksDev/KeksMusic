const settings = require("./settings");
if(settings.token === "" || settings.token === undefined) {
	require("./src/utils/Logger").error("Please insert a token!");
	process.exit();
}
if(settings.owner[0] === undefined || settings.owner[0] === "") {
	require("./src/utils/Logger").error("Please insert at least 1 owner id!");
	process.exit();
}

require("./src/Main").start(settings);
