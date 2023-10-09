import { Component } from "./core/component";
import { Application } from "../civgame/App";
import { Header, Logo } from "./components/index";
import { append, prepend } from "../civgame/core/append";

import "../civgame/style.scss";

const app = document.querySelector("body");

const panel = [
  {
    tagName: "div",
    className: "login",
    textContent: "LOG IN",
  },
  {
    tagName: "div",
    className: "signup",
    textContent: "SIGN UP",
  },
].map((panel) => {
  return new Component({
    tagName: panel.tagName,
    className: panel.className,
    textContent: panel.textContent,
  }).toHTML();
});

const logo = new Component({
  tagName: "img",
  className: "logo",
  attrs: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Civilization_VI.svg/2560px-Civilization_VI.svg.png",
    alt: "Civilization VI Logo",
  },
}).toHTML();

const header = new Header({
  tagName: "header",
  className: "header",
  children: [
    new Component({
      tagName: "div",
      className: "header-panel",
      children: [...panel],
    }).toHTML(),
    new Component({
      tagName: "div",
      className: "header-logo",
      children: [logo, ""],
    }).toHTML(),
  ],
}).toHTML();

const App = new Component({
  tagName: "div",
  className: "app",
  children: [header, ""],
}).toHTML();

prepend(app, App);
console.log("[header]", header);
console.log("[logo]", logo);
