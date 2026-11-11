console.log("Abriendo portal de la nave ... ");
let portal = 1;
while(portal <=5){
    console.log("Abriendo el Portal" +portal+".");
    portal ++;
}
console.log("Todos los portales han sido abiertos")

let energia = 20;
let recarga = 10;
let totalRecargas = 0;

while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando... Nivel de energía: " + energia + "%");
}

console.log("Pistola de portales completamente recargada después de " + totalRecargas + " recargas.");

console.log("Consumo de Combustible de la nave de Rick:");
let combustible = 100;
let consumo = 45;
let viajes = 0;

while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje " + viajes + " realizado. Combustible restante = " + combustible + "%");
    if(combustible <50){
        console.log("Advertencia : Combustible bajo.Nivel actual" +combustible+ "%")
    }
}

console.log("No hay suficiente combustible para otro viaje.");
console.log("Total de viajes realizados: " + viajes);

console.log("Activar portales de dimensiones peligrosas con do ... while:");
let energiaPortal = 50;
do {
    console.log("Activando portal de dimensión peligrosa. Nivel de energía: " + energiaPortal + "V");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("No hay suficiente energía para activar más portales.");

console.log("Compra una pistola portales para Rick");
let ahorros = 800;
let meta = 500;
let ahorrasSemanal = 70;
let semanas = 0;
do{
    ahorros += ahorrasSemanal;
    semanas++;
    console.log("Semana" +semanas+": Ahorro actual :"+ahorros+"unidades.");
}while(ahorros < meta);
console.log("Meta alcanzada en " +semanas+ "Cuanto ahorro :"+ahorros+"")

let cristales = [5, 10,15, 20, 25];
let objetivo = 150;
let energiaTotal = 0;
let indice = 0;
while (i< cristales.length) {
    let cristal = cristales[indice];
    energiaTotal += cristal;
    indice++;
    if (cristal < 20) {
        console.log("Cristal" + cristal );
        continue;
    }
    energiaTotal += cristal;
    console.log("Cristal" + cristal + " agregado a la energía total. Energía total: " + energiaTotal);
    if (energiaTotal >= objetivo) {
        console.log("Objetivo de energía alcanzado: ");
        break;
    }

    console.log("Energía total acumulada: " + energiaTotal);
}