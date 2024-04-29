const express = require("express");

const User = require("../authentication/model");

const router = express.Router();

router.post("/get-all-users", async (req, res) => {

  const users = await User.find({ email: { $ne: req.body.email } }).select('-password');

  return res.json({ users });

});

module.exports = router;
