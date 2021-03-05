const cartas = document.querySelectorAll(".carta");
const letras = ["a", "b", "c", "d", "f", "g", "a", "b", "c", "d", "f", "g"];


for (let i = 0; i < cartas.length; i++) {
    const element = cartas[i];
    element.setAttribute("data-carta", letras[i]);
    element.addEventListener("click", function () {
        
        const borrada = element.classList.contains("borrada")
        if (borrada === true) {
            return
        }

        element.textContent = letras[i]
        const activas = document.querySelectorAll(".activa")
        element.classList.add("activa");
        if (activas.length == 0 ) {
            return
        }
        
        const activaAhora = activas[0]
        const letraActivaAhora = activaAhora.getAttribute("data-carta")
        console.log( "comparacion de cartas: ", letraActivaAhora, letras[i] )
        if (letraActivaAhora == letras[i]) { 
            console.log("son IGUALES")
            activaAhora.textContent = "";
            element.textContent = "";
            activaAhora.classList.remove("activa")
            element.classList.remove("activa")
            activaAhora.classList.add("borrada")
            element.classList.add("borrada");
            //eliminar cartas ambas
        } else {
            console.log("no son iguales")
            activaAhora.textContent = "CARTA TAPADA"
            element.textContent = "CARTA TAPADA"
            activaAhora.classList.remove("activa")
            element.classList.remove("activa");
            //tapar cartas
        }
        var letra = element.getAttribute("data-carta")
        //manejarClickEnCarta(i, letra, element)
    })
};

function dameLetraActiva() {
    for (let i = 0; i < cartas.length; i++) {
        const carta = cartas[i]
        console.log(carta)
        if (carta.classList.contains("activa")) {
            
            return carta.getAttribute("data-carta");
        }
    }
}


function manejarClickEnCarta(i, letra) {
    console.log('click en carta', i, 'con letra', letra);
}

    //hacer click en primera carta?
    //si o no?
    //si, entonces dar vuelta. y volver al principio de funcion (recursion)
    //no, entonces dar vuelta y mostrar carta y...
        //si es igual a la primera, eliminar las 2.
        //no es igual, tapar las 2 cartas.
            //quedan mas cartas?
            //si, recursion.
            //no, ganaste!




//document.querySelectorAll(".carta").forEach((carta) => carta.addEventListener('click', () => alert('me hicieron click')))


