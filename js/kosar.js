import { plants } from "../js/plants.js";

export function kosarGomb() {
  $(".fa-cart-shopping").on("click", function (event) {
    let itemId = $(event.target).attr("data-item-id")
      kosarhozAdas(itemId);
    })
}

export function kosarhozAdas(i) {
  let elem = plants.items[i];
  localStorage.setItem(`${plants.items[i].nev}`, JSON.stringify(elem));
  // const segedLISTA = JSON.parse(localStorage.getItem(`${plants.items[i].nev}`));
  let kosarIkon = $(".kosar");
  kosarIkon.html(`<div class="kosar">
  <button>
    <i class="fa-solid fa-shopping-cart nagyIkon"></i>
    <p class="mennyiseg">${localStorage.length}</p>
  </button>
</div>`);
}

export function mennyiseg() {
  let kosar = $(".mennyiseg");
  kosar.html(localStorage.length);
}

