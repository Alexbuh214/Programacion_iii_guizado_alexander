console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Laboratorio Interdimensional";


const estado = document.getElementById("estado");
const boton = document.getElementById("botonPortal");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function(){
    console.log("Ejecuntado click");
    estado.textContent = "¡Portal Activado!";
    console.log("Texto Cambiado en el elemento estado");
    mensaje.textContent = "Morty Listo para la aventura";
    console.log("Texto Cambiado en el elemento mensaje");
    alert("Proceso de Activación del Portal Terminado");
});