// Operadores - Reserva de vuelos
// Autor: Alexander Guizado
console.log("Operadores aritméticos");
let precioBoleto = 300;
let impuestos = 45;

console.log("Suma (boleto + impuestos):", precioBoleto + impuestos);
console.log("Resta (descuento de $50):", precioBoleto - 50);
console.log("Multiplicación (3 pasajeros):", precioBoleto * 3);
console.log("División (pago en 4 cuotas):", precioBoleto / 4);
console.log("Módulo (asientos sobrantes en filas de 6):", 125 % 6);

console.log("Operadores de comparación");
let asientosLibres = 10;
let pasajerosEnEspera = 8;
console.log("Igualdad:", asientosLibres == pasajerosEnEspera);
console.log("Desigualdad:", asientosLibres != pasajerosEnEspera);
console.log("Mayor que:", asientosLibres > pasajerosEnEspera);
console.log("Menor que:", asientosLibres < pasajerosEnEspera);
console.log("Mayor o igual que:", asientosLibres >= pasajerosEnEspera);
console.log("Menor o igual que:", asientosLibres <= pasajerosEnEspera);

console.log("Operadores lógicos");
let tienePasaporte = true;
let tieneVisa = false;
console.log("AND (pasaporte y visa):", tienePasaporte && tieneVisa);
console.log("OR (pasaporte o visa):", tienePasaporte || tieneVisa);
console.log("NOT (sin pasaporte):", !tienePasaporte);

console.log("Operadores de asignación");
let millas = 1000;
console.log("Millas iniciales:", millas);
millas += 500;
console.log("Después de un vuelo (+= 500):", millas);
millas -= 200;
console.log("Después de canjear (-= 200):", millas);
millas *= 2;
console.log("Promoción doble (*= 2):", millas);
millas /= 4;
console.log("Dividido entre 4 (/= 4):", millas);
millas %= 300;
console.log("Residuo (%= 300):", millas);

console.log("Incremento y decremento");
let maletas = 1;
maletas++;
console.log("Después de agregar una maleta:", maletas);
maletas--;
console.log("Después de quitar una maleta:", maletas);

console.log("Concatenación");
let nombre = "Alexander";
let apellido = "Guizado";
console.log("Pasajero: " + nombre + " " + apellido);

console.log("Comparación estricta");
let numeroVuelo = 204;
let numeroVueloTexto = "204";
console.log("== :", numeroVuelo == numeroVueloTexto);   // true
console.log("===:", numeroVuelo === numeroVueloTexto);  // false
console.log("!==:", numeroVuelo !== numeroVueloTexto);  // true

console.log("Operador ternario");
let edadPasajero = 15;
let tarifa = (edadPasajero >= 18) ? "Tarifa adulto" : "Tarifa menor de edad";
console.log(tarifa);

console.log("Template literals: precio por número de pasajeros");
for (let i = 1; i <= 5; i++) {
    console.log(`${i} pasajero(s) x $${precioBoleto} = $${precioBoleto * i}`);
}
