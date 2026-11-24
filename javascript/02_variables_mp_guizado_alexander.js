// Variables con let, var y const - Reserva de vuelos
// Autor: Alexander Guizado
console.log("Sistema de reserva de vuelos");

let pasajero = "Alexander Guizado";
let asientosDisponibles = 120;
let destino = "Lima";
let vueloConfirmado = false;

console.log(pasajero);
console.log(asientosDisponibles);
console.log(destino);
console.log(vueloConfirmado);

// let permite reasignar el valor
asientosDisponibles = 119;
destino = "Bogotá";
vueloConfirmado = true;

console.log("Asientos disponibles:", asientosDisponibles);
console.log("Nuevo destino:", destino);
console.log("Vuelo confirmado:", vueloConfirmado);

// var (forma antigua de declarar variables)
var aerolinea = "Andina Air";
console.log("Aerolínea:", aerolinea);
aerolinea = "Pacífico Express";
console.log("Nueva aerolínea:", aerolinea);

// const no se puede reasignar
const origen = "Quito";
console.log("Origen del vuelo:", origen);
// origen = "Guayaquil"; // Error: no se puede reasignar una constante
