"use strict";

(async function main() {
  let postsUrl = `http://localhost:3030/jsonstore/blog/posts`;

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

  viewPostBtn.addEventListener("click", () => {
    viewPost();
  });

  async function viewPost() {
    let selectedPostId = dropDownPosts.value;
    let commentsUrl = `http://localhost:3030/jsonstore/blog/comments/`;

    const postResponse = await fetch(
      `http://localhost:3030/jsonstore/blog/posts/${selectedPostId}`
    );

    const postData = await postResponse.json();

    postTitleElement.textContent = postData.title;
    postBodyElement.textContent = postData.body;

    const commentsResponse = await fetch(commentsUrl);
    const commentsData = await commentsResponse.json();
    console.log(commentsData);
    const postCommentsData = Object.values(commentsData).filter(
      (comment) => comment.postId === selectedPostId
    );

    postComments.innerHTML = "";

    postCommentsData.forEach((comment) => {
      const liElement = document.createElement("li");
      liElement.textContent = comment.text;
      postComments.appendChild(liElement);
    });
  }
})();
