const Color = require("./Color");

module.exports = {
    log: (msg) => {
        console.log(Color.white("LOG | "+msg));
    },
    info: (msg) => {
        console.log(Color.white("INFO | ")+Color.green(msg));
    },
    error: (msg) => {
        console.log(Color.white("ERROR | ")+Color.red(msg));
    },
    debug: (msg) => {
    	if(require("../Main").debug) {
        	console.log(Color.white("DEBUG | ")+Color.yellow(msg));
		} 
	}
}