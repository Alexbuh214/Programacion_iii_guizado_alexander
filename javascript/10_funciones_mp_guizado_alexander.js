// Funciones - Reserva de vuelos
// Autor: Alexander Guizado
console.log("Funciones en JavaScript");

// Función sin parámetros
function mostrarBienvenida() {
    console.log("Bienvenido al sistema de reserva de vuelos.");
}
mostrarBienvenida();

// Función con parámetro
function saludarPasajero(nombre) {
    console.log("Hola " + nombre + ", tu reserva está en proceso.");
}
saludarPasajero("Alexander");
saludarPasajero("María");

// Función con return
function calcularTotal(precioBoleto, pasajeros) {
    return precioBoleto * pasajeros;
}
let total = calcularTotal(310, 3);
console.log("Total a pagar por 3 pasajeros: $" + total);

// Función con validación y límite
function asignarMillas(millasActuales, millasGanadas) {
    let nuevoTotal = millasActuales + millasGanadas;
    if (nuevoTotal > 50000) {
        nuevoTotal = 50000;
        console.log("Se alcanzó el máximo de millas.");
    }
    return nuevoTotal;
}
let misMillas = 48000;
misMillas = asignarMillas(misMillas, 1500);
misMillas = asignarMillas(misMillas, 1500);
console.log("Millas finales: " + misMillas);

// Función de descuento
function aplicarDescuento(precio, porcentaje) {
    return precio - (precio * (porcentaje / 100));
}
console.log("Precio con 15% de descuento: $" + aplicarDescuento(400, 15));

// Función que evalúa varias condiciones
function validarEquipaje(peso, clase) {
    let limite = clase === "economica" ? 23 : 32;
    if (peso <= limite) {
        console.log("Equipaje de " + peso + " kg aprobado para clase " + clase + ".");
    } else {
        console.log("Equipaje excede el límite de " + limite + " kg. Cargo extra.");
    }
}
validarEquipaje(20, "economica");
validarEquipaje(28, "economica");
validarEquipaje(28, "ejecutiva");

// Función que usa otra función
function resumenReserva(nombre, destino, precio, pasajeros) {
    let totalReserva = calcularTotal(precio, pasajeros);
    return nombre + " reservó " + pasajeros + " boleto(s) a " + destino + " por $" + totalReserva;
}
console.log(resumenReserva("Alexander Guizado", "Lima", 310, 2));

// Función flecha
const calcularImpuesto = (precio) => precio * 0.12;
console.log("Impuesto de un boleto de $300: $" + calcularImpuesto(300));
