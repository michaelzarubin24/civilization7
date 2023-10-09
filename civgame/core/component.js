import { defineEvent } from "../utils/defineEvents";
import { appendMany } from "../core/append";

export class Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    if (!tagName) return;
    this.tagName = tagName;
    this.className = className;
    if (textContent) this.textContent = textContent;
    this.html = html;
    this.children = children;
    this.events = events;
    if (attrs && Object.keys(attrs).length > 0) this.attrs = attrs;
  }
  toHTML() {
    const element = document.createElement(this.tagName);
    if (this.className) element.className = this.className;
    if (this.textContent) element.textContent = this.textContent;
    if (this.html)
      element.insertAdjacentHTML(this.html.position, this.html.text);

    if (this.children && this.children.length > 1) {
      appendMany(element, this.children);
    }

    if (!this.events) return element;

    for (const event of this.events) {
      for (const eventKey in event) {
        defineEvent({
          el: element,
          event: eventKey,
          eventFunc: event[eventKey],
        });
      }
    }

    if (this.attrs) {
      for (const attr in this.attrs) {
        const value = this.attrs[attr];
        element.setAttribute(attr, value);
      }
    }

    return element;
  }
}
