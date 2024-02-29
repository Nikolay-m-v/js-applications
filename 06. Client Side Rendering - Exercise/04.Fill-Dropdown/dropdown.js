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
    document.addEventListener("DOMContentLoaded", () => {
      getAllItems();
    });

    elements.addButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearMenu();
      addItem();
      getAllItems();
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

      appendElement(optionElement);
    });
  }

  async function addItem() {
    if (!checkInputValue()) {
      console.log("input values are empty.");
      return;
    }
    const itemToAdd = { text: elements.inputText.value };

    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/dropdown`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(itemToAdd),
      }
    );
    clearInputValue();
    return response.json();
  }

  function checkInputValue() {
    return elements.inputText.value !== "";
  }

  function clearInputValue() {
    elements.inputText.value = "";
  }

  function clearMenu() {
    elements.menuElement.innerHTML = "";
  }

  function appendElement(elementOptionToAppend) {
    elements.menuElement.appendChild(elementOptionToAppend);
  }

  eventHandler();
})();
