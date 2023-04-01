import { tablazatKeszit } from "./tablazat.js";

window.addEventListener("load", () => {
  init();
});

const container = document.querySelector(".container-fluid");

function init() {
  let tablazat=tablazatKeszit();
  container.innerHTML+=tablazat;
}



