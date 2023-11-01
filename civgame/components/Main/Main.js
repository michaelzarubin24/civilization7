import { Component } from "../../core/component";

export class Main extends Component {
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
    this.setTagName("main");
  }
}
