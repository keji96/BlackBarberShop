// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//console.log("barbershop.js")
//
$( document ).ready(function() {
//
  $( "#target" ).click(function(e) {
    var  clicked = e.type
    getBarbers()
    barberShopClick()
  });
   var clicked = false
   barberShopGet(clicked)

});
