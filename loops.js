/*
Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met.
They are essential for tasks like iterating over data, automating repetitive actions, or performing calculations.
*/

// -----------------------------
// For Loop: Use when number of iterations is known
for (let i = 1; i < 5; i++) {
    console.log("For loop:", i);
}

// -----------------------------
// While Loop: Executes as long as the condition is true
let j = 1;
while (j < 5) {
    console.log("While loop:", j);
    j++;
}

// -----------------------------
// Do...While Loop: Executes block at least once
let f = 1;
do {
    console.log("Do while loop:", f);
    f++;
} while (f < 5);

// -----------------------------
// For...in Loop: Iterate over object properties
const user = { name: "Alice", age: 25, role: "Developer" };
for (let key in user) {
    console.log("For...in loop:", key, "=", user[key]);
}

// -----------------------------
// For...of Loop: Iterate over iterable values (arrays, strings, etc.)
const numbers = [10, 20, 30, 40];
for (let value of numbers) {
    console.log("For...of loop:", value);
}

// -----------------------------
// Break: Exits the loop immediately when encountered
for (let k = 0; k < 10; k++) {
    if (k == 5) break;
    console.log(k);
}

// -----------------------------
// Continue: Skips current iteration and continues with next
for (let k2 = 0; k2 < 10; k2++) {
    if (k2 == 5) continue;
    console.log(k2);
}

// -----------------------------
// Nested Loops
for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 4; b++) {
        console.log(`a: ${a}, b: ${b}`);
    }
}

/*
Recap:

for loop: Use when the number of iterations is known.
while loop: Use when the number of iterations depends on a specific condition.
do...while loop: Use when the block must run at least once.
for...in loop: Use for iterating over properties of objects.
for...of loop: Use for iterating over iterable data (arrays, strings, etc.).
break: Exit loop immediately.
continue: Skip current iteration and continue.
*/