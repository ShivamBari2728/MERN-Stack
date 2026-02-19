function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); 

sayHi(); //JS loads function declarations first

function sayHi() {
  console.log("Hi");
}

const greet = function(name) {  // you can store a unction inside a variable.
  return "Hello " + name;
};

// advantage is that you can use a function like its a variable it can be passed inside another function for example .

//--------
const addition = function(a, b) {
  return a + b;
};

const multiply = function(a, b) {
  return a * b;
};

function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(2, 3, add));      // 5
console.log(calculate(2, 3, multiply)); // 6

//--------