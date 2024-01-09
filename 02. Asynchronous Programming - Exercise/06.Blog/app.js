"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loadPostsBtn = document.getElementById("btnLoadPosts");
  const viewPostBtn = document.getElementById("btnViewPost");
  const postsDropdown = document.getElementById("posts");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");

  loadPostsBtn.addEventListener("click", loadPosts);
  viewPostBtn.addEventListener("click", viewPost);

  // fx

  async function loadPosts() {
    try {
      const response = await fetch(
        "http://localhost:3030/jsonstore/blog/posts"
      );
      const data = await response.json();

      postsDropdown.innerHTML = "";

      for (const postId in data) {
        const option = document.createElement("option");
        option.value = postId;
        option.textContent = data[postId].title;
        postsDropdown.appendChild(option);
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  }

  async function viewPost() {
    const selectedPostId = postsDropdown.value;

    try {
      // Get selected post
      const postResponse = await fetch(
        `http://localhost:3030/jsonstore/blog/posts/${selectedPostId}`
      );
      const postData = await postResponse.json();

      postTitle.textContent = postData.title;
      postBody.textContent = postData.body;

      // Get comments for the selected post
      const commentsResponse = await fetch(
        "http://localhost:3030/jsonstore/blog/comments"
      );
      const commentsData = await commentsResponse.json();

      // Filter comments for the current posts
      const postCommentsData = Object.values(commentsData).filter(
        (comment) => comment.postId === selectedPostId
      );

      // Display comments
      postComments.innerHTML = "";

      postCommentsData.forEach((comment) => {
        const li = document.createElement("li");
        li.textContent = comment.text;
        postComments.appendChild(li);
      });
    } catch (error) {
      console.error("Error viewing post:", error);
    }
  }
});
