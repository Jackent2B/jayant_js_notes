const EventEmitter = require("events");

const emitter = new EventEmitter();

// any number of emitters can listen to same event
emitter.on("order-pizza", (size, category) => {
  console.log(`Pizza ordered ${size} ${category}`);
});

emitter.on("order-pizza", () => {
  console.log(`Pizza ordered successfully`);
});

console.log("Ordering a pizza");

emitter.emit("order-pizza", "large", "mushroom");
