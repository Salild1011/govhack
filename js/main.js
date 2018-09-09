function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(-34.922851, 138.602320),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.MAP
  }
  var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-34.8604311, 138.5177885),
    title:"Hello World!"
  });
  marker.setMap(map);
}


function setScreen(param) {
  $('#1').css({'display': 'none'});
  $('#2').css({'display': 'none'});
  $('#3').css({'display': 'none'});

  $('#'+param).css({'display': 'block'});  
}