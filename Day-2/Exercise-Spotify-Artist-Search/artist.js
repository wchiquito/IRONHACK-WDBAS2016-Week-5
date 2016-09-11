var URL_BASE = 'https://api.spotify.com/v1/search?type=$0&q=$1';

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

function searchArtist() {
  var artist = document.forms[0].elements[0].value;
  seacrhAPI('GET',
            URL_BASE.replace(/\$0/, 'artist').replace(/\$1/, artist),
            drawArtist);
}

function searchAlbums(artist) {
  seacrhAPI('GET',
            URL_BASE.replace(/\$0/, 'album').replace(/\$1/, artist),
            drawAlbums);
}

function pages(url) {
  seacrhAPI('GET',
            url,
            drawAlbums);
}

function seacrhAPI(method, url, callback) {
 callAPI(method,
         url,
         callback);
}

/******** NO ********/

function emptyElement(element) {
  element.innerHTML = "";
}

function emptyAlbums(element) {
  emptyElement(document.getElementById('js-albums')
                       .getElementsByTagName('tbody')[0]);
  emptyElement(document.getElementById('js-total-albums'));
  emptyElement(document.getElementById('js-partial-albums'));
  document.getElementById('js-album-next').removeAttribute('href');
  var prev = document.getElementById('js-album-prev');
  prev.removeAttribute('href');
  prev.style.display = 'none';
}

function drawArtist(artist) {
  document.getElementById('js-total-artist').innerHTML = artist.artists.total;

  var tableRef = document.getElementById('js-artist')
                         .getElementsByTagName('tbody')[0];
  emptyElement(tableRef);
  emptyAlbums();

  var newRow,
      newCellI,
      newCellT,
      newText,
      newImg;

  artist.artists.items.forEach(function(artist) {
    newRow = tableRef.insertRow();

    newCellI = newRow.insertCell(0);
    newCellT = newRow.insertCell(1);

    newA = document.createElement('a')
    newA.appendChild(document.createTextNode(artist.name));
    newA.href = 'javascript:searchAlbums(\'' + artist.name + '\')';
    newCellT.appendChild(newA);

    newImg = document.createElement('img');
    newImg.setAttribute('src', artist.images[2]
                               ? artist.images[2].url
                               : '');
    newImg.setAttribute('alt', artist.name);
    newCellI.appendChild(newImg);
  });
}

function drawAlbums(album) {
  document.getElementById('js-total-albums').innerHTML = album.albums.total;
  document.getElementById('js-partial-albums').innerHTML = album.albums.offset + album.albums.items.length;

  var tableRef = document.getElementById('js-albums')
                         .getElementsByTagName('tbody')[0];

  emptyElement(tableRef);

  var newRow,
      newCellI,
      newCellT,
      newText,
      newImg;

  if (album.albums.next) {
    document.getElementById('js-album-next').style.display = '';
    document.getElementById('js-album-next').href = 'javascript:pages("' + album.albums.next + '")';
  } else {
    document.getElementById('js-album-next').style.display = 'none';
  }

  if (album.albums.previous) {
    document.getElementById('js-album-prev').style.display = '';
    document.getElementById('js-album-prev').href = 'javascript:pages("' + album.albums.previous + '")';
  } else {
    document.getElementById('js-album-prev').style.display = 'none';
  }

  album.albums.items.forEach(function(album) {
    newRow = tableRef.insertRow();

    newCellI = newRow.insertCell(0);

    newImg = document.createElement('img');
    newImg.setAttribute('src', album.images[2]
                               ? album.images[2].url
                               : '');
    newImg.setAttribute('alt', album.name);
    newCellI.appendChild(newImg);
  });
}