import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      default: "Blogs",
    },
    author: {
      type: String,
      default: "Unknown Author",
    },
    date: {
      type: String, // or Date if you want date object
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
