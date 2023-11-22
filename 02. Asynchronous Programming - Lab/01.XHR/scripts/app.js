"use strict";

function loadRepos(username, repositoryName) {
  let xhr = new XMLHttpRequest();

  let url = `https://api.github.com/users/testnakov/repos`;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let repositoryData = JSON.parse(xhr.responseText);

      document.getElementById("res").textContent = xhr.responseText;
    }
  };

  xhr.open("GET", url, true);

  xhr.send();
}
