'use strict';

// function printMessage(country, city) {
//   console.log(this);

//   console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
// }

// const user = {
//   firstName: 'Andrey',
//   age: 111,
//   tempFunc: 'some secret data',
// };

// console.dir(printMessage);
// console.log(user);

// // printMessage('Ukraine', 'Lviv');

// // option1
// // const printMessageBinded = printMessage.bind(user);
// // printMessageBinded('Ukraine', 'Lviv');

// printMessage.bind(user)('Ukraine', 'Lviv');

// // option2
// const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded2('France', 'Paris');

// // option3
// const printMessageBinded3 = printMessage.bind(user, 'Poland');
// printMessageBinded3('Warsaw');

// bind
// input: context, arg1,... argN
// output:func(with context)

// input:function, context, arg1,... argN
// output:func(with context)
function myBind(func, context, ...args) {
  // call
  // input:context, arg1..argN
  // output:func result

  // input:the same as func
  // output:func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

// test data
const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const bindedFunc = myBind(printMessage, user);
bindedFunc('Ukraine', 'Lviv');

const bindedFunc2 = myBind(printMessage, user, 'Poland');
bindedFunc2('Warsaw');
