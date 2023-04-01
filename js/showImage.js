export function mutat(gombok, kepek) {
  let nyitva = false;

  $(gombok).click(function (event) {
    let id = $(event.target).attr("data-id")
    nyitva = felfed(id, kepek, nyitva);
  });
}

function felfed(id, kepek, nyitva) {
  if (!nyitva) {
    kepek.eq(id).addClass("felfed");
    nyitva = true;
  } else {
    kepek.eq(id).removeClass("felfed");
    nyitva = false;
  }
  return nyitva;
}
