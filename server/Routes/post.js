const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostByName,
} = require("../Controllers/postController.js");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/post/:title", getPostByName);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
