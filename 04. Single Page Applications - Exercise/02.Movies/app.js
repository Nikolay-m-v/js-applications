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
    if (
      elements.registerEmailInput.value.trim() !== "" &&
      elements.registerPasswordInput.value.trim() !== "" &&
      elements.repeatPasswordInput.value.trim() !== ""
    ) {
      if (validatePassword()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function validatePassword() {
    if (
      elements.registerPasswordInput.value.length > 5 &&
      elements.registerPasswordInput.value ===
        elements.repeatPasswordInput.value
    ) {
      console.log("Password must be atleast 6 characters long!");
      return true;
    }
  }

  function eventHandling() {
    console.log(elements.emailInput);
    elements.submitButton[4].addEventListener("click", (event) => {
      event.preventDefault();
      if (!validateInput()) {
        console.log("Fill all inputs!");
        return;
      }
    });
  }

  eventHandling();
})();

/// fixes
