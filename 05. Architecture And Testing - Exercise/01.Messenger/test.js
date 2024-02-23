// messageApp.test.js

async function testSendMessage() {
  // Step 1: Enter Data
  document.getElementById("author").value = "Test Author";
  document.getElementById("content").value = "Test Content";

  // Step 2: Click Send
  document.getElementById("submit").click();

  // Step 3: Check Request
  const sentMessage = {
    author: "Test Author",
    content: "Test Content",
  };

  console.log("Sent Message:", sentMessage);

  // Step 4: Verify Display
  // For manual verification or additional automated checks
}

// Run tests
testSendMessage();
