// // bad option
// // const withdraw = (clients, balances, names, amount) => {
// //   let result = 0;
// //   clients.forEach(function (client, index) {
// //     if (client.includes(names) && balances[index] >= amount) {
// //       result = balances[index] - amount;
// //     } else if (client.includes(names) && balances[index] < amount) {
// //       result = -1;
// //     }
// //   });
// //   return result;
// // };

// // //bad
// // const withdraw = (clients, balances, client, amount) =>
// //   balances[clients.indexOf(client)] < amount
// //     ? -1
// //     : (balances[clients.indexOf(client)] -= amount);

// // //bad
// // function withdraw(clients, balances, client, amount) {
// //   let i = 0;
// //   for (; i < clients.length; ++i) {
// //     if (clients[i] === client) {
// //       break;
// //     }
// //   }

// //   balances[i] -= amount;
// //   console.log(balances);
// //   return balances[i] > 0 ? balances[i] : -1;
// // }

// // good option

// const withdraw = (clients, balances, clientName, amount) => {
//   const clientIndex = clients.indexOf(clientName);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   balances[clientIndex] == amount;
//   return balances[clientIndex];
// };

// // //good option
// function withdraw(clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);

//   balances[clientIndex] -= amount;
//   return balances[clientIndex] > 0 ? balances[clientIndex] : -1;
// }

// //bad
// // const withdraw = (clients, balances, client, amount) => {
// //   let clientNum = clients.indexOf(client);
// //   console.log(clientNum);

// //   const isEnough = num => {
// //     if (num > amount) {
// //       return num - amount;
// //     }
// //     return -1;
// //   };
// //   const newBalances = balances.map(isEnough);
// //   return newBalances[clientNum];
// // };

// //good

// const withdraw = (clients, balances, client, amount) => {
//   let clientNum = clients.indexOf(client);

//   if(balances[clientNum] < num) {
//     return - 1
//   }
//   balances[clientNum] -= amount;
//   return balances[clientNum];
// };

// const clients = ["Denis", "Ann", "Alex"];
// const balances = [9100, 80, 1200];
// const client = "Alex";
// const amount = 500;
// console.log(withdraw(clients, balances, client, amount));
// console.log(balances);

// // bad
// const withdraw = (clients, balances, client, amount) => {
//   let ind = clients.indexOf(client);
//   let bal = balances[ind];
//   return bal < amount ? -1 : (balances[ind] -= amount);
// };

// // good
// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);
//   return balances[index] < amount ? -1 : (balances[index] -= amount);
// };

// //bad
// // function withdraw(clients, balances, client, amount) {
// //   let indexOfPerson = clients.indexOf(client);

// //   if (balances[indexOfPerson] >= amount) {
// //     balances[indexOfPerson] -= amount;
// //     return amount;
// //   }
// //   if (balances[indexOfPerson] < amount) {
// //     return -1;
// //   }
// // }

// //good
// function withdraw(clients, balances, client, amount) {
//   let indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }

//   balances[indexOfPerson] -= amount;
//   return balances[indexOfPerson];
// }


// //bad
// // function withdraw(clients, balances, client, amount) {
// //   let output = 0;
// //   const indexOfPerson = clients.indexOf(client);

// //   if (balances[indexOfPerson] >= amount) {
// //     output = balances[indexOfPerson] - amount;
// //     return output;
// //   }
// //   output = -1;

// //   return output;
// // }

// //good

// function withdraw(clients, balances, client, amount) {
//   const indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }

//   balances[indexOfPerson] -= amount;
//   return balances[indexOfPerson];
// }


// const users = [20, 21, 33, 43, 18, 53];
// const res  =users.filter(age => age > 18);
// console.log(res.length);

let a = { name: "Samantha"}
let b = a;
b.name = "Sara"
console.log(b); //result { name: "Sara"}
console.log(a);//result { name: "Sara"}


let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)

let y = "5";      // y is a string
let x = + y;      // x is a number

Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN

false
undefined
null
NaN
0
"" (empty 'string')

const value = 'string';

!value; // false

!!value; // true

function doSomething(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый
    // Etc.
}

let doSomething = (...rest) => {
    rest[0]; // Доступ к первому аргументу
};

let doSomething = () => {
    arguments[0]; // У стрелочных функций нет аргументов
};

numObj.toPrecision([precision])

var str = 'Быть или не быть вот в чём вопрос.';

console.log(str.includes('Быть'));       // true
console.log(str.includes('вопрос'));    // true
console.log(str.includes('несуществующий')); // false
console.log(str.includes('Быть', 1));    // false
console.log(str.includes('БЫТЬ'));       // false