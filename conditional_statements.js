//conditional statement 

/*
 If Statement:
 if (condition) {
 code exicute if condition is true
 }
*/

let age = 23;
if (age>=18) {
    console.log("You are eligible to vote");
    console.log(age)
}

// if else
let vote_age = 13;
if (vote_age>=18) {
    console.log("You are eligible to vote");
    console.log(vote_age)
} else {
    console.log("u r not eligiblr to vote")
}

// if ... else if ... else
let score = 25;
if (score >=90){
    console.log("Grade A");
} else if(score >=60){
    console.log("GradE B");
}else {
    console.log("Fail");
}

// ternary operator
/*
syntax: condition ? expression1 : expression2;
*/

let age2 = 20;
let message = (age2>=18? "you can vote" : "you can't vote");
console.log(message)

/* switch case ==> switch(expression){
case val1:
    expression
    break
}*/

let day =3;
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("invalid day")
    
}

// score switch case
let scores = 40;
switch(true) {
    case (scores >=90 && scores <=100):
        console.log("Grade O");
        break;
    case (scores >=80 && scores <=89):
        console.log("Grade E");
        break;
    case (scores >=70 && scores <=79):
        console.log("Grade A");
        break;
    case (scores >=60 && scores <=69):
        console.log("Grade B");
        break;
    case (scores >=50 && scores <=59):
        console.log("Grade C");
        break;
    case (scores >=40 && scores <=49):
        console.log("Grade D");
        break;
    case (scores >=0 && scores <=39):
        console.log("Grade F");
        break;
    default:
        console.log("Invalid Score");
}

