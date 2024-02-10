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
        detailsView: document.querySelector("detailsView"),
        themeContentContainer: document.querySelector("theme-content"),
        themeNameContainer: document.querySelector(".theme-name"),
        themeTitleContainer: document.querySelector(".theme-title"),
        postsContainer: document.querySelector(".container"),
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

      Object.values(data).forEach((post) => {
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("theme-title");
        const titleNameWrapperDiv = document.createElement("div");
        titleNameWrapperDiv.classList.add("theme-name-wrapper");
        const titleNameDiv = document.createElement("div");
        titleNameDiv.classList.add("theme-name");
        const titleHeading = document.createElement("h2");
        titleHeading.id = "details-title";
        titleHeading.textContent = post.title;
        titleNameDiv.appendChild(titleHeading);
        titleNameWrapperDiv.appendChild(titleNameDiv);
        titleDiv.appendChild(titleNameWrapperDiv);
        elements.postsContainer.appendChild(titleDiv);

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        const headerDiv = document.createElement("div");
        headerDiv.classList.add("header");
        const imgAvatar = document.createElement("img");
        imgAvatar.src = "./static/profile.png";
        imgAvatar.alt = "avatar";
        const userPostInfo = document.createElement("p");
        const usernameSpan = document.createElement("span");
        usernameSpan.id = "details-username";
        usernameSpan.textContent = `${post.username}`; // This should be replaced with the actual username
        userPostInfo.appendChild(usernameSpan);
        userPostInfo.innerHTML += ` posted on <time id="details-time">${post.dateCreated}</time>`;
        const postContent = document.createElement("p");
        postContent.id = "details-content";
        postContent.classList.add("post-content");
        postContent.textContent = post.content;
        headerDiv.appendChild(imgAvatar);
        headerDiv.appendChild(userPostInfo);
        headerDiv.appendChild(postContent);
        commentDiv.appendChild(headerDiv);
        elements.postsContainer.appendChild(commentDiv);

        const userCommentDiv = document.createElement("div");
        userCommentDiv.id = "user-comment";
        const topicNameWrapperDiv = document.createElement("div");
        topicNameWrapperDiv.classList.add("topic-name-wrapper");
        const topicNameDiv = document.createElement("div");
        topicNameDiv.classList.add("topic-name");
        const commenterInfo = document.createElement("p");
        const commenterName = document.createElement("strong");
        commenterName.textContent = post.userName; // This should be replaced with the actual commenter's name
        commenterInfo.appendChild(commenterName);
        commenterInfo.innerHTML += ` commented on <time>${post.commentDate}</time>`;
        const commentContent = document.createElement("div");
        commentContent.classList.add("post-content");
        const commentText = document.createElement("p");
        commentText.textContent = post.commentContent;
        commentContent.appendChild(commentText);
        topicNameDiv.appendChild(commenterInfo);
        topicNameDiv.appendChild(commentContent);
        topicNameWrapperDiv.appendChild(topicNameDiv);
        userCommentDiv.appendChild(topicNameWrapperDiv);
        elements.postsContainer.appendChild(userCommentDiv);

        const detailsView = document.getElementById("detailsView");
        detailsView.appendChild(titleDiv);
        detailsView.appendChild(commentDiv);
        detailsView.appendChild(userCommentDiv);

        const answerCommentDiv = document.createElement("div");
        answerCommentDiv.classList.add("answer-comment");

        const commentTitle = document.createElement("p");
        commentTitle.innerHTML = `<span>${post.username}</span> comment:`;
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");

        const form = document.createElement("form");
        const textarea = document.createElement("textarea");
        textarea.name = "postText";
        textarea.id = "comment";
        textarea.cols = "30";
        textarea.rows = "10";

        const usernameDiv = document.createElement("div");
        const usernameLabel = document.createElement("label");
        usernameLabel.htmlFor = "username";
        usernameLabel.textContent = "Username ";
        const requiredSpan = document.createElement("span");
        requiredSpan.classList.add("red");
        requiredSpan.textContent = "*";
        usernameLabel.appendChild(requiredSpan);
        const usernameInput = document.createElement("input");
        usernameInput.type = "text";
        usernameInput.name = "username";
        usernameInput.id = "username";

        const postButton = document.createElement("button");
        postButton.textContent = "Post";

        // Append elements to form
        usernameDiv.appendChild(usernameLabel);
        usernameDiv.appendChild(usernameInput);

        form.appendChild(textarea);
        form.appendChild(usernameDiv);
        form.appendChild(postButton);

        answerDiv.appendChild(form);

        answerCommentDiv.appendChild(commentTitle);
        answerCommentDiv.appendChild(answerDiv);

        detailsView.appendChild(answerCommentDiv);
      });
    }

    function displayPosts() {}

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

      getPosts();
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
