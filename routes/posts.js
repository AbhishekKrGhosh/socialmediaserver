const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/posts', async (req, res) => {
  try {
    const { firstName, lastName, location, image, profileImage } = req.body;

    const newPost = new Post({
      firstName,
      lastName,
      location,
      image,
      profileImage
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
});

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

module.exports = router;
