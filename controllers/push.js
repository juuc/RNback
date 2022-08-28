const admin = require("firebase-admin");

exports.push = async function (req, res) {
  const condition = "'allDevices' in topics && !('dismissNoti' in topics)";
  const message = {
    notification: {
      title: "title",
      body: "body",
    },
    data: {
      link: "https://dev.intelz.kr/home/collection",
    },
    condition: condition,
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Successfully sent message: : ", response);
      return res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.log("Error Sending message!!! : ", err);
      return res.status(400).json({ success: false });
    });
};
