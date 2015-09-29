
function googlegetaddress(pos){
// finds address based on current location
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': pos}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        var $location = $('#search')
        $location.attr('value', results[1]["formatted_address"])
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });///Closure for reverse geocoder, closure for section that gets current address

}
