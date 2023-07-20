import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");

const STORAGE_KEY = "videoplayer-current-time";

const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', throttle(onVideoPlay, 1000));

function onVideoPlay(evt) {
    const currentTime = evt.seconds;

    localStorage.setItem(STORAGE_KEY, currentTime);
}

