import { tablazatKeszit } from "./tablazat.js";
import { plants } from "./plants.js";

window.addEventListener("load", () => {
  init();
  rendezo(plants)
});

const container = document.querySelector(".container-fluid");
let aktRendezes = {};

function init() {
  oldalKeszit();
}

function oldalKeszit(){
    let tablazat=tablazatKeszit();
  container.innerHTML=tablazat;
  rendezo(plants);
}

function rendezo(lista) {
    let gombok = document.querySelectorAll("th");
    let kulcs;
    for (let i = 0; i < gombok.length; i++) {
      kulcs = gombok[i].classList[0];
      gombok[i].addEventListener("click", () => {
        if (aktRendezes[kulcs] === "asc") {
          rendez(plants, kulcs, "desc");
          aktRendezes[kulcs] = "desc";
        } else {
          rendez(plants, kulcs, "asc");
          aktRendezes[kulcs] = "asc";
        }
      });
    }
  }
  
  function rendez(lista, kulcs, irany) {
    lista.sort(function (a, b) {
      let ertek = 1;
      if (a[kulcs] < b[kulcs]) {
        ertek = -1;
      }
      if (irany === "desc") {
        ertek *= -1;
      }
      return ertek;
    });
    oldalKeszit();
  }
