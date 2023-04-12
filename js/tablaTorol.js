export function gombKatt() {
  let gombok = $(".fa-x");

  gombok.on("click", function () {
    torol(this.parentElement.parentElement);
  });
}

function torol(tr) { 
let sor = $(tr)
sor.remove()
}
