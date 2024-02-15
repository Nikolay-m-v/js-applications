"use strict";

(function main() {
  const baseUrl = "http://localhost:3030";
  const moviesUrl = `${baseUrl}/data/movies`;
  const elements = getElements();

  function getElements() {
    return {
      loginEmailInput: document.getElementById("loginEmail"),
      loginPasswordInput: document.getElementById("loginPassword"),
      registerEmailInput: document.getElementById("registerEmail"),
      registerPasswordInput: document.getElementById("registerPassword"),
      repeatPasswordInput: document.getElementById("repeatPassword"),
      movieTitleInput: document.getElementById("title"),
      movieDescriptionInput: document.getElementById("movieDescription"),
      movieImageUrl: document.getElementById("imageUrl"),
      submitButton: document.querySelectorAll(".btn-primary"),
    };
  }

  function validateRegisterInput() {
    const email = elements.registerEmailInput.value.trim();
    const password = elements.registerPasswordInput.value.trim();
    const repeatPassword = elements.repeatPasswordInput.value.trim();

    if (email === "" || password === "" || repeatPassword === "") {
      console.log("Fill all inputs!");
      return false;
    }

    if (password.length < 6) {
      console.log("password must be atleast 6 characters");
      return false;
    }

    if (password !== repeatPassword) {
      console.log("passwords must match");
      return false;
    }

    return true;
  }

  function validateLoginInput() {
    const email = elements.loginEmailInput.value.trim();
    const password = elements.loginPasswordInput.value.trim();

    if (email === "" || password === "") {
      console.log("fill all inputs");
      return false;
    }

    return true;
  }

  async function registerUser() {
    const requestData = {
      email: elements.registerEmailInput.value.trim(),
      password: elements.registerPasswordInput.value.trim(),
    };

    /// register link does not work yet
    const responseRegister = await fetch(moviesUrl, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const responseData = await responseRegister.json();

    sessionStorage.setItem("registrationToken", responseData.token);
    console.log(responseData);
    return responseData;
  }

  async function login() {
    const requestData = {
      email: elements.loginEmailInput.value.trim(),
      password: elements.loginPasswordInput.value.trim(),
    };

    const loginResponse = await fetch(moviesUrl, {
      method: "post",
      headers: {
        "Contet-type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const responseData = await loginResponse.json();

    sessionStorage.setItem("user", JSON.stringify(responseData.token));
    sessionStorage.setItem("token", responseData.accessToken);
  }

  function eventHandling() {
    console.log(elements.emailInput);
    elements.submitButton[4].addEventListener("click", (event) => {
      event.preventDefault();
      if (!validateRegisterInput()) {
        return;
      }
      registerUser();
    });

    elements.submitButton[3].addEventListener("click", (event) => {
      event.preventDefault();
      if (!validateLoginInput()) {
        return;
      }
      login();
    });
  }

  eventHandling();
})();
