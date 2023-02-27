// const validator = require('validator')
const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create Remove Command
yargs.command({
  command: "remove",
  describe: "Removing a note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create Read Command
yargs.command({
  command: "read",
  describe: "Read a note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// Create List Command
yargs.command({
  command: "list",
  describe: "Listing your note.",
  handler(argv) {
    notes.listNote(argv.title);
  },
});
yargs.parse();

// const command = process.argv[2]

// console.log(process.argv);

// if(command === 'add'){
//     console.log('Adding Note!');
// } else if(command === 'remove'){
//     console.log('Removing note!');
// }
// const mes = message();
// console.log(mes);

// // console.log(validator.isEmail('12@rajeam.com'));

// // console.log(validator.isURL('https://google.com'));
// const greenMsg = chalk.green.inverse.bold("Success!");
// console.log(greenMsg);

// console.log(process.argv[2]);
