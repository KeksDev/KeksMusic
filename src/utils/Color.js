const chalk = require("chalk")

module.exports = {
    white: (txt) => {return chalk.white(txt)},
    red: (txt) => {return chalk.red(txt)},
    blue: (txt) => {return chalk.blue(txt)},
    green: (txt) => {return chalk.green(txt)},
    lime: (txt) => {return chalk.greenBright(txt)},
    black: (txt) => {return chalk.black(txt)},
    gray: (txt) => {return chalk.gray(txt)},
    yellow: (txt) => {return chalk.yellow(txt)}
}