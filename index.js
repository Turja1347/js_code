// Number
let num = 20;

// String
let nameText = 'Rishi';

// Boolean
let isStudent = true;

// Null
let text = null;

// Undefined
let a;

// Object
let person = { 
    namePerson: 'Rishi', 
    age: '30'
}

// Update object property
person.age = 40;

// Array of numbers
let arr = [10, 20];

// Array of strings
let friends = ["Ram", "Shyam", "Balram"];

console.log(friends.length); // Output: 3
console.log(friends[2]);     // Output: Balram

friends.pop();
console.log(friends.length); // Output: 2

friends.push("Krishna", "Madhav");
console.log(friends.length); // Output: 4

// Array of numbers
let nums = [1, 2, 6, 8, 4, 9, 8, 4];

// Array of booleans
let boolean = [true, false, true];

// Array of objects
let persons = [
    { name: 'a', age: '20' },
    { name: 'b', age: '27' },
];

// Mixed array (number, string, boolean, object)
let mixed = [42, 'hello', true, { name: x = 50 }];

// Program to print name, age, favourite colour
let hisName = "Turja";
let age = 23;
let favouriteColour = "Black";

console.log(hisName);
console.log(age);
console.log(favouriteColour);

// Using an object for the same data
let person2 = {
    namePerson: "Turja",
    age: 23,
    favouriteColour: "Black"
}

console.log(person2.namePerson);
console.log(person2.age);
console.log(person2.favouriteColour);
