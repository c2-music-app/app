const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoute = require("./views/user.js");
const postRoute = require("./views/post.js");
const commentRoute = require("./views/comment.js");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
