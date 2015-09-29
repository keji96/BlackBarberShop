

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 10
  });//closure for map variable
  var infoWindow = new google.maps.InfoWindow({map: map});

  //geolocation, begining of code to get currrent lat and longitude
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

        googlegetaddress(pos)// function that calculates current address

     infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    }); //closure for geolocation

  } //closure of if statement for getting current location
  else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}//closure for initMap function

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}//closure for initMap function
 // var $currentlatlong = $('#currentlatlng')
 // console.log($currentlatlong.val())
 $( document ).ready(function() {
 //
   initMap()


 });
