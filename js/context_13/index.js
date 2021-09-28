// "use strict";
// созать объект с методом
// есть поля объекта, методы объекта

// algo
// думать над каждым методом

// const timer = {
//   secondsPassed: 0,
//   minPassed: 0,
//   timerId: null,

//   startTimer() {
//     // good option
//     this.timerId = setInterval(() => {
//       console.log(this);
//       this.secondsPassed += 1;

//       if (this.secondsPassed === 60) {
//         this.minPassed += 1;
//         this.secondsPassed = 0;
//       }
//     }, 1000);

    // scnd option
    // function() {
    //   console.log(this);

    //   this.secondsPassed += 1
    // }.bind(this), 1000;
 // },

//   stopTimer() {
//     clearInterval(this.timerId);
//   },

//   getTime() {
//     if (this.secondsPassed < 10) {
//       return `${this.minPassed}:0${this.secondsPassed}`;
//     } 
//       return `${this.minPassed}:${this.secondsPassed}`;
//   },

//   resetTimer() {
//      this.minsPassed = 0;
//      this.secondsPassed = 0;
//   }
// };

// context
// 1. нужно понимать когда контекст теряется и нужно понимать, когда он не теряется(разбираться в логике). есть 2-3 случая потери контекста
// 2. фиксить контекст

// обмен данными между функциями
// ограниченные возможности вызова ф-ции в ф-ции. с помощью контекста можно использовать результат функции в других функциях

// test data

// timer.startTimer(); // object timer
// timer.stopTimer();
// timer.resetTimer();
// timer.getTime();
// lose context case #1
// const startTimerFunc = timer.startTimer;
// startTimerFunc(); // undefined

// setInterval(() => {
//   console.log('Monday');
// }, 2000);

// lose context case #2
// callback функция вызываться сама по себе
// [1, 2, 3, 4].filter(function() {
//   console.log('filter.this' + this);
// } )

// function filter (callback) {
//  ...
//  ...
// callback();
// ...
// }


// day 2 context


// function printMessage(country, city) {
//   console.log(this);

//   console.log(
//     `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
//   );
// }

// const user = {
//   firstName: "Andrey",
//   age: 111,
//   tempFunc: "some secret data",
// };
// console.log(user);
// console.dir(printMessage);
// printMessage("Ukraine", "Lviv");

// input context, arg1 .... arg N..
// output func for this

// option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded("Ukraine", "Lviv");

// printMessage.bind(user)("Ukraine", "Lviv");

// option 2
// const printMessageBinded2 = printMessage.bind(user, "UK", "London");
// printMessageBinded2();

// option 3
// const printMessageBinded3 = printMessage.bind(user, "Poland");
// printMessageBinded3("Warsaw");


// input func context arg1 ...argN (optional)
// output fbindedFunc  
// function myBind( func, context, ...args) {
//   call вызывает внутри ф-цию и возвращаем результат ф-ции
//    input context, arg1 ...argN
//   output fucn result (string, number, object)


//   input the same args as func
//   output fucn result (string, number, object)
//   return function (...funcArgs) {
//     func.call(context, ...args, ...funcArgs);
//   }
// }

// // test data
// const printMessageBinded4 = myBind(printMessage, user);
// printMessageBinded4("UK", "London");

// const printMessageBinded5 = myBind(printMessage, user, "USA");
// printMessageBinded5("LA");
// "use strict"
// part 3

