export default class BreakTimer {
  constructor(root) {
    root.innerHTML = BreakTimer.getHTML();

    this.el = {
      minutes: root.querySelector("#minutes-break"),
      seconds: root.querySelector("#seconds-break"),
      controlBtn: root.querySelector("#start-break-btn"),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.controlBtn.addEventListener("click", () => {
      if (this.interval === null) {
        const inputMinutes = document.getElementById("inputMinutesBreak").value;
        console.log(inputMinutes);
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
        this.start();
      } else {
        // this.remainingSeconds = inputMinutes * 60;
        this.stop();
        // this.remainingSeconds = inputMinutes * 60;
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.controlBtn.textContent = "Start Timer";
      this.el.controlBtn.classList.add(".start-timer-clicked");
      this.el.controlBtn.classList.remove(".stop-timer-clicked");
    } else {
      this.el.controlBtn.textContent = "Reset Timer";
      this.el.controlBtn.classList.remove(".start-timer-clicked");
      this.el.controlBtn.classList.add(".stop-timer-clicked");
    }
  }

  start() {
    if (this.remainingSeconds === 0) {
      return;
    }
    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
    <h2 id="break-time-title">Break time</h2>
        <div class="break-timer">
          <div class="set-time">
            <label for="time">Enter minutes:</label>
            <input type="number" id="inputMinutesBreak" value="5" />
          </div>
          <div class="timer">
            <div class="spans">
              <span class="minutes" id="minutes-break">00</span>
              <span class="divider">:</span>
              <span class="seconds" id="seconds-break">00</span>
            </div>
            <div class="buttons">
              <button class="button-start-timer" id="start-break-btn">
                Start Timer
              </button>
              
            </div>
          </div>
        </div>
    `;
  }
}
