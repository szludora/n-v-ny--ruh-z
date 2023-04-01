import { plants } from "./plants.js";
let novenyek = plants;
let rendKulcs = "";
let rendIrany = "";

export function fejleckatt() {
  console.log("fejleckatt");
  let thk = document.querySelectorAll("th");
  for (let i = 0; i < thk.length; i++) {
    thk[i].addEventListener("click", function () {
      rendezes(plants, thk[i].classList[0]);
    });
  }
}

export function tablazatKeszit() {
  let txt = `<table class="table table-striped"><tbody>`;

  for (const kulcs in novenyek[0]) {
    if(kulcs == "kep"){
      continue
    }
    txt += `<th class="${kulcs}">${kulcs}</th>`;
  }

  for (let i = 0; i < novenyek.length; i++) {
    txt += `<tr>`;
    for (const kulcs in novenyek[i]) {
      if (kulcs == "kep") {
      } else {
        txt += `<td>${novenyek[i][kulcs]}</td>`;
      }
    }
    txt += `<td><i class="fa-solid fa-x" style="color: red"></i></td></tr>`;
  }
  txt += `</tbody></table>`;

  return txt;
}

function rendezes(lista, kulcs) {  
  if (rendKulcs == kulcs) {
    if (rendIrany == "novekvo") {
      rendIrany = "csokkeno";
    } else {
      rendIrany = "novekvo";
    }
  } else {
    rendIrany = "novekvo";
    rendKulcs = kulcs;
  }
  console.log("rendezés", rendKulcs, rendIrany)

  lista.sort(function (a, b) {
    let sorrend = 1;
    if (a[kulcs] < b[kulcs])
      sorrend = -1;
    if (rendIrany == "csokkeno") {
      sorrend *= -1;
    }
    console.log("cmp", rendIrany, a[kulcs], b[kulcs], a[kulcs] < b[kulcs])
    return sorrend;
  });

  console.log("rendezett", lista)
  let tablaaa = document.querySelector("table");
  tablaaa.innerHTML = tablazatKeszit();
  fejleckatt();
}
