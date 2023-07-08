const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUser);
router.post("/api/users", createUser);
router.put("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);

module.exports = router;
