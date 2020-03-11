let video = document.querySelector('video');
let playPauseButton = document.querySelector('.play-pause');

(function() {
  video.load();
  video.play();
  playPauseButton.addEventListener('click', () => {
    playPauseButton.setAttribute('data-paused', !video.paused);
    if (video.paused) {
      playPauseButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
      playPauseButton.setAttribute('aria-label', 'pause video');
      video.play();
    } else {
      playPauseButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
      playPauseButton.setAttribute('aria-label', 'play video');
      video.pause();
    }
  });
})()