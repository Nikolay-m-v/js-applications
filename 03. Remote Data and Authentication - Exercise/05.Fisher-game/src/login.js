"use strict";

(function main() {
  const url = `http://localhost:3030/users/login`;
  const emailInput = document.querySelector(`input[name="email"]`);
  const passwordInput = document.querySelector(`input[name="password"]`);
  const loginButton = document.getElementsByTagName("button")[0];

  loginButton.addEventListener("click", (event) => {
    loginUser(event);
  });

  function checkInputValues() {
    if (emailInput.value !== "" && passwordInput.value !== "") {
      return true;
    } else {
      console.log("fill all inputs!");
      return false;
    }
  }

  async function loginUser(event) {
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

    if (response.ok) {
      const userData = await response.json();

      sessionStorage.setItem("userData", JSON.stringify(userData));

      window.location.href =
        "http://127.0.0.1:5500/03.%20Remote%20Data%20and%20Authentication%20-%20Exercise/05.Fisher-game/src/index.html";
    } else {
      const errorData = response.json();
      console.log(`Login failed: ${errorData.message}`);
    }
  }
})();
