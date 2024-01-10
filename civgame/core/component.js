import { toHTML } from "./toHTML";
import { render } from "./render";

export class Component {
  #tagName;
  #className;
  #children;
  #html;
  #textContent;
  #events;
  #attrs;
  constructor({
    tagName,
    className,
    children,
    html,
    textContent,
    events,
    ...attrs
  }) {
    this.#tagName = tagName;
    this.#className = className;
    this.#children = children || [];
    this.#html = html;
    this.#textContent = textContent;
    this.#events = events;
    this.#attrs = attrs || [];
  }
  // get
  get tagName() {
    return this.#tagName;
  }

  get className() {
    return this.#className;
  }

  get children() {
    return this.#children;
  }
  get html() {
    return this.#html;
  }
  get textContent() {
    return this.#textContent;
  }

  get events() {
    return this.#events;
  }

  get attributes() {
    return this.#attrs;
  }

  // set

  setTagName(tagname) {
    this.#tagName = tagname;
  }
  setClassName(className) {
    this.#className = className;
  }
  setChildren(children) {
    this.#children = children;
  }
  setHTML(html) {
    this.#html = html;
  }
  setTextContent(textContent) {
    this.#textContent = textContent;
  }
  setEvents(events) {
    this.#events = events;
  }

  // other

  addChildren(children) {
    if (Array.isArray(children)) {
      this.#children.push(...children);
    } else {
      this.#children.push(children);
    }
  }

  clearChildren(container) {
    this.#children = [];
    this.render(container);
  }

  render(container) {
    if (!container) {
      console.error("Invalid container. Please provide a valid DOM element.");
      return;
    }

    // Clear existing content only if needed
    if (this.clearBeforeRender) {
      container.innerHTML = "";
    }

    // Render only the specific part of the map
    for (const child of this.#children) {
      container.appendChild(toHTML(child));
    }
  }

  toHTML() {
    return toHTML(this);
  }
}
