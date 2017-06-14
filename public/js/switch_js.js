"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

if (color == "red") {
	console.log("red is the color of unoxygenated blood")
} else if (color == "orange" ) {
	console.log("orange is the color of oranges")
} else if (color == "yellow" ) {
	console.log("yellow is the color of dirty snow")
} else if (color == "green" ) {
	console.log("green is the color of the grass on the other side of the fence")
} else if (color == "blue" ) {
	console.log("blue is the color of Eifel 65")
} else {
	console.log("I do not know what "+ color + " is. Sorry Breh")
}

// Begees - Stayin alive in Javascript

var brother = confirm("Are you a brother?")
var mother = confirm("Are you a mother?")

if (brother || mother) {
	console.log("You're staying alive, staying alive");
	alert("You're staying alive, staying alive")
}

var feelCityBreakin = confirm("Do you feel the city breakin'?")
var everybodyShakin = confirm("Is everybody shakin'?")

// if (feelCityBreakin && everybodyShakin) {
// 	console.log("And we're staying alive, staying alive")
// 	alert("And we're staying live, staying alive")
// } else {
// 	console.log("You died.")
// 	alert("You did not stay alive")
// }

(feelCityBreakin && everybodyShakin) ? alert("And we're staying live, staying alive") : alert("You did not stay alive")
