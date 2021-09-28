// input array (string), array(string)
// output object

// algo
// 1. reduce

// algo
// 2. loop
// create res obj
// iterate keyList
// get value by index
// add key-value to the object

// bad option
// function buildObject(keysList, valuesList) {
//   let obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     // добавл key, value в объект и вернуть в объект
//     // obj[keysList[index]] = valuesList[index];
//     obj = { ...obj, [valuesList[index]]: keysList[index] };
//   }

//   return obj;
// }

// good option
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     return { ...obj, [key]: valuesList[index] };
//   }, {});
// }

// short option
// const buildObject = (keysList, valuesList) =>
//   keysList.reduce((obj, key, index) =>
//     ({ ...obj, [key]: valuesList[index] }), {})

// // examples
// const keys = ["name", "address", "age", "run"];
// const values = [
//   "Bob",
//   "Ukraine",
//   34,
//   () => {
//     console.log("run");
//   },
// ];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

// console.log(result);

// Second task ==================================

// input object object
// output boolean

// algo
// привести объект к массиву, чтоб можно было перебрать элементы
// должны бать равны. проверить на длину
// сравнение значений. перебрать индекс и проверить на идентичность

// bad

// function compareObjects(obj1, obj2) {
//   const props1 = Object.getOwnPropertyNames(obj1);
//   const props2 = Object.getOwnPropertyNames(obj2);

//   if (props1.length !== props2.length) {
//     return false;
//   }

//   for (let i = 0; i < props1.length; i += 1) {
//     const prop = props1[i];

//     if (obj1[prop] !== obj2[prop]) {
//       return false;
//     }
//   }

//   return true;
// }

// better

// function compareObjects(obj1, obj2) {
//   const props1 = Object.getOwnPropertyNames(obj1);
//   const props2 = Object.getOwnPropertyNames(obj2);

//   if (props1.length !== props2.length) {
//     return false;
//   }

//   return props1.every(index => obj1[index] === obj2[index]);
// }

// examples
// const obj1 = {
//   name: "Tom",
//   age: 17,
// };

// const obj2 = {
//   name: "Bob",
//   age: 17,
// };

// const obj3 = {
//   name: "Bob",
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: "Tom",
//   age: 17,
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true

// 1. compare if  number keys in obj1 !== number keys in obj2=>false
// 2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// option 1

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let index = 0; index < keys1.length; index += 1) {
//     // проверить ключи и значения объектов
//     const key = keys1[index];

//     const value1 = obj1[key];
//     const value2 = obj2[key];

//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// }


// option 2
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);

  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

   return !keys1.some((key) => (obj1[key] !== obj2[key]))
  // return !keys1.reduce((result, key) => obj1[key] !== obj2[key], false); // не сработает. будет потсоянно проходится по значениям, вне записимости от результата
}
const obj1 = {
  age: 17,
  name: "Tom",
};

const obj2 = {
  name: "Tom",
  age: 17,
};

console.log(compareObjects(obj1, obj2));

// const obj3 = {
//   name: "Bob",
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: "Tom",
//   age: 17,
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true
