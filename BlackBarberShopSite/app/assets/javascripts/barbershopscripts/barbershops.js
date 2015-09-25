// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log("barbershop.js")

$.ajax({
    url:'/api/barbershops',
    dataType: 'json',
   }).done(function(data){

      var baddress = data[0].BarbershopFullAddress

      
      // var geocoder = new google.maps.Geocoder()
      //  geocoder.geocode({'address': baddress}, function(results, status) {
      //    console.log(results)
      //  })

   });
