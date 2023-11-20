import { Component } from "../../../core/component";
import { civToHTML } from "../core/civToHTML";

export class Civilization extends Component {
  #icon;
  #civTitle;
  #leader;
  #description;
  #image;
  #iconWrapperClassName;
  #iconClassName;
  #titleClassName;
  #leaderClassName;
  #imageWrapperClassName;
  #imageClassName;
  #descriptionClassName;

  constructor({
    tagName,
    className,
    children,
    html,
    textContent,
    events,
    icon,
    civTitle,
    leader,
    description,
    image,
    iconWrapperClassName,
    iconClassName,
    titleClassName,
    leaderClassName,
    imageWrapperClassName,
    imageClassName,
    descriptionClassName,
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
    this.#icon = icon;
    this.#civTitle = civTitle;
    this.#leader = leader;
    this.#description = description;
    this.#image = image;
    this.#iconWrapperClassName = iconWrapperClassName;
    this.#iconClassName = iconClassName;
    this.#titleClassName = titleClassName;
    this.#leaderClassName = leaderClassName;
    this.#imageWrapperClassName = imageWrapperClassName;
    this.#imageClassName = imageClassName;
    this.#descriptionClassName = descriptionClassName;
  }

  // get
  get icon() {
    return this.#icon;
  }
  get civTitle() {
    return this.#civTitle;
  }
  get leader() {
    return this.#leader;
  }
  get description() {
    return this.#description;
  }
  get image() {
    return this.#image;
  }
  get iconWrapperClassName() {
    return this.#iconWrapperClassName;
  }
  get iconClassName() {
    return this.#iconClassName;
  }
  get titleClassName() {
    return this.#titleClassName;
  }
  get leaderClassName() {
    return this.#leaderClassName;
  }
  get imageWrapperClassName() {
    return this.#imageWrapperClassName;
  }
  get imageClassName() {
    return this.#imageClassName;
  }
  get descriptionClassName() {
    return this.#descriptionClassName;
  }

  // set
  setIcon(icon) {
    this.#icon = icon;
  }
  setCivTitle(civTitle) {
    this.#civTitle = civTitle;
  }
  setLeader(leader) {
    this.#leader = leader;
  }
  setDescription(description) {
    this.#description = description;
  }
  setImage(image) {
    this.#image = image;
  }
  setIconWrapperClassName(iconWrapperClassName) {
    this.#iconWrapperClassName = iconWrapperClassName;
  }
  setIconClassName(iconClassName) {
    this.#iconClassName = iconClassName;
  }
  setTitleClassName(titleClassName) {
    this.#titleClassName = titleClassName;
  }
  setLeaderClassName(leaderClassName) {
    this.#leaderClassName = leaderClassName;
  }
  setImageWrapperClassName(imageWrapperClassName) {
    this.#imageWrapperClassName = imageWrapperClassName;
  }
  setImageClassName(imageClassName) {
    this.#imageClassName = imageClassName;
  }
  setDescriptionClassName(descriptionClassName) {
    this.#descriptionClassName = descriptionClassName;
  }

  civToHTML() {
    return civToHTML(this);
  }
}
