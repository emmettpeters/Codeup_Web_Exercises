// BONUS 1: Build a Jack-In-The-Box

// Define an object called jackBox.


var jackBox = {
    songPlayed: [
	    "All a-...",
	    "-round the ...",
	    "mulberry ...",
	    "bush",
	    "The ...",
	    "monkey ...",
	    "chased the ...",
	    "wea-...",
	    "-sel....",
	    "The monkey ...",
	    "stopped to ...",
	    "pull up his ...",
	    "sock, ...",
	    "Pop! ...",
	    "goes the ...",
	    "weasel"
	    ],
    triggered: false,
    intervalId: null,
    play: (function () 
    		{
                if (this.triggered == false) 
                {
                    delay = 500;
                    var i = 0;
                    jackBox.intervalId = setInterval(function ()
                    {
                        console.log(jackBox.songPlayed[i]);
                        i++;
                        if (i==jackBox.songPlayed.length){
                        	clearInterval(jackBox.intervalId);
                        	jackBox.triggered=true;
                        	alert("it just popped off mothafucka!!");
                        }
                 		console.log(i);
                    }, delay);       
               } else {alert("Jack has been popped!!")};
           }),
    reset: function(){
    	this.triggered = false;
    	clearInterval(jackBox.intervalId);
    }
}	

////////////////////////////////////////



// Include properties for...
//     songPlayed - the song played when using it
//      triggered - whether or not the box has been sprung (should be false by default)
//     intervalId - set to null

// Include methods for...
//     play() - once called, if triggered is false, console.log the following lyrics every second...

//         "All a-..."
//         "-round the ..."
//         "mulberry ..."
//         "bush, The ..."
//         "monkey ..."
//         "chased the ..."
//         "wea-..."
//         "-sel...."
//         "The monkey ..."
//         "stopped to ..."
//         "pull up his ..."
//         "sock, ..."
//         "Pop! ..."
//         "goes the ..."
//         "wea-..."
//         "-sel."

//     ...stop the interval, set the triggered property to true, and alert POP!

//     reset() - once called will stope the play() method and set triggered to false


// BONUS 2: Build a Stop Watch

var stopwatch = {
    intervalId: null,
    count: 1,
    start: (function(){
        var interval = 1000;
         stopwatch.intervalId = setInterval(function(){  
           console.log(stopwatch.count++);
           return stopwatch.count;         
        }, interval)
       
    }),
    pause: (function(){
        clearInterval(stopwatch.intervalId)
    }),
    reset: (function(){
        stopwatch.count = 1;
    }),
}

// Define an object called stopWatch.

// Include the following properties...

//     intervalId
//     count

// Include the following methods...

//     start() - starts console logging an increasing count every second
//     pause() - pauses counter
//     reset() - stops counter and resets count to zero (edited)