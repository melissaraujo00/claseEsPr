const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
//Vamos a crear un array anidado dentro del array de frutas.
//fruits.push(berries);
console.log(fruits);
//console.log(fruits[3][1]); //para acceder a blueberry

// tambien podemos crear una nueva variable que contenda los dos arrays
//const allFruits = [fruits, berries];
//console.log(allFruits);
//console.log(allFruits[1][1]);

//CONCATENACION
//si no podemos agrupar o anidar dos array podemos concatenarlos
const newArr = fruits.concat(berries);
console.log(newArr);

//SPREAD OPERATOR
//es como concatenar lo unico que se puede trabjar con objetos
const newArr2 = [...fruits, ...berries];
console.log(newArr2);

//PROPIEDADES ESTATICAS DE LOS ARRAY
//Array.from()
//verifica si el array contiene algo y retonar un booleano
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray('Hello')); // false

//Array.from
//convierte un objeto a un array
console.log(Array.from('12345'));

//Array.of()
//Crea un array a partir de un números de variables tomadas como argumentos.
const a = 1;
const b = 2;
const c = 3;
y = Array.of(a, b, c);
console.log(y)
