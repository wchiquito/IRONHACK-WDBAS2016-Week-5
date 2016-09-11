(function() {
  let ARTIST = 'John Lennon';
  let player = new spotifyPlayer($('.js-player')[0]);

  $(document).ready(function() {
    getTrackFromArtist(ARTIST);
    $('.js-player').on('ended', finishedSong);
    $('.btn-play').on('click', play);
  });

  function getTrack(response) {
    let image = response.images[1].url;
    let tracks = response.tracks.items;
    if (tracks.length) {
      void loadSongInPlayer([tracks[0], image]);
    }
  }

  function getTracks(album) {
    if (album) {
      void callAPI('GET',
              album,
              getTrack);
    }
  }

  function getAlbum(response) {
    let albums = response.albums.items;
    if (albums.length) {
      let album = albums[0].href;
      void getTracks(album);
    }
  }

  function getTrackFromArtist(artist) {
    let URL = `https://api.spotify.com/v1/search?type=album&q=${ARTIST}`;
    void callAPI('GET',
            URL,
            getAlbum);
  }

  function loadSongInPlayer(information) {
    updatePlayer(createInfo(information));
    enablePlay();
  }

  function play() {
    if (player.getSong()) {
      player.isPlaying() ? player.pause()
                         : player.play();
      togglePlay();
    }
  }

  function finishedSong() {
    togglePlay();
  }

  function enablePlay() {
    $('.btn-play')[0].classList.remove('disabled');
  }

  function togglePlay(e) {
    $('.btn-play')[0].classList.toggle('playing');
  }

  function createInfo(info) {
    let obj = {},
        track = info[0],
        image = info[1];

    song = track.preview_url,
    title = track.name,
    author = track.artists[0].name;

    if (song) obj['song'] = song;
    if (title) obj['title'] = title;
    if (author) obj['author'] = author;
    if (image) obj['image'] = image;
    return obj;
  }

  function updatePlayer(info) {
    if (info.song) player.setSong(info.song);
    if (info.title) $('.metadata > .title').text(info.title);
    if (info.author) $('.metadata > .author').text(info.author);
    if (info.image) $('.cover > img').attr('src', info.image);
  }
})();