import WorkTimer from "./workTimer.js";
import BreakTimer from "./breakTimer.js";
import { logIn, register } from "./firebaseAPI.js";
const workSectionDisplay = document.getElementById("work-time-title");
const breakSectionDisplay = document.getElementById("break-time-title");
const workTimer = document.querySelector(".work-timer");
const breakTimer = document.querySelector(".break-timer");

const registerBtn = document.getElementById("sign-up-btn");
const logInBtn = document.getElementById("log-in-btn");

registerBtn.addEventListener("click", register);
logInBtn.addEventListener("click", logIn);

window.onload = () => {
  loadWorkTimer();
};

workSectionDisplay.addEventListener("click", loadWorkTimer);
breakSectionDisplay.addEventListener("click", loadBreakTimer);

function loadWorkTimer() {
  new WorkTimer(document.querySelector(".work-timer"));
  workTimer.style.display = "block";
  workTimer.classList.add("is-visible");
  breakTimer.classList.remove("is-visible");
  breakTimer.style.display = "none";
  workSectionDisplay.classList.remove("inactive");
  breakSectionDisplay.classList.add("inactive");
}

function loadBreakTimer() {
  new BreakTimer(document.querySelector(".break-timer"));
  breakTimer.style.display = "block";
  workTimer.style.display = "none";
  breakTimer.classList.add("is-visible");
  workTimer.classList.remove("is-visible");
  workSectionDisplay.classList.add("inactive");
  breakSectionDisplay.classList.remove("inactive");
}

// new WorkTimer(document.querySelector(".work-timer"));
// new BreakTimer(document.querySelector(".break-timer"));
