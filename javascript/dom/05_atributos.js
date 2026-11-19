const persoanje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension");
const dimension = document.getElementById("dimension");

cambiar.addEventListener("click", function () {
    if (persoanje.getAttribute("title") == "Rick") {
        persoanje.setAttribute("src", "imagenes/Morty.jpg");
        persoanje.setAttribute("title", "Morty");
        persoanje.dataset.dimension = "C-131";
    }
    else {
        persoanje.setAttribute("src", "imagenes/Rick.jpg");
        persoanje.setAttribute("title", "Rick");
        persoanje.dataset.dimension = "C-137";
    }

});

verDimension.addEventListener("click", function () {
    dimension.textContent = persoanje.dataset.dimension;
});

const portal = document.getElementById("portal");
const activarPortal = document.getElementById("activarPortal");

activarPortal.addEventListener("click", function () {
    if (portal.textContent == "Portal desactivado") {
        portal.style.backgroundColor = "green";
        portal.style.color = "white";
        portal.textContent = "Portal Activado";
    }
    else {
        portal.style.backgroundColor = "red";
        portal.style.color = "while";
        portal.textContent = "Portal desactivado";
    }
});