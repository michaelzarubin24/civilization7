import { Component } from "../../../../core/component";
import { Tile } from "../Tiles/tile";
import { colors } from "../map/colors";
import { mapData } from "../map/mapData";
import { getSelectedCiv } from "./getSelectedCiv";
import { setStartingLocations } from "./setStartingLocations";

export const generateEarthMap = () => {
  const selectedCiv = getSelectedCiv();
  console.log("Selected Civilization:", selectedCiv);

  const earthMap = new Component({ tagName: "div", className: "earth-map" });

  if (selectedCiv) {
    console.log(`Selected Civilization: ${selectedCiv.textContent}`);
  }

  for (let row = 0; row < mapData.length; row++) {
    for (let col = 0; col < mapData[row].length; col++) {
      const tileColor = colors[mapData[row][col]];
      const selectedCivClass = selectedCiv
        ? `earth-tile ${selectedCiv.id}`
        : "";

      const earthTile = new Tile({
        color: tileColor,
        className: selectedCivClass,
        row: row,
        col: col,
      });

      earthMap.addChildren(earthTile);
    }
  }

  setStartingLocations(earthMap);

  return earthMap;
};
