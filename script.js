const clock = document.getElementById("clock");
const updateClock = () => {
  clock.textContent = new Date().toLocaleTimeString();
};
updateClock();
setInterval(updateClock, 1000);
