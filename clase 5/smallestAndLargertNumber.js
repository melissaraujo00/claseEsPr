const number = [2,5,8,1,10,6,17,-3,10];
let smallestNumber = number[0]; // el valor mas menor
let bigNumber =number[0];
 for (let i = 0; i < number.length; i++){
    if (smallestNumber > number[i] ) {
        smallestNumber = number[i];
    }
    if (bigNumber < number[i]){
        bigNumber = number[i];
    
    }

    //numbers[0] = 2
    //numbers[1] = 5
    
 }
 console.log(`El numero mayor es: ${bigNumber}`)
 console.log(`El numero menor es: ${smallestNumber}`)