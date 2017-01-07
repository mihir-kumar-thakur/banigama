google.maps.event.addDomListener(window, 'load', init);

var map;

function init() {

  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(26.4232008, 86.198414); 
  var mapOptions = {center: myCenter, zoom: 17, mapTypeId: 'satellite'};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  var infowindow = new google.maps.InfoWindow({
    content: "Hanuman Mandir, Banigama"
  });
  infowindow.open(map,marker);
  marker.setMap(map);
}
