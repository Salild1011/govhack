function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(-34.922851, 138.602320),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.MAP
  }
  var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-34.929726, 138.596234),
    title:"Fire Breakout at Residential Colony"
  });
  marker.setMap(map);
}
var heatmapData = [
  new google.maps.LatLng(37.782, -122.447),
  new google.maps.LatLng(37.782, -122.445),
  new google.maps.LatLng(37.782, -122.443),
  new google.maps.LatLng(37.782, -122.441),
  new google.maps.LatLng(37.782, -122.439),
  new google.maps.LatLng(37.782, -122.437),
  new google.maps.LatLng(37.782, -122.435),
  new google.maps.LatLng(37.785, -122.447),
  new google.maps.LatLng(37.785, -122.445),
  new google.maps.LatLng(37.785, -122.443),
  new google.maps.LatLng(37.785, -122.441),
  new google.maps.LatLng(37.785, -122.439),
  new google.maps.LatLng(37.785, -122.437),
  new google.maps.LatLng(37.785, -122.435)
];

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});

heatmap.setMap(map);


function setScreen(param) {
  $('#1').css({'display': 'none'});
  $('#2').css({'display': 'none'});
  $('#3').css({'display': 'none'});

  $('#'+param).css({'display': 'block'});  
}