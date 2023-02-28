const { mongoose, ObjectID } = require("mongoose");
// const ObjectID = mongoose.ObjectID;

mongoose.set("strictQuery", false);

const id = mongoose.Types.ObjectId();

// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

var url = "mongodb://localhost:27017/task-manager";
mongoose.connect(url, function (err, db) {
  if (err) throw err;

  // Creating the Data

  //1.) ----insertOne()----

  //     var user1 = { name: "Utsav", age: "21" };

  //     db.collection("user").insertOne(user1, (err, res) => {
  //       if (err) throw err;
  //       console.log("1 record inserted");
  //       db.close();
  //     });

  // //  2.) ----insertMany----
  //     var user1 = [
  //       { name: "Raj", age: 22 },
  //       { name: "harsh", age: 22 },
  //       { name: "Vidur", age: 22 },
  //     ];

  //     db.collection("user").insertMany(user1, (err, res) => {
  //       if (err) throw err;
  //       console.log("record inserted");
  //       db.close();

  //     var tasks = [
  //       {
  //         description: "Clean the house",
  //         completed: true,
  //       },
  //       {
  //         description: "Renew inspection",
  //         completed: false,
  //       },
  //       {
  //         description: "Pot plants",
  //         completed: false,
  //       },
  //     ];

  //     db.collection("task").insertMany(tasks, (err, res) => {
  //       if (err) throw err;

  //       console.log(tasks._id);
  //       db.close();
  //     });

  // //   Reading data from databse
  // //   1.) ---findOne()---
  //     db.collection("user").findOne({ name: "harsh" }, (err, res) => {
  //       if (err) throw err;
  //       console.log(res);
  //     });

  //     // 2.) ---find()---
  //     db.collection("user")
  //       .find({ age: 22 })
  //       .toArray((err, res) => {
  //         if (err) throw err;
  //         console.log(res);
  //       });

  //     db.collection("user")
  //       .find({ age: 22 })
  //       .count((err, res) => {
  //         if (err) throw err;
  //         console.log(res);
  //       });

  //     Updating data into database
  //   1.) ---updateOne()---
  //     db.collection("user")
  //       .updateOne(
  //         {
  //           age: "21",
  //         },
  //         {
  //           $set: {
  //             age: 21,
  //           },
  //         }
  //       )
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  // //   2.) ---updateMany()---
  //     db.collection("user")
  //       .updateMany(
  //         {
  //           age: 22,
  //         },
  //         {
  //           $set: {
  //             age: 24,
  //           },
  //         }
  //       )
  //       .then((result) => {
  //         console.log(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //   db.collection("task")
  //     .updateMany(
  //       {
  //         completed: false,
  //       },
  //       {
  //         $set: {
  //           completed: true,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // Deleting the data from database
  // 1.)---deleteOne()---
  db.collection("user")
    .deleteOne({
      age: 21,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  // 2.)---deleteMany()---
  db.collection("user")
    .deleteMany({
      age: 24,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
