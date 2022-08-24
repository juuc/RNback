const admin = require("firebase-admin");

exports.pushToken = async function (req, res) {
  //디바이스의 토큰 값
  console.log(req.query);

  admin
    .messaging()
    .subscribeToTopic(req.query.deviceToken, "allDevices")
    .then(function (response) {
      console.log("Successfully subscribed: ", response);
      return res.status(200).json({ success: true });
    })
    .catch(function (err) {
      console.log("Error Sending message!!! : ", err);
      return res.status(400).json({ success: false });
    });
};
