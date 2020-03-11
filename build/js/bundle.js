(function() {
    const headings = document.querySelectorAll('h2');
    
    Array.prototype.forEach.call(headings, h => {
      let btn = h.querySelector('button');
      let target = h.nextElementSibling;
      
      btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true';
        
        btn.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;  
      }
    });
  })()
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