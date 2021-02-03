const firebase = require("./firebaseset");
module.exports = {
  saveData: function (req, callback) {
    let todo = req.input;
    let number = Math.floor(Math.random() * 100000 + 1);
    firebase
      .database()
      .ref("todo/" + number)
      .set({
        id: number,
        message: todo,
      });
    callback(null, { status_code: 200, message: "inserted" });
  },
  getData: function (callback) {
    firebase
      .database()
      .ref("todo/")
      .once("value")
      .then(function (snapshot) {
        callback(snapshot.val());
      });
  },
  updateData: function (id, req, callback) {
    let message = req.input;
    firebase
      .database()
      .ref("todo/" + id + "/")
      .update({ message: message });
    callback("success");
  },
  deleteData: function (id, callback) {
    firebase
      .database()
      .ref("todo/" + id)
      .remove();
    callback("success");
  },
};
