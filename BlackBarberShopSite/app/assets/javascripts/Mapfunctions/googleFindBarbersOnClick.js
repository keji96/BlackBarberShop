function barberShopClick(click){
  console.log("clicked")
  $.ajax({
       url:'/api/barbershops',
       dataType: 'json',
       data:  {
         search: $('#search').val()
      }

      }).done(function(data){
          function initMap() {

          var barbeshopData = data
          var address = document.getElementById('search').value;
          var geocoder = new google.maps.Geocoder()
            //geolocation, begining of code to get currrent lat and longitude
            geocoder.geocode({'address': address}, function(results, status) {
              var pos = {
                lat: 43.7878,
                lng: -73.768
              };
              var resultsMap = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 15
              })
              var infoWindow = new google.maps.InfoWindow({map: resultsMap});

              if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);
                for(i=0; i<data.length; i++){
                  var barberPos = {
                    lat: parseFloat(barbeshopData[i]["latitude"]),
                    lng: parseFloat(barbeshopData[i]["longitude"])
                  }

                  var marker = new google.maps.Marker({
                    position: barberPos,
                    map: resultsMap,
                    title: barbeshopData[i]["BarbershopName"]
                  });

                }
                console.log(results[0].geometry.location)
                infoWindow.setPosition(results[0].geometry.location);
                 infoWindow.setContent('Your position.');
                // var marker = new google.maps.Marker({
                //   map: resultsMap,
                //   position: results[0].geometry.location
                // });
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });

          }//closure for initMap function


    initMap()
       });//end of AJAX call

}
