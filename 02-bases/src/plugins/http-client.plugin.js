const axios = require('axios')
const httpClientPlugin = {
  get: async (url) => {
    const resp = await axios.get(url);
    return await resp.data;
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

module.exports = {
    http: httpClientPlugin
};
