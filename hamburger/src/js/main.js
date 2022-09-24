const open = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__menu");
const close = document.querySelector(".header__menu-hamburger");

open.addEventListener("click", () => {
  menu.classList.add("display");
  setTimeout(() => {
    close.classList.toggle("display");
  }, 500);
});

close.addEventListener("click", () => {
  close.classList.remove("display");
  setTimeout(() => {
    menu.classList.remove("display");
  }, 500);
});
