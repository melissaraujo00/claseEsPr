//REPASAR ESTE TEMAAA
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 55
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum2); // 55
//si el valor de inicial es 10
const sum3 = numbers.reduce((acc, curr) => acc + curr, 10);

console.log(sum3); // 65

//CON FOR OF 
const sum4 = () => {
    let acc = 0;
    for (const curr of numbers) {
      acc += curr;
    }
    return acc;
  };
  
  console.log(sum4()); // 55