import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");
const PLAYTIME_KEY = "videoplayer-current-time";

function updateTime({ seconds }) {
  localStorage.setItem(PLAYTIME_KEY, seconds);
}

player.on("timeupdate", throttle(updateTime, 1000));
player.setCurrentTime(localStorage.getItem(PLAYTIME_KEY) || 0);
