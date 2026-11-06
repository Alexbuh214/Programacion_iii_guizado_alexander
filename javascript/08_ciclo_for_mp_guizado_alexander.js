// Ciclo for - Reserva de vuelos
// Autor: Alexander Guizado
console.log("Asientos de la fila 1");
for (let i = 1; i <= 6; i++) {
    console.log("Asiento 1-" + i);
}

console.log("Cuenta regresiva para el despegue");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Despegue!");
    } else {
        console.log("Faltan " + i + " segundos");
    }
}

console.log("Acumulador: millas ganadas en 5 vuelos");
let millasPorVuelo = 800;
let totalMillas = 0;
for (let vuelo = 1; vuelo <= 5; vuelo++) {
    totalMillas += millasPorVuelo;
    console.log("Vuelo " + vuelo + ": total de millas = " + totalMillas);
}

console.log("Promedio de reservas por día");
let totalReservas = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let reservas = dia * 10 + 20;
    totalReservas += reservas;
    console.log("Día " + dia + ": " + reservas + " reservas");
}
console.log("Promedio por día: " + (totalReservas / dias).toFixed(2));

console.log("Asientos de ventana y pasillo");
let ventana = 0;
let pasillo = 0;
for (let asiento = 1; asiento <= 10; asiento++) {
    if (asiento % 2 === 0) {
        pasillo++;
    } else {
        ventana++;
    }
}
console.log("Ventana: " + ventana + " | Pasillo: " + pasillo);

console.log("Recorrer un arreglo de precios");
let precios = [310, 255, 340, 199, 890];
let vuelosBaratos = 0;
for (let i = 0; i < precios.length; i++) {
    console.log("Vuelo " + (i + 1) + ": $" + precios[i]);
    if (precios[i] < 300) {
        vuelosBaratos++;
    }
}
console.log("Vuelos de menos de $300: " + vuelosBaratos);

console.log("for...of: destinos");
const destinos = ["Lima", "Bogotá", "Galápagos", "Madrid"];
for (let destino of destinos) {
    console.log("Destino:", destino);
}

console.log("for...in: datos de la reserva");
let reserva = {
    codigo: "QX7-2026",
    pasajero: "Alexander Guizado",
    destino: "Lima",
    asiento: "12A"
};
for (let propiedad in reserva) {
    console.log(propiedad + ":", reserva[propiedad]);
}

console.log("Arreglo de objetos: ocupación de vuelos");
let vuelos = [
    { codigo: "AG-204", reservados: 170, capacidad: 180 },
    { codigo: "AG-210", reservados: 95, capacidad: 180 },
    { codigo: "AG-218", reservados: 178, capacidad: 180 }
];
let vuelosLlenos = 0;
for (let vuelo of vuelos) {
    let ocupacion = (vuelo.reservados / vuelo.capacidad) * 100;
    console.log(vuelo.codigo + ": " + ocupacion.toFixed(2) + "% de ocupación");
    if (ocupacion >= 90) {
        vuelosLlenos++;
    }
}
console.log("Vuelos casi llenos: " + vuelosLlenos);

console.log("continue: saltar asientos ocupados");
let ocupados = [3, 5];
for (let asiento = 1; asiento <= 6; asiento++) {
    if (ocupados.includes(asiento)) {
        continue;
    }
    console.log("Asiento libre: " + asiento);
}

console.log("break: primer asiento libre en emergencia");
for (let asiento = 1; asiento <= 6; asiento++) {
    if (!ocupados.includes(asiento) && asiento > 3) {
        console.log("Asiento de salida de emergencia asignado: " + asiento);
        break;
    }
}
