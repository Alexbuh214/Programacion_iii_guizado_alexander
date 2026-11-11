console.log("Rick y Morty: Funciones en JavaScript");

function abrirPortal() {
    console.log("Portal abierto. ¡Vamos a otra dimensión!");
}

abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();


function pilotoNave(Nombre) {
    console.log("El piloto " + nombre + " esta a bordo de la nave. ");

}     
pilotoNave("Rick");
pilotoNave("Morty");

function recargaPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Recargando pistola de portales. Nivel de energía: " + energiaTotal + "%");
    return energiaTotal;
}
let energiaPistola = 50;
energiaPistola = recargaPistola(energiaPistola, 30);
energiaPistola = recargaPistola(energiaPistola, 40);

console.log("Calcular descuentos interdimensionales:");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: " + precioOriginal + " unidades. Precio con descuento: " + precioConDescuento);

function evaluarCombustibleExamen(combustible, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("¡Examen aprobado! Porcentaje de respuestas correctas: " + porcentajeCorrectas + "%");
    } else {
        console.log("Examen reprobado. Porcentaje de respuestas correctas: " + porcentajeCorrectas + "%");
    }
}
evaluarCombustibleExamen(15, 8, 10);
evaluarCombustibleExamen(50, 6, 10);

function arregloCristales(cristalesrecolectados, misiones) {
    let calculartotalarreglos = cristalesrecolectados * misiones;
    return calculartotalarreglos;
}
let cristalesRecolectados = 5;
let misionesRealizadas = 5;
let totalArreglos = arregloCristales(cristalesRecolectados, misionesRealizadas);
console.log("Total de arreglos de cristales: " + totalArreglos);

function totalCristales(arregloCristales) {
    let totalmisiones = arregloCristales;
    if (totalmisiones > 50) {
        console.log("Felicidades has recolectado suficentes cristales");
    }
    return totalmisiones;
}

let cristalesrecolectados = 10;
let misionesrealizadas =6;
let totalCristalesRecolectados = totalCristales(cristalesrecolectados);
console.log("Total de cristales recolectados: " + totalCristalesRecolectados);


