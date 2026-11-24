// Objetos - Reserva de vuelos
// Autor: Alexander Guizado
let reserva = {
    codigo: "QX7-2026",
    pasajero: "Alexander Guizado",
    origen: "Quito",
    destino: "Lima",
    asiento: "12A",
    pagado: false
};

console.log("Reserva completa:", reserva);

// Acceso con punto y con corchetes
console.log("Código: " + reserva.codigo);
console.log("Pasajero: " + reserva["pasajero"]);
console.log("Ruta: " + reserva.origen + " → " + reserva["destino"]);
console.log("Estado de pago: " + (reserva.pagado ? "Pagado" : "Pendiente"));

// Agregar propiedades
console.log("Agregar propiedades:");
reserva.clase = "Económica";
reserva["precio"] = 310;
console.log(reserva);

// Modificar propiedades
console.log("Modificar propiedades:");
reserva.asiento = "14C";
reserva["pagado"] = true;
console.log("Nuevo asiento: " + reserva.asiento);
console.log("Estado de pago: " + (reserva.pagado ? "Pagado" : "Pendiente"));

// Eliminar propiedades
console.log("Eliminar la propiedad clase:");
delete reserva.clase;
console.log(reserva);

// Recorrer el objeto
console.log("Recorrer la reserva con for...in:");
for (let propiedad in reserva) {
    console.log(propiedad + ": " + reserva[propiedad]);
}

// Objeto con arreglo y objeto anidado
let vuelo = {
    codigo: "AG-204",
    avion: {
        modelo: "Airbus A320",
        capacidad: 180
    },
    escalas: ["Guayaquil"],
    pasajeros: ["Alexander", "María", "Luis"]
};
console.log("Modelo del avión: " + vuelo.avion.modelo);
console.log("Primera escala: " + vuelo.escalas[0]);
console.log("Número de pasajeros: " + vuelo.pasajeros.length);

// Objeto con método
let calculadora = {
    impuesto: 0.12,
    calcularTotal: function (precio, pasajeros) {
        let subtotal = precio * pasajeros;
        return subtotal + subtotal * this.impuesto;
    }
};
console.log("Total con impuestos (2 pasajeros, $310): $" + calculadora.calcularTotal(310, 2).toFixed(2));
