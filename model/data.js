const mongoose = require('mongoose');
// Membuat Schema

const data = mongoose.model('data', {
  postTitle: String,
  image: String,
  userName: String,
  description: String,
  likes: Number,
  comments: Number,
});

module.exports = data;
