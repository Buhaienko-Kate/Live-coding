// *
//  * ф-ция getSenseOfLife не должна принимать аргументы
//  * ф-ция getSenseOfLife должна вернуть число 42
//  */

// ... code here
function getSenseOfLife() {
  return 42;
}

// option1
const res = getSenseOfLife();
console.log(res);

// option2
console.log(getSenseOfLife());
/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

// ... code here
function getSquared(num) {
  return num ** 2;
}
console.log(getSquared(2));
/* ф-ция sum должна принимать два числа и вернуть их сумму */

// ... code here
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// console.log(sum(2, 5));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

// ... code here
function getMessage(age) {
  console.log(`I am ${age} years old`);
}
getMessage(34);
getMessage(52);
getMessage(20);

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

// ... code here
const mult = (firstNum = 0, secondNum = 0) => firstNum * secondNum;
console.log(mult(5));
// можно задать значение по умолчанию
/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

// ... code here
const square = (number) => number ** 2;
console.log(square(2));
console.log(square(8));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

// ... code here
const getMagicNumber = () => 17;
console.log(getMagicNumber());
console.log(getMagicNumber(75));
