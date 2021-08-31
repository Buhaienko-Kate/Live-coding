/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
// input: object, key, value
// output: object
// function addPropertyV1(obj, key, value) {
//   // put your code here
//   obj[key] = value;
//   return obj;
// }

// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
// console.log(transaction);
// // put your code here

// input: target(object1), sourse(object2)...sourse(objectN)
// output: object
// function addPropertyV2(obj, key, value) {
//   // put your code here
//   Object.assign(obj, { [key]: value });
//   return obj;
// }

// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV2(transaction, 'currency', 'USD'));
// console.log(transaction);
// put your code here

// input: target(object1), sourse(object2)...sourse(objectN)
// output: object
// function addPropertyV3(obj, key, value) {
//   // put your code here

//   return Object.assign({}, obj, { [key]: value });
// }

// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV3(transaction, 'currency', 'USD'));
// console.log(transaction);

// put your code here
function addPropertyV4(obj, key, value) {
  // put your code here
  const newObj = { ...obj, [key]: value };
  return newObj;
}

const transaction = {
  value: 170,
  checkOut: () => {
    console.log('hi');
  },
};
console.log(addPropertyV4(transaction, 'currency', 'USD'));
console.log(transaction);
console.log(addPropertyV4(transaction, 'country', 'Ukraine'));
transaction.city = 'Kyiv';
console.log(transaction);

// examples
// const transaction = {
//   value: 170,
// };
// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

// sread operator
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers);
// const newArray = [...numbers, 1111];
// console.log(newArray);

// const transaction = {
//   value: 170,
// };
const transactionTestCopy = { ...transaction };

// rest operator
function sum(param1, ...params) {
  console.log(params);
  console.log(param1);

  params.reduce((acc, el) => {
    acc += el;
    return acc;
  });
}

// test data
sum(1, 3, 5, 8);

// data destruction

const numbersRest = [10, 12, 45, 5];
// rest operator
const [firstEl, ...rest] = numbersRest;
console.log(firstEl);
console.log(rest);

// spread operator
const copyRest = [...rest];
console.log(copyRest);
