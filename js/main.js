import { plants } from "./plants.js";
import { divBuilding } from "./building.js";
import { mutat } from "./showImage.js";
import { kosarGomb, mennyiseg } from "./kosar.js";
import {
  kosarKatt,
  kosarbolTorol,
  rendeles,
  rendelesKeszito,
} from "./proba.js";
let container = $(".container-fluid");

$(function () {
  let url = "js/adatok.json";
  betolt(url, megjelenit);

  
});

function betolt(url, callbackFv) {
  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      callbackFv(data);
    })
    .catch((err) => console.log(err));
}

function megjelenit(adat){
  plants.items = adat;
  console.log("megjelenit", plants.items)

  let szoveg = divBuilding();
  container.html(szoveg);
  let gombok = $(".mutat");
  let kepek = $("img");
  mutat(gombok, kepek);
  mennyiseg();
  kosarGomb();

  $(".kosar").on("click",
    kosarKatt
   );

  $(".kosar").on("click", ".torlesGomb", kosarbolTorol);
}
