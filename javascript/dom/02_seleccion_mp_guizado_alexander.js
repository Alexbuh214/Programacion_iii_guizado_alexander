// Selección de elementos - Reserva de vuelos
// Autor: Alexander Guizado

// Selección por id
const vuelo = document.getElementById("vuelo");
const destino = document.getElementById("destino");
const puerta = document.getElementById("puerta");

vuelo.textContent = "Vuelo: AG-204";
destino.textContent = "Destino: Lima";
puerta.textContent = "Puerta: 5";

// querySelector: selecciona el PRIMER elemento con la clase
const primerPasajero = document.querySelector(".pasajero");
primerPasajero.textContent = "Alexander Guizado - Asiento 12A";

// querySelectorAll: selecciona TODOS los elementos con la clase
const pasajeros = document.querySelectorAll(".pasajero");
console.log("Total de pasajeros:", pasajeros.length);
pasajeros[1].textContent = "María López - Asiento 12B";
pasajeros[2].textContent = "Luis Pérez - Asiento 12C";
