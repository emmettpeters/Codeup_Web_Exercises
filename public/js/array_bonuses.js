(function(){
    "use strict";

// FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS 
// FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS FIRST BONUS 

//Arrays Intro Optional BONUS exercise...
//Create a simple Mab Libs game which prompts the user to provide parts of speech to complete missing words or phrases 
//for 3 - 4 silly sentences. Add each word or phrase from each prompt to a single array. Once a user has entered all 
//the Mad Libs, alert the results. Use a confirm to play again or not. Validate user input to prevent blank entries.
//At the very least, wrap your program in an IIFE function. Consider organizing your code into smaller functions.

// do {

// 	do {    
// 	    var firstAns = prompt('Give me a plural noun');
// 	} while(firstAns.length < 2 || firstAns===null)

// 	do {    
// 		var secondAns = prompt('Give me a verb ending in "ing"')
// 	} while(secondAns.length < 2 || secondAns===null)

// 	do {    
// 	    var thirdAns = prompt('Give me a noun')
// 	} while(thirdAns.length < 2 || thirdAns===null)

// 	do {    
// 		var fourthAns = prompt('Give me a body part')

// 		} while(fourthAns.length < 2 || fourthAns===null)


// 	  	var adLib = [firstAns, secondAns, thirdAns, fourthAns]

// 	  	console.log(adLib)

// 	  	console.log('One day some ' +  adLib[0] + '\'s were walking down the street when the started ' +  adLib[1] + 
// 	  		' because their other '+  adLib[0] + ' friend was hit by a ' + adLib[2] + ' around the ' +   adLib[3]  + ' area..... LOL')

// 	  	var confirmation = confirm('want to play again?')

//   } while (confirmation=true)

//SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS 
//SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS SECOND BONUS 

//Arrays Iteration Optional BONUS exercise...
//Create a temperature conversion application using the user interaction methods (alert, confirm, prompt) to take in a list 
//of temperatures, ask the user which conversion to make (Fahrenheit to Celsius or vice versa) return to the user a list 
//of converted temperatures.

//Extra bonus: add Kelvin.


var temps = []

do {

	var tempToAdd = prompt('Temperature to convert = ');

	temps.push(tempToAdd)

	console.log(temps)

	var anotherTemp = confirm("Would you like to add another temp?")

} while ( anotherTemp == true )

do {

	var conversionType = prompt("What type of conversion are we going to do today? \
		(ONLY TYPE IN THE NUMBER OF THE OPTION YOU WISH TO SELECT)\
		1. Fahrenheit to Celsius \
		2. Fahrenheit to Kelvin \
		3. Celsius to Fahrenheit \
		4. Celsius to Kelvin \
		5. Kelvin to Fahrenheit \
		6. Kelvin to Celsuis");

		switch (conversionType) {
		case "1":
		temps.forEach(function(element) {
			alert(element + " degrees Fahrenheit is " + (element-32)*5/9 + " degrees Celsius");
		})
		break;
		case "2":
		temps.forEach(function(element) {
			alert(element + " degrees Fahrenheit is " + ((element-32)*5/9)+273 + " degrees Kelvin");
		})
		break;
		case "3":
		temps.forEach(function(element) {
			alert(element + " degrees Celsius is " + (element*1.8)+32 + " degrees Fahrenheit");
		})
		break;
		case "4":
		temps.forEach(function(element) {
			alert(element + " degrees Celsius is " + (element)+273 + " degrees Kelvin");
		})
		break;
		case "5":
		temps.forEach(function(element) {
			alert(element + " degrees Kelvin is " + 1.8*(element-273)+32 + " degrees Fahrenheit");
		})
		break;
		case "6":
		temps.forEach(function(element) {
			alert(element + " degrees Kelvin is " + (element)-273 + " degrees Celsius");
		})
		break;
		default:
		console.log('You are terrible at following directions');
		break;
	}

		var again = confirm("do more calculations on the same temperatures?")
} while (again == true)




//THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS 
//THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS THIRD BONUS 

//Array Manipulation Optional BONUS Exercise...

//Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt
// the user to choose from a menu with the following actions: 
        //1) Add a Student 
        //2) Delete a Student 
        //3) view all students in alphabetical order 
        //4) view all students in reverse alphabetical


// var students = []

// do {

// 	var firstP = prompt("type in 'add' or 'delete' to edit the student roster. Type in 'alpha' or 'reverse' to view the roster in alphabetical or reverse order.")

// 	switch (firstP) {
// 		case "add":
// 			var nameAdd = prompt("what is the name of the student to be added?");
// 			students.push(nameAdd);
// 			console.log(students);
// 		break;
// 		case "delete":
// 			var nameDel = prompt("what is the name of the student to be deleted?");
// 			students.pop(nameDel);
// 			console.log(students);
// 		break;
// 		case "alpha":
// 			console.log(students.sort());
// 		break;
// 		case "reverse":
// 			console.log(students.reverse());
// 		break;
// 		default:
// 			alert('You are terrible at directions dood or doodette');
// 		break;
// 	} 

// 	var moretime = confirm("Do you need to edit or view the list some more?");

// } while (moretime == true);













})();