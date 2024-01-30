"use strict";
(async function () {
  const url = ` http://localhost:3030/jsonstore/messenger`;

  async function createNewMessage(author, content) {
    const newMessageContent = { author, content };

    const response = await fetch(url, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(newMessageContent),
    });

    const newlyCreatedMessage = await response.json();
    return newlyCreatedMessage;
  }

  function validateMessage(message) {
    const isValid = message.author !== "" && message.content !== "";

    return isValid;
  }

  function collectMessageData(elements) {
    const author = elements.inputAuthor.value;
    const content = elements.inputMessage.value;

    const data = {
      author,
      content,
    };

    return data;
  }

  async function submitNewMessage(elements) {
    const newMessage = collectMessageData(elements);

    if (validateMessage(newMessage) === false) {
      return;
    }

    await createNewMessage(newMessage.author, newMessage.content);
  }

  async function getAllMessages() {
    const response = await fetch(url);
    const messages = await response.json();

    return messages;
  }

  function formatMessage(message) {
    const formattedMessage = `${message.author}: ${message.content}\n`;
    return formattedMessage;
  }

  function clearTextArea(elements) {
    elements.messagesBox.value = "";
  }

  async function displayAllMessages(elements) {
    clearTextArea(elements);
    const allMessages = await getAllMessages();

    Object.values(allMessages).forEach((message) => {
      elements.messagesBox.value += formatMessage(message);
    });
  }

  function eventHandling() {
    const elements = getElements();

    elements.sendButton.addEventListener("click", () => {
      submitNewMessage(elements);
      displayAllMessages(elements);
    });

    elements.refreshButton.addEventListener("click", async () => {
      displayAllMessages(elements);
    });
  }

  function getElements() {
    const elements = {
      sendButton: document.getElementById("submit"),
      refreshButton: document.getElementById("refresh"),
      inputAuthor: document.querySelector(`input[name="author"]`),
      inputMessage: document.querySelector(`input[name="content"]`),
      messagesBox: document.getElementById("messages"),
    };

    return elements;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    eventHandling();
  });
})();
