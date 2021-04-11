import express from "express";
import {
  getAllPosts,
  createNewPost,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const posts = express.Router();

posts.get("/", getAllPosts);
posts.get("/:id", getSinglePost);
posts.post("/", createNewPost);
posts.put("/:id", updatePost);
posts.delete("/:id", deletePost);

export default posts;
