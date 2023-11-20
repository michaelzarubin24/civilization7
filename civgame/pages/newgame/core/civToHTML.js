import { Civilization } from "../civilization/civilization";

export const civToHTML = (instance) => {
  if (instance instanceof Civilization) {
    const {
      icon,
      civTitle,
      leader,
      description,
      image,
      id = "picked-civ",
      iconWrapperClassName,
      iconClassName,
      titleClassName,
      leaderClassName,
      descriptionClassName,
      imageWrapperClassName,
      imageClassName,
    } = instance;

    const civContainer = document.createElement("section");
    civContainer.id = id;

    const iconWrapperElement = document.createElement("div");
    iconWrapperElement.className = iconWrapperClassName;

    const iconElement = document.createElement("img");
    iconElement.src = icon;
    iconElement.className = iconClassName;

    const titleElement = document.createElement("h2");
    titleElement.textContent = civTitle;
    titleElement.className = titleClassName;

    const leaderElement = document.createElement("div");
    leaderElement.textContent = leader;
    leaderElement.className = leaderClassName;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    descriptionElement.className = descriptionClassName;

    const imageWrapperElement = document.createElement("div");
    imageWrapperElement.className = imageWrapperClassName;

    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.className = imageClassName;

    iconWrapperElement.appendChild(iconElement);
    imageWrapperElement.appendChild(imageElement);
    civContainer.appendChild(iconWrapperElement);
    civContainer.appendChild(titleElement);
    civContainer.appendChild(leaderElement);
    civContainer.appendChild(descriptionElement);
    civContainer.appendChild(imageWrapperElement);

    return civContainer;
  }
  return null;
};
