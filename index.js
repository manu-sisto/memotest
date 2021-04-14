const cartas = document.querySelectorAll(".carta");

const letras = ["A", "B", "C", "D", "F", "G", "A", "B", "C", "D", "F", "G"];

function mezclarArray(array) {
    array.sort(() => Math.random() - 0.5);
}
mezclarArray(letras);


let turnos = 0;

for (let i = 0; i < cartas.length; i++) {
    const element = cartas[i];
    element.setAttribute("letra", letras[i]);

    function chequearSiGano() {
        if (document.querySelectorAll(".borrada").length === 12) {
            document.getElementById("contador").remove()
            document.getElementById("final").innerHTML = "Felicitaciones! ganaste en " + turnos + " turnos."
        } else {
            console.log("Segui jugando")
        }
    }

    element.addEventListener("click", function () {

        if (element.classList.contains("borrada") === true) {
            return
        }
        if (element.classList.contains("borrada") === true) {
            return
        }

        turnos++;

        element.textContent = letras[i]
        const activas = document.querySelectorAll(".activa")
        element.classList.add("activa")
        if (activas.length == 0) {
            return
        }

        const activa = activas[0]
        const letraPrimeraCarta = activa.getAttribute("letra")
        function desactivarCarta(x) { x.classList.remove("activa") }
        function borrarCarta(x) { x.classList.add("borrada") }
        function taparCarta(x) { x.textContent = "CARTA TAPADA" }

        console.log("comparacion de cartas: ", letraPrimeraCarta, "contra", letras[i])

        if (letraPrimeraCarta == letras[i]) {
            console.log("son IGUALES")
            setTimeout(function () {
                activa.textContent = "";
                element.textContent = "";
                desactivarCarta(activa)
                desactivarCarta(element)
                borrarCarta(activa)
                borrarCarta(element)
            }, 1000);

        } else {
            console.log("no son iguales")
            setTimeout(function () {
                taparCarta(activa)
                taparCarta(element)
            }, 1000);
            desactivarCarta(activa)
            desactivarCarta(element);
        }
        document.getElementById("turnos").innerHTML = turnos;
        setTimeout(function () {
            chequearSiGano()
        }, 1000);
    })
};