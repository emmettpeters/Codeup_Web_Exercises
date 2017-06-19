(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|")
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
     var planetsStringTwo = planetsArray.join("<br>")
     console.log(planetsStringTwo)

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

   planetsString = "<ul><li>";

   console.log(planetsString)

   planetsString += planetsArray.join("<li></li>");

   console.log(planetsString)

   planetsString += "</li></ul>"

   console.log(planetsString)

   document.getElementsByTagName("body")[0].innerHtml = planetsString

})();