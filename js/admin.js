import { tablazatKeszit } from "./tablazat.js";
import { fejleckatt } from "./tablazat.js";
import { gombKatt } from "./tablaTorol.js";

let container;
container = $(".container-fluid");

$(function () {
  container = $(".tableParent");
  let tablazat = tablazatKeszit();
  container.html(tablazat);
  fejleckatt();
  gombKatt();
});


function init() {
  let tablazat=tablazatKeszit();
  container.innerHTML+=tablazat;
}



