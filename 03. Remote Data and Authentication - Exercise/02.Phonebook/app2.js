"use strict";

(function () {
  const phonebookUrl = `http://localhost:3030/jsonstore/phonebook`;
  const postGetUrlRequests = `http://localhost:3030/jsonstore/phonebook`;
  const deleteUrlRequests = `http://localhost:3030/jsonstore/phonebook/:key>`;

  async function getAllEntries(elements) {
    const response = await fetch(phonebookUrl);

    const data = await response.json();

    console.log(data);
    Object.values(data).forEach((entry) => {
      console.log(entry);
      const personName = entry.person;
      const phoneNumber = entry.phone;
      const liElement = document.createElement("li");
      liElement.textContent = `${personName}: ${phoneNumber}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", entry._id);
      console.log(liElement);

      liElement.appendChild(deleteButton);
      elements.ulElement.appendChild(liElement);
    });
  }

  function getElements() {
    const elements = {
      ulElement: document.getElementById("phonebook"),
      loadBtn: document.getElementById("btnLoad"),
      nameInput: document.getElementById("person"),
      phoneInput: document.getElementById("number"),
      createBtn: document.getElementById("btnCreate"),
    };

    return elements;
  }

  function eventHandling() {
    const elements = getElements();

    elements.loadBtn.addEventListener("click", () => {
      getAllEntries(elements);
    });
  }

  eventHandling();
})();
