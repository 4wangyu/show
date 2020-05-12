const program = require("commander");
const chalk = require("chalk");
const updateNotifier = require("update-notifier");
const pkg = require("../package.json");

updateNotifier({ pkg }).notify();

program.version(pkg.version);

program.on("--help", function () {
  console.log("");
  console.log(chalk.gray("Examples:"));
  console.log(chalk.cyan("  $ ") + "show word");
  console.log("");
});

program.parse(process.argv);

if (!program.args.length) {
  program.outputHelp();
} else {
  require("./dict")(program.args[0]);
}
