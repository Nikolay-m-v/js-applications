"use strict";

(function main() {
  function takeInputValues(elements) {
    const inputValues = {
      nameInput: elements.assetName.value,
      quantityInput: elements.assetQuantity.value,
      dateBoughtInput: elements.assetDateBought.value,
      priceBoughtInput: elements.assetPriceBought.value,
      currentPriceInput: elements.assetCurrentPrice.value,
    };

    if (!checkInputValues(inputValues)) {
      return;
    }

    return inputValues;
  }

  function checkInputValues(inputValues) {
    if (
      inputValues.nameInput === "" ||
      inputValues.quantityInput === "" ||
      inputValues.dateBoughtInput === "" ||
      inputValues.priceBoughtInput === "" ||
      inputValues.currentPriceInput === ""
    ) {
      return false;
    }
    return true;
  }

  function createElements(elements) {
    const liElName = document.createElement("li");
    liElName.textContent = elements.nameInput;
    console.log(liElName);
    const liElQuantity = document.createElement("li");
    const liElDateBought = document.createElement("li");
    const liElPriceBought = document.createElement("li");
    const liElCurrentPrice = document.createElement("li");

    return {
      liElName,
      liElQuantity,
      liElDateBought,
      liElPriceBought,
      liElCurrentPrice,
    };
  }

  function appendElements(elements, inputValues) {
    const elementsToAppend = createElements(inputValues);

    elements.liHolder.appendChild(elementsToAppend.liElName);
  }

  function eventHandler(elements) {
    elements.addItem.addEventListener("click", () => {
      const inputValues = takeInputValues(elements);
      if (inputValues) {
        appendElements(elements, inputValues);
      }
    });
  }

  function gatherElements() {
    const assetName = document.getElementById("assetName");
    const assetQuantity = document.getElementById("assetQuantity");
    const assetDateBought = document.getElementById("assetDateBought");
    const assetPriceBought = document.getElementById("assetPriceBought");
    const assetCurrentPrice = document.getElementById("assetCurrentPrice");
    const addItem = document.getElementById("addItem");
    const liHolder = document.getElementById("liHolder");

    return {
      assetName,
      assetQuantity,
      assetDateBought,
      assetPriceBought,
      assetCurrentPrice,
      addItem,
      liHolder,
    };
  }

  eventHandler(gatherElements());
  /// FIXES
})();
