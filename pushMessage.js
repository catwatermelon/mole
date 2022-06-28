const { PUSH_URL } = require('./config');
const http = require("./http");

module.exports = {
     pushResult: (content) => {
        http.post(PUSH_URL, {
            token: `${process.env.PUSHPLUS_TOKEN}`,
            title: `摩尔庄园推送`,
            content
        }).then(res => {
            console.log(res);
        });
    }
}