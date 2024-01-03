"use strict";

async function lockedProfile() {
  try {
    let url = "http://localhost:3030/jsonstore/advanced/profiles";
    let response = await fetch(url);

    if (response.ok === false) {
      throw new Error("Error");
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

      function reveal(event) {
        let checked = divElement.querySelector("input[type=radio]:checked");
        if (checked && checked.value === "unlock") {
          if (event.target.textContent === "Show more") {
            divElement.querySelector(
              `#user${profile._id}HiddenFields`
            ).style.display = "block";
            event.target.textContent = "Hide it";
          } else {
            divElement.querySelector(
              `#user${profile._id}HiddenFields`
            ).style.display = "none";
            event.target.textContent = "Show more";
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}
