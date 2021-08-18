// 1. пройтись по массиву с 2 до num
// 2. проверить каждое число
//    2.1 проверить итерацию от 2 до n
//    2.2  проверить что число делится без остачи if num % index === 0 -not prime

//9 -> // 1. делится ли число на 2
// 2. делится ли число на 3 --> not prime

//input: num
//output: undefined //реальный output у функции

// function getPrimes(num) {
//   for(let index = 2; index <= num; index +=1) {
//     console.log(`cheking if ` + index + ` is prime`);

//     let isPrime = true;
//     for(let number = 2; number < index; number += 1) {
//       console.log(`checking if numbe % index` + number + ` ` + index);

//       if(index % number === 0) {
//         console.log(`number not a prime` + index);

//         isPrime = false
//         break;
//       }
//     }
//     if(isPrime) {
//       console.log(index);
//     }
//   }
// }

//input: number
//otput: boolean
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}


//test data
getPrimes(10);


