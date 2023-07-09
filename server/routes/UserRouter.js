const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyJWT = require("../Middelewares/verifyJWT")

router.post("/login",   userController.login);
router.post("/signUp", userController.signup);

module.exports = router;