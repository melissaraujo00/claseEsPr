let num1 = Number(prompt("Ingrese un numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));

if (num1 == 0 || num2 == 0) {
    alert("Todo número multiplicado por cero es cero")
}else {
    multiplicar = num1 * num2
    alert("La multplicacion de los numeros es: "+ multiplicar)
}