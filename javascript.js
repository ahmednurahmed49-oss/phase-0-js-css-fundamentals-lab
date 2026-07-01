// // Example 1: Grading System
// let score = 82;

// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 80) {
//     console.log("Grade B");
// } else if (score >= 70) {
//     console.log("Grade C");
// } else if (score >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Grade F");
// }


// // Example 2: Login Verification
// let username = "timothy";
// let password = "12345";

// if (username === "" || password === "") {
//     console.log("Please fill in all fields");
// } else if (username !== "timothy") {
//     console.log("Username not found");
// } else if (password !== "password123") {
//     console.log("Incorrect password");
// } else {
//     console.log("Login successful");
// }


// // Example 3: Movie Ticket Pricing
// let customerAge = 65;

// if (customerAge < 5) {
//     console.log("Free ticket");
// } else if (customerAge < 18) {
//     console.log("Child ticket: $5");
// } else if (customerAge < 60) {
//     console.log("Adult ticket: $10");
// } else {
//     console.log("Senior ticket: $7");
// }


// // Example 4: Weather Advice
// let temperature = 12;

// if (temperature >= 30) {
//     console.log("Wear light clothes");
// } else if (temperature >= 20) {
//     console.log("Nice weather");
// } else if (temperature >= 10) {
//     console.log("Bring a jacket");
// } else {
//     console.log("Wear a heavy coat");
// }


// // Example 5: E-commerce Discount
// let purchaseAmount = 7500;

// if (purchaseAmount >= 10000) {
//     console.log("25% discount");
// } else if (purchaseAmount >= 5000) {
//     console.log("15% discount");
// } else if (purchaseAmount >= 1000) {
//     console.log("5% discount");
// } else {
//     console.log("No discount");
// }


// // Example 6: Driving Eligibility
// let driverAge = 22;
// let hasLicense = true;

// if (driverAge < 18) {
//     console.log("Too young to drive");
// } else if (driverAge >= 18 && !hasLicense) {
//     console.log("Get a driver's license first");
// } else {
//     console.log("You can drive");
// }



// // While$for loops

// // 1.Count Down

// let number = 5;

// while (number > 0) {
//     console.log(number);
//     number--;
// }

// console.log("Blast off!");


// // 2.sum
// let i = 1;
// let sum = 0;

// while (i <= 5) {
//     sum += i;
//     i++;
// }

// console.log("Sum =", sum);



// note:To insert variables into a string, use backticks ( ` ) instead of quotes:

// let myNumber = 0;

// while(myNumber <=0.8){
//     myNumber = Math.random();
//    console.log(`current random number: ${myNumber}`);
// }


// For loop: is used when you know how many times you want to repeat something.
// in an array start count at zero. An array uses square brackets
// For a for loop to run it must have 3 parts :Initialization,Condition $ update
// Scope:means where a variable can be accessed in your code examples like i.
//  i only exists inside the for loop.Once the loop ends, i is gone.
// This is called block Scope
// The loop uses i as the index to visit each item in the array one by one.

let fruits = ["Mango", "Pineapple", "Kiwi" ,"Banana" ,"Ovacado" ,];

for(let i = 0; i < fruits.length; i++) {
    console.log(`fruit at index ${i} is: ${fruits[i]}`);
}