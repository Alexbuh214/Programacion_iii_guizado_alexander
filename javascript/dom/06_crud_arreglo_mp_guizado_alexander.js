let personajes = [
    {
        id: 1,
        nombre: "Rich Sanchez",
        dimension: "c-137",
        estado: "Vivo"
    },
    {
        id: 2,
        nombre: "Rich Sanchez",
        dimension: "c-137",
        estado: "Muerto"
    },
    {
        id: 3,
        nombre: "Rich Sanchez",
        dimension: "c-137",
        estado: "Desconocido"
    },
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const dimension = document.getElementById("dimension");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarPersonajes() {
    contenedor.replaceChildren();
    if (cantidad) {
        cantidad.textContent = personajes.length;
    }

    personajes.forEach(function (personaje) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = personaje.nombre;

        const parrafoDimension = document.createElement("p");
        parrafoDimension.textContent = "Dimension: " + personaje.dimension;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + personaje.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarPersonaje(personaje.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar a ${personaje.nombre}?`);
            if (!confirmarEliminar) return;

            personajes = personajes.filter(function (p) {
                return p.id !== personaje.id;
            });
            if (idEditando === personaje.id) {
                limpiarFormulario();
            }
            mostrarPersonajes();
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoDimension, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

let idEditando = null;

function editarPersonaje(id) {
    const personaje = personajes.find(function (p) {
        return p.id === id;
    });
    if (!personaje) return;

    nombre.value = personaje.nombre;
    dimension.value = personaje.dimension;
    estado.value = personaje.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarPersonajes();

let siguienteId = 4;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombrePersonaje = nombre.value.trim();
    const dimensionPersonaje = dimension.value;
    const estadoPersonaje = estado.value;

    if (nombrePersonaje === "") return;

    if (idEditando === null) {
        const nuevoPersonaje = {
            id: siguienteId,
            nombre: nombrePersonaje,
            dimension: dimensionPersonaje,
            estado: estadoPersonaje,
        };
        siguienteId++;
        personajes.push(nuevoPersonaje);
    } else {
        const personaje = personajes.find(function (p) {
            return p.id === idEditando;
        });
        if (personaje) {
            personaje.nombre = nombrePersonaje;
            personaje.dimension = dimensionPersonaje;
            personaje.estado = estadoPersonaje;
        }
        idEditando = null;
        guardar.textContent = "Agregar";
    }

    formulario.reset();
    mostrarPersonajes();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});
