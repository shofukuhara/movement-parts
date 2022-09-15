const logo = document.querySelector(".splash__logo");
const splash = document.querySelector(".splash");

window.addEventListener("load", () => {
  setTimeout(() => {
    logo.classList.add("fade");
  }, 1000);
  setTimeout(() => {
    splash.classList.add("splash-bg");
  }, 1500);
});
