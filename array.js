// ==============================
// Array Methods - JavaScript
// ==============================

// Accessing array elements
const fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits[1]); // Output: Banana

// --------------------------------------------
// push() - Adds elements to the end of the array
const nums = [1, 2, 3];
console.log(nums); // [1, 2, 3]

nums.push(4, 5);    // Add 4 and 5
console.log(nums);  // [1, 2, 3, 4, 5]

// --------------------------------------------
// pop() - Removes the last element from the array
nums.pop();
console.log(nums);  // [1, 2, 3, 4]

// --------------------------------------------
// map() - Creates a new array by applying a function to each element
const squared = nums.map((num) => num * num);
console.log(squared); // [1, 4, 9, 16]

// --------------------------------------------
// filter() - Creates a new array with elements that pass a condition
const ages = [18, 20, 15, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 20, 30]

// --------------------------------------------
// reduce() - Reduces array to a single value (e.g. sum)
const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 600
