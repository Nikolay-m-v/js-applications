"use strict";
(function main() {
  const url = ` http://localhost:3030/jsonstore/messenger`;

  sendButton.addEventListener("click", () => {
    createNewMessage();
  });

  function createNewMessage() {}

  function getElements() {
    const sendButton = document.getElementById("submit");
    const refreshButton = document.getElementById("refresh");
    const inputAuthor = document.querySelector(`input[name="author"]`);
    const inputMessage = document.querySelector(`input[name="message]`);
    const messagesBox = document.getElementById("messages");

    return {
      sendButton,
    };
  }
})();
