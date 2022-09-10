const stalker = document.getElementById("stalker");

document.addEventListener("mousemove", (e) => {
  stalker.style.transform =
    "translate(" + e.clientX + "px," + e.clientY + "px)";
});
