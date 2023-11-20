// / ---------------------------------------IMPORTS----------------------
import { Component } from "../../core/component";
import { Application } from "../../components/Application/Application";
import { Main, Button, Logo, Mute } from "../../components/index";
// --------------------------------------

import { append, prepend } from "../../core/append";
import { playSound } from "../../utils/playAudio";
import { selectionScreen } from "./selection-screen/selection-screen";

import "../../pages/newgame/newgame.scss";
import "../../pages/newgame/selection-screen/selection-screen.scss";

// --------------------------------------MAIN CODE---------------------

const root = document.querySelector("body");

const app = new Application({
  id: "app",
  children: [selectionScreen],
});

const App = app.toHTML();
prepend(root, App);
