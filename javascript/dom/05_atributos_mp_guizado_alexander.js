// getAttribute, setAttribute, dataset y style - Reserva de vuelos
// Autor: Alexander Guizado
const avion = document.getElementById("avion");
const cambiar = document.getElementById("cambiar");
const verDestino = document.getElementById("verDestino");
const destino = document.getElementById("destino");

cambiar.addEventListener("click", function () {
    if (avion.getAttribute("title") === "Nacional") {
        avion.setAttribute("src", "imagenes/avion_internacional.svg");
        avion.setAttribute("alt", "Avión de vuelo internacional");
        avion.setAttribute("title", "Internacional");
        avion.dataset.destino = "Madrid";
    } else {
        avion.setAttribute("src", "imagenes/avion_nacional.svg");
        avion.setAttribute("alt", "Avión de vuelo nacional");
        avion.setAttribute("title", "Nacional");
        avion.dataset.destino = "Guayaquil";
    }
});

verDestino.addEventListener("click", function () {
    destino.textContent = "Destino: " + avion.dataset.destino;
});

const puerta = document.getElementById("puerta");
const abrirPuerta = document.getElementById("abrirPuerta");

abrirPuerta.addEventListener("click", function () {
    if (puerta.textContent === "Puerta cerrada") {
        puerta.style.backgroundColor = "green";
        puerta.style.color = "white";
        puerta.textContent = "Puerta abierta - abordando";
    } else {
        puerta.style.backgroundColor = "red";
        puerta.style.color = "white";
        puerta.textContent = "Puerta cerrada";
    }
});
