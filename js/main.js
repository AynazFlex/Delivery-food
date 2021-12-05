"use strict"

const buttonAuth = document.body.querySelector('.button-auth');
const modalAuth = document.body.querySelector('.modal-auth');
const closeAuth = document.body.querySelector('.close-auth');
const buttonOut = document.body.querySelector('.button-out');
const userName = document.body.querySelector('.user-name');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const login = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
  userName.style.display = "flex";
  userName.textContent = user.login;
  modalAuth.style.display = "";
}

const logout = () => {
  buttonAuth.style.display = "flex";
  buttonOut.style.display = "none";
  userName.style.display = "none";
  userName.textContent = "";
  localStorage.removeItem("user");
}

buttonAuth.onclick = () => {
  modalAuth.style.display = "flex";
}

closeAuth.onclick = () => {
  modalAuth.style.display = "";
}

logInForm.onsubmit = (event) => {
  event.preventDefault();
  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  }
  if(user.login && user.password) {
    login(user);
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    alert('Введите логин и пароль');
  }
}

buttonOut.onclick = () => {
  logout();
}

if(localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')));
}
