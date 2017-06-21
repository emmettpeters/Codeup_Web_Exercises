// BONUS 1: Build a Jack-In-The-Box

// Define an object called jackBox.


var jackBox = {
    songPlayed: ["All a-...","-round the ...","mulberry ...","bush, The ...","monkey ...","chased the ...","wea-...","-sel....","The monkey ...","stopped to ...","pull up his ...","sock, ...","Pop! ...","goes the ...","weasel"],
    triggered: false,
    intervalId: null,
    play: function (){
        this.songPlayed.forEach(){
            console.log(songPlayed)
        }
    }
}

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

// Define an object called stopWatch.

// Include the following properties...

//     intervalId
//     count

// Include the following methods...

//     start() - starts console logging an increasing count every second
//     pause() - pauses counter
//     reset() - stops counter and resets count to zero (edited)