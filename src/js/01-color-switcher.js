const startBtn = document.querySelector('[data-start]');
    const stopBtn = document.querySelector('[data-stop]');
    let intervalId;

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }

    function startChangingColor() {
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);

      startBtn.disabled = true;
      stopBtn.disabled = false;
    }

    function stopChangingColor() {
      clearInterval(intervalId);

      startBtn.disabled = false;
      stopBtn.disabled = true;
    }

    startBtn.addEventListener('click', startChangingColor);
    stopBtn.addEventListener('click', stopChangingColor);

