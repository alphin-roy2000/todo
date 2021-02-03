const express = require("express");
const app = express();
const ofire = require("./setdata");
var PORT = process.env.PORT || 4000;
var admin = require("firebase-admin");
var bodyParser = require("body-parser");

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
app.post("/todo", function (req, res) {
  console.log(req.body);
  ofire.saveData(req.body, function (err, data) {
    res.send({ status: 200, message: "List added" });
  });
});
app.get("/todo", function (req, res) {
  ofire.getData(function (data) {
    console.log(data);
    res.send({ status_code: 200, result: data });
  });
  //   var list = {
  //     aaron: {
  //       name: "Aaron",
  //       age: 30,
  //     },
  //     megan: {
  //       name: "Megan",
  //       age: 40,
  //     },
  //     aaliyah: {
  //       name: "Aaliyah",
  //       age: 2,
  //     },
  //   };
  //   console.log("Asf");
  //   res.send({ todolist: list });
});
app.delete("/todo/:id", function (req, res) {
  var id = req.params.id;
  console.log(id);
  ofire.deleteData(id, function (data) {
    res.send({ status: 200, message: "successsfully deleted" });
  });
});
app.put("/todo/:id", function (req, res) {
  var id = req.params.id;
  console.log(id);
  ofire.updateData(id, req.body, function (err, data) {
    res.send({ status: 200, message: "successsfully updated" });
  });
});
