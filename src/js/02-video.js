import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_PLAER_KEY = 'videoplayer-current-time';

function onPlay({ seconds }) {
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      localStorage.setItem(STORAGE_PLAER_KEY, seconds);
    }
  }
}

player.setCurrentTime(localStorage.getItem(STORAGE_PLAER_KEY));

player.on('timeupdate', throttle(onPlay, 1000));
