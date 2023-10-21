const EventEmitter = require("events");

class pizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  orderPizza(size, toppings) {
    this.orderNumber++;
    this.emit("order", size, toppings);
  }

  viewOrderNumber() {
    console.log("order number is", this.orderNumber);
  }
}

module.exports = pizzaShop;
