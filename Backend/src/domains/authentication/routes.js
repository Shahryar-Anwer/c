const express = require("express");

const User = require("./model");

const { hashPassword, validatePassword } = require("./controller");

const router = express.Router();

/* sign-up route */
router.post("/sign-up", async (req, res) => {
  try {
    const hashedPassword = hashPassword(req.body.password);

    const user = await User.create({ ...req.body, password: hashedPassword });

    return res.json({
      user,
      message: "Sign Up Successful",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
});

/* Sign-in route */
router.post("/sign-in", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user == null) {
      return res.json({
        message : "This user does not exist",
      });
    }

    const validPassword = validatePassword(req.body.password, user.password);

    if (validPassword) {
      return res.json({
        user,
      });
    } else {
      return res.json({
        message: "You have entered incorrect email or password",
      });
    }
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
});

module.exports = router; 