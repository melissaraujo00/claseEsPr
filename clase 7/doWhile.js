//La variable se define antes de entrar al ciclo while
let i = 0;

while (i <= 20) {
  console.log('Numero ' + i);
  i++;
} 
//ciclo while se usa cuando no conocemos el número de iteraciones en concreto que tenemos que realizar.
//CICLO WHILE EN ARRAY
const numbers = [10, 20, 30, 40];

let j = 0;

while (j < numbers.length) {
  console.log(numbers[j]);
  j++;
}

//CICLO WHILE ANIDADOS
let k = 1;

while (k <= 10) {
  console.log('numero ' + k);
  let w = 1;
  while (w <= 10) {
    console.log(k + ' * ' + w + ' = ' + k * w);
    w++;
  }
  k++;
}

//CICLO DO WHILE
//Ocurre al menos una vez aunque no se cumpla
let a = 21;

do {
  console.log('Numero ' + a);
  a++;
} while (a <= 20);