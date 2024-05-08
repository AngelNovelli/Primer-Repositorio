import * as rls from "readline-sync";

let base : number = rls.questionInt ("Ingrese la base: ");
let exponente : number = rls.questionInt("Ingrese el exponente: ");
let resultadoFuncion : number = 0;

function calcularPotencia (base : number, exponente: number) : number {
    let resultado : number;
    resultado = base**exponente;
    return resultado;
}

while (exponente < 0) {
    console.log ("No se admiten exponentes negativos.");
    exponente = rls.questionInt("Ingrese un exponente positivo: ");
}
    if (exponente > 0) {
        resultadoFuncion = calcularPotencia(base,exponente);
        console.log ("La potencia del número es: ",resultadoFuncion);
    }


