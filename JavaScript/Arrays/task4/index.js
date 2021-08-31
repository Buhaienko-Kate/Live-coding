// algo:
// 1.create empty array
// 2.iterate arr
// 3.apply callback for every el
// 4.push res of calback function

// input: array, func
// output:array

// callback:
// input: ellement, imdex, array
// output: res(number, object, boolean...)

const mapArrayElements = (arr, callback) => {
  // put you code here
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    res.push(callback(arr[index], index, arr));
  }
  return res;
};

// 1
const array = [1, 2, 5, 4, 8, 9, 7];
const callback = el => el * el;

const array1 = [1, 2, 5, 4, 8, 9, 'ann'];
console.log(mapArrayElements(array1, callback));
