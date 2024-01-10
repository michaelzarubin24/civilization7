// Import necessary components and functions
import { Button } from "../../../../components";
import { Component } from "../../../../core/component";
import { generateEarthMap } from "../func/generateEarthMap";
import { getElement } from "../func/getElement";
import { getSelectedCiv } from "../func/getSelectedCiv";
import { setStartingLocations } from "../func/setStartingLocations";
import { mapData } from "../map/mapData";

// Define utility function to retrieve stored civilization information
const getStoredCivInfo = () => {
  const selectedCivStorage = localStorage.getItem("selectedCivInfo");
  return selectedCivStorage ? JSON.parse(selectedCivStorage) : null;
};

// Initialize selected civilization and earth map
const selectedCiv = getSelectedCiv();
const earthMap = generateEarthMap(selectedCiv);

// Retrieve stored civilization information
const storedCivInfo = getStoredCivInfo();

// Create image component
const image = new Component({
  tagName: "img",
  className: "main-image",
  src: storedCivInfo
    ? `../../../../public/civleaders/${storedCivInfo.id}-leader.png`
    : "",
});

// Create image wrapper component
const imgWrapper = new Component({
  tagName: "div",
  className: "img-wrapper",
  children: [image],
});

// Determine civilization name and icon
const civName = storedCivInfo
  ? storedCivInfo.textContent
  : "Default Civilization Name";
const civIcon = storedCivInfo ? storedCivInfo.iconSrc : "";

// Create icon component
const icon = new Component({
  tagName: "img",
  className: "main-icon",
  src: civIcon,
});

// Create civilization name component
const civilization = new Component({
  tagName: "span",
  className: "selected-civilization-name",
  textContent: civName,
});

// Create title component
const title = new Component({
  tagName: "span",
  className: "selected-civilization-title",
  textContent: "CIVILIZATION",
});

// Create civilization info wrapper component
const civInfoWrapper = new Component({
  tagName: "div",
  className: "civ-info-wrapper",
  children: [title, civilization, icon],
});

// Create start button
const startBtn = new Button({
  id: "start-btn",
  textContent: "START",
  events: {
    click: () => {
      // Retrieve row and col values from localStorage
      const storedCivInfo = JSON.parse(localStorage.getItem("selectedCivInfo"));
      const rowIndex = storedCivInfo ? storedCivInfo.row : null;
      const colIndex = storedCivInfo ? storedCivInfo.col : null;

      console.log("Button clicked!");
      const element = getElement(rowIndex, colIndex);

      console.log("Element:", element);

      if (element !== null) {
        // Add the class to the specific element
        const tileElement = document.querySelector(
          `.earth-tile[data-row="${rowIndex}"][data-col="${colIndex}"]`
        );
        tileElement.classList.add(`${storedCivInfo.id}-start`);

        console.log("Updated Map Data:", mapData);
      } else {
        console.log(
          `Invalid element at row ${rowIndex} and column ${colIndex}.`
        );
      }
    },
  },
});

// Create start button wrapper component
const startBtnWrapper = new Component({
  tagName: "div",
  className: "start-btn-wrapper",
  children: [startBtn],
});

// Create info panel component
const infoPanel = new Component({
  tagName: "section",
  className: "info-panel",
  children: [civInfoWrapper, imgWrapper],
});

// Create game wrapper component
const gameWrapper = new Component({
  tagName: "section",
  className: "game-wrapper",
  children: [earthMap, startBtnWrapper],
});

// Create main screen component
export const mainScreen = new Component({
  tagName: "div",
  id: "main-screen",
  children: [gameWrapper, infoPanel],
});
