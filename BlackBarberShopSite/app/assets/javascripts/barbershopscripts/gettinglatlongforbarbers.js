console.log("bbs lat long")

var $submit = $('#test');
var $city = $('#city');
var $street = $('#street');
var $state = $('#state');
var $zip = $('#zip');
var $lat = $('#lat');
var $long = $('#long');
var address;


$submit.bind('click', function() {
  alert('User clicked on "foo."');
});

// $submit.click(function() {
// console.log('clicked')
//   address = $street.val() + " " + $city.val() + " " + $state.val() + " " + $zip.val()
// console.log(address)
//
//
// });
