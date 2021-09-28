// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log('numberlist before map', numbersList);

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

// input: callback, obj(optional)
// output: new array
// callback:
// input: el array (number)
// output: number

// OPTION 1

// const mapRes = numbersList.map(function (el, index, array) {
//   return el * el;
// });

// OPTION 2

// const mapRes = numbersList.map(el => el * el);
// console.log(mapRes);
// console.log('numberlist after map', numbersList);

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// put your code here
// input: callback, obj(optional)(this)
// output: number || undefind
// callback:
// input: el array (number), index(optional), array(optional)
// output:  boolean

// OPTION1
// const findRes = numbersList.find(el => {
//   if (el % 2 === 0 && el > 0) {
//     return true;
//   }
//   return false;
// });

// OPTION2
const findRes = numbersList.find(el => el % 2 === 0 && el > 0);
console.log(findRes);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// put your code here

// input: callback, obj(optional)(this)
// output: undefind (none)
// callback:
// input: el array (number), index(optional), array(optional)
// output: undefind

const forEacchRes = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});
console.log(forEacchRes);
/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];

// put your code here

// input: callback, начальное значение accumulator(number),this
// output: результат (number)
// callback:
// input: accumulator(number), el array (number), index(optional), array(optional)
// output: result(number) промежуточный

const reduceRes = transactions.reduce((acc, el, index) => {
  console.log('step: ' + index + ' acc is: ' + acc + ' el is: ' + el);
  acc += el;
  return acc;
}, 0);
console.log(reduceRes);
/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here
