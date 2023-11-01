import { Component } from "./component";

export const toHTML = (instance) => {
  if (instance instanceof Component) {
    const { tagName, className, children, html, textContent, events, attrs } =
      instance;
    const element = document.createElement(tagName);

    if (instance.className) {
      element.className = className;
    }
    if (instance.textContent) {
      element.textContent = textContent;
    }

    element.events = events;

    if (!children) return element;

    if (html) element.insertAdjacentHTML("afterbegin", html);

    if (events) {
      for (let key in events) {
        element.addEventListener(key, events[key]);
      }
    }

    if (instance.attributes) {
      for (let attr in instance.attributes) {
        element.setAttribute(attr, instance.attributes[attr]);
      }
    }

    for (const child of children) {
      if (child instanceof Component) element.append(child.toHTML());
    }

    return element;
  }
  return "There isn't any instance of class Component.";
};
