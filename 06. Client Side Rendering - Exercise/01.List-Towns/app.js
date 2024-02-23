"use strict";

(function main() {
  const elements = getElements();

  function getElements() {
    return {
      loadTownsButton: document.getElementById("btnLoadTowns"),
      townsInput: document.getElementById("towns"),
      rootElement: document.getElementById("root"),
    };
  }

  function checkInputValues(elements) {
    if (elements.townsInput.value === "") {
      return false;
    }

    return true;
  }

  function getTowns(elements) {
    const towns = elements.townsInput.value.split(", ");

    if (!checkInputValues(elements)) {
      return;
    }

    createUlElement(elements);
    for (let i = 0; i < towns.length; i++) {
      let town = towns[i];
      appendTown(elements, town);
    }

    clearInputValues(elements);
  }

  function clearInputValues(element) {
    element.townsInput.value = "";
  }

  function createUlElement(elements) {
    const ulElement = document.createElement("ul");
    elements.rootElement.appendChild(ulElement);
  }

  function appendTown(elements, townToAppend) {
    const ulElement = elements.rootElement.querySelector("ul");
    const liElement = document.createElement("li");
    liElement.textContent = townToAppend;
    ulElement.appendChild(liElement);
  }

  function eventHandler() {
    elements.loadTownsButton.addEventListener("click", (event) => {
      event.preventDefault();
      getTowns(elements);
    });
  }

  eventHandler();
})();
