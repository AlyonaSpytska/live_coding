function getSenceOfLife() {
  return 42
}

//option1
const res = getSenceOfLife();
console.log(res);

//option 2
// console.log(getSenceOfLife());

// function getSenceOfLife() {
//   console.log(42);
// }

// console.log(getSenceOfLife());//undefined

function getSquared (num) {
  return num * num;
}


//test data!!!!!!
console.log(getSquared(-4));
console.log(getSquared(0));
console.log(getSquared(10));

// ===================  просуммировать два аргумента

function sum(numberOne, numberTwo) {
  return numberOne + numberTwo; 
}

console.log(sum(2, 10, 100));// сумма первых двуч чисел
console.log(sum(-5, 10));
console.log(sum(-5, -30));

// ===================  

function getMessage(age) {
  console.log('I am ' + age + ' years old');
  // console.log(`I am ${age} years old`);
}

console.log(getMessage(20));
console.log(getMessage(37));

// =================== стрелочная функция
//option 1
// const mult = (firstNum, secondNum) => {
//   return firstNum * secondNum;
// }


//option 2
// const mult = (firstNum, secondNum) => firstNum * secondNum;

//option 3 + задача сделать аргументы со значением 0 по умолчанию. если передать 1 аргумент то выйдет NaN
const mult = function (firstNum = 0, secondNum = 0) {
  return firstNum * secondNum;
}

console.log(mult(10, 20));
console.log(mult(10, 5));
console.log(mult(3, 4));

// число вывести в квадрат

const square = number => number * number;

console.log(square(3));
console.log(square(20));
console.log(square(100));

const getSpecialNumber = () => 17;

console.log(getSpecialNumber());
console.log(getSpecialNumber(20));
console.log(getSpecialNumber(-17));

