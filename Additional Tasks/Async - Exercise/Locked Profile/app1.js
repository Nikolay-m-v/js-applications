"use strict";

// 1. Show/hide additional information about users
// 2. get response from url
// 3. Create a profile card for each user and display it on the web page
// 4. Every item should have a specific structure
// 5. Show More/Hide button function

async function lockedProfile() {
  try {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const response = await fetch(url);

    if (response.ok === false) {
      console.log("error fetching data");
    }

    let data = await response.json();
    console.log(data);

    Object.values(data).forEach((profile) => {
      let divElement = document.createElement("div");
      let buttonElement = document.createElement("button");
      buttonElement.innerHTML = "Show More";
      divElement.classList.add("profile");
      divElement.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
            <label>Lock</label>
            <input type="radio" name="user${profile._id}Locked" value="lock" checked="">
            <label>Unlock</label>
            <input type="radio" name="user${profile._id}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${profile._id}Username" value=${profile.username} disabled="" readonly="">
            <div id="user${profile._id}HiddenFields">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${profile._id}Email" value=${profile.email} disabled="" readonly="">
            <label>Age:</label>
            <input type="email" name="user${profile._id}Age" value=${profile.age} disabled="" readonly="">
            </div>`;

      let main = document.querySelector("main");
      main.innerHTML = "";
      divElement.appendChild(buttonElement);
      main.appendChild(divElement);

      buttonElement.addEventListener("click", reveal);

      function reveal() {}
    });
  } catch (error) {
    console.log(error);
  }
}
