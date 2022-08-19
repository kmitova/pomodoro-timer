import WorkTimer from "./workTimer.js";
import BreakTimer from "./breakTimer.js";

const workSectionDisplay = document.getElementById("work-time-title");
const breakSectionDisplay = document.getElementById("break-time-title");
const workTimer = document.querySelector(".work-timer");
const breakTimer = document.querySelector(".break-timer");

// window.onload = () => {
//   loadWorkTimer();
// };

// document.querySelector("h1").addEventListener("click", console.log("hi"));
// workSectionDisplay.addEventListener("click", console.log("new test"));

// workSectionDisplay.addEventListener("click", console.log("work"));

// breakSectionDisplay.addEventListener("click", console.log("break"));

// function loadWorkTimer() {
//   new WorkTimer(document.querySelector(".work-timer"));
//   workTimer.style.display = "block";
//   breakTimer.style.display = "none";
// }

// function loadBreakTimer() {
//   new BreakTimer(document.querySelector(".break-timer"));
//   breakTimer.style.display = "block";
//   workTimer.style.display = "none";
// }

new WorkTimer(document.querySelector(".work-timer"));
new BreakTimer(document.querySelector(".break-timer"));

const button = document.getElementById("btn");

button.addEventListener("click", (event) => {
  console.log("clicked");
});
