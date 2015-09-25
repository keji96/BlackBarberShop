function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: -34.397, lng: 150.644},
    zoom: 10
  });//closure for map variable

  //geolocation, begining of code to get currrent lat and longitude
  //if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
     var barberpos = {}

      //variable to get the current position of the user
      var userCurrentpos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      //variable to set the marker of the use
      
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

           for(i=0; i<10; i++){
             var barlat = Number(data[i].latitude);
             var barlong = Number(data[i].longitude);
             barberpos = {
               lat: barlat,
               lng: barlong
             };
             var barberMarker = new google.maps.Marker({
               position: barberpos,
               map: map,
               title: data[i].BarbershopName,
               id: data[i].id
             });
           }

           barberMarker.addListener('click', function() {
                console.log("test")
                map.setZoom(8);
                map.setCenter(marker.getPosition());
            });

            // var geocoder = new google.maps.Geocoder()
            //  geocoder.geocode({'address': baddress}, function(results, status) {
            //    console.log(results)
            //  })

        });//closure for Ajax call to the database

    googlegetaddress(userCurrentpos)// function that calculates current address and puts it in box
    map.setCenter(userCurrentpos);
    }, function() {
     handleLocationError(true, infoWindow, map.getCenter());
    }); //closure for geolocation


}//closure for initMap function

function handleLocationError(browserHasGeolocation, infoWindow, pos) {

}
