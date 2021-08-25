//input array, func
//output callback

//callback
//input el, index, arr
//output boolean


//алгоритм
// 1. create new array
// 2. iterate arr (фильтр массива)
// 3. aplly callback for every el
// 4. push el to the res if callback true

//===============option 1
// const filterArrayElements = (arr, callback) => {
//   const res = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, array);
//     if(callbackRes) {
//       res.push(arr[index]);
//     }
//   }
//   return res;
// };


// const array = [2, 3, 4];
// const func = (el, index, arr) {
//   if(el > 7) {
//     return true
//   } else {
//     return false
//   }
// }

//===============option 2
// const filterArrayElements = (arr, callback) => {
//   const res = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     if(callback(arr[index], index, array)) {
//       res.push(arr[index]);
//     }
//   }

//   return res;
// };


// const array = [2, 3, 4, 10];
// const func = (el, index, arr) => el > 2;
// //test data
// console.log(filterArrayElements(array, func));

// если длина меньше 5, то фильтрация не работает
// const func = (el, index, arr) => {
//   if(arr.length < 5) {
//     return true
//   } 
//   return el > 7
// }




//input arr, callback
//output array


//callback
//input el, index, arr
//output el


const mapArrayElements = (arr, callback) => {
  let someArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index], index, arr)) {
      someArr.push(callback(arr[index]));
    }
  }
  return someArr;
};


const callFunc = num => num * 2


const entireArr = [2, 3, 4, 8, 5];
const entireArr2 = [5, 6, 4, 10, 5];
console.log(mapArrayElements(entireArr, callFunc));
console.log(mapArrayElements(entireArr2, callFunc));
console.log(entireArr);
