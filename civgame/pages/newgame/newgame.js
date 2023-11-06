// / ---------------------------------------IMPORTS----------------------
import { Component } from "../../core/component";
import { Application } from "../../components/Application/Application";
import { Main, Button, Logo, Mute } from "../../components/index";
// --------------------------------------

import { append, prepend } from "../../core/append";
import { playSound } from "../../utils/playAudio";
import "../newgame/newgame.scss";

// --------------------------------------MAIN CODE---------------------

const root = document.querySelector("body");

const logo = new Logo({});

// const audio = new Music({
//   id: "audio",
//   src: "../civgame/public/audio/Bleed-Meshuggah.mp3",
//   autoplay: true,
//   loop: true,
// });

const mute = new Mute({
  id: "speaker",
  href: "#",
});

const app = new Application({
  id: "app",
  children: [logo, mute],
});

const App = app.toHTML();
prepend(root, App);

const webpage = document.getElementById("speaker");
webpage.addEventListener("click", () => {
  playSound(
    "America Theme - Atomic (Civilization 6 OST) _ Hard Times Come Again No More.mp3"
  );
});
