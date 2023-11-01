import { Component } from "../../core/component";

export class Logo extends Component {
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
    this.setClassName("logo-wrapper");
    this.setHTML(
      '<img src="../../public/logos/logo.png" alt="Error" class="logo">'
    );
  }
}
