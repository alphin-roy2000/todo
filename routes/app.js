const ofire = require("../setdata");
const express = require("express");
const router = express.Router();
router.post("/todo", function (req, res) {
  console.log(req.body);
  ofire.saveData(req.body, function (err, data) {
    res.send({ status: 200, message: "List added" });
  });
});
router.get("/todo", function (req, res) {
  ofire.getData(function (data) {
    console.log(data);
    res.send({ status_code: 200, result: data });
  });
});
router.delete("/todo/:id", function (req, res) {
  var id = req.params.id;
  console.log(id);
  ofire.deleteData(id, function (data) {
    res.send({ status: 200, message: "successsfully deleted" });
  });
});
router.put("/todo/:id", function (req, res) {
  var id = req.params.id;
  console.log(id);
  ofire.updateData(id, req.body, function (err, data) {
    res.send({ status: 200, message: "successsfully updated" });
  });
});
module.exports = router;
