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
  let kosarIkon = document.querySelector(".kosar");
  kosarIkon.outerHTML = `<div class="kosar" onclick="kosarKatt(event)">
  <button>
    <i class="fa-solid fa-shopping-cart nagyIkon"></i>
    <p class="mennyiseg">${localStorage.length}</p>
  </button>
</div>`;


}

export function mennyiseg() {
  let kosar = document.querySelector(".mennyiseg");
  kosar.innerHTML += `${localStorage.length}`;
}
