const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyASzHlwCgjtfvhzfwAqoJoA2oxwVhKUIKw" });
});

module.exports = siteController;
