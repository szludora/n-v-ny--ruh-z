import { plants } from "./plants.js";
let novenyek = plants;

export function divBuilding() {
  let txt = `<div class=row>`;

  for (let i = 0; i < novenyek.length; i++) {
    txt += `<div class="col-lg-3 col-sm-5 col-md-3 card border m-2 mx-auto">`;
    for (const kulcs in novenyek[i]) {
        if(kulcs=="kep"){
            txt += `<img class="card-img-top kiskepek" src="images/${novenyek[i][kulcs]}" style="visibility: hidden;"><div class="card-body">`
        }
        else if(kulcs=="nev"){

            txt += `<h4 class="card-title p-3 bg-success text-white ">${novenyek[i][kulcs]}</h4>`
        }
        else{
            txt += `<p class="card-text">${kulcs}: ${novenyek[i][kulcs]}</p>`;

        }
    }
    txt += `<div class="formazni text-center"><button type="button" class="btn btn-outline-success mx-auto mutat">Mutat</button><button type="button" onclick="openModal();currentSlide(${i+1})" class="btn btn-outline-success mx-auto nagyit">Nagyit</button><i class="fa-solid fa-cart-shopping" style="font-size: 25px; color: green; margin-left: 25px;"></i></div></div></div>`;
  }

  txt += `</div>`;
  return txt;
}
