const axios = require('axios');
const ora = require('ora');
const chalk = require('chalk');
const CONF = require('./conf');
const print = require('./print');

const log = console.log;
const error = (e) => log(chalk.bold.red(e));

module.exports = (word) => {
  log('');
  const spinner = ora().start();

  axios
    .get(CONF.api + word, {
      timeout: 30000,
    })
    .then(function (res) {
      print(res.data[0]);
    })
    .catch(function (err) {
      if (!err.response) {
        error('Please check your internet connection.');
      } else {
        error(err.response.data.message);
      }
      log('');
    })
    .then(function () {
      spinner.stop();
    });
};
