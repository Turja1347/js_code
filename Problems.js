
// Problem 1: Write a program to check if a number is is posetive, negative, or zero

let num = -5;
if (num>0){
    console.log(num+" is a posetive number");
} else if (num<0){
    console.log(num+" is a negative number");
}else{
    console.log(num+" is zero");
}

// Problem 2: print 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i)
}

// Problem 3: Create a simple program that handles a divisionn by zero error

try {
    let result = 10/0
    console.log(result)
} catch(error) {
    console.log("error",error)
}