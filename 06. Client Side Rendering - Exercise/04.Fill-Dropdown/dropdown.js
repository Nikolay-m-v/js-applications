"use strict";

(function main() {
  const elements = getElements();

  function getElements() {
    return {
      menuElement: document.getElementById("menu"),
      inputText: document.getElementById("itemText"),
      addButton: document.getElementById("addButton"),
    };
  }

  function eventHandler() {
    elements.addButton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("clicked works");
    });
  }

  async function getAllItems() {
    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/dropdown`
    );

    const data = await response.json();
    Object.values(data).forEach((entry) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = entry.text;
      optionElement.value = entry._id;
    });
  }

  eventHandler();
  document.addEventListener("DOMContentLoaded", () => {
    getAllItems();
  });
})();
