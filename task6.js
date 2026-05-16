// ==========================================
// 5 Real-Time JavaScript Questions
// ==========================================


// 1. Student Attendance System

let presentStudents = ["Anushree", "Rahul", "Priya"]
let absentStudents = ["Karan", "Neha"]

let finalStudents = [...presentStudents, ...absentStudents, "Amit"]

console.log("Final Students List")
console.log(finalStudents)


// 2. E-Commerce Cart

let mobileDetails = {
    brand : "Samsung",
    price : 25000
}

let chargerDetails = {
    type : "Fast Charger",
    warranty : "1 Year"
}

let finalCart = {
    ...mobileDetails,
    ...chargerDetails,
    deliveryDate : "20 May 2026"
}

console.log("Final Cart Details")
console.log(finalCart)


// 3. Food Delivery App

function orderFood(...items){

    console.log("Total items ordered :", items.length)
    console.log("First item :", items[0])
    console.log("Last item :", items[items.length - 1])

}

orderFood("Pizza","Burger","Pasta","Cold Drink")


// 4. Employee Salary Filter

let employees = [
    {name : "Rohit", salary : 45000},
    {name : "Sneha", salary : 60000},
    {name : "Aman", salary : 75000},
    {name : "Pooja", salary : 40000}
]

let filteredEmployees = employees.filter(emp => emp.salary > 50000)

console.log("Employees having salary above 50000")
console.log(filteredEmployees)


// 5. Online Game Score Board

let scores = [100, 200, 150, 250, 300]

let totalScore = scores.reduce((total, score) => total + score)

console.log("Total Score :", totalScore)