"use strict";

async function lockedProfile() {
  try {
    let url = "http://localhost:3030/jsonstore/advanced/profiles";
    let response = await fetch(url);

    if (response.ok === false) {
      throw new Error("Error obtaining profiles");
    }


    let data = await response.json();
    console.log(data);

    Object.values(data).forEach((profile) => {
      let div = document.createElement("div");
      let button = document.createElement("button");
      button.innerHTML = "Show more";
      div.classList.add("profile");
      div.innerHTML = `<img src"./iconProfile2.png" class="userIcon">`

    })
  }
}
