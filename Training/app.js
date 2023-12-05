(function () {
  const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
  const letterTimeouts = {};

  function printOnScreen(onLetterPrinted) {
    const ulEl = document.createElement("ul");
    const letters = alphabet.split("");

    document.body.appendChild(ulEl);

    letters.forEach((letter, index) => {
      const liEl = document.createElement("li");

      liEl.textContent = letter;

      const timeoutId = setTimeout(() => {
        ulEl.appendChild(liEl);

        letterTimeouts[letter].isPrinted = true;

        onLetterPrinted(letter);
      }, (index + 1) * 1000);

      letterTimeouts[letter] = {
        id: timeoutId,
        isPrinted: false,
      };
    });
  }

  const startBtn = document.getElementById("play");
  const stopBtn = document.getElementById("stop");

  startBtn.addEventListener("click", () => {
    printOnScreen((letter) => {
      const audio = new Audio(`./sounds/${letter.toLowerCase()}.mp3`);

      console.log(letterTimeouts);

      audio.play();
    });
  });

  stopBtn.addEventListener("click", () => {
    /**
     * {
     *  A: {id: number, isPrinted: boolean }
     * }
     */
    Object.keys(letterTimeouts).forEach((letter) => {
      const timeoutForLetter = letterTimeouts[letter];

      if (!timeoutForLetter.isPrinted) {
        clearTimeout(timeoutForLetter.id);
      }
    });
  });
})();
