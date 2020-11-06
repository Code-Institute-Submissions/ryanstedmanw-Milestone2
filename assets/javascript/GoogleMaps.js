function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(50.909698, -1.404351),
        /*-- home address for southampon--*/
        zoom: 13,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); /*-- display maps on div--*/

}