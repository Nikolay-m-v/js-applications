"use strict";

let urlRequests = `http://localhost:3030/jsonstore/messenger`;

const sendBtn = document.getElementById("submit");
const refreshBtn = document.getElementById("refresh");

sendBtn.addEventListener("click", () => {
  addComment();
});

async function addComment() {
  let authorName = document.querySelector('[name="author"]');
  let content = document.querySelector('[name="content"]');

  if (authorName.value === "" || content.value === "") {
    return;
  }

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: authorName.value.trim(),
        content: content.value.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }

  authorName.value = "";
  content.value = "";
  displayComments();
}
