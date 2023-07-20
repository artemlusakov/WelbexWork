function Second(){
  const input = document.getElementById('input').value;
  timer(input)
}

function timer(seconds, Second) {

  let timerInput = document.getElementById("timer");
  let intervalId = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(intervalId);
      timerInput.value = Second;
      console.log("Timer finished!");
      return;
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let timerStr = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    timerInput.value = timerStr;

    seconds--;
  }, 1000);
}


