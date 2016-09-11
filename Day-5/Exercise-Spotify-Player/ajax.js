var callAPI = function(method, url, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var dataJSON = JSON.parse(httpRequest.responseText);
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