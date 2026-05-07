// 🟢 Section 1: Variables (1–8)

// 1
var a = 10;
a = 15;
console.log(a); // 15

// 2
let b = 20;
b = 30;
console.log(b); // 30

// 3
const c = 50;
console.log(c); // 50

// 4
const x = 10;
// x = 20; // Error if uncommented

// 5
var p = 5;
var p = 10;
console.log(p); // 10

// 6
let q = 25;
q = q + 10;
console.log(q); // 35

// 7
const r = 7;
console.log(r + 3); // 10

// 8
let a2 = 10;
console.log(a2);


// 🟢 Section 2: Console Methods (9–12)

// 9
console.log("Normal Output");

// 10
console.warn("Warning Message");

// 11
console.error("Error Message");

// 12
console.clear();


// 🟢 Section 3: Data Types (13–18)

// 13
let aa = "hello";
console.log(typeof aa); // string

// 14
let bb = 100;
console.log(typeof bb); // number

// 15
let cc = false;
console.log(typeof cc); // boolean

// 16
let d;
console.log(d); // undefined

// 17
console.log(typeof null); // object

// 18
console.log(Number("25"));
console.log(parseInt("25"));


// 🟢 Section 4: Arrays (19–24)

// 19
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// 20
let arr1 = ["a","b","c"];
console.log(arr1[1]); // b

// 21
let arr2 = ["x","y","z"];
console.log(arr2[arr2.length-1]); // z

// 22
console.log(arr2[0]); // first element

// 23
let arr3 = ["apple","banana"];
console.log(arr3.length); // 2

// 24
arr3.push("mango");
console.log(arr3);


// 🟢 Section 5: Objects (25–28)

// 25
let person = {
  name: "Anushree",
  age: 21
};
console.log(person);

// 26
let obj1 = {name:"Naveen"};
console.log(obj1.name); // Naveen

// 27
let obj2 = {
  fruits: ["apple","banana"]
};
console.log(obj2.fruits[1]); // banana

// 28
console.log(obj2.fruits[obj2.fruits.length - 1]);


// 🟢 Section 6: Arithmetic Operators (29–32)

// 29
console.log(5 + 3); // 8

// 30
console.log(10 % 3); // 1

// 31
console.log(2 ** 3); // 8

// 32
console.log(10 / 2); // 5


// 🟢 Section 7: Increment / Decrement (33–36)

// 33
let a1 = 5;
a1++;
console.log(a1); // 6

// 34
let b1 = 5;
let c1 = b1++;
console.log(b1, c1); // 6 5

// 35
let x1 = 5;
let y1 = ++x1;
console.log(x1, y1); // 6 6

// 36
let m = 3;
let n = m--;
console.log(m, n); // 2 3


// 🟢 Section 8: Comparison & Logical (37–39)

// 37
console.log(5 == "5"); // true

// 38
console.log(5 === "5"); // false

// 39
console.log(true && false || true); // true


// 🟢 Section 9: Ternary (40)

// 40
5 > 3 ? console.log("Yes") : console.log("No");