import { plants } from "./plants.js";
let novenyek = plants;

export function tablazatKeszit() {
  let txt = `<div class="list-group-item"><table class="table table-striped"><tbody>`;


    for (const kulcs in novenyek[0]) {
        txt += `<th class="${kulcs}">${kulcs}</th>`;
    }

  for (let i = 0; i < novenyek.length; i++) {
    txt += `<tr>`;
    for (const kulcs in novenyek[i]) {
        if(kulcs=="kep"){
        }
        else{
            txt += `<td>${novenyek[i][kulcs]}</td>`;
        }
    }
    txt += `<td><i class="fa-solid fa-x" style="color: red"></i></td></tr>`
}
txt +=`</tbod></table></div>`;
  
return txt
}
