// Validar y calcular con valores de inputs - Reserva de vuelos
// Autor: Alexander Guizado
const pasajeros = document.getElementById("pasajeros");
const precio = document.getElementById("precio");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    // Validar que no estén vacíos
    if (pasajeros.value.trim() === "" || precio.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    // Convertir texto a número
    const cantidad = Number(pasajeros.value);
    const precioBoleto = Number(precio.value);

    // Validar que sean números válidos
    if (!Number.isFinite(cantidad) || !Number.isFinite(precioBoleto) || cantidad <= 0 || precioBoleto <= 0) {
        resultado.textContent = "Ingresa valores válidos";
        return;
    }

    const total = cantidad * precioBoleto;
    resultado.textContent = "Total: $" + total.toFixed(2);
});
