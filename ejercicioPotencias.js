"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese la base: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
var resultadoFuncion = 0;
function calcularPotencia(base, exponente) {
    var resultado;
    resultado = Math.pow(base, exponente);
    return resultado;
}
if (exponente < 0) {
    console.log("No se admiten exponentes negativos.");
}
else {
    resultadoFuncion = calcularPotencia(base, exponente);
    console.log("La potencia del número es: ", resultadoFuncion);
}
