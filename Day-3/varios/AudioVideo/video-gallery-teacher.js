$(document).ready(function() {
  var addedVideos = {};
  var totalTimePlayed = $('#js-total-time');
  var urlInput = $('#js-video-url');
  var addBtn = $('#js-add-video');
  var noVideosNotice = $('#js-no-videos');
  var videosContainer = $('#js-videos');

  addBtn.on('click', addVideo);

  function addVideo(event) {
    var videoUrl = urlInput.val();

    if (videoUrl && !addedVideos[videoUrl]) {
      var videoHtml = `<video width=300 controls src="${videoUrl}" />`;
      var video = $(videoHtml);
      video.on('timeupdate', function(event) {
        var video = event.currentTarget;
        addedVideos[videoUrl].timePlayed = Math.round(video.played.end(video));
        updateTotalTime();
      });
      noVideosNotice.hide();
      videosContainer.append(video);
      urlInput.val('');
      addedVideos[videoUrl] = {
        timePlayed: 0
      };
    }
  }

  function updateTotalTime() {
    var totalTime = 0;
    for (var url in addedVideos) {
      totalTime += addedVideos[url].timePlayed;
    }
    totalTimePlayed.text(totalTime);
  }
});
