const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.get("/api/posts", getPosts);
router.get("/api/posts/:id", getPost);
router.post("/api/posts", createPost);
router.put("/api/posts/:id", updatePost);
router.delete("/api/posts/:id", deletePost);

module.exports = router;
