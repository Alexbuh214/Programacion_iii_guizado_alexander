// Ciclos while y do...while - Reserva de vuelos
// Autor: Alexander Guizado
console.log("Abordaje por grupos");
let grupo = 1;
while (grupo <= 4) {
    console.log("Abordando grupo " + grupo);
    grupo++;
}
console.log("Todos los grupos abordaron.");

console.log("Carga de combustible");
let combustible = 20;
let carga = 15;
let cargas = 0;
while (combustible < 100) {
    combustible += carga;
    if (combustible > 100) {
        combustible = 100;
    }
    cargas++;
    console.log("Combustible: " + combustible + "%");
}
console.log("Tanque lleno después de " + cargas + " cargas.");

console.log("Vender asientos hasta que se acaben");
let asientos = 10;
let porReserva = 3;
let reservas = 0;
while (asientos >= porReserva) {
    asientos -= porReserva;
    reservas++;
    console.log("Reserva " + reservas + ": quedan " + asientos + " asientos");
    if (asientos < 5) {
        console.log("Advertencia: quedan pocos asientos.");
    }
}

console.log("do...while: intentos de pago");
let intentos = 0;
let pagoAprobado = false;
do {
    intentos++;
    console.log("Intento de pago " + intentos);
    if (intentos === 3) {
        pagoAprobado = true;
    }
} while (!pagoAprobado && intentos < 5);
console.log(pagoAprobado ? "Pago aprobado." : "Pago rechazado.");

console.log("do...while: ahorrar para un boleto");
let ahorro = 100;
let precioBoleto = 450;
let ahorroSemanal = 60;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": ahorro $" + ahorro);
} while (ahorro < precioBoleto);
console.log("Boleto comprado en " + semanas + " semanas.");

console.log("while con continue y break: sumar millas");
let millas = [200, 1500, 800, 3000, 1200];
let meta = 4000;
let totalMillas = 0;
let indice = 0;
while (indice < millas.length) {
    let vuelo = millas[indice];
    indice++;
    if (vuelo < 500) {
        console.log("Vuelo de " + vuelo + " millas no acumula.");
        continue;
    }
    totalMillas += vuelo;
    console.log("Millas acumuladas: " + totalMillas);
    if (totalMillas >= meta) {
        console.log("¡Meta de millas alcanzada!");
        break;
    }
}
