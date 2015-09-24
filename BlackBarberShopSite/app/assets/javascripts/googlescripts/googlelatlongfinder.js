
function googlatlong(address){
 var geocoder = new google.maps.Geocoder()
  geocoder.geocode({'address': address}, function(results, status) {
  console.log(results[0].geometry.location)
  });

}
