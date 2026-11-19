const cristales = document.getElementById("cristales");
const potencia = document.getElementById("potencia");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
calcular.addEventListener("click",function(){
    if(cristales.value.trim()==="" || potencia.value.trim()==""){
        resultado.textContent = "Completa ambos campos";
        return;
    }
    const cantidad = Number(cristales.value);
    const potenciaNumber = Number(potencia.value);
    if(!Number.isFinite(cantidad) || !Number.isFinite(potenciaNumber)){
        resultado.textContent="Ingrese valore validos";
        return;
    }
    const total = cantidad * potenciaNumber;
    resultado.textContent = "Energia Total :"+total;
});
