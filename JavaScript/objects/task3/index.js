// input: object1, object2
// output: boolean
// algo
// 1. compare obj1 key length(Object.keys(obj1).length) with obj2 key length
// 2. iterate key in obj1
// 3.if obj2 has own key
// compare value of property
// function compareObjects(obj1, obj2) {
//   // put your code here
//   if (obj1 === obj2) {
//     return true;
//   } else {
//     if (Object.keys(obj1).length != Object.keys(obj2).length) {
//       // Проверка на одинаковое количество свойств
//       return false;
//     }
//     for (const key in obj1) {
//       if (!obj2.hasOwnProperty(key)) {
//         // Есть ли свойства в обоих объектах
//         return false;
//       }
//       if (obj1[key].valueOf() !== obj2[key].valueOf()) {
//         // Одинаковы ли значения свойст

//         return false;
//       }
//     }
//   }
//   return true;
// }

// input-obj,obj
// output- boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
//2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// option1
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let index = 0; index < keys1.length; index += 1) {
//     const key = keys1[index];

//     const value1 = obj1[key];
//     const value2 = obj2[key];

//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// }

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  return !keys1.some(key => obj1[key] !== obj2[key]);
}
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));

// input: object
// output: array of arrays(key,value)

const obj = {
  name: 'Tom',
  age: 17,
};
console.log(Object.entries(obj));
