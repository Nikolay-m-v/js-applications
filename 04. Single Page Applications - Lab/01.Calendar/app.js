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
          console.log(`${selectedMonth} clicked`);
          showDays(selectedMonth);
        });
      });
    });
  }

  function showDays(month) {
    const dayContainers = document.querySelectorAll(`${month}.days`);
    console.log(month);
    console.log(dayContainers);
    dayContainers.forEach((dayContainer) => {
      if (dayContainer.id === `month-${month}`) {
        dayContainer.style.display = "block";
      } else {
        dayContainer.style.display = "none";
      }
    });
  }

  initCalendar();
  initMonthContainers();
});
