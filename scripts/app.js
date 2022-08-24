import WorkTimer from "./workTimer.js";
import BreakTimer from "./breakTimer.js";

const workSectionDisplay = document.getElementById("work-time-title");
const breakSectionDisplay = document.getElementById("break-time-title");
const workTimer = document.querySelector(".work-timer");
const breakTimer = document.querySelector(".break-timer");

window.onload = () => {
  loadWorkTimer();
  workSectionDisplay.classList.remove("inactive");
  breakSectionDisplay.classList.add("inactive");
};

workSectionDisplay.addEventListener("click", () => {
  loadWorkTimer(), workSectionDisplay.classList.remove("inactive");
  breakSectionDisplay.classList.add("inactive");
});
breakSectionDisplay.addEventListener("click", () => {
  loadBreakTimer(), workSectionDisplay.classList.add("inactive");
  breakSectionDisplay.classList.remove("inactive");
});

function loadWorkTimer() {
  new WorkTimer(document.querySelector(".work-timer"));
  workTimer.style.display = "block";
  workTimer.classList.add("is-visible");
  breakTimer.classList.remove("is-visible");
  breakTimer.style.display = "none";
}

function loadBreakTimer() {
  new BreakTimer(document.querySelector(".break-timer"));
  breakTimer.style.display = "block";
  workTimer.style.display = "none";
  breakTimer.classList.add("is-visible");
  workTimer.classList.remove("is-visible");
}

// new WorkTimer(document.querySelector(".work-timer"));
// new BreakTimer(document.querySelector(".break-timer"));
