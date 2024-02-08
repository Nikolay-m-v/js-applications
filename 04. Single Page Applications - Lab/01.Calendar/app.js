"use strict";

(function main() {
  const yearsContainer = document.getElementById("years");

  function initCalendar() {
    const dateElements = yearsContainer.querySelectorAll(".date");

    dateElements.forEach((dateElement) => {
      dateElement.addEventListener("click", (event) => {
        const selectedYear = dateElement.textContent.trim();
        console.log(selectedYear);
      });
    });
  }

  initCalendar();
})();
