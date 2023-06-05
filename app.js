const express = require("express");
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("styles"));

const medicinesRouter = require("./routes/medicines");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const port = process.env.PORT || 3030;

app.use("/", medicinesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
