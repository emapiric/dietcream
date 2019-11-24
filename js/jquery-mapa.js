$(function() {
    $("#map").googleMap();
    $("#map").addMarker({
      coords: [48.895651, 2.290569], 
      url: 'https://maps.google.com/maps?q=Knez%20mihailova%2015&t=&z=13&ie=UTF8&iwloc=&output=embed', 
      id: 'pozicija' 
    });
  })
