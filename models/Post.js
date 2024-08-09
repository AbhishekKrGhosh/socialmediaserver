const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: { type: String },
  image: { type: String, required: true },
  profileImage: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
