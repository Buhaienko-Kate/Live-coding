// input:array1, array2
// output:object
// algo
// 1.reduce
// 2.

// algo2
// 1.create res obj
// 2.iterate keylist
// 3.get value by index
// 4.add key-value to the obj

// bad-option
// function buildObject(keysList, valuesList) {
//   // put you code here
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];
//     Object.assign(obj, { [key]: value });
//   }
//   return obj;
// }

// function buildObject(keysList, valuesList) {
//   // put you code here
//   let obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj = { ...obj, [keysList[index]]: valuesList[index] };
//   }
//   return obj;
// }

// // option-good
// function buildObject(keysList, valuesList) {
//   // put you code here
//   return keysList.reduce((acc, key, index) => {
//     const value = valuesList[index];
//     return { ...acc, [key]: value };
//   }, {});
// }
// option-good
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});

// examples
const keys = ['name', 'address', 'age', 'run'];
const values = [
  'Bob',
  'Ukraine',
  34,
  () => {
    console.log('run');
  },
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
console.log(result.run());
