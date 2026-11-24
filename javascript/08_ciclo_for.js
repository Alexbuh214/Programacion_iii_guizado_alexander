console.log("ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("El valor de i es: " + i);
}

console.log("cuenta regresiva despegue de la nave morty");
for (let i = 10; i >= 0; i--) {
    console.log("faltan " + i + " segundos para el despegue de la nave");
}

console.log("cuenta regresiva despegue de la nave morty con mensaje de despegue");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Despegue en curso de la nave Morty");
    } else {
        console.log("faltan " + i + " segundos para el despegue de la nave");
    }
}

console.log("Nivel de energia de Rick");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i) {
        console.log("Nivel de energia de Rick: " + i + "%");
    }
}

let consumoPorViaje = 10;
let totalconsumo = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalconsumo += consumoPorViaje;
    console.log("viaje " + viaje);
    console.log("total consumido:" + totalconsumo + " unidades");
}
console.log("total consumido:" + totalconsumo + " unidades");

console.log("promedio de los cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia * 5 + 5;
    totalCristales += cristales;
    console.log("Dia " + dia + ": " + cristales + " cristales recolectados");
}
console.log("total de cristales recolectados:" + totalCristales);
console.log("promedio de cristales por dia:" + (totalCristales / dias).toFixed(2));

console.log("Dimensiones Peligrosas");
let seguras = 0;
let peligrosas = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimension " + dimension + " es peligrosa");
        peligrosas++;
    } else {
        console.log("Dimension " + dimension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("recoleccion de cristales de morty");
let crsitales = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let viajesexitosos = 0;
for (let i = 0; i < crsitales.length; i++) {
    total += crsitales[i];
    console.log("Viaje " + (i + 1) + ": " + crsitales[i] + " cristales recolectados");
    if (crsitales[i] >= 40) {
        viajesexitosos++;
    } else {
        console.log("Viaje " + (i + 1) + " no fue exitoso, se recolectaron menos de 40 cristales");
    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Viajes exitosos: " + viajesexitosos);

console.log("Recorrer Personaje con For ... of");
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (let personaje of personajes) {
    console.log("Personaje :", personaje);
}

let nave = {
    nombre: "Nave de Rick",
    combustible: 1000,
    velocidad: 500,
    tripulantes: ["Rick", "Morty", "Summer"]
};

for (let propiedad in nave) {
    console.log(propiedad + ":", nave[propiedad]);
}

console.log("Tripulantes de la nave");
for (let p of nave.tripulantes) {
    console.log(p);
}

let misiones = [
    { nombre: "Misión 1", cristales: 90, meta: 100, personaje: "Rick" },
    { nombre: "Misión 2", cristales: 80, meta: 100, personaje: "Morty" },
    { nombre: "Misión 3", cristales: 95, meta: 100, personaje: "Summer" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " completada por " + mision.personaje + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(mision.nombre + " no fue exitosa, se recolectaron menos del 90% de cristales.");
    }
}
console.log("Número de misiones exitosas: " + exitosas);

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Número par encontrado: " + i + ", se omite este número.");
        continue;
    }
    console.log("Número impar: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el número 7, se detiene el ciclo.");
        break;
    }
    if (i % 2 === 0) {
        console.log("Número par encontrado: " + i + ", se omite este número.");
        continue;
    }
    console.log("Número impar: " + i);
}
