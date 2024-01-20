"use strict";

(async function main() {
  let postsUrl = `http://localhost:3030/jsonstore/blog/posts`;
  let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

  const loadPostsBtn = document.getElementById("btnLoadPosts");
  const dropDownPosts = document.getElementById("posts");
  const viewPostBtn = document.getElementById("btnViewPost");
  const postTitleElement = document.getElementById("post-title");
  const postBodyElement = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");

  loadPostsBtn.addEventListener("click", () => {
    loadPosts();
  });

  async function loadPosts() {
    const response = await fetch(postsUrl);
    const data = await response.json();
    console.log(data);

    for (const postId in data) {
      const optionElement = document.createElement("option");
      optionElement.value = postId;
      optionElement.textContent = data[postId].title;
      dropDownPosts.appendChild(optionElement);
    }
  }
})();
