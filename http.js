const axios = require('axios');
const config = require('./config');

const http = axios.create({
    baseURL: config.baseURL,
    origin: 'https://www.gankeapp.com',
    referer:' https://www.gankeapp.com/giftkey/index/1000050?from=leiting',
    'sec-ch-ua': " Not;A Brand;v=99, Microsoft Edge;v=103, Chromium;v=103",
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': "Android",
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Mobile Safari/537.36 Edg/103.0.1264.37'
});

module.exports = http;