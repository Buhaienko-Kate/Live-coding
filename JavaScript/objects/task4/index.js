// input-obj
// output- array of objects
// input-map: callback
// output-map: array of objects
// algo
// применить Object.entries для объекта( верне массив массивов с ключом и значением(объект))
// применить map для массива изменив ключ массива в свойство id
// callback input: эл массива(массив)
// callback input: эл массива(новый объект)
// достать свойства из значений ключей в виде пепеменных
// вернуть новый обьект с ключами и значениями
// отсортировать массив по возрасту
const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
};

// const getCustomersList = obj => {
//   // put your code here
//   return Object.entries(obj)
//     .map(el => {
//       const { name, age } = el[1];
//       return { name, age, id: el[0] };
//     })
//     .sort((a, b) => a.age - b.age);
// };
// console.log(getCustomersList(customers));

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => {
//       console.log(arr);
//       let obj = { id: arr[0] };
//       console.log(obj);
//       const value = arr[1];
//       obj = { ...obj, ...value };
//       console.log(obj);
//       return obj;
//     })
//     .sort((a, b) => a.age - b.age);
// };
// getCustomersList(customers);

// good option
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };
// console.log(getCustomersList(customers));

// best options
const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customers]) => ({ ...customers, id }))
    .sort((a, b) => a.age - b.age);
console.log(getCustomersList(customers));
