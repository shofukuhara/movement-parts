const stalker = document.getElementById("stalker");
let hover = false;
const btn = document.querySelector(".btn");

document.addEventListener("mousemove", (e) => {
  if (!hover) {
    stalker.style.transform =
      "translate(" + e.clientX + "px," + e.clientY + "px)";
  }
});

btn.addEventListener("mouseover", () => {
  hover = true;
  stalker.classList.add("hov_");
});

btn.addEventListener("mouseout", () => {
  hover = false;
  stalker.classList.remove("hov_");
});
