function  multiplicacion(...numbers) {//... parametro, podemos asignar muchos parametros
    let multiplicar = 1;
    for (const number of numbers) {
        multiplicar *= number;
        
    }
    return multiplicar;
}
console.log(multiplicacion(1,2,3,4,5));
