const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  body:   { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);