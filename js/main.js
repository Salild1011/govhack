var map;
var mk1;
function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(-34.907411, 138.708958),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.MAP
  }
  map = new google.maps.Map(document.getElementById("map1"), mapOptions);
  mk1 = new google.maps.Marker({
    position: new google.maps.LatLng(-34.907411, 138.708958),
    title:"Fire Breakout at Residential Colony"
  });
  mk1.setMap(map);
}
var count = 1;
function setMapMarkers () {
  if (count == 1) {
    var mk2 = new google.maps.Marker({
      position: new google.maps.LatLng(-34.899933, 138.696279),
      title:"Fire Breakout at Residential Colony"
    });
    mk2.setMap(map);
    var mk3 = new google.maps.Marker({
      position: new google.maps.LatLng(-34.905819, 138.701588),
      title:"Fire Breakout at Residential Colony"
    });
    mk3.setMap(map);

    var lineSymbol = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

    // Create the polyline and add the symbol via the 'icons' property.
    var line = new google.maps.Polyline({
      path: [{lat: -34.908200, lng: 138.715878}, {lat: -34.902681, lng: 138.694163}],
      icons: [{
        icon: lineSymbol,
        offset: '100%'
      }],
      map: map
    });

    var line2 = new google.maps.Polyline({
      path: [{lat: -34.902323, lng: 138.712358}, {lat: -34.900098, lng: 138.701302}],
      icons: [{
        icon: lineSymbol,
        offset: '100%'
      }],
      map: map
    });
  } else if (count == 2) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-34.929726, 138.596234),
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 7
      },
      draggable: true,
      map: map
    });
  }
}




function setScreen(param) {
  $('#1').css({'display': 'none'});
  $('#2').css({'display': 'none'});
  $('#3').css({'display': 'none'});

  $('#'+param).css({'display': 'block'});  
}