const express = require("express");
const app = express();
const ofire = require("./setdata");
var PORT = process.env.PORT || 4000;
var admin = require("firebase-admin");
var bodyParser = require("body-parser");
var routes = require("./routes/app");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/pub", express.static("public"));
app.set("view engine", "ejs");

//port starting
app.listen(PORT, function (err, data) {
  if (err) {
    console.log("error");
  } else {
    console.log("domain " + PORT + " started for todo");
  }
});
//interface for todo
app.get("/", function (req, res) {
  res.render("index");
});

app.use("/api", routes);
