const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    communityName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String },
    description:{type:String, required:true},
    image: { type: String, required: true },
    profileImage: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Post', postSchema);
