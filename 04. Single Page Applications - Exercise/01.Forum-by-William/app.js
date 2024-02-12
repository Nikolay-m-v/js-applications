"use strict";
(async function () {
  const topicsURL = "http://localhost:3030/jsonstore/collections/myboard/posts";

  function createTopic(newTopic) {
    const responsePromise = fetch(topicsURL, {
      method: "POST",
      body: JSON.stringify(newTopic),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return responsePromise;
  }

  async function getTopics() {
    const responsePromise = await fetch(topicsURL);
    const topics = await responsePromise.json();

    return topics;
  }

  function getTopicTemplate(topic) {
    return `<div class="topic-container">
        <h2 class="topic-name">${topic.topicName}</h2>
        <div class="topic-username">${topic.username}</div>
        <p class="topic-text">${topic.postText}</p>
      </div>`;
  }

  function displayTopics(topics, container) {
    Object.values(topics).forEach((topic) => {
      const topicTemplate = getTopicTemplate(topic);

      container.insertAdjacentHTML("beforeend", topicTemplate);
    });
  }

  function submitTopicForm(form) {
    const formData = new FormData(form);

    const topicName = formData.get("topicName");
    const username = formData.get("username");
    const postText = formData.get("postText");

    const newTopic = {
      topicName,
      username,
      postText,
    };

    return createTopic(newTopic);
  }

  function clearForm(form) {
    form.reset();
  }

  function showCreateTopicSuccessMessage(element) {
    element.classList.remove("hidden");
  }

  function hideCreateTopicSuccessMessage(element) {
    element.classList.add("hidden");
  }

  function getElements() {
    const topicForm = document.getElementById("topicForm");
    const topicNameInput = document.getElementById("topicName");
    const usernameInput = document.getElementById("username");
    const postTextArea = document.getElementById("postText");
    const cancelTopicCreationButton = document.getElementById(
      "cancelTopicCreation"
    );
    const submitTopicButton = document.getElementById("submitTopic");
    const formSuccessSubmitMessage = document.getElementById(
      "formSubmitSuccessMessage"
    );
    const topicsContainer = document.getElementById("topicsContainer");

    return {
      topicForm,
      topicNameInput,
      usernameInput,
      postTextArea,
      cancelTopicCreationButton,
      submitTopicButton,
      formSuccessSubmitMessage,
      topicsContainer,
    };
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const elements = getElements();

    const topics = await getTopics();
    displayTopics(topics, elements.topicsContainer);

    elements.topicForm.addEventListener("focusin", () => {
      hideCreateTopicSuccessMessage(elements.formSuccessSubmitMessage);
    });

    // Listen to the form submission event
    elements.topicForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevents the default form submission

      await submitTopicForm(elements.topicForm);

      clearForm(elements.topicForm);

      showCreateTopicSuccessMessage(elements.formSuccessSubmitMessage);

      const topics = await getTopics();

      displayTopics(topics, elements.topicsContainer);
    });
  });
})();

/// videos
