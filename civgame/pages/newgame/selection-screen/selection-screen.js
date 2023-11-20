import { Button, Main } from "../../../components";
import { append, prepend } from "../../../core/append";
import { Component } from "../../../core/component";
import { render } from "../../../utils";

import "../../newgame/newgame.scss";

import { China } from "../civilization/China";
import { England } from "../civilization/England";
import { France } from "../civilization/France";
import { India } from "../civilization/India";

// ---------------------------------civs----------------------------------
const england = new England({
  id: "picked-civ-eng",
});
const france = new France({
  id: "picked-civ-fra",
});
const india = new India({
  id: "picked-civ-ind",
});
const china = new China({
  id: "picked-civ-chi",
});

const civilizations = [england, france, china, india];
// -------------------------civ-selector------------------------------------

const civs = [
  {
    id: "civ-eng",
    textContent: "ENGLAND",
  },
  {
    id: "civ-fra",
    textContent: "FRANCE",
  },
  {
    id: "civ-ind",
    textContent: "INDIA",
  },
  {
    id: "civ-chi",
    textContent: "CHINA",
  },
];

// 1. If I hover over element - content is shown
// 2. If I remove hover - content is hidden
// 3. If I hover and click and remove hover - content is shown and sticked
// 4. If I hover, click and then hover over next civilization - previous civilization is hidden, new civilization is shown
// 5. If I hover, click, hover over the next civilization and then click on the next civilization -
//  previous civilization is hidden, new civilization is shown and sticked

// div attributes

let active = null;

const addHover = (civId, isHovering) => {
  const civElement = document.querySelector(`#picked-${civId}`);
  if (isHovering && !active) {
    civElement.classList.add("active");
  }
};

const removeHover = (civId, isHovering) => {
  const civElement = document.querySelector(`#picked-${civId}`);
  if (!isHovering && !active) {
    civElement.classList.remove("active");
  }
};

const handleClick = (civId) => {
  const civElement = document.querySelector(`#picked-${civId}`);
  const prevCivElement = document.querySelector(`#picked-${active}`);

  if (active && prevCivElement && active !== civId) {
    prevCivElement.classList.remove("active");
  }

  if (!civElement.classList.contains("active")) {
    civElement.classList.add("active");
    active = civId;
  } else {
    civElement.classList.remove("active");
    active = null;
  }
};

const civElements = civs.map((civData) => {
  const civComponent = new Component({
    tagName: "div",
    id: civData.id,
    textContent: civData.textContent,
    events: {
      mouseenter: () => addHover(civData.id, true),
      mouseleave: () => removeHover(civData.id, false),
      click: () => handleClick(civData.id),
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

const title = new Component({
  tagName: "div",
  className: "title",
  textContent: "CIVILIZATON",
});

// -------------------export selection screen --------------------------------
export const selectionScreen = new Component({
  tagName: "div",
  className: "selection-screen",
  children: [title, mainScreen],
});
