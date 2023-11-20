import { China } from "../pages/newgame/civilization/China";
import { England } from "../pages/newgame/civilization/England";
import { France } from "../pages/newgame/civilization/France";
import { India } from "../pages/newgame/civilization/India";

const england = new England({
  id: "picked-civ",
});
const france = new France({
  id: "picked-civ",
});
const india = new India({ id: "picked-civ" });
const china = new China({ id: "picked-civ" });

export const getCivilizationInstance = (civId) => {
  switch (civId) {
    case "civ-eng":
      return england;
    case "civ-fra":
      return france;
    case "civ-ind":
      return india;
    case "civ-chi":
      return china;
    default:
      return null;
  }
};
