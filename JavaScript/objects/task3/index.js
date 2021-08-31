// input: object1, object2
// output: boolean
// algo
// 1. compare obj1 key length(Object.keys(obj1).length) with compare obj2 key length
// 2. iterate property in obj1
// 3.if obj2 has own property()
// compare value of property
function compareObjects(obj1, obj2) {
  // put your code here
  if (obj1 === obj2) {
    return true;
  } else {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      // Проверка на одинаковое количество свойств
      return false;
    }
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        // Есть ли свойства в обоих объектах
        return false;
      }
      if (obj1[key].valueOf() !== obj2[key].valueOf()) {
        // Одинаковы ли значения свойст

        return false;
      }
    }
  }
  return true;
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
