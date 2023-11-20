// ---------------------------------------IMPORTS----------------------
import { Component } from "../civgame/core/component";
import { Application } from "../civgame/components/Application/Application";
import { Main, Button, Logo, Mute } from "../civgame/components/index";
import { popup } from "../civgame/modal/modal-window";
// --------------------------------------
import { toHTML } from "./core/toHTML";
import { append, prepend } from "../civgame/core/append";

import { playSound, hasNumbersAndLetters } from "./utils/index";
import "../civgame/styles/style.scss";

// --------------------------------------MAIN CODE---------------------

const root = document.querySelector("body");

const logo = new Logo({});

const overlay = new Component({
  tagName: "div",
  className: "overlay",
  events: {
    click: () => {
      document.querySelector(".overlay").classList.remove("active");
      document.querySelector(".popup").classList.remove("active");
    },
  },
});

const btn = new Button({
  id: "modal-btn",
  textContent: "NEW GAME",
  events: {
    click: () => {
      document.querySelector(".popup").classList.add("active");
      document.querySelector(".overlay").classList.add("active");
      // window.location.href = "../pages/newgame/newgame.html";
    },
  },
});

const center = new Component({
  tagName: "div",
  className: "center",
  children: [btn],
});

const buttons = [
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

const buttonElements = buttons.map((buttonData) => {
  return new Button({
    className: "btn-menu",
    textContent: buttonData.textContent,
    href: buttonData.href,
    events: {
      click: () => {
        window.location.href = buttonData.href;
      },
    },
  });
});

const main = new Main({
  className: "main-menu",
  children: [center, ...buttonElements],
});

const mute = new Mute({
  className: "speaker",
  src: "./public/images/speaker-sound-black-button-20764.svg",
  alt: "Mute Icon",
  events: {
    click: () => {
      playSound(
        "America Theme - Atomic (Civilization 6 OST) _ Hard Times Come Again No More.mp3"
      );
    },
  },
});

const muteWrapper = new Component({
  tagName: "div",
  className: "speaker-wrapper",
  children: [mute],
});

const app = new Application({
  id: "app",
  children: [logo, main, popup, muteWrapper, overlay],
});

const App = app.toHTML();
prepend(root, App);

// -----------------------------------VALIDATION-------------------------------------------

const signButton = document.getElementById("sign-in");
const inputField = document.getElementById("email");
const passwordField = document.getElementById("password");

function validation() {
  const inputValue = inputField.value.trim();
  const passwordValue = passwordField.value.trim();

  if (
    inputValue.length > 6 &&
    passwordValue.length > 6 &&
    hasNumbersAndLetters(inputValue) &&
    hasNumbersAndLetters(passwordValue)
  ) {
    inputField.style.backgroundColor = "lightblue";
    passwordField.style.backgroundColor = "lightblue";
    alert("Validation successful! Congratulations!");
    window.location.href = "./pages/newgame/newgame.html";
  } else {
    if (inputValue.length <= 6 || !hasNumbersAndLetters(inputValue)) {
      inputField.style.backgroundColor = "red";
      alert(
        "Email validation failed: Email must have more than 6 characters and contain both letters and numbers."
      );
      inputField.focus();
    }
    if (passwordValue.length <= 6 || !hasNumbersAndLetters(passwordValue)) {
      passwordField.style.backgroundColor = "red";
      alert(
        "Password validation failed: Password must have more than 6 characters and contain both letters and numbers."
      );
      passwordField.focus();
    }
  }
}

signButton.addEventListener("click", (e) => {
  e.preventDefault();
  validation();
});

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    validation();
  }
});

passwordField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    validation();
  }
});
