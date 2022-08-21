import WorkTimer from "./workTimer.js";
import BreakTimer from "./breakTimer.js";

const workSectionDisplay = document.getElementById("work-time-title");
const breakSectionDisplay = document.getElementById("break-time-title");
const workTimer = document.querySelector(".work-timer");
const breakTimer = document.querySelector(".break-timer");

window.onload = () => {
  loadWorkTimer();
};

workSectionDisplay.addEventListener("click", loadWorkTimer);

breakSectionDisplay.addEventListener("click", loadBreakTimer);

function loadWorkTimer() {
  new WorkTimer(document.querySelector(".work-timer"));
  workTimer.style.display = "block";
  breakTimer.style.display = "none";
}

function loadBreakTimer() {
  new BreakTimer(document.querySelector(".break-timer"));
  breakTimer.style.display = "block";
  workTimer.style.display = "none";
}

new WorkTimer(document.querySelector(".work-timer"));
new BreakTimer(document.querySelector(".break-timer"));
