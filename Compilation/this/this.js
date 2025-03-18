//! Basic rules for `this` keyword
//* 1. Global Context
console.log(this); //? Points to the global object (window in browsers, global in Node.js)

//* 2.  Function Context (Regular Functions)
function showThis() {
  console.log(this);
}

showThis(); //? Global object (in non-strict mode)
//? undefined (in strict mode)

//* 3. Object Method Context
const user = {
  name: "John",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};
user.greet(); //! "Hello, I am John"
// * 4. Constructor Function Context
function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const alice = new User("Alice");
alice.sayHi(); //? "Hi, I'm Alice"

//* 5. Event Handler Context
button.addEventListener("click", function () {
  console.log(this); // Points to the button element
});

// ****************************************************
//! Common Issues with this
// ****************************************************
// The Lost this Problem
const user2 = {
  name: "John",
  greet() {
    console.log(`Hello my name is ${this.name}`);
  },
};

const greetFunction = user2.greet;
greetFunction(); //? "Hello, my name is undefined"

// solutions to comtrol `this`
// a. using bind
const user3 = {
  name: "John",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

const greetFunction2 = user.greet.bind(user);
greetFunction(); // "Hello, I am John"

// The bind() method creates a new function with this bound to a specified value.

// using call() and apply()

function greet(greeting) {
  console.log(`${greeting}, My name is ${this.name}`);
}

const user4 = { name: "John" };
greet.call(user, "Hello");
greet.apply(user, ["Hi"]);

// 3. Arrow Functions
const user5 = {
  name: "John",
  delayedGreet() {
    setTimeout(() => {
      console.log(`Hello, I am ${this.name}`);
    }, 1000);
  },
};

user.delayedGreet(); // After 1 second: "Hello, I am John"
// Arrow functions don't have their own this context. They inherit this from the enclosing scope.
