createOrder()
  .then((data) => {
    console.log(data);
    return data; // we always have to return something ( it can be any value or promise)
  })
  .catch((err) => {
    console.log(err);
  })
  .then((orderId) => {
    console.log(orderId);
    console.log("yo yo yoy ");
  });

function createOrder() {
  return new Promise((resolve, reject) => {
    // reject("Not accepting order");
    resolve("12345");
  });
}
