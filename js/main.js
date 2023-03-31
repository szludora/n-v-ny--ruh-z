import { divBuilding } from "./building.js"
import { mutat} from "./showImage.js";
window.addEventListener("load", () => {
    init();
  })

const container = document.querySelector(".container-fluid")


function init(){
    let szoveg = divBuilding();
    container.innerHTML += szoveg;
    let mutato = document.querySelectorAll(".mutat");
    let nagyito = document.querySelectorAll(".nagyit");
    let kepek = document.querySelectorAll("img")
    mutat(mutato, kepek);
}

;
