"use strict";

function main() {
  let urlRequests = `http://localhost:3030/jsonstore/messenger`;
  document.querySelector("#refresh").addEventListener("click", displayComments);
  document.querySelector("#submit").addEventListener("click", addComment);

  async function addComment() {
    let authorName = document.querySelector('[name="author"]');
    let content = document.querySelector('[name="content"]');

    if (authorName.value === "" || content.value === "") {
      return;
    }

    try {
      const response = await fetch(urlRequests, {
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

      const data = await response.json();

      authorName.value = "";
      content.value = "";
    } catch (error) {
      console.log(error);
    }

    displayComments();
  }

  async function displayComments() {
    try {
      const response = await fetch(urlRequests);
      if (!response.ok) {
        console.log("Error");
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

main();
