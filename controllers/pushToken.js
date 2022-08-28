const admin = require("firebase-admin");

exports.pushToken = async function (req, res) {
  const { isRegister } = req.params;
  const { topic } = req.params;
  const { token } = req.params;
  console.log('-----\n');
  console.log(isRegister);
  console.log(topic);
  console.log(token);
  console.log('\n-----');
  if (isRegister === 'register') {
    admin
      .messaging()
      .subscribeToTopic(token, topic)
      .then(function (response) {
        console.log("subscribed: ", response);
        return res.status(200).json({ success: topic });
      })
      .catch(function (err) {
        console.log("Error Sending message!!! : ", err);
        return res.status(400).json({ success: false });
      });
  } else if (isRegister === 'unregister') {
    admin
      .messaging()
      .unsubscribeFromTopic(token, topic)
      .then(function (response) {
        console.log("unsubscribed: ", response);
        return res.status(200).json({ success: topic });
      })
      .catch(function (err) {
        console.log("Error Sending message!!! : ", err);
        return res.status(400).json({ success: false });
      });
  } else {
    return res.json({
      message: "invalid request",
      data: req.params,
    });
  }
};
