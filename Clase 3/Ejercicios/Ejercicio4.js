let num1 = prompt("Ingrese un numero: ");
let num2 = prompt("Ingrese el segundo numero: ");

if (num1 > 0 && num2 > 0) {
    alert("Los dos numeros son positivos");
}else if(num1 < 0 && num2 > 0){
    alert("El primer numero es negativo y el segundo es positivo");
} else if (num1 > 0 && num2 < 0 ){
    alert("El primer numero es positivos y el segundo es negativo");
}else if (num1 < 0 && num2 < 0){
    alert("Los dos numeros son negativos")
}