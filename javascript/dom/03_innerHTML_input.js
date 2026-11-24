const mensaje = document.getElementById("mensaje")
const saludo = document.getElementById("saludo")
 
mensaje.textContent="mensaje desde otro universo"
saludo.innerHTML="<h1>Hello con innerHTML<h1>"

const ficha = document.getElementById ("ficha");
ficha.innerHTML=`
<h1>RICK SANCHEZ</h1>
<p>dimesndion:C-137</p>
<p>especie:humano</p>
<p>estado:vivo</p>
`;


const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function(){
    console.log("ejecutando click", nombre.value);
})