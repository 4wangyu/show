const chalk = require("chalk");

const log = console.log;

module.exports = (data) => {
  // word & phonetic symbol
  log(data.word + chalk.green("  [ " + data.phonetic + " ]"));
  log();

  // meaning & example
  if (data.meanings) {
    data.meanings.forEach(function (meaning) {
      log(
        chalk.gray("- ") +
          chalk.magenta("[" + meaning.partOfSpeech + "]") +
          " " +
          chalk.yellow(meaning.definitions[0].definition)
      );
      if (meaning.definitions[0].example) {
        log("  " + chalk.cyan(meaning.definitions[0].example));
      }
      log("");
    });
  }
};
