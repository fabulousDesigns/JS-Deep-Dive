// let myName = "Bernard";

// function printName() {
//   console.log(myName);
// }
// myName = "Jose";
// printName();
// myName = "Lucas";
// printName();
// //

function outerFunc(outerVar) {
  return function innerFunc(innerVar) {
    console.log("OuterVar: " + outerVar);
    console.log("InnerVar: " + innerVar);
  };
}
const newFunc = outerFunc("outside");

newFunc("inside");
