const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
  id: { type: Number, required: true },
  slug: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  thumbnail: { type: String, required: true },
  status: { type: String, required: true },
  category: { type: String, required: true, default: "lorem" },
  publishedAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
  userId: { type: Number, required: true },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
