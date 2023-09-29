import { isArray, defineEvent } from "../utils";

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
    if (attrs) this.attrs = attrs;
  }
  toHTML() {
    const element = document.createElement(this.tagName);
    if (this.className) element.className = this.className;
    if (this.textContent) element.textContent = this.textContent;
    if (this.html)
      element.insertAdjacentHTML(this.html.position, this.html.text);

    if (!this.children || isArray(this.children)) return element;
    for (const child of this.children) {
      element.append(child);
    }

    if (!this.events) return element;

    for (const event of events) {
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
        element[attr] = value;
      }
    }

    return element;
  }
}
