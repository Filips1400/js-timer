let start = 1;
function timerstart() {
    if (start == 1) {
        let time = document.getElementById("start").value * 60;
        const countDownEl = document.getElementById("countdown"); 

        setInterval(updateCountdown, 1000);
        
        function updateCountdown() {
          const minutes = Math.floor(time / 60);
          let seconds = time % 60;
          seconds = seconds < 10 ? "0" + seconds: seconds;
          countDownEl.innerHTML = `${minutes}:${seconds}`;
          start = false;
          if (seconds > 0 || minutes > 0) {
            time--;
          }
    }
  }
}