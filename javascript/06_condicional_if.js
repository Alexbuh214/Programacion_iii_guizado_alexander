console.log("Condicional If");
let energia = 50;
console.log("Condicional simple If");
if (energia >= 0) {
    console.log(
        "Tienes energia suficiente para continuar la aventura"
    )
}

console.log("Condicional If-Else Dos Caminos");
let combustible = 400;
if (combustible >= 0) {
    console.log("Tienes suficiente combustible para continuar la aventura");
} else {
    console.log("No tienes suficiente combustible para continuar la aventura");
}

console.log("Condicional If-Else If-Else Multiples Caminos");
let dimension = "C-137";
if (dimension === "C-137") {
    console.log("Estas en tu dimension original.");
} else if (dimension === "C-140") {
    console.log("Estas en una dimension alternativa.");
} else {
    console.log("Estas en una dimension desconocida.");
}

console.log("Condicional If Anidado");
let energia2 = 50;
let combustible2 = 400;
if (energia2 >= 0) {
    if (combustible2 >= 0) {
        console.log("Tienes suficiente energia y combustible para continuar la aventura");
    } else {
        console.log("Tienes suficiente energia pero no suficiente combustible para continuar la aventura");
    }
}

console.log("Control de viajes interdimensionales");
let combustible4 = 400;
let energia4 = 50;
let rick_disponible = "si";
let summer_disponible = "no";
let nave_averiada = "no";

if (combustible4>=50 && 
energia4>= 50 &&
(rick_disponible === "si" || 
summer_disponible === "si") && 
!(nave_averiada === "si")) 
{
    console.log("Viaje autorizado.");
} else {
    if (combustible4 < 50)
    {
        console.log("No puedes viajar a otra dimension, no tienes suficiente combustible.");
    }
    if (energia4 < 50)
    {
        console.log("No puedes viajar a otra dimension, no tienes suficiente energia.");
    }
    if (rick_disponible === "no")
    {
        console.log("No puedes viajar a otra dimension, Rick no esta disponible.");
    }
    if (summer_disponible === "no")
    {
        console.log("No puedes viajar a otra dimension, Summer no esta disponible.");
    }
    if (nave_averiada === "si")
    {
        console.log("No puedes viajar a otra dimension, la nave esta averiada.");
    }
    if (rick_disponible === "no" && summer_disponible === "no")
    {
        console.log("No puedes viajar a otra dimension, ningun tripulante esta disponible.");
    }
}

console.log("Mision interdimiensional");
let cristalesObjetivos=200;
let cristalesRecolectados=150;
let combustibleInicial=1000;
let combustibleConsumido=800;
let mortyHerido="si";
let naveAveriada="no";
let bonificacion=0;
let porcentajeCumplimiento=(cristalesRecolectados/cristalesObjetivos)*100;
let combustibleRestante=combustibleInicial-combustibleConsumido;
console.log("RESULTADOS DE LA MISION");
if(porcentajeCumplimiento>=90) {
    console.log("Mision cumplida con exito");
}else if(porcentajeCumplimiento>=70 && porcentajeCumplimiento<90) {
    console.log("Mision cumplida parcialmente");
}else if(porcentajeCumplimiento>=50 && porcentajeCumplimiento<70) {
    console.log("Mision Regular. se requiere mejorar el desempeño");
}else {
    console.log("Mision fallida. Se requiere mejorar el desempeño");
}

console.log("Evaluacion de bonificacion por desempeño");
if(mortyHerido==="no" && naveAveriada==="no") {
    console.log("Regreso seguro a la dimension original.");
} else if (mortyHerido==="si" && naveAveriada==="no") {
    console.log("Regreso con heridos a la dimension original.");
} else if (mortyHerido==="no" && naveAveriada==="si") {
    console.log("Regreso con nave averiada a la dimension original.");
} else {
    console.log("Regreso con heridos y nave averiada a la dimension original.");
}

console.log("Evaluacion de la mision");
console.log("Cristales objetivos:", cristalesObjetivos);
console.log("Cristales recolectados:", cristalesRecolectados);
console.log("Porcentaje de cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible inicial:", combustibleInicial);
console.log("Combustible consumido:", combustibleConsumido);
console.log("Combustible restante:", combustibleRestante);
console.log("Morty herido:", mortyHerido);
console.log("Nave averiada:", naveAveriada);
console.log("Bonificacion obtenida:", bonificacion);