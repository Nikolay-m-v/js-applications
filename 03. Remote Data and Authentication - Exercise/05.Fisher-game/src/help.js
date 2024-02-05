document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Registration successful, store user data in session/local storage
      sessionStorage.setItem("userEmail", email);

      // Redirect to home page or perform any other necessary actions
      window.location.href = "/home.html";
    } catch (error) {
      // Display error message to the user
      document.getElementById("errorMessage").textContent = error.message;
    }
  });
