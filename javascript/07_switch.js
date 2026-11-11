let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estas en la dimension C-137");
        break;
    case 2:
        console.log("Estas en la dimension C-140");
        break;
    case 3:
        console.log("Estas en la dimension C-500");
        break;
    case 4:
        console.log("Dimension Xavier Galarraga");
        break;
    default:
        console.log("Estas en una dimension desconocida");
}

let personaje = "Rick";
switch (personaje) {
    case "Rick":
        console.log("Hola Rick");
        break;
    case "Summer":
        console.log("Hola Summer");
        break;
    default:
        console.log("Personaje no reconocido");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes poca energia");
        break;
    case (energia > 25 && energia <= 50):
        console.log("Tienes energia moderada");
        break;
    case (energia > 50 && energia <= 75):
        console.log("Tienes buena energia");
        break;
    case (energia > 75 && energia <= 100):
        console.log("Tienes mucha energia");
        break;
    default:
        console.log("Nivel de energia desconocido");
}

console.log("Calculadora");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicacion:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la division:", resultado);
        } else {
            console.log("Error: Division por cero");
        }
        break;
    default:
        console.log("Operacion no reconocida");
}

if (resultado !== undefined) {
    console.log("Resultado de la operacion:", operacion, ":", resultado);
}