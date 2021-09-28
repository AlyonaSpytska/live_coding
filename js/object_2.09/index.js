// algo
// create function (I: obj,  O: array)
// get key & value
// add to object key(id) and value(its index this obj) .map
// push objs in array
// sort by age


// bad option
// const getCustomersList = obj => {
//   // input array
//   // output object
//   return Object.entries(obj)
//     .map(arr => {
//       console.log(arr); // result ["customers-id-2", {…}]
//       let obj = { id: arr[0] }; // создали объект
//       console.log(obj); // result {id: "customers-id-1"}
//       const value = arr[1];
//       obj = { ...obj, ...value }; // деструктурировали
//       console.log(obj);
//       return obj;
//     })
//     .sort((a, b) => a.age - b.age);
// };


// good 
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({id: arr[0], ...arr[1] }))
//     .sort((a, b) => a.age - b.age);
// };

// best

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customerObj]) => { 
//       console.log(id);
//       console.log(customerObj);
//       console.log({ id, ...customerObj });
//       return { id, ...customerObj };
//      })
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = obj => 
//     Object.entries(obj)
//     .map(([id, customerObj]) => ({ id, ...customerObj}))
//     .sort((a, b) => a.age - b.age);

// // test data
// const customers = {
//   "customers-id-1": {
//     name: "William",
//     age: 54,
//   },
//   "customers-id-2": {
//     name: "Tom",
//     age: 17,
//   },
// };

// console.log(getCustomersList(customers));




