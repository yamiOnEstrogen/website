var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'zcZACSlRPEw',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setPlaybackQuality('small');
  event.target.playVideo();
  event.target.setVolume(50);
}
