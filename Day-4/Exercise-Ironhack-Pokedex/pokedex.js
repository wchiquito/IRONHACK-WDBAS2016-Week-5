(function() {
  function getURL(path) {
    return `http://pokeapi.co/api/v2/${path}/`;
  }

  let callAPI = function(method, url, callback) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          let dataJSON = JSON.parse(httpRequest.responseText);
          callback(dataJSON);
        }
        else {
          callback('There was an error');
        }
      }
    };
    httpRequest.open(method, url);
    httpRequest.send();
  }

  function displayResult(response) {
    console.log(response);
  }

  callAPI('GET', getURL('pokemon/1'), displayResult);
  callAPI('GET', getURL('type'), displayResult);
})();