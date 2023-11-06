// ---------------------------------------IMPORTS----------------------
import { Component } from "../civgame/core/component";
import { Application } from "../civgame/components/Application/Application";
import { Main, Button, Logo, Mute } from "../civgame/components/index";
import { popup } from "../civgame/modal/modal-window";
// --------------------------------------
import { toHTML } from "./core/toHTML";
import { append, prepend } from "../civgame/core/append";
import { playSound } from "./utils/playAudio";
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

// ------------------------------------MODAL WINDOW------------------------------------
// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlayHTML = document.getElementById("overlay");

// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// overlayHTML.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });
// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlayHTML.classList.add("active");
// }
// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlayHTML.classList.remove("active");
// }
