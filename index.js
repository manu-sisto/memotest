const cartas = document.querySelectorAll(".carta");

const letras = ["a", "b" ,"c", "d", "f", "g", "a", "b" ,"c", "d", "f", "g"];

for (let i = 0; i < cartas.length; i++) {
    const element = cartas[i];
    element.setAttribute("data-carta", letras[i]);
    element.addEventListener("click", function() {
        manejarClickEnCarta(element)
    })
};

function manejarClickEnCarta(element) {
    var letra = element.getAttribute("data-carta")
    element.innerText = letra
    // TODO si estaba dada vuelta la tengo que "esconder"
    // TODO si otra estaba dada vuelta tengo que hacer la cosa loca
}

