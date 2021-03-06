//creates vars to use
var map;

// Creates the map
//ATX 30.2672° N, 97.7431° W
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.2672, lng: -97.7431},
    zoom: 13
  });

  setMarkers(map);
  console.log(setMarkers());

  var rectangle = new google.maps.Rectangle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      bounds: {
       north: 30.243182,
       south: 30.241473,
       east: -97.757031,
       west: -97.758467
      }
    });

    rectangle.setMap(map);

    rectangle.addListener('onClick', handleRectClick());
    // Not defined.
    // infoWindow = new google.maps.InfoWindow();
} // end of initMap(fx)

function handleRectClick(){
  infoWindow.setContent("I was clicked!!");
  console.log("was clicked")
};

var placemarks = [

  {"address":"2708 S 5th St, Austin, TX 78704, USA","coordinates":[-97.7664, 30.23933, 0],"engineType":"CE","exterior":"GOOD","fuel":30,"interior":"GOOD","name":"JHD 8522","smartPhoneRequired":true,"vin":"WDCTG4GB4HJ337195"},

  {"address":"2604-2698 Jarratt Ave, Austin, TX 78703, USA","coordinates":[-97.75569, 30.2966, 0],"engineType":"CE","exterior":"GOOD","fuel":78,"interior":"GOOD","name":"FHB 1550","smartPhoneRequired":false,"vin":"WMEEJ3BA0FK801746"},

  {"address":"2001-2099 S Congress Ave, Austin, TX 78704, USA","coordinates":[-97.75169, 30.24394, 0],"engineType":"CE","exterior":"GOOD","fuel":87,"interior":"GOOD","name":"FBV 4428","smartPhoneRequired":false,"vin":"WMEEJ3BA3FK799491"}
  ]

  function setMarkers(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
          src: "../img/dropPin.png", //'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [],
          type: 'poly'
        };
        for (var i = 0; i < placemarks.length; i++) {
          var car = placemarks[i];
          var marker = new google.maps.Marker({
            position: {lat: car.coordinates[1], lng: car.coordinates[0]},
            map: map,
            icon: image,
            shape: shape,
            title: car[0],
            zIndex: car[3]
          });
          console.log();
        }
      }
