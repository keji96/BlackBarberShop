function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: -34.397, lng: 150.644},
    zoom: 1
  });//closure for map variable

  //geolocation, begining of code to get currrent lat and longitude

  navigator.geolocation.getCurrentPosition(function(position) {
     var barberpos = {}

      //variable to get the current position of the user
      var userCurrentpos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    //variable to set the marker of the user
     var marker = new google.maps.Marker({
        position: userCurrentpos,
        map: map,
        title: 'Hello World!',

      });

    //Ajax call to the BlackBarbershop API to get Barber information
    $.ajax({
      url:'/api/barbershops',
      dataType: 'json',
      }).done(function(data){

           for(i=0; i<data.length; i++){
             var barlat = Number(data[i].latitude);
             var barlong = Number(data[i].longitude);
             barberpos = {
               lat: barlat,
               lng: barlong
             };
             var distanceInMiles = distancecalc(userCurrentpos, barberpos)

             if(distanceInMiles < 5){
                var barberMarker = new google.maps.Marker({
                  position: barberpos,
                  map: map,
                  title: data[i].BarbershopName,
                  id: data[i].id
                });
                barberMarker.addListener('click', function() {
                  console.log(barberMarker.title)
                });
              }else{

              }
           }//end of for loop to put barbershops on the map by location
        });//closure for Ajax call to the database

    googlegetaddress(userCurrentpos)// function that calculates current address and puts it in box
    map.setCenter(userCurrentpos);
    }, function() {
     handleLocationError(true, infoWindow, map.getCenter());
    }); //closure for geolocation


}//closure for initMap function

function handleLocationError(browserHasGeolocation, infoWindow, pos) {

}
