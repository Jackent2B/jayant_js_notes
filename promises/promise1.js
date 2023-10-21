function promiseExample1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jayant1");
    }, 2000);
  });
}

function promiseExample2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jayant2");
    }, 1000);
  });
}

// const val = promiseExample1();
// console.log(val);

// async function check1() {
//   const val1 = await promiseExample1();
//   console.log(val1);
//   const val2 = await promiseExample2();
//   console.log(val2);
// }

// check1();

async function check2() {
  const val1 = promiseExample1();
  const val2 = promiseExample2();

  console.log(val1);
  console.log(val2);

  console.log(await val1);
  console.log(await val2);
  return "end";
}

// async keyword itself always returns a promise
let ans = check2();
console.log("promise return by async", ans);

setTimeout(() => console.log(ans), 2000);
