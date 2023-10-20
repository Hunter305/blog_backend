import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  blog: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
