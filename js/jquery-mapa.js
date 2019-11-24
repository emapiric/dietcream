$(function() {
  $("#map").googleMap();
  $("#map").addMarker({
    coords: [44.816544, 20.458509],
    url:
      "https://maps.google.com/maps?q=Knez%20mihailova%2015&t=&z=13&ie=UTF8&iwloc=&output=embed",
    id: "pozicija"
  });
});
