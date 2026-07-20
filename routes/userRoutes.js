const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = new User({
      name,
      email,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;