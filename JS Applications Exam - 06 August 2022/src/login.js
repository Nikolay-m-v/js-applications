"use strict";
function login() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");
  const url = `/users/login`;

  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    loginUser();
  });

  function checkInputValues() {
    if (emailInput.value === "" || passwordInput.value === "") {
      return false;
    }
    return true;
  }

  async function loginUser() {
    if (!checkInputValues()) {
      return;
    }

    const userData = { email: emailInput.value, password: passwordInput.value };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }
}

export { login };
