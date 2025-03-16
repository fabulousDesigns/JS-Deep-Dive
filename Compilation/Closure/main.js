// closure - A closure occurs when a function maintains access to its lexical scope (the environment where it was defined), including all variables and parameters from its parent scopes, even when that function is executed outside its original scope.

function createPerson(name) {
  const privateName = name;

  return {
    getName: function () {
      return privateName;
    },
    setName: function (newName) {
      privateName = newName;
    },
  };
}

const person = createPerson("Alice");

console.log(person.getName());
