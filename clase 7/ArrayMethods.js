//Array
const num = [1, 2, 3, 4, 5];
console.log(num);
console.log(num.push(6)); //se agrega ese numero al array
console.log(num);
console.log(num.pop());//Elimina el ultimo elemento del array
console.log(num);
console.log(num.unshift(0)); //Agrega un elemento al principio del array
console.log(num);
console.log(num.shift());//Elimina el elemento al inicio del array
console.log(num);
console.log(num.reverse());//Mucha los numeros desde atras para adelante
console.log(num.includes(5)); //Si el valor que colocamos esta dentro del array retorna true
console.log(num.indexOf(4)); //Retorna el valor del índice que le pasamos.
console.log(num.toString());//convierte a string separado por comas
console.log(num.join(" ")); //tambien convierte a string en los parentesis podemos definir como lo podemos separar
const newNum = num.slice(1, 3); //Toma dos parametros de un array uno indica el indice y el otro el final 
// slice guarda una copia y lo guardara en nuevo arreglo hasta pero no se incluye el ultimo numero
console.log( newNum);
//console.log(num);

//splice cambia el contenido de un array eliminando elementos existentes o agregando nuevos elementos en posiciones especificas
const newArr = num.splice(1, 3);
console.log(newArr);
console.log(num);

//METODOS DE CADENA 
const arr = [1, 2, 3, 4, 5];
const arr2 = [4,6,7,8];
const arr3 = [67,87,56,90]

x2 = arr.concat(arr2).reverse();
x = arr3.slice(1, 3).toString();

console.log(x);