import { tablazatKeszit } from "./tablazat.js";
import {fejleckatt} from "./tablazat.js"

window.addEventListener("load", () => {
  init();
});

const container = document.querySelector(".tableParent");

function init() {
  let tablazat=tablazatKeszit();
  container.innerHTML+=tablazat;
  fejleckatt()

  
}



