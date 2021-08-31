// algo
//1. iterate from to to num
// 2. check every number is prime
//   2.1 iterate from 2 to n
//  2.2 check if num % index ===0 => not prime
/**
 * @param {number} num
 * @return {undefined}
 */

// input: number
// output: undefind
// function getPrimes(num) {
//   // put your code here
//   for (let index = 2; index <= num; index += 1) {
//     console.log('checking if ' + index + ' is prime');

//     let isPrime = true;
//     for (let number = 2; number < index; number += 1) {
//       console.log('checking if number % index ' + number + ' ' + index);

//       if (index % number === 0) {
//         console.log('number is not prime ' + index);

//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(index);
//     }
//   }
// }
// getPrimes(15);

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
function getPrimes(num) {
  // put your code here
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}

getPrimes(15);
