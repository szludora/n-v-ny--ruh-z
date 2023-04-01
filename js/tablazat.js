import { plants } from "./plants.js";
let novenyek = plants;
let rendKulcs = "";
let rendIrany = "";

export function fejleckatt() {
  let thk = $("th");
  
    thk.on("click", function (event) {
      let field = $(event.target).attr("data-field")
      rendezes(plants, field);
   
  })
}

export function tablazatKeszit() {
  let txt = `<table class="table table-striped"><tbody>`;

  for (const kulcs in novenyek[0]) {
    if(kulcs == "kep"){
      continue
    }
    txt += `<th data-field="${kulcs}">${kulcs}</th>`;
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

  lista.sort(function (a, b) {
    let sorrend = 1;
    if (a[kulcs] < b[kulcs])
      sorrend = -1;
    if (rendIrany == "csokkeno") {
      sorrend *= -1;
    }
    return sorrend;
  });

  let tablaaa = $("table");
  tablaaa.html(tablazatKeszit());
  fejleckatt();
}
