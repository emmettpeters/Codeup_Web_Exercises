(function(){
    "use strict";

   var names = ['steve','chevy','dan','john']
   		// names[0] = steve;
   		// names[1] = chevy;
   		// names[2] = dan;
     //    names[3] = jon;

        console.log(names)

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

		console.log(names.length)


    // TODO: Create a log statement that will log the number of elements in the names array.

    	console.log(names[0])
    	console.log(names[1])
    	console.log(names[2])
    	console.log(names[3])


    // TODO: Create log statements that will print each of the names array elements individually.
do {

	do {    
	    var firstAns = prompt('Give me a plural noun');
	} while(firstAns.length < 2 || firstAns===null)

	do {    
		var secondAns = prompt('Give me a verb ending in "ing"')
	} while(secondAns.length < 2 || secondAns===null)

	do {    
	    var thirdAns = prompt('Give me a noun')
	} while(thirdAns.length < 2 || thirdAns===null)

	do {    
		var fourthAns = prompt('Give me a body part')

		} while(fourthAns.length < 2 || fourthAns===null)


	  	var adLib = [firstAns, secondAns, thirdAns, fourthAns]

	  	console.log(adLib)

	  	console.log('One day some ' +  adLib[0] + '\'s were walking down the street when the started ' +  adLib[1] + 
	  		' because their other '+  adLib[0] + ' friend was hit by a ' + adLib[2] + ' around the ' +   adLib[3]  + ' area..... LOL')

	  	var confirmation = confirm('want to play again?')

  } while (confirmation=true)




})();