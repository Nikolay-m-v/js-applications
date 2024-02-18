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
      logoutButton: document.getElementById("logout"),
      sectionLoginElement: document.getElementById("form-login"),
      allElementsContainer: document.getElementById("container"),
      navigationLinks: document.querySelectorAll(".nav-link"),
      loginForm: document.getElementById("form-login"),
      registerForm: document.getElementById("form-sign-up"),
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

  function addMovie() {}

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

    window.location.href = "/home";
  }

  function logoutUser() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    console.log("User Logged out successfully");

    /// login not implemented yet
    window.location.href = `${baseUrl}/data/login`;
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

    elements.logoutButton.addEventListener("click", (event) => {
      event.preventDefault();
      logoutUser();
    });

    elements.navigationLinks[2].addEventListener("click", () => {
      hideElements(elements.loginForm);
    });

    elements.navigationLinks[3].addEventListener("click", () => {
      hideElements(elements.registerForm);
    });
  }

  function hideElements(elementToRemainVisible) {
    resetHtmlState();
    const containerChildren = elements.allElementsContainer.children;
    console.log(elementToRemainVisible);

    for (let i = 1; i < containerChildren.length; i++) {
      const element = containerChildren[i];
      if (element !== elementToRemainVisible) {
        containerChildren[i].style.display = "none";
      }
    }
  }

  function resetHtmlState() {
    const containerChildren = elements.allElementsContainer.children;

    for (let i = 0; i < containerChildren.length; i++) {
      containerChildren[i].style.display = "block";
    }
  }

  eventHandling();
})();
