"use strict";

(function main() {
  const postsUrl = `http://localhost:3030/jsonstore/collections/myboard/posts`;

  function validateFormValues() {
    let isValid = true;
    if (
      titleName.value === "" ||
      userName.value === "" ||
      postContent.value === ""
    ) {
      isValid = false;
      return isValid;
    }
  }

  async function submitNewPost() {
    const response = await fetch(url);
  }

  function getElements() {
    const elements = {
      titleName: document.getElementById("topicName"),
      userName: document.getElementById("username"),
      postContent: document.getElementById("postText"),
      postButton: document.querySelector(".public"),
      cancelButton: document.querySelector(".cancel"),
    };
  }

  function eventHandling() {
    const elements = getElements();

    elements.postButton.addEventListener("click", () => {
      submitNewPost();
    });

    elements.cancelButton.addEventListener("click", () => {
      titleName.value = "";
      userName.value = "";
      postContent.value = "";
    });
  }

  eventHandling();
})();
