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
        const inputMinutes = document.getElementById("inputMinutes").value;
        console.log(inputMinutes);
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
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
        
          <div class="set-time">
            <label for="time">Enter minutes:</label>
            <input type="number" id="inputMinutes" value="25" />
          </div>
          <div class="timer">
            <div class="spans">
              <span class="minutes" id="work-minutes">00</span>
              <span class="divider">:</span>
              <span class="seconds" id="work-seconds">00</span>
            </div>
            <div class="buttons">
              <button class="button-start-timer" id="start-work-btn">
                Start Timer
              </button>
              
            </div>
          </div>`;
  }
}
