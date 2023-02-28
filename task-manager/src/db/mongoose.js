const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });

// const me = new User({
//   name: "Raj",
//   age: 22,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error : ", error);
//   });

const task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task1 = new task({
  description: "Coding",
  completed: false,
});

task1
  .save()
  .then(() => {
    console.log(task1);
  })
  .catch((error) => {
    console.log(error);
  });
