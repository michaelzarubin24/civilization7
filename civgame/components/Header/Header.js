import { Component } from "/Users/Intel/Desktop/Civilization 7/civgame/core/component";
import "../Header/Header.scss";

export class Header extends Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName,
      className,
      textContent,
      html,
      children,
      events,
      ...attrs,
    });
    this.header = document.createElement(tagName ? tagName : "header");
    this.header.className = className;
    this.header.textContent = textContent ? textContent : "";
  }
}
