const firstNumber = Number(prompt("Ingrese el primer numero: "));
const secondNumber = Number(prompt("Ingrese el segundo numero: "));

const option = Number(
    prompt("Seleccione una opcion: "
        + "\n 1. Sumar"
        + "\n 2. Restar"
        + "\n 3. Multiplicar"
        + "\n 4. Dividir")
);

switch (option) {
    case 1:
        console.log(firstNumber + secondNumber);
        break;
    case 2:
        console.log(firstNumber - secondNumber);
        break;
    case 3:
        console.log(firstNumber * secondNumber);
        break;
    case 4:
        console.log(firstNumber / secondNumber);
        break;

    default:
        console.log("Error: Opcion incorrecta");
        break;
}
