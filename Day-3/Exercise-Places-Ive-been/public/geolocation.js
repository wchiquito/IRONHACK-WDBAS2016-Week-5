var PLACES_KEY = '__places__';

var map,
    repo = new Repository(PLACES_KEY);
    console.log('');

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onLocation(position) {
  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
  var myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  createMap(myPosition);
  createMarker(objectPlace(position));
  loadPlaces();
  setupAutocomplete();
}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function createMap(position){
  var mapOptions = {
    center: position,
    zoom: 17
  };
  map = new google.maps.Map($('#map')[0], mapOptions);
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    position: place.location,
    map: map
  });
  if (place.name) showInfo(marker, place);
}

function showInfo(marker, place) {
  let name = place.name,
      address = place.address,
      info = `<h2>${name}</h2><h4>${address}</h4>`,
      infowindow = new google.maps.InfoWindow({
        content: info
      });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

function setupAutocomplete(){
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (place.geometry.location) {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      place = objectPlace(place);
      createMarker(place);
      repo.insert(place);
    } else {
      alert("The place has no location...?")
    }
  });
}

function loadPlaces() {
  places = repo.findAll();
  if (places) {
    places.forEach(function(place) {
      createMarker(place);
    });
  }
}