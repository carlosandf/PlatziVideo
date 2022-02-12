import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
  el: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ],
});

const buttonPlay = document.querySelector('.play');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('.mute');
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('/sw.js', import.meta.url))
    .catch(error => {
      console.log(error.message)
    })
}