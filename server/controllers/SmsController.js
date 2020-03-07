const User = require("../models/User");

exports.postData = (req, res, next) => {
  console.log("req ,postData");
  console.log(req.body);
  res.json({ status: "ok" });
};
