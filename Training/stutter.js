function sayName(onSayingStart, onSayingEnd) {
  setTimeout(function () {
    console.log("Jo");

    onSayingStart();
  }, 1000);

  setTimeout(function () {
    console.log("rrrro");

    onSayingEnd();
  }, 2000);
}

sayName(
  () => console.log("Ohh"),
  () => console.log("I didn't realize you had a stutter")
);
