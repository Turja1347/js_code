// ------------------------------------------------------------
// ✅ JavaScript Functions: Core Concepts and Syntax
// ------------------------------------------------------------

// A function is a reusable block of code designed to perform a task.
// Functions can accept inputs (parameters), perform operations, and return outputs.

// ------------------------------------------------------------
//  1. Function Declaration
// ------------------------------------------------------------
function greet() {
    console.log("Hello World"); // Output: Hello World
}
greet();  // Function call

// ------------------------------------------------------------
//  2. Function with Parameters
// ------------------------------------------------------------
function greets(message) {
    console.log(message);
}
greets("Hi"); // Output: Hi

// ------------------------------------------------------------
//  3. Function with Return Value
// ------------------------------------------------------------
function add(a, b) {
    return a + b;  // Returns the sum
}
let result = add(5, 3);
console.log("Addition:", result);  // Output: Addition: 8

// ------------------------------------------------------------
//  4. Function Expression (Anonymous function assigned to variable)
// ------------------------------------------------------------
const multiply = function(x, y) {
    return x * y;
};
console.log("Multiplication:", multiply(4, 2)); // Output: 8

// ------------------------------------------------------------
//  5. Arrow Function (ES6 Syntax)
// ------------------------------------------------------------

// Basic syntax: const functionName = (params) => expression;

// Without return (single line)
const square = (n) => n * n;
console.log("Square of 5:", square(5)); // Output: 25

// With block & return
const divide = (a, b) => {
    return a / b;
};
console.log("Division:", divide(10, 2)); // Output: 5

// ------------------------------------------------------------
//  6. Default Parameters
// ------------------------------------------------------------

function greetUser(name = "Guest") {
    console.log("Welcome", name);
}
greetUser();         // Output: Welcome Guest
greetUser("Alice");  // Output: Welcome Alice

// ------------------------------------------------------------
//  7. Rest Parameters (to accept variable number of arguments)
// ------------------------------------------------------------

function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum:", sumAll(1, 2, 3, 4, 5)); // Output: 15

// ------------------------------------------------------------
//  8. Callback Function
// ------------------------------------------------------------

// A function passed into another function as an argument

function processUserInput(callback) {
    let name = "John";
    callback(name); // Calls the callback function
}

function printName(username) {
    console.log("User:", username);
}
processUserInput(printName); // Output: User: John

// ------------------------------------------------------------
//  9. Higher-Order Function
// ------------------------------------------------------------

// A function that takes another function as an argument or returns a function

function higherOrder(fn) {
    console.log("Calling function...");
    fn();  // Call the passed function
}

higherOrder(function() {
    console.log("I am a callback");
});
// Output:
// Calling function...
// I am a callback

// ------------------------------------------------------------
//  10. Function that Returns Another Function
// ------------------------------------------------------------

function outer() {
    return function inner() {
        console.log("Inner function called");
    };
}

const fn = outer();
fn(); // Output: Inner function called

// ------------------------------------------------------------
//  11. Immediately Invoked Function Expression (IIFE)
// ------------------------------------------------------------

// Runs as soon as it is defined
(function() {
    console.log("IIFE executed"); // Output: IIFE executed
})();

// ------------------------------------------------------------
//  12. Named vs Anonymous Functions
// ------------------------------------------------------------

// Named Function:
function namedFunc() {
    console.log("Named function");
}

// Anonymous Function (commonly used in expressions or callbacks):
const anonFunc = function() {
    console.log("Anonymous function");
};

// ------------------------------------------------------------
//  13. Arrow Function vs Regular Function Key Differences
// ------------------------------------------------------------
// - Arrow functions do NOT have their own `this` context
// - Cannot be used as constructors
// - More concise for simple tasks

// Example:
const person = {
    name: "Alice",
    regularFunc: function () {
        console.log("Hello from", this.name);
    },
    arrowFunc: () => {
        console.log("Hello from", this.name); // `this` is not bound here
    }
};

person.regularFunc(); // Output: Hello from Alice
person.arrowFunc();   // Output: Hello from undefined

// ------------------------------------------------------------
//  Summary of Key Function Types
// ------------------------------------------------------------
// - Function Declaration
// - Function Expression
// - Arrow Function
// - Default Parameters
// - Rest Parameters
// - Callback Function
// - Higher-Order Function
// - Returning Functions
// - IIFE (Immediately Invoked)
// - Named / Anonymous
