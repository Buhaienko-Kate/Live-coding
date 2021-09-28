'use strict';

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    console.log(this);

    // [1, 2, 3].filter(function () {
    //   console.log('filter this: ' + this);
    // });
    // lose context case2
    this.timerId = setInterval(() => {
      console.log(this);

      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
    // with bind how to don't lose context(fix context)
    // const callbackFunc = function () {
    //   console.log(this);
    //   this.secondsPassed += 1;
    // };
    // const bindCallback = callbackFunc.bind(this);
    // setInterval(bindCallback, 1000);
  },

  //   function setInterval(callback){
  //   ....
  //   window.callback()
  // }

  //   function filter (callback){
  //   ....
  //  callback()
  //   ...
  // }
  stopTimer() {
    clearInterval(this.timerId);
  },
  getTime() {
    let secondsFormatted = this.secondsPassed < 10 ? `0${this.secondsPassed}` : this.secondsPassed;
    return `${this.minsPassed}:${secondsFormatted}`;
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// context - объект в рамках которого, выполняется функция
// (объект который владеет вызовом функции)
// один из источников данных для функции, от куда она может черпать информацию
// контекст расширяет возможности функции
// контекст могут использовать разные функции,
// контекст дает возможность скрыть какие-то данные от
// внешнего воздейтсвия, изменение из вне
// контекст может быть один для нескольких функций, таким образом расширяя возможности

// 1. понимать когда контекст теряется (в колбеке)
// 2. фиксить контекст

// если функция вызывается сама по себе без объекта происходит потеря контекста

// test datd
// timer.startTimer();
timer.stopTimer();
timer.getTime();
// lose context case 1
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// set interval example
// setInterval(() => console.log('Monday'), 2000);

// lose context case 2
// [1, 2, 3].filter(function () {
//     console.log('filter this' + this)
// })

//
// const obj = {
//   testFunc: () => {
//     console.log(this);
//   },
// };
