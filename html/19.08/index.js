// Live coding 19.08. Arrays.
// Массив нужен для хранения и последующего использования набора данных, которые в него помещены

const numbersList1 = [1, 2, 3, 4, 5];
console.log(numbersList1);
// input: none
// output: number
const res = numbersList1.pop();
console.log(res);
console.log(numbersList1);

// ====
const numbersList2 = [1, 2];
console.log(`bedore push ${numbersList2}`);
numbersList2.push(100);
console.log(`after push ${numbersList2}`);

// ===
// input: none
// output: value
const numbersList3 = [1, 2, 3, 4, 5];
console.log(`bedore shift ${numbersList3}`);
const result = numbersList2.shift(100);
console.log(result);
console.log(`after shift ${numbersList3}`);

// ===

const numbersList4 = [1, 2, 3, 4, 5];
console.log(`bedore slice ${numbersList3}`);

// input: num, num (optional)
// output: array
const res4 = numbersList4.slice(2);
console.log(res4);

console.log(`after slice ${numbersList3}`);

// CALLBACK
// input: number, number, callback
// output: undefined
function sum(from, to, printer) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }

  printer(sum);
}

// test data// callback function
// function printResult(res) {
//   alert(res);
// }

function printResult(res) {
  console.log(res);
}

sum(5, 8, printResult);

// filter
// input: callback function
// output: new array

// filter => callback

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(`bedore filter ${anotherNumbersList}`);

// input: number, index (optional), array (optional)
// output: boolean


// option 1
// function filterCallback(element) {
//   console.log(element);

//   if (element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }
// функция вызвалась 7 раз(для каждого элемента)

// option 2
const filterRes = anotherNumbersList.filter(el => el > 5);

console.log(filterRes);
console.log(`after filter ${anotherNumbersList}`);
