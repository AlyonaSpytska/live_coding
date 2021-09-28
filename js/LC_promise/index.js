// input: obj
// output: undefined
function saveUser(userData) {
  // input: url(string), options-obj(header, body....)
  // output: obj(promise)
  const res = fetch(
    "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
    // input callback -> (inp - result promise)
    // output promise
  ).then(response => {
      // вернет в промис то, что тут написано
      response.json()
    }).then(body => {
      // получить реультат
      console.log(body);
    }).catch(e => {
      // ...
    })

  console.log(res);
}

// test data
const user = {
  email: "someemail@gmail.com",
  firstName: "Sara",
  lastName: "Conor",
  city: "NY",
  age: 28,
};

console.log(JSON.stringify(user));

saveUser(user);
