const http = require("./http");
const pushMessage = require("./pushMessage");

const calcEfficiencyRate = (yesCnt, noCnt) => {
  const value = ((yesCnt / (yesCnt + noCnt)) * 100).toFixed(2);
  return `${value}%`;
};

const getGiftKey = () => {
  const data = {
    chat_room_id: "1000050",
    copy_not_yet: 0,
    limit: 100,
    page: 0,
    status: 2,
  };
  http.post("/tool/redeemCodeList", data).then((res) => {
    console.log(res.data);
    const { code, data, message } = res.data;
    let result = [];
    if (code == 200) {
      result = data.reduce((f, item, index) => {
        f += `${index + 1}. 【${item.content}】：${
          item.reward
        }，有效率：${calcEfficiencyRate(
          item.sign_yes_count,
          item.sign_no_count
        )}，更新时间：${item.updated_at} \n`;
        return f;
      });
      pushMessage.pushResult(result);
    } else {
      pushMessage.pushResult(message);
    }
  });
};
getGiftKey();
