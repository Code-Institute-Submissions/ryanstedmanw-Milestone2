function myMap() {
var mapProp= {
  center:new google.maps.LatLng(42,42),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


<div id="googleMap" style="width:100%;height:400px;"></div>
<script src="./assets/javascript/GoogleMaps.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZcqGDl30og8ov6EzPTAzhKmz3CMUvSU0&callback=myMap"></script>

}