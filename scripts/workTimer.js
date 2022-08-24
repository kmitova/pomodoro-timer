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

    this.tomatoesGrown = 0;

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
      if (this.remainingSeconds === 10) {
        const sound = document.getElementById("countdown-sound");
        sound.play();
      }
      if (this.remainingSeconds === 0) {
        this.stop();
        this.addTomato();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  addTomato() {
    const tomatoesDiv = document.getElementsByClassName("tomatoes")[0];
    tomatoesDiv.style.display = "block";
    const tomatoNum = document.getElementById("tomatoes-number");
    const tomatoImg = document.createElement("img");
    tomatoImg.src = "./media/tomato.png";
    tomatoImg.classList.add("single-tomato-img");
    const basket = document.createElement("img");
    basket.src = "./media/basket-tomatoes/basket.jpg";
    basket.classList.add("basket-img");

    const tomatoContainer = document.getElementById("tomato-img-container");
    let currentTomatoes = Number(tomatoNum.textContent);
    // let updatedTomatoes = currentTomatoes + 1;
    this.tomatoesGrown = currentTomatoes + 1;

    tomatoContainer.innerHTML = "";
    tomatoNum.textContent = this.tomatoesGrown;
    if (this.tomatoesGrown >= 4) {
      let baskets = Math.floor(updatedTomatoes / 3);
      let remaining = this.tomatoesGrown % 3;
      console.log("baskets: " + baskets);
      console.log("remaining " + remaining);
      for (let index = 0; index < baskets; index++) {
        tomatoContainer.appendChild(basket.cloneNode(true));
      }
      for (let index = 0; index < remaining; index++) {
        console.log(index);
        tomatoContainer.appendChild(tomatoImg.cloneNode(true));
      }
    } else {
      for (let index = 0; index < this.tomatoesGrown; index++) {
        tomatoContainer.appendChild(tomatoImg.cloneNode(true));
      }
    }
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
              <input class="minutes" id="work-minutes" value="25"/>
              <span class="divider">:</span>
              <input class="seconds" id="work-seconds" value="00"/>
            </div>
            <div class="buttons">
              <button class="button-start-timer" id="start-work-btn">
                Start
              </button>
            </div>
          </div>`;
  }
}
