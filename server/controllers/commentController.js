const Comment = require("../models/Comments.js");
const Post = require("../models/Posts.js");
const User = require("../models/Users.js");

// @desc    Get all comments
// @route   GET /api/comments
// @access  Public
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ success: true, data: comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Get a single comment
// @route   GET /api/comments/:id
// @access  Public
exports.getComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }
    res.status(200).json({ success: true, data: comment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Create a comment
// @route   POST /api/comments
// @access  Public

exports.createComment = async (req, res, next) => {
  try {
    const { postId, title, description, author, user } = req.body;

    // Check if the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }
    // Create the comment
    const comment = await Comment.create({
      post: postId,
      title,
      description,
      author,
      user: await User.findById(author),
    });

    // Update the post's comments and commentCount
    post.comments.push(comment);
    post.commentCount = post.comments.length;
    await post.save();

    res.status(201).json({ success: true, data: comment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Update a comment
// @route   PUT /api/comments/:id
// @access  Public
exports.updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }
    res.status(200).json({ success: true, data: comment });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }

    // Find the corresponding post
    const post = await Post.findById(comment.post);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    // Remove the comment from the post's comments array
    post.comments = post.comments.filter(
      (commentId) => commentId.toString() !== comment._id.toString()
    );
    post.commentCount = post.comments.length;

    // Save the updated post
    await post.save();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
