'use strict';




/*function getCarbon(){
  var myHeaders = new Headers();
  myHeaders.append("auth-token", "");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Cookie", "");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.co2signal.com/v1/latest?lon=14.886&lat=62.0705", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

getCarbon()*/

function initMap() {
  //initialize map on specific destination
  let myLatlng = {lat: -41.269, lng: 173.285};
  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: myLatlng});

      let  t  =  new  Date().getTime();  
      let  waqiMapOverlay  =  new  google.maps.ImageMapType({  
                  getTileUrl:  function(coord,  zoom)  {  
                            return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  "";  
                  },  
                  name:  "Air  Quality",  
        });  
  
      map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
  
      }
      // Create the initial InfoWindow.
  /*let infoWindow = new google.maps.InfoWindow(
      {content: 'Click the map to see how clean your energy is!', position: myLatlng});
  infoWindow.open(map);

  // Configure the click listener.
  map.addListener('click', function(mapsMouseEvent) {
    // Close the current InfoWindow.
    infoWindow.close();

    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
    infoWindow.setContent(mapsMouseEvent.latLng.toString());
    infoWindow.open(map);
  });
}*/

