// ---------------------------------------IMPORTS----------------------
// import { Component } from "../../core/component";
import { Application } from "../civgame/components/Application/Application";
import { Main, Button, Logo, Mute } from "../civgame/components/index";
// --------------------------------------
import { toHTML } from "./core/toHTML";
import { append, prepend } from "../civgame/core/append";
import { playSound } from "./utils/playAudio";
import "../civgame/styles/style.scss";

// --------------------------------------MAIN CODE---------------------

const root = document.querySelector("body");

const logo = new Logo({});

const buttons = [
  {
    textContent: "NEW GAME",
    href: "../pages/newgame/newgame.html",
  },
  {
    textContent: "LOAD",
    href: "../pages/loading/loading.html",
  },
  {
    textContent: "CIVILOPEDIA",
    href: "../pages/civilopedia/civilopedia.html",
  },
  {
    textContent: "EXIT",
    href: "#",
  },
];

const button = buttons.map((buttons) => {
  return new Button({
    className: "btn-menu",
    textContent: buttons.textContent,
    href: buttons.href,
    events: {
      click: () => {
        window.location.href = buttons.href;
      },
    },
  });
});

// const audio = new Music({
//   id: "audio",
//   src: "../civgame/public/audio/Bleed-Meshuggah.mp3",
//   autoplay: true,
//   loop: true,
// });

const main = new Main({
  className: "main-menu",
  children: button,
});

const mute = new Mute({
  id: "speaker",
  href: "#",
});

const app = new Application({
  id: "app",
  children: [logo, main, mute],
});

const App = app.toHTML();
prepend(root, App);

const webpage = document.getElementById("speaker");
webpage.addEventListener("click", () => {
  playSound(
    "America Theme - Atomic (Civilization 6 OST) _ Hard Times Come Again No More.mp3"
  );
});
