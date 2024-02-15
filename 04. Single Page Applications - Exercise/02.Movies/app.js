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

  function validateInput() {
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

  async function registerUser() {
    const requestData = {
      email: elements.emailInput.value.trim(),
      password: registerPasswordInput.value.trim(),
    };

    const responseRegister = await fetch(baseUrl, {
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

  function eventHandling() {
    console.log(elements.emailInput);
    elements.submitButton[4].addEventListener("click", (event) => {
      event.preventDefault();
      if (!validateInput()) {
        return;
      }
      registerUser();
    });
  }

  eventHandling();
})();
