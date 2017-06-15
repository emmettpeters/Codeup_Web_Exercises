"use strict";

// // Don't change the next two lines!
// // This creates two variables:
// //     one with the colors of the rainbow, and another with a single randome
// //     another with a single random color value
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];

// switch (color) {
//     // TODO: create a case statement that will handle every color except indigo and violet
//     // TODO: when a color is encountered log a message that tells the color, and an object of that color
//     //       example: Blue is the color of the sky.

//     // TODO: create a default case that will catch indigo and violet
//     // TODO: for the default case, log: I do not know anything by that color.
// }

// if (color == "red") {
// 	console.log("red is the color of unoxygenated blood")
// } else if (color == "orange" ) {
// 	console.log("orange is the color of oranges")
// } else if (color == "yellow" ) {
// 	console.log("yellow is the color of dirty snow")
// } else if (color == "green" ) {
// 	console.log("green is the color of the grass on the other side of the fence")
// } else if (color == "blue" ) {
// 	console.log("blue is the color of Eifel 65")
// } else {
// 	console.log("I do not know what "+ color + " is. Sorry Breh")
// }



// Begees - Stayin alive in Javascript
alert("Hello there")
var womansManWalk = confirm("Can you tell by the way i use my walk that im a woman's man?")

if (womansManWalk) {
	console.log("User is watching you walk around too much.... may be cause for concern");
	alert("Either way, I have no time to talk.")
} else {
	console.log("User isn't paying enough attention to you");
	alert("Either way, I have no time to talk.")
}

var loudMusic = confirm("Ever listen to loud music?")
var warmWomen = confirm("Are women warm?")

if (loudMusic && warmWomen) {
	console.log("User is hella cool");
	alert("I've been kicked around since I was born :(")
} else if (loudMusic && !warmWomen) {
	console.log("user is sensitive, no more jokes jackass");
	alert("Ok, how about warm men?")
} else {
	console.log("User is an old person");
	alert("Ive been kicked around since I was born :(")
}

var alright = confirm("And now is that alright?")
var okay = confirm("Is that Okay??")

if (alright || okay) {
	console.log("User this thats alright or okay");
	alert("You may look the other way")
} else { 
	console.log("User has some real problems with this")
	alert("THEN CLOSE THE TAB.")
}

var tryToUnderstand = confirm("Will you help me try to understand the \ New York Times' effect on man?")

if (tryToUnderstand) {
	console.log("User is gonna help you understand");
	alert("Sweet thanks, just a few more questions.")

//Chorus

	var brother = confirm("Are you a brother?")
	var mother = confirm("Are you a mother?")

	if (brother || mother) {
		console.log("User is still alive");
		alert("well you're staying alive, staying alive")
	}

	var feelCityBreakin = confirm("Do you feel the city breakin'?")
	var everybodyShakin = confirm("Is everybody shakin'?")

	if (feelCityBreakin && everybodyShakin) {
		console.log("And we're staying alive, staying alive")
		alert("USER and YOU are staying live, staying alive")
	} else {
		console.log("You died.")
		alert("You did not stay alive")
	}

	alert("Ah ah ah ah YOU stayed alive, YOU stayed alive!");
	alert("Ah ah ah ah YOU stayed ALIIIIIIIIII IIIIIII IIIIIIIIIIIIII IVVVEEEEE, YOU stayed alive!!!!!")

//Chorus End

	var getLow = confirm("Well now can I low?");
	var getHigh = confirm("Can I high?")

	if (!(getLow || getHigh)) {
		console.log("Youre gonna really have to try");
		alert("Im really gonna try.")
	} else { 
		console.log("you can get either low or high so its cool");
		alert("Then, I dont have to try!")
	}

	var wingsOfHeaven = confirm("Do you see the wings of heaven on my shoes?");
	

	if (wingsOfHeaven) {
		console.log("Its cuz Im a dancin man and I just can't lose");
		alert("User is checkin out your shoes.")
	} else { 
		console.log("Then look harder, theyre not hard to see");
		alert("User cant see your heaven shoes...")
	}

	var alright2 = confirm("Do you know that its alright?")
	var okay2 = confirm("Do you know its Okay??")

	if (alright || okay) {
		console.log("User knows alright or okay");
		alert("Sweet, Ill live to see another day!")
	} else { 
		console.log("User has some real problems with this")
		alert("THEN CLOSE THE TAB.")
	}

	var tryToUnderstand = confirm("Will you help me try to understand the \ New York Times' effect on man?")

	if (tryToUnderstand) {
		console.log("User is gonna help you understand");
		alert("Sweet thanks, just a few more questions.")
	} else {
		console.log("User is an A-Hole");
		alert("Well fine, see if I help you later")
	}

// Chorus

	var brother = confirm("Are you a brother?")
	var mother = confirm("Are you a mother?")

	if (brother || mother) {
		console.log("User is still alive");
		alert("well you're staying alive, staying alive")
	}

	var feelCityBreakin = confirm("Do you feel the city breakin'?")
	var everybodyShakin = confirm("Is everybody shakin'?")

	if (feelCityBreakin && everybodyShakin) {
		console.log("And we're staying alive, staying alive")
		alert("USER and YOU are staying live, staying alive")
	} else {
		console.log("You died.")
		alert("You did not stay alive")
	}

	alert("Ah ah ah ah YOU stayed alive, YOU stayed alive!");
	alert("Ah ah ah ah YOU stayed ALIIIIIIIIII IIIIIII IIIIIIIIIIIIII IVVVEEEEE, YOU stayed alive!!!!!")

// Chorus End

	alert("life goin' nowhere, somebody help me!!");
	var userHelp = prompt("Will some body help me?  (yeah or no)")

	switch (userHelp) {
			case "yeah":
				alert("Then I'm staying ALIIIIVE!");
				console.log("User has kept you alive through most of the song")
				break;
			case "No":
				alert("Then I'm not staying ALIIIIVE!");
				console.log("User has killed you")
				break;
			default:
				console.log("User has killed you");
				alert("Learn to read instructions");
				break;
	}

		switch (userHelp) {
			case "yeah":
				alert("Then I'm staying ALIIIIVE!");
				console.log("User has kept you alive through most of the song")
				break;
			case "No":
				alert("Then I'm not staying ALIIIIVE!");
				console.log("User has killed you")
				break;
			default:
				console.log("User has killed you");
				alert("Learn to read instructions");
				break;
	}

		switch (userHelp) {
			case "yeah":
				alert("Then I'm staying ALIIIIVE!");
				console.log("User has kept you alive through the whole song")
				break;
			case "No":
				alert("Then I'm not staying ALIIIIVE!");
				console.log("User has killed you")
				break;
			default:
				alert("Learn to read instructions");
				console.log("User has killed you");
				break;
	}

} else {
	console.log("User is kind of an A-hole");
	alert("Well fine, I didnt want your help anyway")
}

//ternary remake of above (not working)
//  (feelCityBreakin && everybodyShakin) ? alert("And we're staying live, staying alive") : alert("You did not stay alive");








