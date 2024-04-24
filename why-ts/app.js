// api url
let url = "https://jsonplaceholder.typicode.com/users";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표기하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
