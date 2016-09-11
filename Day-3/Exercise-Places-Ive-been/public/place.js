let objectPlace =
(function() {
  function createObjectPlace(place) {
    let obj = {},
        id = getId(place),
        location = getLocation(place),
        name = getName(place),
        address = getAddress(place);

    if (id) obj['id'] = id;
    if (location) obj['location'] = location;
    if (name) obj['name'] = name;
    if (address) obj['address'] = address;
    return obj;
  }

  function getId(place) {
    let id = place.id;
    if (id) return id;
  }

  function getName(place) {
    let name = place.name;
    if (name) return name;
  }

  function getAddress(place) {
    let address = place.formatted_address;
    if (address) return address;
  }

  function getLocation(place) {
    let lat = lng = 0;
    let byCoords = place.coords;
    if (byCoords) {
      lat = byCoords.latitude;
      lng = byCoords.longitude;
    } else {
      let byGeometry = place.geometry.location
      lat = byGeometry.lat();
      lng = byGeometry.lng();
    }
    return {
      lat: lat,
      lng: lng
    };
  }

  return createObjectPlace;
})();