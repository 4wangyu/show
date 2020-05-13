const axios = require("axios");
const ora = require("ora");
const chalk = require("chalk");
const CONF = require("./conf");

const error = chalk.bold.red;
const log = console.log;

module.exports = (word) => {
  const spinner = ora().start();

  axios
    .get(CONF.api + word, {
      timeout: 4200,
    })
    .then(function (res) {
      log(JSON.stringify(res.data));
    })
    .catch(function (err) {
      if (!err.response) {
        log(error("Please check your internet connection."));
      } else {
        log(err.response.data);
      }
    })
    .then(function () {
      spinner.stop();
    });
};
