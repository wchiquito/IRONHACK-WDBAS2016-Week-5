function Repository(places) {
  this.places = places;

  this.insert = function(place) {
    let places = this.findAll() || [];
    if (places.length === 0 || !findById(place.id, places)) {
      void places.push(place);
      localStorage.setItem(this.places, toJSON(places));
    }
  }

  this.findAll = function() {
    let places = localStorage.getItem(this.places);
    if (places) return toArray(places);
  }

  function findById(id, places) {
    return places.some(function(place) {
      return place.id === id;
    });
  }

  function toArray(objectJSON) {
    return JSON.parse(objectJSON);
  }

  function toJSON(objectArray) {
    return JSON.stringify(objectArray);
  }
}