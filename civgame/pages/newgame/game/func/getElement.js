import { mapData } from "../map/mapData";

export function getElement(row, col) {
  if (row < 0 || row >= mapData.length || col < 0 || col >= mapData[0].length) {
    console.error(
      "Invalid indices. Please provide valid row and column indices."
    );
    return null;
  }

  const element = mapData[row][col];

  return element;
}
