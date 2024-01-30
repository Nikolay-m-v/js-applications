"use strict";
(function main() {
  const url = ` http://localhost:3030/jsonstore/messenger`;

  async function createNewMessage(author, content) {
    const newMessage = { author, content };

    const response = await fetch(url, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(newMessage),
    });

    const newlyCreatedMessage = await response.json();
    return newlyCreatedMessage;
  }

  async function getAllMessages() {
    const response = await fetch(url);
    const messages = await response.json();

    return messages;
  }

  async function displayAllMessages(els) {
    const allMessages = await getAllMessages();

    Object.keys(allMessages).forEach((message) => {
      els.messagesBox += createNewMessage();
    });
  }

  function getElements() {
    const sendButton = document.getElementById("submit");
    const refreshButton = document.getElementById("refresh");
    const inputAuthor = document.querySelector(`input[name="author"]`);
    const inputMessage = document.querySelector(`input[name="message]`);
    const messagesBox = document.getElementById("messages");

    return {
      sendButton,
      refreshButton,
      inputAuthor,
      inputMessage,
      messagesBox,
    };
  }

  function eventHandling() {
    const els = getElements();

    els.sendButton.addEventListener("click", () => {
      createNewMessage();
      displayAllMessages();
    });

    els.refreshButton.addEventListener("click", () => {
      displayAllMessages();
    });
  }

  eventHandling();
})();
