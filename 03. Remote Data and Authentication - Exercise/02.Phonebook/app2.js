"use strict";

(function () {
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
  }

  eventHandling();
})();
