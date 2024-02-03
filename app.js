
let form = document.querySelector("#accountRegisterForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let firstName = document.querySelector("#fname");
  let lastName = document.querySelector("#lname");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (firstName.value == "") {
    firstName.classList.add("required");
    firstName.placeholder = "";
    errorMessage = document.querySelector("#fname ~ p");
    errorMessage.classList.remove("hide");
  }
  else {
    firstName.classList.remove("required");
    firstName.placeholder = "First Name";
    errorMessage = document.querySelector("#fname ~ p");
    errorMessage.classList.add("hide");
  }

  if (lastName.value == "") {
    lastName.classList.add("required");
    lastName.placeholder = "";
    errorMessage = document.querySelector("#lname ~ p");
    errorMessage.classList.remove("hide");
  }
  else {
    lastName.classList.remove("required");
    lastName.placeholder = "Last Name";
    errorMessage = document.querySelector("#lname ~ p");
    errorMessage.classList.add("hide");
  }

  if (!email.value.match(emailRegex)) {
    email.classList.add("required");
    email.placeholder="email@example/com";
    errorMessage = document.querySelector("#email ~ p");
    errorMessage.classList.remove("hide");
  }
  else {
    email.classList.remove("required");
    email.placeholder="email@example/com";
    errorMessage = document.querySelector("#email ~ p");
    errorMessage.classList.add("hide");
  }

  if (password.value == "") {
    password.classList.add("required");
    password.placeholder = "";
    errorMessage = document.querySelector("#password ~ p");
    errorMessage.classList.remove("hide");
  }
  else {
    password.classList.remove("required");
    password.placeholder="email@example/com";
    errorMessage = document.querySelector("#password ~ p");
    errorMessage.classList.add("hide");
  }

});