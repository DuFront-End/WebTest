function updateCountdown() {
  let now = new Date();
  let target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 0, 0, 0);
  let diff = target - now;

  let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(diff / 1000 / 60) % 60;
  let seconds = Math.floor(diff / 1000) % 60;

  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
