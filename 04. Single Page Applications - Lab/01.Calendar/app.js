"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearsContainer = document.getElementById("years");
  const monthsContainers = document.querySelectorAll(".monthCalendar");
  const daysContainer = document.querySelectorAll(".daysCalendar");

  monthsContainers.forEach((month) => {
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
      monthsContainers.forEach((month) => {
        month.style.display = "none";
      });

      selectedYearContainer.style.display = "block";
    } else {
      console.log(`Year container for ${year} not found.`);
    }
  }

  function initMonthContainers() {
    monthsContainers.forEach((monthContainer) => {
      const monthElements = monthContainer.querySelectorAll(".date");
      monthElements.forEach((monthElement) => {
        monthElement.addEventListener("click", () => {
          const selectedMonth = monthElement.textContent.trim();
          showDays(selectedMonth);
        });
      });
    });
  }

  function showDays(month) {
    const selectedMonthContainer = document.getElementById(`month-${month}`);
    if (selectedMonthContainer) {
      monthsContainers.forEach((monthContainer) => {
        monthContainer.style.display = "none";
      });
      selectedMonthContainer.style.display = "block";
    } else {
      console.log(`Month container for ${month} not found.`);
    }
  }

  initCalendar();
  initMonthContainers();
});
