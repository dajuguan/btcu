const router = require("express").Router();
const SmsController = require("../../controllers/SmsController");

router.post("/", SmsController.postData);
router.get("/", SmsController.postData);

module.exports = router;
