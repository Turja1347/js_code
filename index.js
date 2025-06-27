// =====================
// JavaScript Full Notes
// =====================

// --- 1. Introduction ---
/*
JavaScript (JS) is a dynamic scripting language used for:
- Creating dynamic content on web pages
- Handling user interactions (click, typing)
- Animations and transitions
- Communicating with servers (AJAX, Fetch)
- Building complete applications (Frontend & Backend with Node.js)
Note: Java ≠ JavaScript
*/

// --- 2. Variables & Scope ---

// var: Function-scoped, can be redeclared, hoisted
var x;
function exampleVar() {
    var x = 9;
    if (x < 10) {
        console.log(x); // 9
        x = 20;
        console.log(x); // 20
    }
}

// let: Block-scoped, no redeclaration, not hoisted in same way
function exampleLet() {
    let x = 9;
    if (x < 10) {
        console.log(x); // 9
        x = 20;
        console.log(x); // 20
    }
}

// const: Block-scoped, can't be reassigned or redeclared
const PI = 3.14159;
// PI = 3; ❌ Error

// --- 3. Data Types ---

// Number
let num = 20;

// String
let nameText = 'Rishi';

// Boolean
let isStudent = true;

// Null (intentional empty value)
let text = null;

// Undefined (declared, not assigned)
let a;

// Object
let person = {
    namePerson: 'Rishi',
    age: 30
};

// Update object properties
person.age = 40;

// --- 4. Arrays ---

let arr = [10, 20];
let friends = ["Ram", "Shyam", "Balram"];

console.log(friends.length); // 3
console.log(friends[2]);     // "Balram"

friends.pop();               // Removes last item
console.log(friends.length); // 2

friends.push("Krishna", "Madhav");
console.log(friends.length); // 4

// Arrays with specific types
let nums = [1, 2, 6, 8, 4, 9, 8, 4];
let booleanArr = [true, false, true];

// Array of objects
let persons = [
    { name: 'a', age: 20 },
    { name: 'b', age: 27 }
];

// Mixed type array
let mixed = [42, 'hello', true, { name: 'x', age: 50 }];

// --- 5. Console Logging ---
console.log('HELLO WORLD');

// --- 6. Summary ---
/*
- var is function-scoped and hoisted
- let & const are block-scoped
- Data types: number, string, boolean, null, undefined, object
- Arrays can store multiple values of any type
- Use console.log() to debug
- Understand scope & hoisting for clean code
*/

// Time Marker for Reference: 01:10:00
