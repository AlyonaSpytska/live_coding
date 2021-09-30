// const emailInput = document.getElementById("email");
// const nameInput = document.getElementById("name");
// const passwordInput = document.getElementById("password");
// const loginForm = document.forms[0];
// const submitBtn = document.querySelector(".submit-button");
// const errorText = document.querySelector(".error-text");

// const users = {
//   email: null,
//   name: null,
//   password: null,
// };
// const getData = event => {
//   const emailText = emailInput.value;
//   users.email = emailText;

//   const userName = nameInput.value;
//   users.name = userName;

//   const passwordText = passwordInput.value;
//   users.password = passwordText;

//   const requiredFields = loginForm.reportValidity(event.target.value);
//   if (requiredFields) {
//     submitBtn.removeAttribute("disabled");
//   }
// };
// loginForm.addEventListener("input", getData);

// const sendDataBtn = document.querySelector(".submit-button");

// // eslint-disable-next-line arrow-body-style
// // eslint-disable-next-line no-shadow
// // eslint-disable-next-line arrow-body-style

// // eslint-disable-next-line no-return-assign
// const createUser = usersData =>
//   fetch(`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json;charset=utf-8" },
//     body: JSON.stringify(usersData),
//   });
// function getUsers() {
//   return fetch(
//     `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`
//   ).then(response => response.json());
// }
// function getUsersById(userId) {
//   return fetch(
//     `${`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`}${userId}`
//   ).then(response => response.json());
// }

// const sumbitCreatedUser = event => {
//   event.preventDefault();
//   createUser(users)
//     .then(() => getUsers())
//     .then(user => {
//       getUsersById(user.length).then(user => alert(JSON.stringify(user)));
//     })
//     .then(() => {
//       emailInput.value = "";
//       nameInput.value = "";
//       passwordInput.value = "";
//     })
//     // eslint-disable-next-line no-return-assign
//     .catch(() => (errorText.textContent = "Failed to create user"));
// };
// loginForm.addEventListener("submit", sumbitCreatedUser);

// const emailInput = document.getElementById("email");
// const nameInput = document.getElementById("name");
// const passwordInput = document.getElementById("password");
const loginForm = document.querySelector(".login-form");
const submitBtn = document.querySelector(".submit-button");
const errorText = document.querySelector(".error-text");

const serverUrl = `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`;

// algo
// 1. считать инфу с формы
// 2. отправить на сервер (sent data to server)
// 3. обрабатывать ответ сервера (handle server response)

const createUserHandler = event => {
  event.preventDefault();

  // 1.
  // bad option
  // const user = {
  //   email: emailInput.value,
  //   name: emailInput.value,
  //   password: passwordInput.value,
  // };

  // good option
  const userData = Object.fromEntries(new FormData(loginForm));

  fetch(serverUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(body => {
      loginForm.reset(); // обнуляет поля после отправки на сервер
      alert(JSON.stringify(body));
    })
    .catch(() => {
      errorText.textContent = "Failed to create user";
    });
};
loginForm.addEventListener("submit", createUserHandler);

const validateFormHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disables", true);
  }
};
loginForm.addEventListener("input", validateFormHandler);
