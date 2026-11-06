// Switch - Reserva de vuelos
// Autor: Alexander Guizado
let opcionMenu = 2;
switch (opcionMenu) {
    case 1:
        console.log("Buscar vuelos");
        break;
    case 2:
        console.log("Mis reservas");
        break;
    case 3:
        console.log("Check-in en línea");
        break;
    default:
        console.log("Opción no válida");
}

let destino = "Galápagos";
switch (destino) {
    case "Lima":
        console.log("Vuelo internacional, requiere documento de identidad.");
        break;
    case "Galápagos":
        console.log("Vuelo nacional, requiere tarjeta de control de tránsito.");
        break;
    case "Madrid":
        console.log("Vuelo internacional, requiere pasaporte.");
        break;
    default:
        console.log("Destino no disponible.");
}

let pesoMaleta = 27;
switch (true) {
    case (pesoMaleta > 0 && pesoMaleta <= 10):
        console.log("Equipaje de mano, sin costo.");
        break;
    case (pesoMaleta > 10 && pesoMaleta <= 23):
        console.log("Maleta facturada estándar.");
        break;
    case (pesoMaleta > 23 && pesoMaleta <= 32):
        console.log("Sobrepeso: cargo adicional de $50.");
        break;
    default:
        console.log("Peso no permitido.");
}

console.log("Calculadora de tarifa");
let precioBase = 300;
let tipoTarifa = "estudiante";
let precioFinal;
switch (tipoTarifa) {
    case "adulto":
        precioFinal = precioBase;
        break;
    case "nino":
        precioFinal = precioBase * 0.5;
        break;
    case "estudiante":
        precioFinal = precioBase * 0.8;
        break;
    case "adulto_mayor":
        precioFinal = precioBase * 0.6;
        break;
    default:
        console.log("Tipo de tarifa no reconocido");
}

if (precioFinal !== undefined) {
    console.log("Tarifa", tipoTarifa, ": $" + precioFinal);
}
