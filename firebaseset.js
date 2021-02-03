const firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBKVOhnNubHI26J3iOiiDyKzQeHpgPhPks ",
  authDomain: "todo-71fb8.firebaseapp.com",
  databaseURL: "https://todo-71fb8-default-rtdb.firebaseio.com/",
};
const app = firebase.initializeApp(config);
module.exports = app;
