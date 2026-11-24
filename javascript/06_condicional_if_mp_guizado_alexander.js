// Condicionales if - Reserva de vuelos
// Autor: Alexander Guizado
console.log("If simple");
let asientosDisponibles = 12;
if (asientosDisponibles > 0) {
    console.log("Hay asientos disponibles para reservar.");
}

console.log("If - else");
let saldo = 250;
let precioBoleto = 310;
if (saldo >= precioBoleto) {
    console.log("Pago aprobado.");
} else {
    console.log("Saldo insuficiente. Faltan $" + (precioBoleto - saldo));
}

console.log("If - else if - else");
let clase = "ejecutiva";
if (clase === "economica") {
    console.log("Incluye 1 maleta de mano.");
} else if (clase === "ejecutiva") {
    console.log("Incluye 2 maletas y acceso a sala VIP.");
} else if (clase === "primera") {
    console.log("Incluye 3 maletas, sala VIP y comida gourmet.");
} else {
    console.log("Clase no reconocida.");
}

console.log("If anidado");
let tienePasaporte = true;
let vueloInternacional = true;
if (vueloInternacional) {
    if (tienePasaporte) {
        console.log("Puede abordar el vuelo internacional.");
    } else {
        console.log("Necesita pasaporte para viajar.");
    }
}

console.log("Validación completa de abordaje");
let documentoValido = true;
let checkInRealizado = true;
let pesoMaleta = 25;
let pagoConfirmado = true;
let vueloCancelado = false;

if (documentoValido &&
    checkInRealizado &&
    pesoMaleta <= 23 &&
    pagoConfirmado &&
    !vueloCancelado) {
    console.log("Abordaje autorizado.");
} else {
    if (!documentoValido) {
        console.log("Documento no válido.");
    }
    if (!checkInRealizado) {
        console.log("Falta realizar el check-in.");
    }
    if (pesoMaleta > 23) {
        console.log("La maleta excede el peso permitido (" + pesoMaleta + " kg).");
    }
    if (!pagoConfirmado) {
        console.log("El pago no ha sido confirmado.");
    }
    if (vueloCancelado) {
        console.log("El vuelo fue cancelado.");
    }
}

console.log("Ocupación del vuelo");
let capacidad = 180;
let reservados = 162;
let porcentajeOcupacion = (reservados / capacidad) * 100;
if (porcentajeOcupacion >= 90) {
    console.log("Vuelo casi lleno.");
} else if (porcentajeOcupacion >= 70) {
    console.log("Ocupación alta.");
} else if (porcentajeOcupacion >= 50) {
    console.log("Ocupación media.");
} else {
    console.log("Ocupación baja.");
}
console.log("Porcentaje de ocupación:", porcentajeOcupacion.toFixed(2) + "%");
