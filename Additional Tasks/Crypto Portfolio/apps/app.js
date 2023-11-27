"use strict";

(function main() {
  function takeInputValues(elements) {
    const nameInput = elements.assetName.value;
    const quantityInput = elements.assetQuantity.value;
    const dateBoughtInput = elements.assetDateBought.value;
    const priceBoughtInput = elements.assetPriceBought.value;
    const currentPriceInput = elements.assetCurrentPrice.value;

    createElements(inputValues);

    return {
      nameInput,
      quantityInput,
      dateBoughtInput,
      priceBoughtInput,
      currentPriceInput,
    };
  }

  function createElements(inputValues) {
    const liElName = document.createElement(li);
    const liElQuantity = document.createElement(li);
    const liElDateBought = document.createElement(li);
    const liElPriceBought = document.createElement(li);
    const liElCurrentPrice = document.createElement(li);
  }

  function eventHandler(elements) {
    elements.addItem.addEventListener("click", () => {
      takeInputValues(elements);
    });
  }

  function gatherElements() {
    const assetName = document.getElementById("assetName");
    const assetQuantity = document.getElementById("assetQuantity");
    const assetDateBought = document.getElementById("assetDateBought");
    const assetPriceBought = document.getElementById("assetPriceBought");
    const assetCurrentPrice = document.getElementById("assetCurrentPrice");
    const addItem = document.getElementById("addItem");

    return {
      assetName,
      assetQuantity,
      assetDateBought,
      assetPriceBought,
      assetCurrentPrice,
      addItem,
    };
  }

  eventHandler(gatherElements());
})();
