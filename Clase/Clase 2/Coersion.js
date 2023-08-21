//EJEMPLO DE COERSION DE TIPOS
let numero1 = 10;
let numero2 = '20';

//EN ESTE CASO EL SIMBOLO * TIENE PRIORIDAD DEL NUMERO SOBRE STRING POR ESO CONVIERTE EL STRING EN NUMERO
let resultado = numero1 * numero2;
console.log(resultado);

let numero3 = 30;
let numero4 = '40';

//EN ESTE CASO EL SIMBOLO + TIENE PRIORIDAD DEL STRING SOBRE EL NUMERO POR ESO CONVIERTE EL NUMERO A STRING
let resultadoSuma = numero3 + numero4;
console.log(resultadoSuma);