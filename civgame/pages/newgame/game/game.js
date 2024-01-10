import { Application } from "../../../components";
import { prepend } from "../../../core/append";
import "../game/game.scss";
import { getElement } from "./func/getElement";
import { mainScreen } from "./main/mainScreen";
import { mapData } from "./map/mapData";

const root = document.querySelector("body");

const app = new Application({
  id: "app",
  children: [mainScreen],
});

const App = app.toHTML();
prepend(root, App);
