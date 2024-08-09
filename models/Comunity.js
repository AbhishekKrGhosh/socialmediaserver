const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    communityName: { type: String, required: true }
});

module.exports = mongoose.model('Community', communitySchema);
