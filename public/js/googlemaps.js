"use strict";
(function() {


  function doSomeThingWithGeocodingResults(results, status) {
    // Check for a successful result
    if (status == google.maps.GeocoderStatus.OK) {

      console.log('Geocoding finished!');
      console.log(results, status);

      var ul = document.getElementById('results');

      // create a marker and list item for every result
      results.forEach(function(result) {
        // get the lat and long for our marker based off of the result
        var position = result.geometry.location;

        // Add the marker to our existing map
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });

        var infowindow = new google.maps.InfoWindow({
          content: result.formatted_address
        });
        // references the map we created on page load, and the marker created
        // above
        infowindow.open(map, marker);

        // create a list item and append it to the results ul
        var listItem = '<li>' + result.formatted_address + '</li>';
        ul.innerHTML += listItem;
      });

      // Recenter the map over the address
      map.setCenter(results[0].geometry.location);

    } else {
      // Show an error message with the status if our request fails
      alert("Geocoding was not successful - STATUS: " + status);
    }
  }

  // this needs to exist on our html page and have a height and a width
  var mapElement = document.getElementById('map');

  var geocoderOptions = {
    address: prompt('What location would you like to search for?'),
  };

  var mapOptions = {
    // Set the zoom level
     zoom: parseInt(prompt("what zoom level do you want?")),

    // This sets the center of the map at our location
    center: {
      lat:  29.4984358,
      lng: -98.4761033
    },
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var map = new google.maps.Map(mapElement, mapOptions);

  var geocoder = new google.maps.Geocoder();



  console.log('Before geocoding.');

  // referencing a function defined ahead of time
  geocoder.geocode(geocoderOptions, doSomeThingWithGeocodingResults);

  var paesanos = {lat:29.4984355,lng:-98.4761033};

  var marker2 = new google.maps.Marker({
    position:paesanos,
    map:map,
    animation: google.maps.Animation.DROP,

  })

  marker2.addEventListener("click",function(){
    var infowindow2 = new google.map.InfoWindow2({
      content: "This is my favorite restaurant Paesanos"
    })
  infowindow2.open(map,marker2);
  })

  console.log('This code comes after the geocoding request!');

})();