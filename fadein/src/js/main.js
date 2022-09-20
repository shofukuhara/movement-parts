document.querySelector(".item").animate(
  [
    {
      transform: "translateY(500px)",
      opacity: 0,
    },
    {
      transform: "translateY(0)",
      opacity: 1,
    },
  ],
  { duration: 1000, fill: "forwards" }
);
