"use strict";

const gitHubUsername = document.getElementById("username");
const repo = document.getElementById("repo");

async function loadCommits() {
  try {
    let url = `https://api.github.com/repos/${gitHubUsername.value}/${repo.value}/commits`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const commits = await response.json();

    console.log("Commits", commits);
  } catch (error) {
    console.log(error);
  }
}
