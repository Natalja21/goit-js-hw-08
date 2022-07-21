import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_PLAER_KEY = 'videoplayer-current-time';

function onPlay({ seconds }) {
    localStorage.setItem(STORAGE_PLAER_KEY, seconds);
   
}
const saveTime = localStorage.getItem(STORAGE_PLAER_KEY);

if (saveTime) {
    player.setCurrentTime(saveTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
