"use strict";

(function main() {
  const postsUrl = `http://localhost:3030/jsonstore/collections/myboard/posts`;
  const elements = getElements();

  function validateFormValues() {
    return (
      elements.titleName.value !== "" &&
      elements.userName.value !== "" &&
      elements.postContent.value !== ""
    );
  }

  async function submitNewPost(event) {
    event.preventDefault();

    if (!validateFormValues()) {
      console.log("Fill all inputs");
      return;
    }
    const newPostContent = { title, username, content };
    const response = await fetch(postsUrl, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPostContent),
    });

    console.log(response);
  }

  function getElements() {
    const elements = {
      titleName: document.getElementById("topicName"),
      userName: document.getElementById("username"),
      postContent: document.getElementById("postText"),
      postButton: document.querySelector(".public"),
      cancelButton: document.querySelector(".cancel"),
    };

    return elements;
  }

  function eventHandling() {
    elements.postButton.addEventListener("click", submitNewPost());

    elements.cancelButton.addEventListener("click", () => {
      titleName.value = "";
      userName.value = "";
      postContent.value = "";
    });
  }

  eventHandling();
})();
