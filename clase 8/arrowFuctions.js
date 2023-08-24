//FUNCION TRADICIONAL
function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(1, 2)); // 3

//FUNCION CON FLECHAS => FUNCIONES ANONIMAS
const sum1 = (a, b) => { //no necesitamos la palabra fuction
    return a + b;
  };
  
  console.log(sum1(1, 2)); // 3
//=> fat arrow

//acortar la funcion
const sum2 = (a, b) => a + b;

console.log(sum2(1, 2)); // 3

//podemos remover los parentesis
const add10 = a => a + 10;

console.log(add10(1)); // 11

//FUNCIONES ANONIMAS
const numbers = [1, 2, 3, 4, 5];
/*numbers.forEach(function (number) {
    console.log(number);
  }); */
  //lo acortamos
numbers.forEach((number) => console.log(number));