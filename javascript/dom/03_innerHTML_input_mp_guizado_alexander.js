// textContent vs innerHTML e inputs - Reserva de vuelos
// Autor: Alexander Guizado
const aviso = document.getElementById("aviso");
const titular = document.getElementById("titular");

// textContent muestra el texto tal cual
aviso.textContent = "Recuerda llegar 2 horas antes de tu vuelo";

// innerHTML interpreta las etiquetas HTML
titular.innerHTML = "<h2>Bienvenido a bordo</h2>";

const boleto = document.getElementById("boleto");
boleto.innerHTML = `
    <h3>ALEXANDER GUIZADO</h3>
    <p>Vuelo: AG-204</p>
    <p>Ruta: Quito → Lima</p>
    <p>Asiento: 12A</p>
`;

// Leer el valor de un input al hacer click
const nombre = document.getElementById("nombre");
const registrar = document.getElementById("registrar");
const saludo = document.getElementById("saludo");

registrar.addEventListener("click", function () {
    console.log("Pasajero registrado:", nombre.value);
    saludo.textContent = "Pasajero registrado: " + nombre.value;
});
