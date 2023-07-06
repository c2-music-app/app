const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
  }
  /* eslint-enable no-console */
});
