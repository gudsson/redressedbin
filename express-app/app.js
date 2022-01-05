require("dotenv").config();
const express = require("express");
const app = express();
const binsRouter = require("./controllers/bins");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect("mongodb://mongodb:27017/redressedbin")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

if (process.env.BUILT) {
  app.use(express.static(path.join(__dirname, "build")));
}

app.set("trust proxy", "loopback");
app.use(cors());

app.use(express.static("public"));
app.use(express.json());
app.use("/api/bins", binsRouter);

module.exports = app;
