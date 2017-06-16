"use strict";

var input = "hello dood"
function identity(input) {
	return input
}

console.log(identity(input))

// Write a function called `identity(input)` that takes in an argument called input and returns that input.

var min = 10
var max = 55

 function getRandomNumber(min, max) {
 	return Math.floor(Math.random() * (max - min)) + min

 }
 console.log(getRandomNumber(min, max))

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.
var word = "antidisestablishmentarianism"

function first(word) {
	return word.charAt(0)
}

console.log(first(word))

// Write a function called `first(input)` that returns the first character in the provided string.

function last(word) {
	return word.substring(word.length-1)
}

console.log(last(word))

// Write a fuction called `last(input)` that returns the last character of a string

function rest(word) {
	return word.substring(1, word.length-1)
}

console.log(rest(word))

// Write a function called `rest(input)` that returns everything but the first character of a string.
 var word = "hello"
function reverse(word) {
	return word.split("").reverse().join("")
}

console.log(reverse(word))

// Write a function called `reverse(input)` that takes a string and returns it reversed.

var numberInput = prompt("type a number in")
function isNumeric(numberInput) {
	return !isNaN(Number(numberInput)) ? "true" : "false"
}

console.log(isNumeric(numberInput))

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

var string = "omgness"
function count(string) {
	return string.length
}

console.log(" there are " + count(string) + " characters in this string")

// Write a function called `count(input)` that takes in a string and returns the number of characters.
var a = 1;
var b = 2;
function add(a,b) {
	return Number(a) + Number(b)
}

console.log("a + b = " + add(a,b))
var addFunction = add()


// Write a function called `add(a, b)` that returns the sum of a and b

var a = "114";
var b = 25;
function subtract(a,b) {
	return Number(a) - Number(b)
}

console.log("a - b = " + subtract(a,b))

// Write a function called `subtract(a, b)` that return the difference between the two inputs.

var a = "114";
var b = 25;
function multiply(a,b) {
	return Number(a) * Number(b)
}

console.log("a * b = " + multiply(a,b))

// Write multiply(a, b) that returns the product

var a = "114";
var b = 25;
function divide(num,den) {
	return Number(num) / Number(den)
}

console.log("a / b = " + divide(a,b))

// Write a divide(numerator, denominator) function that returns a divided by b

var a = "114";
var b = 25;
function remainder(a,b) {
	return Number(a) % Number(b)
}

console.log("remainder of a / b = " + remainder(a,b))

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

var a = "114";
function square(a) {
	return Number(a) * Number(a)
}

console.log("a squared = " + square(a))
square

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

// # Super Duper Gold-Star Bonus

var a;
var b;

function sumOfSquares(a,b) {
a = square(a)
b = square(b)
return add(a,b)
}

console.log(sumOfSquares(a,b))


// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

var a = 14;
var b = 16;
function doMath(operator, a, b) {
	return operator (a, b);
}

console.log(doMath(add, a, b))

console.log(add) // <---------study this over and over

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on










