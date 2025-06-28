// Arithmatic operators +, -, *, /, %

// Addition 
let op1 = 7+3;

// Subtraction
let op2 = 7-3;

// Multiplication 
let op3 = 7*3;

// Division
let op4 = 7/3;

// Modulo 
let op5 = 7%3;
console.log('Arithmatic operator: ', op1, op2, op3, op4, op5)

// Comparison Operators ==, ||, !=, <=, >=

// == (euals to means value only)
let isEqual = (5=='5') // true (loose comparison)

// == (Strict euals to means value + type)
let isStrictEqual = (5==='5') // false (strict comparison)

// != (not euals to means value only)
let isNotEqual = (5!='5') // false (loose comparison)

// == (Strict not eual to means value + type)
let isNotStrictEqual = (5!=='5') // true (strict comparison)
console.log('Comarison operator: ', isEqual, isStrictEqual, isNotEqual)

// Logical operator

// && (AND)
let lop1 = true && false ; // false ==> 1*0 = 0, 1*1=1 oterwise always zero

// || (OR)
let lop2 = true || false ; // true ==> 1*0 = 1, 0*0=0 oterwise always 1

// ! (NOT) inverts the value - true becomes false , vice versa
let lop3 = ! true // false

console.log('Logical operator: ', lop1, lop2, lop3)

// combining Multiple Condition
let age =5;
isAdult = (age >= 18) && (age <= 64);
console.log(isAdult)

let x=5;
// Pre-increment (++i): Increments the value before using it in the expression.
console.log(++x);
console.log(x);
// Post-increment (i++): Uses the current value in the expression before incrementing it.
console.log(x++);
console.log(x);


// Decrement --
let y = 6;
// Pre-decrement (--i): Decrements the value before using it in the expression.
console.log(--y);
console.log(y);
// Post-decrement (i--): Uses the current value in the expression before decrementing it.
console.log(y--);
console.log(y);

// Managing counter
let cartItems = 0;

// add in cart
cartItems++;
console.log(cartItems);

// remove items from cart 
cartItems--;
console.log(cartItems)


//arry indexing
let fruits = ['apples', 'banana', 'cherry']
let index =  0;
console.log(fruits[index++])
console.log(fruits[index++])


