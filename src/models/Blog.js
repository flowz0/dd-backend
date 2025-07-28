import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  header2: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
  header3: {
    type: String,
    required: false,
  },
  paragraph3: {
    type: String,
    required: false,
  },
  header4: {
    type: String,
    required: false,
  },
  paragraph4: {
    type: String,
    required: false,
  },
  header5: {
    type: String,
    required: false,
  },
  paragraph5: {
    type: String,
    required: false,
  },
}, { timestamps: true }); // createdAt, updatedAt

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;