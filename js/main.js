import { divBuilding } from "./building.js";
import { mutat } from "./showImage.js";
import { kosarGomb, mennyiseg } from "./kosar.js";
import {kosarKatt, kosarbolTorol, rendeles, rendelesKeszito} from "./proba.js";
const container = $(".container-fluid");

$(function(){
  let szoveg = divBuilding();
  container.html(szoveg);
  let gombok = $(".mutat");
  let kepek = $("img");
  mutat(gombok, kepek);
  mennyiseg();
  kosarGomb();

  $(".kosar").on("click", kosarKatt)
  $(".kosar").on("click", ".torlesGomb", kosarbolTorol);

})
