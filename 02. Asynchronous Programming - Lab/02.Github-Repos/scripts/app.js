"use strict";

function loadRepos() {
  document.getElementById("repos").innerHTML = "";

  let username = document.getElementById("username").value;

  if (!username) {
    return;
  }

  let url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status} -  ${response.statusText}`);
      }
    })
    .then((repositories) => {
      repositories.forEach((repo) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${repo.full_name}</strong>: <a href="${repo.html_url}" target ="_blank">${repo.html_url}</a>`;
        document.getElementById("repos").appendChild(listItem);
      });
    })
    .catch((error) => {
      let errorItem = document.createElement("li");
      errorItem.textContent = error.message;
      document.getElementById("repos").appendChild(errorItem);
    });
}
/// watching vids for js apps
/// watching vids for js apps
