import { Component } from "/Users/Intel/Desktop/Civilization 7/civgame/core/component";

export class Application extends Component {
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
  }
}
