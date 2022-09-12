// const before = getComputedStyle(
//   document.querySelector(".box"),
//   "::before"
// ).width;

const play = document.querySelector(".box");
setTimeout(() => {
  play.classList.add("isPlay");
}, 1000);
