const sqr = (x) => x * x;

console.log(sqr(12));

const event = {
  name: "Birthday Party",
  printGuestList() {
    console.log("Guest List for " + this.name);
  },
};

event.printGuestList();
