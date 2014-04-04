var map;
var infowindow = null;

function initialize() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 12,
    center: new google.maps.LatLng(-22.9495201, -43.2327308),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  setMarkers(features);
  infowindow = new google.maps.InfoWindow({
    content: "loading..."
  });

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}

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

function setMarkers(markers) {
  for (var i = 0, feature; feature = markers[i]; i++) {
    addMarker(feature);
  }
}

function addMarker(feature) {
  var marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(feature.lat, feature.lng),
    title: feature.name,
    html: feature.content,
    icon: icons[feature.type].icon
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(this.html);
    infowindow.open(map, this);
  });
}

var contentBaiana = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h4 id="firstHeading" class="firstHeading">Baiana Ciça</h4>'+
  '<div id="bodyContent">'+
  '<p><b>Endereço:</b> Praça XV, do lado do Arco do Teles</p> ' +
  '<p><b>Horários:</b> Terças, Quintas e Sábados, a partir das 17h </p> '+
  '</div>'+
  '</div>';

var contentTata = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h4 id="firstHeading" class="firstHeading">Da Casa da Táta</h4>'+
  '<div id="bodyContent">'+
  '<p><b>Endereço:</b> Rua Professor Manoel Ferreira, nº 89 - Gávea</p> ' +
  '<p><b>Horários:</b> Segunda a Sexta, de 08h às 20h <br /> Sábados de 08h às 18h30 <br/> Domingos de 09h às 14h</p> '+
  '</div>'+
  '</div>';

var contentSurf = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h4 id="firstHeading" class="firstHeading">SurfRio</h4>'+
  '<div id="bodyContent">'+
  '<p><b>Endereço:</b> Posto 6 - Praia de Copacabana</p> ' +
  '<p><b>Horários:</b> Segunda a Sexta, de 08h às 16h <br /> Sábados e Domingos de 08h às 10h</p> '+
  '</div>'+
  '</div>';

var contentCasaPorto = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h4 id="firstHeading" class="firstHeading">Casa Porto</h4>'+
  '<div id="bodyContent">'+
  '<p><b>Endereço:</b> Largo de São Francisco da Prainha, 4 - Sobrado</p> ' +
  '<p><b>Horários:</b> Segunda a Sexta, de 10h às 22h <br /> Sábados e Domingos de 10h às 14</p> '+
  '</div>'+
  '</div>';

var contentBrownie = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h4 id="firstHeading" class="firstHeading">Brownie do Luiz</h4>'+
  '<div id="bodyContent">'+
  '<p><b>Endereço:</b> Rua das Laranjeiras, 103 - Laranjeiras</p> ' +
  '<p><b>Horários:</b> Segunda a Sexta, de 10h às 18h <br /> Sábados de 10h às 16h</p> '+
  '</div>'+
  '</div>';

var features = [
  { 
    name: 'Baiana Ciça', 
    lat: -22.902816, 
    lng: -43.174347, 
    type: 'presente',
    content: contentBaiana
  },
  { 
    name: 'Casa da Táta',
    lat: -22.9764342,
    lng: -43.2291138,
    type: 'presente',
    content: contentTata
  },
  { 
    name: 'SurfRio',
    lat: -22.9853283,
    lng: -43.1888393,
    type: 'desconto',
    content: contentSurf
  },
  { 
    name: 'Casa Porto',
    lat: -22.8975501,
    lng: -43.184528,
    type: 'desconto',
    content: contentCasaPorto
  },
  { 
    name: 'Brownie do Luiz',
    lat: -22.933444,
    lng: -43.184765,
    type: 'presente',
    content: contentBrownie
  },
];

google.maps.event.addDomListener(window, 'load', initialize);
