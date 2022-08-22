export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();
    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      resetWorktime: root.querySelector(".timer__btn--resetwk"),
      resetBreaktime: root.querySelector(".timer__btn--resetbk"),

    };
    this.interval = null;
    this.remainingSeconds = 1500;

    this.start();
    this.stop();

    this.updateInterfaceControls();

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start()
      } else {
        this.stop()
      }

    });

    this.el.resetBreaktime.addEventListener("click", () => {
      this.remainingSeconds = 300;
      this.updateInterfaceTime();
    });

    this.el.resetWorktime.addEventListener("click", () => {
      this.remainingSeconds = 1500;
      this.updateInterfaceTime();
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
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds --;
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
      <p> Worktime</p>
      <button type="button" class="timer__btn timer__btn--resetwk timer__btn--start">
        <span class="material-icons">laptop</span>
      </button>

      <p> Breaktime</p>
      <button type="button" class="timer__btn timer__btn--resetbk timer__btn--start">
        <span class="material-icons">coffee</span>
      </button>

      <div id="timer__diplay">
        <span class="timer__part timer__part--minutes">25</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00
        </span>
      </div>

      <button type="button" class="timer__btn timer__btn--control timer__btn--start">
        <span class="material-icons">play_arrow</span>
      </button>
    `;
  }
}
