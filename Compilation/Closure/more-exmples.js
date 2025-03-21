// ! Example 1
// if (Math.random() > 0.5) {
//   let x = 1;
// } else {
//   let x = 2;
// }

// console.log(x);

// ! Example 2

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const func = makeFunc();
// func();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
