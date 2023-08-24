//Ejemplo1
/*function factorial(number) { //una funcion recursiva es aquella que se llama asi misma dentro su propia funcion
    
    if (number === 0 || number === 1) //se especifica hasta donde va a llegar
        return 1;
    
    return number * factorial(number -1) //tiene un caso base si no lo espcificamos dara error
} */

/*
EXPLICACION
 5 * factorial (5-1);
 * factorial (4-1);
 * factorial (3-1);
 * * factorial (2-1);
 * * factorial (1-1);
*/

//console.log(factorial(5));

//Ejemplo2
//mayor consto que el for

function sum(number) {
    //caso base
    if (number === 1) {
        return number;
    }
    return number + sum(number - 1) ;
        
}

console.log(sum(5));