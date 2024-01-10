import { mapData } from "../map/mapData";
import { startingLocations } from "../map/startingLocations";
import { getSelectedCiv } from "./getSelectedCiv";

export const setStartingLocations = (earthMap) => {
  const selectedCiv = getSelectedCiv();
  if (selectedCiv && selectedCiv.id) {
    const selectedCivClass = `earth-tile ${selectedCiv.id}`;

    for (const civName in startingLocations) {
      const { row, column } = startingLocations[civName];
      const index = row * mapData[0].length + column;

      const earthTile = earthMap.children[index];

      if (earthTile) {
        earthTile.className = selectedCivClass;
      }
    }
  }
};
