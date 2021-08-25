// методы
//==================map 
//input 
//output

//input function + this(obj, optional)
//output new array


//callback function
// input (element, index(optional), array(optional))
// output changed element after func retur
const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log(`numbersList before`, numbersList);

// const mapRes = numbersList.map(function (el){
//   return el * el
// })

const mapRes = numbersList.map(el => el * el);

console.log(mapRes);
console.log(`numbersList after`, numbersList);

//==================forEach
//input function callback
//output undefined

//callback function
// input (element, index(optional), array(optional))
// output undefined
const res = numbersList.forEach((el) => {
  if(el > 0) {
    console.log(el);
    
  }
})

console.log(res);

//==================find
//input callback
//output number/ undefined

//callback function
// input (element, index(optional), array(optional))
//output boolean


//option 1
// const result = numbersList.find(el => {
//   if(el % 2 === 0 && el > 0) {
//     return true
//   } else {
//     return false
//   }
// })

const result = numbersList.find(el => el % 2 === 0 && el > 0)
console.log(result);

//==================reduce
//цель - соединить данные в одно целое

//input callback, number (acc initial value, optional)
//output number

//callback function
// input acc(number), number, index (optional), array (optional)
//output number (sting)
//return обязаьелен*

const transactions = [5, 3, 8, 10, -4];

const sum = transactions.reduce((acc, element, index) => {
  acc += element;
  console.log(
    "after: " + index + ", acc is " + acc + ", element is: " + element
  );
  return acc; //выводить результат функции!!! // X return (res += el)
}, 0);

console.log(sum);