const { PUSH_URL } = require('./config');
const http = require("./http");

module.exports = {
    pushResult: (content) => {
        http.post(PUSH_URL, {
            token: `${process.env.PUSHPLUS_TOKEN}`,
            title: `摩尔庄园推送`,
            content
        }).then(res => {
            console.log(res.data);
        });
    },
    wechatResult: (content) => {
        const key = process.env.WECHAT_WEBSOCKET_HOOK;
        if(!key) return;
        const data = {
            "msgtype": "text",
            "text": {
                content,
                "mentioned_list":["@all"],
            }
        }
        http.post(`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${key}`).then(res=>{
            console.log(res.data);
        });
    }
}
