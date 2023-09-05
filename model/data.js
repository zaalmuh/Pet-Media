const mongoose = require('mongoose');
// Membuat Schema

const data = mongoose.model('data', {
  postID: Number,
  userName: String,
  description: String,
  image: String,
  likes: Number,
  comments: Number,
});

module.exports = data;
