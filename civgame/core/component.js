import { isArray } from "../utils";
import { toHTML } from "../core/toHTML";

export class Component {
  constructor({ tagName, className, children }) {
    if (!tagName) return;
    this.tagName = tagName;
    if (!className) return;
    this.className = className;
    if (!children || isArray(children)) return;
    for (const child of children) {
      const elem = toHTML(child);
      this.children.push(elem);
    }
  }
}

export class AdvancedComponent extends Component {
  constructor({
    tagName,
    className,
    children,
    textContent,
    html,
    events,
    ...attrs
  }) {
    super({ tagName, className, children });

    if (textContent) this.textContent = textContent;
    this.html = html;
    this.children = children;
    if (events) this.events = events;
    this.attrs = attrs;
  }
}
