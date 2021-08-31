// algo:
// 1.create empty array
// 2.iterate arr
// 3.apply callback for every el
// 4.push el to the res if calback true

// input: array, func
// output:array

// callback:
// input: ellement, imdex, array
// output: boolean

//OPTION1
// const filterArrayElements = (arr, callback) => {
//   // put you code here
//   const res = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const callBackRes = callback(arr[index], index, arr);
//     if (callBackRes) {
//       res.push(arr[index]);
//     }
//   }
//   return res;
// };

// const array = [1, 2, 5, 4, 8];
// const callback = (el, index, arr) => {
//   if (el > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(filterArrayElements(array, callback));
//  OPTION2
const filterArrayElements = (arr, callback) => {
  // put you code here
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }
  return res;
};
// 1
const array = [1, 2, 5, 4, 8, 9, 78];
const callback = el => el > 7;

// 2
const callback = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }
  return el > 7;
};

console.log(filterArrayElements(array, callback));
