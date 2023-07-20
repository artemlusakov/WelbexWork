window.onload = function() {
  window.setInterval(function() {
    let date = new Date();

    // Секунды
    let seconds = new Date().getSeconds();
    document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // Минуты
    let minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Чвсы
    let hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  }, 1000);
}
