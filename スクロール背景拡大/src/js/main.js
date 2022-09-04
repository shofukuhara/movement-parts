window.addEventListener("scroll", () => {
  let bg = document.querySelector(".bg__img");
  let scrollY = window.scrollY / 10;
  bg.style.backgroundSize = 100 + scrollY + "%";
});
