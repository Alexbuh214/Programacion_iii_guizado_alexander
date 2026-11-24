// Hello DOM - Reserva de vuelos
// Autor: Alexander Guizado
console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Reserva de Vuelos - Aerolínea Andina";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonReservar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    console.log("Click en confirmar reserva");
    estado.textContent = "¡Reserva confirmada!";
    mensaje.textContent = "Tu vuelo Quito - Lima sale a las 08:30";
    alert("Reserva completada con éxito");
});
