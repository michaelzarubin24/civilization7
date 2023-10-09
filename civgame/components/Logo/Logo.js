import { Component } from "/Users/Intel/Desktop/Civilization 7/civgame/core/component";
import "../Logo/Logo.scss";

export class Logo extends Component {
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

    this.logo = document.createElement("img");
    this.logo.className = className;
    this.logo.textContent = textContent ? textContent : "";

    // if (src) {
    //   this.logo.src = src;
    // }

    // if (alt) {
    //   this.logo.alt = alt;
    // }
  }
}
