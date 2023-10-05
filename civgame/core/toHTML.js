import { isArray, defineEvent, hasKeys } from "../utils";

export const toHTML = ({
  tagName,
  className,
  children,
  textContent,
  html,
  events,
  ...attrs
}) => {
  const element = document.createElement(tagName);
  if (isArray(className)) this.className = className.join(" ");
  element.className = className;

  hasKeys(html) && this.insertAdjacentHTML(html.position, html.text);

  if (!hasKeys(events)) return this;

  for (const event of events) {
    for (const keyOfEvent in event) {
      defineEvent({
        el: element,
        event: keyOfEvent,
        eventFunc: event[keyOfEvent],
      });
    }
  }

  if (hasKeys(attrs)) {
    for (const attr in attrs) {
      this[attr] = attrs[attr];
    }
  }
  return element;
};
