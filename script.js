let num1 = 3;
let num2 = 5;
let sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum +"<br>");




let num3 = 10;
let num4 = 2;

document.write("Sum: " + (num3 + num4) + "<br>");
document.write("Subtraction: " + (num3 - num4) + "<br>");
document.write("Multiplication: " + (num3 * num4) + "<br>");
document.write("Division: " + (num3 / num4) + "<br>");
document.write("Modulus: " + (num3 % num4) + "<br>");  
let num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num += 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

document.write("The remainder is: " + (num % 3) + "<br>");

let ticketPrice = 600;
let totalCost1 = ticketPrice * 5;

document.write("Total cost of buying 5 tickets to a movie is " + totalCost1 + " PKR." +"<br>");
 

var number = 4; 

document.write("<h3>Table of " + number + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>" +"<br>");
}

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitInput = 70;
var celsiusConverted = (fahrenheitInput - 32) * 5/9;

document.write(fahrenheitInput + "°F is " + celsiusConverted + "°C");

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);

var totalMarks = 980;
var obtainedMarks = 804;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h2>Student Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");
 

let myNumber = 10; 
myNumber = (myNumber + 5) * 10 / 2; 
console.log(myNumber); 



let currentYear = parseInt(prompt("Enter the current year:"));
let birthYear = parseInt(prompt("Enter your birth year:"));

let age1 = currentYear - birthYear;
let age2 = age1 - 1;



let radius = parseFloat(prompt("Enter the radius of the circle:"));
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;

document.write(`
  Radius of a circle: ${radius} <br>
  The circumference is: ${circumference.toFixed(2)} <br>
  The area is: ${area.toFixed(2)}
`);

let snack = prompt("Enter your favorite snack:");
let currentAge = parseInt(prompt("Enter your current age:"));
let maxAge = parseInt(prompt("Enter your expected max age:"));
let perDay = parseInt(prompt("How many do you eat per day?"));

let totalNeeded = (maxAge - currentAge) * 365 * perDay;

var a = 10;
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

var userName = prompt("Enter your name:");
alert("Hello, " + userName + "! Welcome.");

var num7 = prompt("Enter a number for multiplication table:", 5);
num7 = num7 ? parseInt(num7) : 5;

document.write("<h3>Multiplication Table of " + num7 + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(num7 + " x " + i + " = " + (num7 * i) + "<br>");
}

var num8 = prompt("Enter a number for multiplication table:", 5);
num8 = num8 ? parseInt(num8) : 5;

document.write("<h3>Multiplication Table of " + num8 + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(num8 + " x " + i + " = " + (num8 * i) + "<br>");
}


var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");


var totalMarks = 100;


var marks1 = parseInt(prompt("Enter obtained marks for " + subject1));
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3));


var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (3 * totalMarks)) * 100;

document.write("<h3>Subject Marks</h3>");
document.write(subject1 + ": " + marks1 + "/" + totalMarks + "<br>");
document.write(subject2 + ": " + marks2 + "/" + totalMarks + "<br>");
document.write(subject3 + ": " + marks3 + "/" + totalMarks + "<br>");
document.write("Total Marks: " + totalObtained + "/300<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

var snac9k = prompt("Enter your favorite snack:");
var currentAge9 = parseInt(prompt("Enter your current age:"));
var maxAge9 = parseInt(prompt("Enter your estimated maximum age:"));
var amountPerDay = parseInt(prompt("Enter estimated amount per day:"));


var totalNeeded9 = (maxAge9 - currentAge9) * 365 * amountPerDay;


document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("Favorite Snack: " + snac9k + "<br>");
document.write("Current Age: " + currentAge9 + "<br>");
document.write("Estimated Maximum Age: " + maxAge9 + "<br>");
document.write("Amount of snacks per day: " + amountPerDay9 + "<br>");
document.write("You will need " + totalNeeded9 + " " + snac9k + " to last you until the ripe old age of " + maxAge9);