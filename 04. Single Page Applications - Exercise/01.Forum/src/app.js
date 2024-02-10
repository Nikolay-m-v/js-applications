"use strict";

document.addEventListener("DOMContentLoaded", () => {
  (function main() {
    const postsUrl = `http://localhost:3030/jsonstore/collections/myboard/posts`;
    const elements = getElements();

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

    function validateFormValues() {
      return (
        elements.titleName.value !== "" &&
        elements.userName.value !== "" &&
        elements.postContent.value !== ""
      );
    }

    async function getPosts() {
      const response = await fetch(postsUrl);
      const data = await response.json();
      console.log(data);
    }

    async function submitNewPost(event) {
      event.preventDefault();

      if (!validateFormValues()) {
        console.log("Fill all inputs");
        return;
      }

      const response = await fetch(postsUrl, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: elements.titleName.value.trim(),
          username: elements.userName.value.trim(),
          content: elements.postContent.value.trim(),
          dateCreated: new Date(),
        }),
      });

      console.log(response);
    }

    function eventHandling() {
      elements.postButton.addEventListener("click", (event) => {
        submitNewPost(event);
      });

      elements.cancelButton.addEventListener("click", () => {
        titleName.value = "";
        userName.value = "";
        postContent.value = "";
      });
    }

    eventHandling();
    getPosts();
  })();
});
