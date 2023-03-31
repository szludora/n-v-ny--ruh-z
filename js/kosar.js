import { plants } from "../js/plants.js";

export function kosarGomb() {
    let kosarak = document.querySelectorAll(".fa-cart-shopping");
    for (let i = 0; i < kosarak.length; i++) {
      kosarak[i].addEventListener("click", function () {
        kosarhozAdas(i);
      });
    }
  }

function kosarhozAdas(i) {
    let elem = plants[i];
    localStorage.setItem(`${plants[i].nev}`, JSON.stringify(elem));
    const segedLISTA = JSON.parse(localStorage.getItem(`${plants[i].nev}`));
    let kosarIkon = document.querySelector(".fa-cart-shopping");
  console.log(localStorage)
  }

export function mennyiseg(){
    let kosar = document.querySelector(".mennyiseg")
    kosar.innerHTML += `${localStorage.length}`
  }

