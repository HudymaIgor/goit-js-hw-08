import Player from '@vimeo/player';
const throttle = require("lodash.throttle");

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
 
const setBegin = localStorage.getItem("videoplayer-current-time")

if (setBegin) {
player.setCurrentTime(setBegin)  
}


const onPlayer = function (data) {

  localStorage.setItem("videoplayer-current-time", data.seconds);
    // console.log(data);
    
}

player.on('timeupdate', throttle(onPlayer, 3000)); 
   

