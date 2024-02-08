"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearsContainer = document.getElementById("years");

  function initCalendar() {
    const dayElement = yearsContainer.querySelectorAll(".day");

    dayElement.forEach((dateElement) => {
      dateElement.addEventListener("click", (event) => {
        const selectedYear = dateElement.textContent.trim();
        console.log(selectedYear);
      });
    });
  }

  initCalendar();
});
