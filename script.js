const clock = document.getElementById("clock");

const updateClock = () => {
  clock.textContent = new Date().toLocaleTimeString();
};

updateClock();
setInterval(updateClock, 1000);

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark",
    );
  });
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}
