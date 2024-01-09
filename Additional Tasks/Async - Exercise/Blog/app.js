"use strict";

let postsUrl = "http://localhost:3030/jsonstore/blog/posts";
let commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
const btnLoadPosts = document.getElementById("btnLoadPosts");

btnLoadPosts.addEventListener("click", getPostsData);

async function getPostsData() {
  try {
    let response = await fetch(postsUrl);

    if (response.ok === false) {
      throw new Error("Error fetching data");
    }

    let data = response.json();

    for (const postId in data) {
      let optionElement = document.createElement("option");
      optionElement.value = postId;
      optionElement.textContent = data[postId].title;
    }
  } catch (error) {
    console.log(error);
  }
}

getPostsData();
