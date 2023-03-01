const chalk = require("chalk");

const log_levels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  fatal: 4,
};

class Logger {
  constructor(options) {
    this.options = options;
  }

  log(message, level) {
    if (!level) level = "info";
    if (log_levels[level] < log_levels[this.options.level]) return;
    console.log(
      `[${chalk.blueBright(new Date().toLocaleString())}] [${chalk.greenBright(
        level.toUpperCase()
      )}] ${message}`
    );
  }

  
}

module.exports = Logger;
