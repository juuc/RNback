const admin = require("firebase-admin");

exports.push = async function (req, res) {
  const message = {
    notification: {
      title: "title",
      body: "body",
    },
    data: {
      link: "https://dev.intelz.kr/home/collection",
    },
    topic: "allDevices",
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
