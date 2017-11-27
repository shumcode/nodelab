var express = require("express");

var routes = express.Router();

routes.get("/awesome", function(req, res) {
  res.send("GET request successful");
  console.log("GET request successful");
});

routes.post("/awesome", function(req, res) {
  res.send("POST request successful");
  console.log("POST request successful");
});

routes.delete("/awesome", function(req, res) {
  res.send("DELETE request successful");
  console.log("DELETE request successful");
});

routes.put("/awesome", function(req, res) {
  res.send("PUT request successful");
  console.log("PUT request successful");
});

module.exports = routes;