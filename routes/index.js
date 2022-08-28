var express = require("express");
var router = express.Router();
var controller = require("../controllers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/push", controller.pushController.push);
router.use("/pushToken/:isRegister/:topic/:token", controller.pushTokenController.pushToken);

module.exports = router;
