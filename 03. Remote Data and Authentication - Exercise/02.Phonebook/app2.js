"use strict";

(function () {
  const phonebookUrl = `http://localhost:3030/jsonstore/phonebook`;
  const postGetUrlRequests = `http://localhost:3030/jsonstore/phonebook`;

  function clearPhonebook(elements) {
    elements.ulElement.innerHTML = "";
  }

  function checkInputFields(elements) {
    const isValid =
      elements.nameInput.value === "" && elements.phoneInput.value === "";

    return isValid;
  }

  function clearInputValues(elements) {
    elements.nameInput.value = "";
    elements.phoneInput.value = "";
  }

  async function createEntry(elements) {
    if (checkInputFields(elements)) {
      return;
    }

    const entryData = {
      person: elements.nameInput.value.trim(),
      phone: elements.phoneInput.value.trim(),
    };
    const response = await fetch(postGetUrlRequests, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(entryData),
    });

    const data = await response.json();

    clearInputValues(elements);
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

  async function deleteEntry(entry, elements) {
    const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${entry}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
    });

    console.log(`Entry with ID ${entry} deleted successfully`);

    getAllEntries(elements);
  }

  function getElements() {
    const elements = {
      ulElement: document.getElementById("phonebook"),
      loadBtn: document.getElementById("btnLoad"),
      nameInput: document.getElementById("person"),
      phoneInput: document.getElementById("phone"),
      createBtn: document.getElementById("btnCreate"),
    };

    return elements;
  }

  function eventHandling() {
    const elements = getElements();

    elements.loadBtn.addEventListener("click", () => {
      getAllEntries(elements);
    });

    elements.createBtn.addEventListener("click", () => {
      createEntry(elements);
    });
  }

  eventHandling();
})();
