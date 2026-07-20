const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");

// POST /posts
router.post("/", async (req, res) => {
  try {
    const { title, content, user } = req.body;

    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const post = new Post({
      title,
      content,
      user,
    });

    const savedPost = await post.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET /posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;