var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 12,
    center: new google.maps.LatLng(-22.9495201, -43.2327308),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var iconBase = '';
  var icons = {
    desconto: {
      icon: iconBase + $("#map_canvas").data('pin-coin')
    },
    evento: {
      icon: iconBase + $("#map_canvas").data('pin-calendar')
    },
    presente: {
      icon: iconBase + $("#map_canvas").data('pin-gift')
    },
    info: {
      icon: iconBase + $("#map_canvas").data('pin-pins')
    }
  };

  function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  }

  var features = [
  {
    position: new google.maps.LatLng(-22.902816, -43.174347),
    type: 'presente'
  }, {
    position: new google.maps.LatLng(-22.9764342,-43.2291138),
    type: 'presente'
  }, {
    position: new google.maps.LatLng(-22.9853283,-43.1888393),
    type: 'desconto'
  }, {
    position: new google.maps.LatLng(-22.9885516,-43.1940746),
    type: 'desconto'
  }, {
    position: new google.maps.LatLng(-22.8975501,-43.184528),
    type: 'evento'
  }, {
    position: new google.maps.LatLng(-22.933444,-43.184765),
    type: 'presente'
  }, {
    position: new google.maps.LatLng(-33.91784, 151.23094),
    type: 'info'
  }, {
    position: new google.maps.LatLng(-33.91682, 151.23149),
    type: 'info'
  }, {
    position: new google.maps.LatLng(-33.91790, 151.23463),
    type: 'info'
  }, {
    position: new google.maps.LatLng(-33.91666, 151.23468),
    type: 'info'
  }, {
    position: new google.maps.LatLng(-33.916988, 151.233640),
    type: 'info'
  }, {
    position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
    type: 'parking'
  }, {
    position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
    type: 'library'
  }
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
