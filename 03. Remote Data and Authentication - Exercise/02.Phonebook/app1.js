"use strict";

function main() {
  const btnLoad = document.getElementById("btnLoad");
  const btnCreate = document.getElementById("btnCreate");
  const ulPhonebookElement = document.getElementById("phonebook");

  const urlPhonebook = `http://localhost:3030/jsonstore/phonebook`;

  btnLoad.addEventListener("click", () => {
    loadPhonebook();
  });

  btnCreate.addEventListener("click", () => {
    createRecord();
  });

  async function loadPhonebook() {
    try {
      const response = await fetch(urlPhonebook);

      const data = await response.json();
      console.log(data);
      Object.values(data).forEach((entry) => {
        let liElement = document.createElement("li");
        liElement.textContent = `${entry.person}: ${entry.phone}`;
        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.setAttribute("id", entry._id);
        liElement.appendChild(buttonDelete);
        ulPhonebookElement.appendChild(liElement);

        buttonDelete.addEventListener("click", () => {
          const entryId = buttonDelete.getAttribute("id");
          deleteRecord(entryId);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteRecord(entryId) {
    const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${entryId}`;

    try {
      const response = await fetch(deleteUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error");
      }

      console.log(`Entry with ID ${entryId} deleted successfully`);

      loadPhonebook();
    } catch (error) {
      console.log(`Error deleting entry:`, error);
    }
  }

  async function createRecord() {
    let name = document.getElementById("person");
    let number = document.getElementById("phone");

    if (name.value === "" || number.value === "") {
      return;
    }
    try {
      const response = await fetch(urlPhonebook, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          person: name.value.trim(),
          phone: number.value.trim(),
        }),
      });

      const data = await response.json();

      name.value = "";
      number.value = "";
    } catch (error) {
      console.log(error);
    }
  }
}

main();
