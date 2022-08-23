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
        const inputMinutes = document.getElementById("minutes-break").value;
        const inputSeconds = document.getElementById("seconds-break").value;
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
      this.el.controlBtn.textContent = "Start";
      this.el.controlBtn.classList.add(".start-timer-clicked");
      this.el.controlBtn.classList.remove(".stop-timer-clicked");
    } else {
      this.el.controlBtn.textContent = "Pause";
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
      if (this.remainingSeconds <= 10) {
        const sound = document.getElementById("countdown-sound");
        sound.play();
      }
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
          </div><div class="spans">
              <input class="minutes" id="minutes-break" value="5"/>
              <span class="divider">:</span>
              <input class="seconds" id="seconds-break" value="00"/>
            </div>
            <div class="buttons">
              <button class="button-start-timer" id="start-break-btn">
                Start
              </button>
              
            </div>
          </div>
    `;
  }
}
