const cartas = document.querySelectorAll(".carta");

const letras = ["a", "b" ,"c", "d", "f", "g", "a", "b" ,"c", "d", "f", "g"];

for (let i = 0; i < cartas.length; i++) {
    const element = cartas[i];
    element.setAttribute("data-carta", letras[i]);
    element.addEventListener("click", function() {
        var data = element.getAttribute("data-carta")
        manejarClickEnCarta(i, data)
    })
};

function manejarClickEnCarta(i, letra) {
    console.log('Click en la carta', i, 'con letra', letra)
}

//document.querySelectorAll(".carta").forEach((carta) => carta.addEventListener('click', () => alert('me hicieron click')))
