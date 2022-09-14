const logo = document.querySelector(".splash__logo");
const splash = document.getElementById("splash");

window.addEventListener("load", () => {
  setTimeout(() => {
    logo.classList.add("fade");
    splash.classList.add("splash");
  }, 1000);
});
