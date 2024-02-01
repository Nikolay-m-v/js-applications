"use strict";

(function () {
  const phonebookUrl = `http://localhost:3030/jsonstore/phonebook`;
  const postGetUrlRequests = `http://localhost:3030/jsonstore/phonebook`;

  function clearPhonebook(elements) {
    elements.ulElement.innerHTML = "";
  }

  async function getAllEntries(elements) {
    clearPhonebook(elements);
    const response = await fetch(phonebookUrl);

    const data = await response.json();

    Object.values(data).forEach((entry) => {
      const personName = entry.person;
      const phoneNumber = entry.phone;
      const liElement = document.createElement("li");
      liElement.textContent = `${personName}: ${phoneNumber}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", entry._id);
      liElement.appendChild(deleteButton);
      elements.ulElement.appendChild(liElement);

      deleteButton.addEventListener("click", () => {
        const entryId = deleteButton.getAttribute("id");
        deleteEntry(entryId);
      });
    });
  }

  async function deleteEntry(entry) {
    const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${entry}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
    });

    console.log(`Entry with ID ${entry} deleted successfully`);

    console.log(entry);
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
