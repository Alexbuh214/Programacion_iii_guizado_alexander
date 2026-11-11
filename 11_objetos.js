let nombre = "Rick";
let edad = 70;
let planeta = "Tierra C-137"; 
let energia = 100;
let averiada = false;

let nave= {
    nombre: "Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false,
}

console.log("Información de la nave de Rick:");
console.log("Nave de Rick", nave);
console.log("Nombre del piloto: " + nave.nombre);
console.log("Edad del piloto: " + nave["edad"]);
console.log("Planeta de origen: " + nave["planeta"]);
console.log("Nivel de energía: " + nave.energia + "%");
console.log("Estado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a nave de Rick:");
nave.modelo = "Nave Espacial X-2000";
console.log("Modelo de la nave: " + nave.modelo);
console.log("Nave de Rick", nave);

console.log("Actualizar el nivel de energía de la nave:");
nave.energia = 80;
console.log("Nuevo nivel de energía: " + nave.energia + "%");
nave["averiada"] = true;
console.log("Estado actualizado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));

console.log("Nave de Rick", nave);
console.log("ELiminar una propiedad de la nave de Rick:");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");
console.log("Nave de Rick", nave);

console.log("Recorrer las propiedades de la nave de Rick:");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
}

function calcularTotalProductos (Unidadesporproducto , cantidadProductos) {
    let total = Unidadesporproducto * cantidadProductos;
    return total;
}

let unidadesPorProducto = 10;
let cantidadProductos = 5;
let totalProductos = calcularTotalProductos(unidadesPorProducto, cantidadProductos);
console.log("Total de productos: " + totalProductos);


