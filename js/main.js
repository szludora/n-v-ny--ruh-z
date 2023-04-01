import { divBuilding } from "./building.js";
import { mutat } from "./showImage.js";
import { kosarGomb, mennyiseg } from "./kosar.js";

window.addEventListener("load", () => {
  init();
});

const container = document.querySelector(".container-fluid");

function init() {
  let szoveg = divBuilding();
  container.innerHTML += szoveg;
  let mutato = document.querySelectorAll(".mutat");
  let kepek = document.querySelectorAll("img");
  mutat(mutato, kepek);
  mennyiseg();
  kosarGomb();
}



