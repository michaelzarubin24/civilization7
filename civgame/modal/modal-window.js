import { Component } from "../core/component";
import { Input, Form, Label, Button } from "../components/index";
import "../modal/modal-window.scss";

// A close button component
const closeBtn = new Component({
  tagName: "div",
  className: "close-btn",
  textContent: "\u00D7",
  events: {
    click: () => {
      document.querySelector(".popup").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
      // window.location.href = "../pages/newgame/newgame.html";
    },
  },
});

// Define form elements
const formElements = [
  {
    label: new Label({
      for: "email",
      textContent: "EMAIL",
    }),
    input: new Input({
      type: "text",
      id: "email",
      placeholder: "Enter email",
      events: {
        keydown: (event) => {
          event.target.style.backgroundColor = "lightblue";
        },
        blur: (event) => {
          event.target.style.backgroundColor = "";
        },
      },
    }),
  },
  {
    label: new Label({
      for: "password",
      textContent: "PASSWORD",
    }),
    input: new Input({
      type: "password",
      id: "password",
      placeholder: "Enter password",
      events: {
        keydown: (event) => {
          event.target.style.backgroundColor = "lightblue";
        },
        blur: (event) => {
          event.target.style.backgroundColor = "";
        },
      },
    }),
  },
  {
    label: new Label({
      for: "remember-me",
      textContent: "Remember me",
    }),
    input: new Input({
      type: "checkbox",
      id: "remember-me",
    }),
  },
];

// Create an array of form elements
const formElementsArray = formElements.map((formData) => {
  return new Component({
    tagName: "div",
    className: "form-element",
    children: [formData.label, formData.input],
  });
});

const button = new Button({
  tagName: "button",
  textContent: "Sign In",
  id: "sign-in",
});

// Create a sign-up button directly as a button element
const signupBtn = new Component({
  tagName: "div",
  className: "form-element",
  children: [button],
});

const remember = new Component({
  tagName: "div",
  className: "form-element",
  html: `<a href='#'>Forgot password?</a>`,
});
// Create the form component
const form = new Form({
  children: [
    new Component({
      tagName: "h2",
      textContent: "Log in",
    }),
    ...formElementsArray,
    signupBtn,
    remember,
  ],
});

// Create a popup component with close button and form
export const popup = new Component({
  tagName: "div",
  className: "popup",
  children: [closeBtn, form],
});
