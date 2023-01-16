window.addEventListener(
  "error",
  function (e) {
    console.log(e);
    document.querySelector(".root").textContent = e.target;
  },
  true
);
