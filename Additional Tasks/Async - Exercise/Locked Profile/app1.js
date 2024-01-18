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
  } catch (error) {
    console.log(error);
  }
}
