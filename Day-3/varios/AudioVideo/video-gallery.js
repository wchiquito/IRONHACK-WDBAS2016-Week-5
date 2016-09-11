(function() {
  getVideo = document.querySelector('#js-add-video');
  getVideo.addEventListener('click', addVideo);
})();

function addVideo() {
  let url = getURLVideo();
  let video = createVideo(url);
  getGalleryVideos().appendChild(video);
  hideNoVideos();
}

function getURLVideo() {
  return document.querySelector('#js-video-url').value;
}

function getGalleryVideos() {
  return document.querySelector('#js-videos');
}

function createVideo(url) {
  let video = document.createElement('video');
  video.src = url;
  video.width = 300;
  return video;
}

function hideNoVideos() {
  noVideos = document
             .querySelector('#js-no-videos')
             .style
             .display = 'none';
}