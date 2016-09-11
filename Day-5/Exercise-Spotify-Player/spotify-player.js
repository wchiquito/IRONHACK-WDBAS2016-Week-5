function spotifyPlayer(player) {
  this.player = player;
}

spotifyPlayer.prototype.setSong = function(song) {
  if (song) this.player.src = song;
};

spotifyPlayer.prototype.getSong = function() {
  return this.player.currentSrc;
};

spotifyPlayer.prototype.play = function() {
  if (this.getSong()) this.player.play();
};

spotifyPlayer.prototype.pause = function() {
  this.player.pause();
};

spotifyPlayer.prototype.isPlaying = function() {
  return !this.player.paused;
};