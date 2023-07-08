const express = require("express");
const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

router.get("/api/comments", getComments);
router.get("/api/comments/:id", getComment);
router.post("/api/comments", createComment);
router.put("/api/comments/:id", updateComment);
router.delete("/api/comments/:id", deleteComment);

module.exports = router;
