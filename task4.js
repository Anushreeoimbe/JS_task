// Task 1 — Basic Function

function welcomeUser(name){
    console.log("Welcome " + name);
}
welcomeUser("Naveen");


// Task 2 — Parameter + Return

function squareNumber(num){
    return num * num;
}
console.log(squareNumber(5));


// Task 3 — Object Function

const employee = {
    name : "Rahul",
    salary : 50000,

    employeeBonus : function(bonus){
        console.log(this.name);
        console.log(this.salary + bonus);
    }
}

employee.employeeBonus(5000);


// Task 4 — Scope Checking

function checkScope(){

    if(true){

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    // console.log(b); // Error
    // console.log(c); // Error
}

checkScope();


// Task 5 — Arrow Function

const add = (a,b) => {
    console.log(a + b);
}

add(5,3);


// Task 6 — Callback Function

function multiply(a,b){
    return a * b;
}

function calculator(callback,a,b){
    console.log(callback(a,b));
}

calculator(multiply,5,2);


// Task 7 — Generator Function

function* offers(){

    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let data = offers();

console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);


// Task 8 — Default Parameter

function student(name,course = "JavaScript"){

    console.log(name);
    console.log(course);
}

student("Anushree");


// Task 9 — Currying

function multi(a){

    return function(b){

        return function(c){

            return a * b * c;
        }
    }
}

console.log(multi(2)(3)(4));


// Task 10 — Spread Operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1,...arr2];

console.log(result);


// Task 11 — Object Spread

let obj1 = {name:"Navi"};
let obj2 = {role:"Developer"};

let finalObj = {...obj1,...obj2};

console.log(finalObj);


// Task 12 — Rest Operator

function numbers(...num){

    console.log(num);

    let sum = 0;

    for(let i of num){
        sum = sum + i;
    }

    console.log(sum);
}

numbers(1,2,3,4);



// Mini Challenge 🔥
// Student Management System

let students = [];

function addStudent(name,marks){

    students.push({
        name,
        marks
    });
}

function printStudents(){

    console.log(students);
}

function calculateMarks(callback){

    students.forEach((student)=>{

        console.log(student.name + " : " + callback(student.marks));
    });
}

function bonusMarks(mark){

    return mark + 5;
}

addStudent("Rahul",80);
addStudent("Anushree",90);
addStudent("Navi",75);
printStudents();
calculateMarks(bonusMarks);


// Spread Operator

let newStudents = [
    ...students,
    {name:"Kiran",marks:88}
];
console.log(newStudents);


// Rest Operator

function totalMarks(...marks){

    let total = 0;
    for(let m of marks){
        total += m;
    }
    console.log("Total Marks = " + total);
}
totalMarks(80,90,75,88);