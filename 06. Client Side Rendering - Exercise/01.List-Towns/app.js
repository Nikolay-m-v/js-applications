"use strict";

(function main() {
  function getElements() {
    return {
      loadTownsButton: document.getElementById("btnLoadTowns"),
      townsInput: document.getElementById("towns"),
    };
  }

  function getTowns(elements) {
    const towns = elements.townsInput.value.split(", ");
    console.log(towns);
  }

  function eventHandler() {
    const elements = getElements();

    elements.loadTownsButton.addEventListener("click", (event) => {
      event.preventDefault();
      getTowns(elements);
    });
  }

  eventHandler();
})();
