var express = require("express");
var app = express();
var forms = require("./form-routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", forms);

var server = app.listen(3000, function() {
  console.log("Server is up and running!");
});