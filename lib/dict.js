const axios = require("axios");
const ora = require("ora");
const CONF = require("./conf");

module.exports = (word) => {
  const spinner = ora().start();

  word = encodeURIComponent(word);

  axios
    .get(CONF.api + word)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      spinner.stop();
    });
};
