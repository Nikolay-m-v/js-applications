"use strict";

(async function () {
  const messagesUrl = "http://localhost:3030/jsonstore/messenger";

  /* ====== DATA MANIPULATION ====== */
  async function getAllMessages() {
    const response = await fetch(messagesUrl);
    const messages = await response.json();

    return messages;
  }

  async function createMessage(author, content) {
    const newMessageContent = { author, content };

    const response = await fetch(messagesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessageContent),
    });

    const newlyCreatedMessage = await response.json();

    return newlyCreatedMessage;
  }
  /* ====== DATA MANIPULATION ====== */

  /* ====== DOM MANIPULATION ====== */
  function getElements() {
    const elements = {
      allMessagesTextArea: document.getElementById("messages"),
      authorInput: document.querySelector('input[name="author"]'),
      contentInput: document.querySelector('input[name="content"]'),
      submitButton: document.getElementById("submit"),
      refreshButton: document.getElementById("refresh"),
    };

    return elements;
  }

  function collectMessageData(els) {
    const author = els.authorInput.value;
    const content = els.contentInput.value;

    const data = {
      author,
      content,
    };

    return data;
  }

  function clearInputs(els) {
    els.authorInput.value = "";
    els.contentInput.value = "";
  }

  function clearTextArea(els) {
    els.allMessagesTextArea.value = "";
  }

  function validateMessage(message) {
    const isValid = message.author !== "" && message.content !== "";

    return isValid;
  }

  async function submitNewMessage(els) {
    const newMessage = collectMessageData(els);

    if (validateMessage(newMessage) === false) {
      return;
    }

    await createMessage(newMessage.author, newMessage.content);

    clearInputs(els);
  }

  function formatMessage(message) {
    const formattedMessage = `${message.author}: ${message.content}\n`;

    return formattedMessage;
  }

  function updateMessagesTextAreaScroll(els) {
    els.allMessagesTextArea.scrollTop = els.allMessagesTextArea.scrollHeight;
  }

  async function displayAllMessages(els) {
    clearTextArea(els);

    const allMessages = await getAllMessages();

    Object.values(allMessages).forEach((message) => {
      els.allMessagesTextArea.value += formatMessage(message);
    });

    updateMessagesTextAreaScroll(els);
  }

  function setupEvents() {
    const els = getElements();

    els.submitButton.addEventListener("click", () => {
      submitNewMessage(els);
      displayAllMessages(els);
    });

    els.refreshButton.addEventListener("click", async () => {
      displayAllMessages(els);
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    setupEvents();
  });
  /* ====== DOM MANIPULATION ====== */
})();
