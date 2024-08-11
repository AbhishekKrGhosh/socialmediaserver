const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Community = require('../models/Comunity');

router.post('/posts', async (req, res) => {
  try {
    const { communityName, firstName, lastName, description, location, image, profileImage } = req.body;

    const newPost = new Post({
      communityName,
      firstName,
      lastName,
      description,
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

router.post('/community', async (req, res) => {
  try {
    const { communityName } = req.body;

    const existingCommunity = await Community.findOne({ communityName });

    if (existingCommunity) {
      return res.status(409).json({ message: 'Community already exists' }); // Conflict
    }

    const newCommunity = new Community({
      communityName
    });

    await newCommunity.save();
    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(500).json({ message: 'Error creating community', error });
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

router.get('/community', async (req, res) => {
  try {
    const community = await Community.find();
    res.status(200).json(community);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching communities', error });
  }
});

module.exports = router;
