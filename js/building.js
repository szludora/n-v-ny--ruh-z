import { plants } from "./plants.js";
let novenyek = plants;

export function divBuilding() {
  let txt = `<div class="row">`;

  for (let i = 0; i < novenyek.length; i++) {
    txt += `<div class="col-lg-4 col-md-6 col-sm-12  card border mx-auto">`;
    for (const kulcs in novenyek[i]) {
        if(kulcs=="kep"){
            txt += `<img class="card-img-top kiskepek" src="images/${novenyek[i][kulcs]}" style="visibility: hidden;"><div class="card-body ${novenyek[i].nev}">`
        }
        else if(kulcs=="nev"){

            txt += `<h4 class="card-title p-3 bg-success text-white ">${novenyek[i][kulcs]}</h4>`
        }
        else{
            txt += `<p class="card-text">${kulcs}: ${novenyek[i][kulcs]}</p>`;

        }
    }
    txt += `<div class="formazni text-center"><button type="button" data-id="${i}" class="btn btn-outline-success mx-auto mutat">Mutat</button><button type="button" onclick="openModal();currentSlide(${i+1})" class="btn btn-outline-success mx-auto nagyit">Nagyit</button><i class="fa-solid fa-cart-shopping" data-item-id="${i}" style="font-size: 25px; color: green; margin-left: 25px;"></i></div></div></div>`;
  }

  txt += `</div>`;
  return txt;
}
