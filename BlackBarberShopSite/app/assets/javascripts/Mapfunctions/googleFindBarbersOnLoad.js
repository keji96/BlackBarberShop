// var barbeshopData;
function barberShopGet(click){
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
            //geolocation, begining of code to get currrent lat and longitude
              navigator.geolocation.getCurrentPosition(function(position) {
                var map = new google.maps.Map(document.getElementById('map'), {
                  center: pos,
                  zoom: 15
                });//closure for map variable
                var infoWindow = new google.maps.InfoWindow({map: map});

                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };

                for(i=0; i<data.length; i++){
                  var barberPos = {
                    lat: parseFloat(barbeshopData[i]["latitude"]),
                    lng: parseFloat(barbeshopData[i]["longitude"])
                  }

                  var marker = new google.maps.Marker({
                    position: barberPos,
                    map: map,
                    title: barbeshopData[i]["BarbershopName"]
                  });

                }
                if(click){

                }else{
                  googlegetaddress(pos)// function that calculates current address
                }
               infoWindow.setPosition(pos);
                infoWindow.setContent('Your position.');
                map.setCenter(pos);
              }, function() {

              }); //closure for geolocation

          }//closure for initMap function


    initMap()
       });//end of AJAX call

}
