import { Button, Main } from "../../../components";
import { append, prepend } from "../../../core/append";
import { Component } from "../../../core/component";
import { render } from "../../../utils";
import "../../newgame/newgame.scss";

import { China } from "../civilization/China";
import { England } from "../civilization/England";
import { France } from "../civilization/France";
import { India } from "../civilization/India";
import { startingLocations } from "../game/map/startingLocations";

// ---------------------------------civs----------------------------------
const england = new England({
  id: "picked-england",
});
const france = new France({
  id: "picked-france",
});
const india = new India({
  id: "picked-india",
});
const china = new China({
  id: "picked-china",
});

const civilizations = [england, france, china, india];
// -------------------------civ-selector------------------------------------

const civs = [
  {
    id: "england",
    textContent: "ENGLAND",
    row: 4,
    col: 10,
  },
  {
    id: "france",
    textContent: "FRANCE",
    row: 6,
    col: 9,
  },
  {
    id: "india",
    textContent: "INDIA",
    row: 12,
    col: 15,
  },
  {
    id: "china",
    textContent: "CHINA",
    row: 7,
    col: 18,
  },
];

let hovered = false;
let selected = false;
let selectedCivId = null;

const handleHover = (civId, isHovering, isClicking) => {
  const civElement = document.getElementById(`picked-${civId}`);

  if (civElement) {
    if (isHovering) {
      if (isClicking) {
        hovered = false;
        selected = true;
        selectedCivId = civId;
      } else {
        hovered = true;
        selected = false;
        selectedCivId = null;

        civs.forEach((civData) => {
          const otherCivElement = document.getElementById(
            `picked-${civData.id}`
          );
          if (otherCivElement && civData.id !== civId) {
            otherCivElement.classList.remove("selected");
          }
        });
      }
    } else {
      if (!isClicking && !isHovering) {
        hovered = false;
      }
    }

    updateClasses(civElement);
  }
};

const handleClick = (civId, isClicking) => {
  const civElement = document.getElementById(`picked-${civId}`);

  if (civElement) {
    if (isClicking) {
      hovered = false;
      selected = true;
      selectedCivId = civId;
    } else {
      selected = false;
      selectedCivId = null;
    }

    updateClasses(civElement);
  }
};

const updateClasses = (civElement) => {
  civElement.classList.toggle("hovered", hovered);
  civElement.classList.toggle("selected", selected);

  const playBtnElement = document.getElementById("play-btn");

  if (selected) {
    playBtnElement.classList.add("active");
    playBtnElement.addEventListener("click", handlePlayButtonClick);
  } else {
    playBtnElement.classList.remove("active");
    playBtnElement.removeEventListener("click", handlePlayButtonClick);
  }

  console.log(playBtnElement);
};

const handlePlayButtonClick = () => {
  const selectedCiv = civs.find(
    (civData) => selected && civData.id === selectedCivId
  );
  if (selectedCiv) {
    const { id, textContent, row, col } = selectedCiv;
    const civInfo = {
      id,
      textContent,
      iconSrc: `../../../public/civicons/${id}.png`,
      leaderSrc: `../../../public/civleaders/${id}-leader.png`,
      row,
      col,
    };

    localStorage.setItem("selectedCivInfo", JSON.stringify(civInfo));
    window.location.href = "http://localhost:5173/pages/newgame/game/game.html";
  }
};

const civElements = civs.map((civData) => {
  const civComponent = new Component({
    tagName: "div",
    id: civData.id,
    textContent: civData.textContent,
    events: {
      mouseenter: () => handleHover(civData.id, true, false),
      mouseleave: () => handleHover(civData.id, false, false),
      click: () => handleClick(civData.id, true),
    },
  });

  return civComponent;
});
const civElementsWrapper = new Component({
  tagName: "div",
  className: "civ-picker",
  children: [...civElements],
});

const selector = new Component({
  tagName: "section",
  className: "selector",
  children: [civElementsWrapper, ...civilizations],
});

// ------------------main--components--------------------------------------

const mainScreen = new Main({
  tagName: "div",
  className: "main-screen",
  children: [selector],
});

const backBtn = new Component({
  tagName: "img",
  id: "back-btn",
  src: "../../../public/images/back-button.png",
  alt: "Error img",
  events: {
    click: () => {
      window.location.href = "http://localhost:5173/";
    },
  },
});

const title = new Component({
  tagName: "div",
  className: "title",
  textContent: "Choose your Civilization",
});

const playBtn = new Button({
  id: "play-btn",
  textContent: "PLAY",
});

const header = new Component({
  tagName: "header",
  className: "selection-header",
  children: [backBtn, title, playBtn],
});

// -------------------export selection screen --------------------------------
export const selectionScreen = new Component({
  tagName: "div",
  className: "selection-screen",
  children: [header, mainScreen],
});
