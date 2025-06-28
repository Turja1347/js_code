// Arithmetic operators: +, -, *, /, %
let op1 = 7 + 3;     // Addition
let op2 = 7 - 3;     // Subtraction
let op3 = 7 * 3;     // Multiplication
let op4 = 7 / 3;     // Division
let op5 = 7 % 3;     // Modulo (remainder)

console.log('Arithmetic operators:', op1, op2, op3, op4, op5);

// Comparison operators: ==, ===, !=, !==
let isEqual = (5 == '5');           // true (loose comparison)
let isStrictEqual = (5 === '5');    // false (strict comparison)
let isNotEqual = (5 != '5');        // false (loose comparison)
let isNotStrictEqual = (5 !== '5'); // true (strict comparison)

console.log('Comparison operators:', isEqual, isStrictEqual, isNotEqual, isNotStrictEqual);

// Logical operators
let lop1 = true && false;  // AND
let lop2 = true || false;  // OR
let lop3 = !true;          // NOT

console.log('Logical operators:', lop1, lop2, lop3);

// Combining multiple conditions using logical operators
let age = 5;
let isAdult = (age >= 18) && (age <= 64);
console.log('Is adult:', isAdult);

// Increment / Decrement operators
let x = 5;

// Pre-increment: increments first, then returns value
console.log(++x); // 6
console.log(x);   // 6

// Post-increment: returns current value, then increments
console.log(x++); // 6
console.log(x);   // 7

let y = 6;

// Pre-decrement
console.log(--y); // 5
console.log(y);   // 5

// Post-decrement
console.log(y--); // 5
console.log(y);   // 4

// Managing a counter
let cartItems = 0;
cartItems++; // add item
console.log(cartItems);
cartItems--; // remove item
console.log(cartItems);

// Array indexing with post-increment on index
let fruits = ['apples', 'banana', 'cherry'];
let index = 0;

console.log(fruits[index++]); // apples
console.log(fruits[index++]); // banana
