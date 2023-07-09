const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

// const middlewares = require("./middlewares");
const notFoundHandler = require('../server/Middelewares/404');
const errorHandler = require('../server/Middelewares/500');
const app = express();
const userRouter = require('../server/routes/UserRouter');
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);





app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

module.exports = app;
