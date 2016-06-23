const axios = require('axios');

const fetch = (url, callback) => {
  return axios.get(url)
    .then(res => {
      return callback(res);
    });
};

module.exports = fetch;
