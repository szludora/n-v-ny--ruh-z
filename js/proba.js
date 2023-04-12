let kosarNyitva = false;



export function kosarKatt(event) {
  let target = $(event.target)
  if (!target.hasClass("torlesGomb")) {
    if (
      target.hasClass("kosar") ||
      target.hasClass("fa-shopping-cart")
    ) {
      if (!kosarNyitva) {
        tartalomMegnez();
        kosarNyitva = true;
      } else {
        gombBezar();
        kosarNyitva = false;
      }
    }
  }
}

export function tartalomMegnez() {
  let gomb = $(".kosar");
  let kulcsok = Object.keys(localStorage);
  gomb.addClass("kattintott");
  setTimeout(function () {
    let txt = "";
    for (var i = 0; i < localStorage.length; i++) {
      txt += `<p class="torles ${localStorage.key(
        i
      )}"><input type="number" id="quantity${i}" name="quantity" min="1" max="5" value="1">${localStorage.key(
        i
      )}&nbsp&nbsp&nbsp&nbsp<i class="${localStorage.key(
        i
      )} fa-sharp fa-solid fa-trash torlesGomb" data-key="${localStorage.key(
        i
      )}"></i></p>`;
    }
    txt += `<button type="button" class="rendel">Rendel</button>`;
    gomb.append(txt);
  }, 1400);
  $(document).on("click", ".rendel", function() {
    rendeles(document)});
}

export function gombBezar() {
  let gomb = document.querySelector(".kosar");
  gomb.innerHTML = `<button><i class="fa-solid fa-shopping-cart"></i><p class="mennyiseg">${localStorage.length}</p></button>`;
  gomb.classList.remove("kattintott");
}

export function kosarbolTorol(event) {
  let sorok = $(".kosar p");
  let kulcs = $(".torlesGomb").attr("data-key")
  let parent = $(event.target).parent()
  parent.remove()
 
  let mennyiseg = $(".mennyiseg");
   
  localStorage.removeItem(kulcs);
  mennyiseg.innerHTML = `<p class="mennyiseg">${localStorage.length}</p>`;
}


export function rendeles(document) {
  let rendeleseim = [];
  let inputok = document.querySelectorAll("input");

  for (let i = 0; i < inputok.length; i++) {
      let lista = [`${inputok[i].value}`, `${localStorage.key(i)}`]
      rendeleseim.push(lista);
  }
  
  let szoveg = rendelesKeszito(rendeleseim);
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
  let print_area = window.open();
  print_area.document.write(szoveg);
  print_area.document.close();
      print_area.focus();
      print_area.print();
  }
}

export function rendelesKeszito(rendeleseim) {
  let txt = `<table class="table table-striped"><tbody><th>Mennyiség</th><th>Megnevezés</th>`;
  for (let i = 0; i < rendeleseim.length; i++) {
      txt += `<tr>`
      for (let j = 0; j < rendeleseim[i].length; j++) {
          txt += `<td>${rendeleseim[i][j]}</td>`;
      }
      txt += `</tr>`
  }
  txt += `</tbody></table>`;
  return txt;
}

