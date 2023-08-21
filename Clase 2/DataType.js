// PRIMITIVE TYPES
const firstName = 'Luis';
console.log(firstName, typeof firstName); //mostrara la variable de firstname y su tipo de dato

const firstNumber = 4;
console.log(firstNumber, typeof firstNumber); //mostrara la variable y su tipo de dato

const isValid = false;
console.log(isValid, typeof isValid); 

const phoneNumber = null;
console.log(phoneNumber, typeof phoneNumber); //se mostrara objet  aunque la variable sea null

const x = undefined;
console.log(x, typeof x);

const symbol = Symbol('symbol');
console.log(symbol, typeof symbol);

//Para definir un valor como bigint se agrega n al final
const bigint = 10n; //representa enteros que están fuera del rango del tipo Number
console.log(bigint, typeof bigint);

//REFERENCE TYPES

//Arrays
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray, typeof numbersArray);

//Object Literals
const person = {
    name: "Luis",
    lastName: "Zelaya"
};
console.log(person, typeof person);

//Functions
const sayHello = function() {
    return 'Hello';
}
sayHello()