import { Component } from "../../core/component";
import "../Mute/Mute.scss";

export class Mute extends Component {
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
    this.setTagName("a");
    this.setHTML("<span></span>");
  }
}
