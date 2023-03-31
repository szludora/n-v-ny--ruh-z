export function mutat(gombok, kepek){
    let nyitva = false;

        for (let i = 0; i < gombok.length; i++) {
            gombok[i].addEventListener("click", function(){nyitva = felfed(i, kepek, nyitva)})
        }
   
}

function felfed(i, kepek, nyitva){
    if(!nyitva){
        kepek[i].classList.add("felfed");
        nyitva = true;
    }else{
        kepek[i].classList.remove("felfed");
        nyitva = false;

    }
    return nyitva
}

