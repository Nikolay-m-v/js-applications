var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // The request is complete, and the response is ready
    console.log(this.responseText);
  }
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhttp.send();
