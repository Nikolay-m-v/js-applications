"use strict";

function loadRepos() {
  let xhr = new XMLHttpRequest();

  let url = `https://api.github.com/users/testnakov/repos`;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("res").textContent = xhr.responseText;
    }
  };

  xhr.open("GET", url, true);

  xhr.send();
}
