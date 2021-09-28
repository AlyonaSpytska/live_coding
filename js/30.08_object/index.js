// input object, key, value
// output object

function addPropertyV1(obj, key, value) {
  // eslint-disable-next-line no-param-reassign
  obj[key] = value;
  return obj;
}
const transaction = {
  value: 170,
};

console.log(addPropertyV1(transaction, "currency", "USD"));
console.log(transaction, "this is variable");

function addPropertyV2(obj, key, value) {
  // input target(object), source (object) ..... sources N (object)
  // output object
  Object.assign(obj, { [key]: value });
  return obj;
}

console.log(addPropertyV2(transaction, "currency", "USD2"));
console.log(transaction, "this is variable");


function addPropertyV3(obj, key, value) {
  // eslint-disable-next-line prefer-object-spread
  return Object.assign({}, obj, { [key]: value });
}


console.log(addPropertyV3(transaction, "currency", "USD3"));
console.log(transaction, "this is variable");


function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

console.log(addPropertyV4(transaction, "currency", "USD4"));
console.log(transaction, 'this is variable');


// const numbers = [10, 11, 10, 39]
// console.log(numbers); // [10, 11, 10, 39]
// console.log(...numbers);// 10 11 10 39 
// разбивает на кусочки, расширяет


// rest operator
// все собирает, spread все распыляет

// function sum(param1, ...params) {
//   console.log(param1);
//   console.log(params);

//   return params.reduce((acc, el) => {
//     // eslint-disable-next-line no-param-reassign
//     acc += el;
//     return acc;
//   });
// }

// test data
// console.log(sum(1, 2, 55, 9, 0));

// const numbersRest = [10, 12, 45, 5];
// const [firstEl, ...rest] = numbersRest;
// console.log(firstEl);
// console.log(rest);

// // data destructing
// const [num1, num2] = numbersRest;
// console.log(num1, num2);

// const [firstElement, ...restArr] = numbersRest;
// console.log(firstElement);
// console.log(restArr);