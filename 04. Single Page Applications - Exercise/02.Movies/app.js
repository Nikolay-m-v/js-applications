"use strict";

(function main() {
  const baseUrl = "http://localhost:3030";
  const moviesUrl = `${baseUrl}/data/movies`;
  const elements = getElements();

  function getElements() {
    return {
      registerEmailInput: document.getElementById("email"),
      registerPasswordInput: document.getElementById("password"),
      repeatPasswordInput: document.getElementById("repeatPassword"),
      movieTitleInput: document.getElementById("title"),
      movieDescriptionInput: document.getElementById("movieDescription"),
      movieImageUrl: document.getElementById("imageUrl"),
      submitButton: document.querySelectorAll(".btn-primary"),
    };
  }

  function eventHandling() {
    elements.submitButton[4].addEventListener("click", (event) => {
      event.preventDefault();
      console.log("clicked rgister");
    });
  }

  eventHandling();
})();
