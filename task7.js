// ==========================================
// 1. API Task - User Names Uppercase
// ==========================================

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {

    let upperUsers = data.map((user) => {
      return user.username.toUpperCase();
    });

    console.log("===== USERNAMES IN UPPERCASE =====");
    console.log(upperUsers);

  })
  .catch((error) => {
    console.log("Error :", error);
  });





// ==========================================
// 2. API Task - Expensive Products
// ==========================================

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    let expensiveProducts = products.filter((item) => {
      return item.price > 100;
    });

    console.log("===== EXPENSIVE PRODUCTS =====");
    console.log(expensiveProducts);

  })
  .catch((error) => {
    console.log("Error :", error);
  });





// ==========================================
// 3. Date Concept Task - Digital Clock
// ==========================================

let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

console.log("===== DIGITAL CLOCK =====");
console.log(hours + " : " + minutes + " : " + seconds);





// ==========================================
// 4. String Concept Task - Username Checker
// ==========================================

let userName = "   Naveen Kumar   ";

let cleanName = userName.trim();

let upperName = cleanName.toUpperCase();

let checkName = upperName.includes("KUMAR");

console.log("===== USERNAME CHECKER =====");
console.log("Original Name :", userName);
console.log("Trimmed Name :", cleanName);
console.log("Uppercase Name :", upperName);
console.log("Includes KUMAR :", checkName);





// ==========================================
// 5. Array Concept Task - Student Rank System
// ==========================================

let marks = [450, 300, 700, 200, 900];

let sortedMarks = marks.sort((a, b) => b - a);

let topThree = sortedMarks.slice(0, 3);

console.log("===== STUDENT RANK SYSTEM =====");
console.log("Sorted Marks :", sortedMarks);
console.log("Top 3 Marks :", topThree);




// ==========================================
// END
// ==========================================