function myMap() {
var mapProp= {
  center:new google.maps.LatLng(42,42),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}