// Tipos de datos - Reserva de vuelos
// Autor: Alexander Guizado
let pasajero = "Alexander Guizado";       // string
let edad = 21;                             // number
let esMenorDeEdad = false;                 // boolean
let precioBoleto = 310.50;                 // number (decimal)
let escalas = ["Bogotá", "Panamá"];        // array (object)
let vuelo = {                              // object
    codigo: "AG-204",
    origen: "Quito",
    destino: "Lima"
};
let asientoAsignado;                       // undefined
let mascota = null;                        // null

console.log("Pasajero:", pasajero, "| tipo:", typeof pasajero);
console.log("Edad:", edad, "| tipo:", typeof edad);
console.log("Es menor de edad:", esMenorDeEdad, "| tipo:", typeof esMenorDeEdad);
console.log("Precio del boleto:", precioBoleto, "| tipo:", typeof precioBoleto);
console.log("Escalas:", escalas, "| tipo:", typeof escalas);
console.log("¿Escalas es un arreglo?", Array.isArray(escalas));
console.log("Vuelo:", vuelo, "| tipo:", typeof vuelo);
console.log("Asiento asignado:", asientoAsignado, "| tipo:", typeof asientoAsignado);
console.log("Mascota:", mascota, "| tipo:", typeof mascota);
