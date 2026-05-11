// Task 1 – Predict the Output

console.log("10" + 5); 
// Output: 105
// Datatype: string

console.log(10 + true); 
// Output: 11
// Datatype: number

console.log(false + null); 
// Output: 0
// Datatype: number

console.log("Hello" + undefined); 
// Output: Helloundefined
// Datatype: string

console.log([1,2] + 5); 
// Output: 1,25
// Datatype: string



// Task 2 – Implicit Type Casting

// String + Number
console.log("20" + 10); // 2010
console.log(typeof("20" + 10)); // string

// Boolean + Number
console.log(true + 5); // 6
console.log(typeof(true + 5)); // number

// Array + String
console.log([1,2] + "JavaScript"); // 1,2JavaScript
console.log(typeof([1,2] + "JavaScript")); // string

// Object + Number
console.log({} + 5); // [object Object]5
console.log(typeof({} + 5)); // string

// Null + Number
console.log(null + 10); // 10
console.log(typeof(null + 10)); // number



// Task 3 – Explicit Type Casting

console.log(Number("500")); // 500
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number("abc")); // NaN
console.log(Number([100])); // 100



// Task 4 – Boolean Constructor

console.log(Boolean("")); // false
console.log(Boolean("javascript")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true



// Task 5 – Student Pass or Fail

let mark = 45;

if(mark > 35){
    console.log("Pass");
}
else{
    console.log("Fail");
}



// Task 6 – Voting Eligibility

let age = 20;

if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}



// Task 7 – Greatest Number

let a = 50;
let b = 80;
let c = 30;

if(a > b && a > c){
    console.log("A is Greatest");
}
else if(b > a && b > c){
    console.log("B is Greatest");
}
else{
    console.log("C is Greatest");
}



// Task 8 – Traffic Light System

let signal = "red";

switch(signal){

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}



// Task 9 – Login System

let username = "admin";
let password = "1234";

if(username == "admin"){

    if(password == "1234"){
        console.log("Login Success");
    }
    else{
        console.log("Invalid Password");
    }

}
else{
    console.log("Invalid Login");
}



// Task 10 – Session Finder

let hour = 14;

if(hour >= 1 && hour <= 12){
    console.log("Morning");
}
else if(hour >= 13 && hour <= 15){
    console.log("Afternoon");
}
else if(hour >= 16 && hour <= 19){
    console.log("Evening");
}
else if(hour >= 20 && hour <= 24){
    console.log("Night");
}
else{
    console.log("Invalid Time");
}



// Bonus Challenge 

console.log(true + true); 
// Output: 2

console.log("5" - 2); 
// Output: 3

console.log("5" + 2); 
// Output: 52

console.log(null + 1); 
// Output: 1

console.log(undefined + 1); 
// Output: NaN

console.log(Boolean(" ")); 
// Output: true

console.log(Number(true)); 
// Output: 1