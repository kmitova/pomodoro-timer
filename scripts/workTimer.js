export default class WorkTimer {
  constructor(root) {
    root.innerHTML = WorkTimer.getHTML();

    this.el = {
      minutes: root.querySelector("#work-minutes"),
      seconds: root.querySelector("#work-seconds"),
      controlBtn: root.querySelector("#start-work-btn"),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.controlBtn.addEventListener("click", () => {
      if (this.interval === null) {
        const inputMinutes = document.getElementById("work-minutes").value;
        const inputSeconds = document.getElementById("work-seconds").value;
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60 + Number(inputSeconds);
          this.updateInterfaceTime();
        }
        this.start();
      } else {
        this.stop();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.value = minutes.toString().padStart(2, "0");
    this.el.seconds.value = seconds.toString().padStart(2, "0");
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
          <div class="timer">
            <div class="set-time">
            <label for="time">Enter minutes:</label>
            </div>
          <div class="spans">
              <input class="minutes" id="work-minutes" placeholder="25"/>
              <span class="divider">:</span>
              <input class="seconds" id="work-seconds" placeholder="00"/>
            </div>
            <div class="buttons">
              <button class="button-start-timer" id="start-work-btn">
                Start Timer
              </button>
            </div>
          </div>`;
  }
}