// 1. Print numbers from 1 to 20

for(let i=1; i<=20; i++){
    console.log(i);
}


// 2. Print odd numbers from 1 to 50

for(let i=1; i<=50; i++){
    if(i%2!=0){
        console.log(i);
    }
}


// 3. Multiplication table of 7

for(let i=1; i<=10; i++){
    console.log("7 x " + i + " = " + 7*i);
}


// 4. Reverse counting using while loop

let i=20;

while(i>=1){
    console.log(i);
    i--;
}


// 5. Sum of numbers from 1 to 100

let sum=0;

for(let i=1; i<=100; i++){
    sum=sum+i;
}

console.log(sum);


// 6. Array loop

let fruits=["apple","banana","orange","grapes"];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}


// 7. Count even numbers from 1 to 50

let count=0;

for(let i=1; i<=50; i++){
    if(i%2==0){
        count++;
    }
}

console.log(count);


// 8. Star pattern

for(let i=1; i<=5; i++){

    let star="";

    for(let j=1; j<=i; j++){
        star=star+"*";
    }

    console.log(star);
}


// 9. Simple function

function welcome(){
    console.log("Welcome to JavaScript");
}

welcome();


// 10. Function with parameter

function hello(name){
    console.log("Hello " + name);
}

hello("Naveen");


// 11. Add two numbers

function add(a,b){
    return a+b;
}

console.log(add(10,20));


// 12. Salary bonus

function totalsalary(salary,bonus){
    return salary+bonus;
}

console.log(totalsalary(50000,5000));


// 13. Object loop

let student={
    name:"Rahul",
    course:"JavaScript",
    marks:95
};

for(let key in student){
    console.log(key + " : " + student[key]);
}


// 14. Find largest number

function largest(a,b){

    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

console.log(largest(10,50));


// 15. Mini employee task

let employee={
    name:"Anushree",
    department:"Development",
    salary:50000
};

function bonus(salary,extra){
    return salary+extra;
}

console.log(employee.name);
console.log(employee.department);
console.log(employee.salary);

let finalsalary=bonus(employee.salary,5000);

console.log(finalsalary);