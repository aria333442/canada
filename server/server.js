const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://muhammadAli:Journey!24@cluster0.qci00.mongodb.net/assessment?retryWrites=true&w=majority",
    {}
  )
  .then((res) => {
    console.log("database connected");
  });

app.get("/", (req, res) => {});

app.listen("8000", console.log("server is running on port 8000"));
