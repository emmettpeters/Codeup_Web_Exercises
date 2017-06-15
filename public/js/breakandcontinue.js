var oddNum = prompt("type in an odd number that is less than 50" )
console.log("Your number to skip is " + oddNum)

for (var i = 1; i < 50; i++) {
	while ((oddNum % 2 == 0) || (isNaN(oddNum))) {
	oddNum = prompt("thats not an odd number")
	}

	if (oddNum == i) {
		console.log("whoah skipping " + i)
		continue;
    }

	if (i % 2 == 0) {
       	continue;
	}

    console.log('Here is a lovely odd number: ' + i);
}