"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btnLoadPosts = document.getElementById("btnLoadPosts");
  const btnViewPost = document.getElementById("btnViewPost");
  const postsDropdown = document.getElementById("posts");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");

  btnLoadPosts.addEventListener("click", getPostsData);
  btnViewPost.addEventListener("click", getCommentsData);

  async function getPostsData() {
    let postsUrl = "http://localhost:3030/jsonstore/blog/posts";

    try {
      let response = await fetch(postsUrl);

      if (response.ok === false) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      postsDropdown.innerHTML = "";

      for (const postId in data) {
        const optionElement = document.createElement("option");
        optionElement.value = postId;
        optionElement.textContent = data[postId].title;
        postsDropdown.appendChild(optionElement);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCommentsData() {
    const selectedPostId = postsDropdown.value;
    let commentsUrl = `http://localhost:3030/jsonstore/blog/posts/${selectedPostId}`;

    try {
      const response = await fetch(commentsUrl);

      if (response.ok === false) {
        throw new Error("Error fetching data");
      }

      const postData = await response.json();
      postTitle.textContent = postData.title;
      postBody.textContent = postData.body;

      const commentsResponse = await fetch(
        "http://localhost:3030/jsonstore/blog/comments"
      );

      const commentsData = await commentsResponse.json();

      const postCommentsData = Object.values(commentsData).filter(
        (comment) => comment.postId === selectedPostId
      );

      postComments.innerHTML = "";

      postCommentsData.forEach((comment) => {
        const liElement = document.createElement("li");
        liElement.textContent = comment.text;
        postComments.appendChild(liElement);
      });
    } catch (error) {
      console.log(error);
    }
  }
});

/// fix
