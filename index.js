const cartas = document.querySelectorAll(".carta");

const letras = ["a", "b" ,"c", "d", "f", "g", "a", "b" ,"c", "d", "f", "g"];

for (let i = 0; i < cartas.length; i++) {
    const element = cartas[i];
    element.setAttribute("data-carta", letras[i]);
    element.addEventListener("click", function () {
        segundaCarta(element)
        element.classList.add("activa")
        var letra = element.getAttribute("data-carta")
        manejarClickEnCarta(i, letra, element)
        
    })
};

function segundaCarta (element) {
    if (element.classList.contains("activa")) {
        console.log("es segunda")
    } else {
        console.log("es primera")
    }
}

function manejarClickEnCarta(i, letra, element) {
    console.log('click en carta', i, 'con letra', letra, element);
};





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
