"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

switch (color) {
    case "red": 
    	alert("so you chose " + color + " eh??")
        console.log("I red you like a book :)");
        break;
    case "orange": 
    	alert("so you chose " + color + " eh??")
        console.log("orange you going to say banana again?");
        break;
    case "yellow": 
    	alert("so you chose " + color + " eh??")
        console.log("yellow as snow");
        break;
    case "green": 
    	alert("so you chose " + color + " eh??")
        console.log("green as grass");
        break;
    case "blue": 
    	alert("so you chose " + color + " eh??")
        console.log("What a coincidence, blue is my favorite too!");
        break;
    default: 
    	alert("so you chose " + color + " eh??")
        console.log("what the hell color is that?");
        break;
}

// if (color == favorite) {
// 	alert("same favorite color computer, thats downnnn");
// 	console.log("Same favorite color");
// } else {
// 	alert("meh... that color is alright but not my favorite");
// 	console.log("Not the same favorite color");
// }

	(color == favorite) ? alert("My fav too!!") : alert("Meh thats not my favorite color...");






