"use strict";

(function main() {
  const postsUrl = `http://localhost:3030/jsonstore/collections/myboard/posts`;
  const titleName = document.getElementById("topicName");
  const userName = document.getElementById("username");
  const postContent = document.getElementById("postText");
  const postButton = document.querySelector(".public");
  const cancelButton = document.querySelector(".cancel");

  postButton.addEventListener("click", () => {
    submitNewPost();
  });

  cancelButton.addEventListener("click", () => {
    titleName.value = "";
    userName.value = "";
    postContent.value = "";
  });

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

  async function submitNewPost() {}
})();
