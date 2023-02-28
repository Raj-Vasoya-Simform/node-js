const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

var url = "mongodb://localhost:27017/task-manager";
mongoose.connect(url, function (err, db) {
  if (err) throw err;

  //   ----insertOne()----
  //   var user1 = { name: "Raj", age: "22" };

  //   db.collection("user").insertOne(user1, (err, res) => {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //     db.close();

  // ----insertMany----
  var user1 = [
    { name: "Raj", age: 22 },
    { name: "harsh", age: 22 },
    { name: "Vidur", age: 22 },
  ];

  db.collection("user").insertMany(user1, (err, res) => {
    if (err) throw err;
    console.log("record inserted");
    db.close();
  });
});
