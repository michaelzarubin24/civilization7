import { Component } from "../../core/component";

export class Application extends Component {
  constructor({
    tagName,
    className,
    children,
    html,
    textContent,
    events,
    ...attrs
  }) {
    super({
      tagName,
      className,
      children,
      html,
      textContent,
      events,
      ...attrs,
    });
    this.setTagName("div");
  }
}
