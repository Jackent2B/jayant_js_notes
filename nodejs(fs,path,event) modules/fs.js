const { error } = require("console");
const fs = require("fs");

// console.log("hey");

// // it is synchronous
// const fileContents = fs.readFileSync("./file1.txt", "utf-8");
// console.log(fileContents);

// console.log("middle");

// // it is asynchronous
// fs.readFile("./file1.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log("end");

// it is synchronous
fs.writeFileSync("./greet.txt", "Hey jayant");

// it is asynchronous
// { flag: "a" } - it means it will append to previous file
fs.writeFile("./greet.txt", " wish you  the best", { flag: "a" }, (error) => {
  console.log(error);
});
