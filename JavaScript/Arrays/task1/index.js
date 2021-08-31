/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
console.log(numbersList1);
numbersList1.pop();
console.log(numbersList1);
console.log(numbersList1.pop());

// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];
console.log(numbersList2);
numbersList2.push(100);
console.log(numbersList2);
console.log(numbersList2.push());

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// input: none
// output: number
const numbersList3 = [1, 2, 3, 4, 5];
console.log(numbersList3);
console.log(numbersList3.shift());
console.log(numbersList1);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// input: разделитель(number)
// output: новій массив
const numbersList4 = [1, 2, 3, 4, 5];
console.log(numbersList4);
const res = numbersList4.slice(2);
console.log(res);
console.log(numbersList4);
// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив

// input: callback function
// output: new array

//input: number
// output: boolean
// option1
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// function callBack(el) {
//   if (el > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

const callBack = el => el > 5;

anotherNumbersList.filter(callBack);
console.log(anotherNumbersList);
console.log(anotherNumbersList.filter(callBack));
console.log(anotherNumbersList.filter(el => el > 5));
console.log(anotherNumbersList);
/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here

/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */
// input: number, number, callback function
// output: undefind
function sum(from, to, printer) {
  // put your code here
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  printer(sum);
}

function printResult(res) {
  // put your code here
  console.log(res);
}
console.log(sum(1, 5, printResult));
