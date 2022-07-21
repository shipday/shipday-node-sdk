const axios = require('axios');

function constructAxios(apiKey, timeOut = 1000) {
  return axios.create({
    baseURL: 'https://api.shipday.com/',
    timeout: timeOut,
    headers: {
      'Authorization': `Basic ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });
}

module.exports = constructAxios;