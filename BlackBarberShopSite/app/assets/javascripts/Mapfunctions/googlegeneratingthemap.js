// var map
//
//
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });//closure for map variable
//
//   //geolocation, begining of code to get currrent lat and longitude
//   navigator.geolocation.getCurrentPosition(function(position) {
//      var barberpos = {}
//
//     //variable to get the current position of the user
//       var userCurrentpos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//
//     //variable to set the marker of the user
//      var marker = new google.maps.Marker({
//         position: userCurrentpos,
//         map: map,
//         title: 'Hello World!',
//
//       });
//
//     map.setCenter(userCurrentpos);
//     }); //closure for geolocation
//
//  }//closure for initMap function
//  var $currentlatlong = $('#currentlatlng')
//  console.log($currentlatlong.val())
