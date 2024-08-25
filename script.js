

let slideElement = document.querySelector("#slide");
let buttonElement = document.querySelector("#butoon");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeffhijklmnopqrstuvwxyz1234567890!@#$%&*()";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;
slide.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatepassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < slideElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  Password.innerHTML = pass;
  novaSenha = pass;
}
function copypassword() {
  alert("Senha copiada com Sucesso.");
  navigator.clipboard.writeText(novaSenha);
}
