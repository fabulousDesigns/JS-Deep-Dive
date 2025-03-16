// calculateArea(7);

// const calculateArea = (radius) => {
//   console.log("Calculated Area:" + 3.142 * radius * radius); // Reference Error: Cannot Access calculateArea before it is declared
// };

calculateArea(5, 10); // Works! Outputs: 50

function calculateArea(width, height) {
  console.log(width * height);
}

// Variable hoisting with var
// console.log(counter);
// var counter = 10;
// console.log(counter);
//! -> LET
// console.log(counter); //? ReferenceError: Cannot access 'counter' before initialization
// let counter = 10;
// console.log(counter);

//! -> CONST

console.log(counter); //? ReferenceError: Cannot access 'counter' before initialization
let counter = 10;
console.log(counter);