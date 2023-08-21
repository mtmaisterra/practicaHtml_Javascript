var num1 = prompt("Ingrese el número 1");
var num2 = prompt("Ingrese el número 2");

var resta = num1 - num2;

if (resta > 0) {
    console.log("Es mayor a 0");
    let imparPar = resta % 2;
    if (imparPar == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
} else {
    console.log("Es menor o igual a 0");
}
