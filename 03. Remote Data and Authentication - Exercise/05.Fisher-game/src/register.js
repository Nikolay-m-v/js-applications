"use strict";

(function main() {
  const url = `http://localhost:3030/users/register`;
  const emailInput = document.querySelector(`input[name="email"]`);
  const passwordInput = document.querySelector(`input[name="password"]`);
  const passwordRepeatInput = document.querySelector(`input[name="rePass"]`);
  const registerButton = document.getElementsByTagName("button")[0];

  registerButton.addEventListener("click", (event) => registerUser(event));

  function checkInputValues() {
    if (
      emailInput.value !== "" &&
      passwordInput.value !== "" &&
      passwordRepeatInput.value !== ""
    ) {
      return true;
    } else {
      console.log("fill all inputs!");
      return false;
    }
  }

  async function registerUser(event) {
    event.preventDefault();

    if (!checkInputValues()) {
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(`Registration failed: ${errorData.message}`);
    } else {
      sessionStorage.setItem("userEmail", emailInput.value);
      console.log("Registration Successful");
      window.location.href =
        "http://127.0.0.1:5500/03.%20Remote%20Data%20and%20Authentication%20-%20Exercise/05.Fisher-game/src/index.html";
    }
  }
})();
