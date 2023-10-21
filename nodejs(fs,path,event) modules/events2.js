const pizzaShop = require("./eventEmitterClass");

const pizzashop = new pizzaShop();

pizzashop.on("order", (size, toppings) => {
  console.log(`order recieved: make a ${size} pizza with ${toppings}`);
});

pizzashop.orderPizza("large", "mushroom");
pizzashop.viewOrderNumber();
