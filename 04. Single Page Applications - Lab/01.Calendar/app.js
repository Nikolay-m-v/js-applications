"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearsContainer = document.getElementById("years");
  const monthsContainer = document.querySelectorAll(".monthCalendar");
  const daysContainer = document.querySelectorAll(".daysCalendar");

  monthsContainer.forEach((month) => {
    month.style.display = "none";
  });

  daysContainer.forEach((day) => {
    day.style.display = "none";
  });

  function initCalendar() {
    const dayElements = yearsContainer.querySelectorAll(".day");

    dayElements.forEach((dateElement) => {
      dateElement.addEventListener("click", () => {
        const selectedYear = dateElement.textContent.trim();
        showMonths(selectedYear);
      });
    });
  }

  function showMonths(year) {
    const selectedYearContainer = document.getElementById(`year-${year}`);
    if (selectedYearContainer) {
      monthsContainer.forEach((month) => {
        month.style.display = "none";
      });

      selectedYearContainer.style.display = "block";
    } else {
      console.log(`Year container for ${year} not found.`);
    }
  }

  initCalendar();
});
