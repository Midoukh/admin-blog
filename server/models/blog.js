const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  tags: {
    type: Array,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  comments: {
    type: Array,
    required: false,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
