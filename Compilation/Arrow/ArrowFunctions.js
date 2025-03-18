// Arrow Functions and Binding with this
// Arrow Functions and this
// Arrow functions fundamentally differ from regular functions in how they handle this:
// 1. Arrow Functions Inherit this

const obj = {
  name: "Example",
  regularFunction: function () {
    console.log(this.name); // "Example"
    setTimeout(function () {
      console.log(this.name); // undefined (this points to global object)
    });
    setTimeout(() => {
      console.log(this.name); // "Example" (arrow function inherits this)
    }, 100);
  },
};

// obj.regularFunction();

// Arrow functions don't have their own this binding. Instead, they lexically capture the this value from their enclosing scope.

// 2. Cannot Be Bound to a Different this
const arrowFunc = () => {
  console.log(this);
};
const boundArrowFunc = arrowFunc.bind({ name: "New context" });

arrowFunc(); // Window object (or global in Node)
boundArrowFunc(); // Still Window object - binding doesn't work!

// Methods like bind(), call(), and apply() don't affect the this value in arrow functions.

// 3. Not Suitable for Methods

const person = {
  name: "John",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // "Hello, my name is undefined"

// Arrow functions aren't ideal for object methods because they don't bind to the object.

// Explicit Binding with bind(), call(), and apply()
// 1. using bind()

function displayInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person2 = {
  name: "Bernard",
  age: 25,
};

// Creates a new function with 'this' permanently bound to person
const boundFunction = displayInfo.bind(person);
boundFunction(); // "Name: Alice, Age: 25"

// Creates a new function with 'this' permanently bound to person
const boundFunction2 = displayInfo.bind(person);
boundFunction(); // "Name: Alice, Age: 25"

// 2. Using call()
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person1 = { name: "Carlos" };
const person3 = { name: "Diana" };

introduce.call(person1, "Hello", "!"); // "Hello, I'm Carlos!"
introduce.call(person2, "Hi", "."); // "Hi, I'm Diana."

// call() immediately invokes the function with a specified this value and individual arguments.

// 3. Using apply()
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person4 = { name: "Eva" };

introduce.apply(person, ["Welcome", "!"]); // "Welcome, I'm Eva!"

// apply() works like call() but takes arguments as an array.
// Practical Example: Binding Event Handlers
class Counter {
  constructor() {
    this.count = 0;
    this.button = document.getElementById('counter-button');

    // Solution 1: Bind the method
    this.button.addEventListener('click', this.increment.bind(this));

    // Solution 2: Use an arrow function
    this.button.addEventListener('click', () => {
      this.increment();
    });
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();