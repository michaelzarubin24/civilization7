import { Component } from "../../../core/component";

export class France extends Component {
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

    this.setTagName("section");
    this.setClassName("picked-civ");

    const civInfo = new Component({
      tagName: "div",
      className: "picked-civ-info",
      children: [
        new Component({
          tagName: "div",
          className: "civ-info-wrapper",
          children: [
            new Component({
              tagName: "div",
              className: "civ-icon",
              children: [
                new Component({
                  tagName: "img",
                  src: "../../public/civicons/france.png",
                  alt: "france",
                  className: "icon",
                }),
              ],
            }),
            new Component({
              tagName: "h2",
              className: "civ-title",
              textContent: "FRANCE",
            }),
            new Component({
              tagName: "div",
              className: "civ-leader",
              textContent: "CATHERINE DE MEDICI",
            }),
            new Component({
              tagName: "p",
              className: "civ-description",
              textContent:
                "“Love is a treacherous emotion. You will fare better without it. We Medici always have.”",
            }),
          ],
        }),
        new Component({
          tagName: "div",
          className: "picked-civ-img",
          children: [
            new Component({
              tagName: "img",
              src: "../../public/civleaders/france-leader.png",
              alt: "catherine",
              className: "leader-img",
            }),
          ],
        }),
      ],
    });

    this.addChildren(civInfo);
  }
}
// this.setIconWrapperClassName("civ-icon");
// this.setIcon("../../../public/civicons/france.png");
// this.setIconClassName("icon");
// this.setCivTitle("FRANCE");
// this.setTitleClassName("civ-title");
// this.setLeader("CATHERINE DE MEDICI");
// this.setLeaderClassName("civ-leader");
// this.setDescription(
//   `“Love is a treacherous emotion. You will fare better without it. We Medici always have.”`
// );
// this.setDescriptionClassName("civ-description");
// this.setImageWrapperClassName("civ-image");
// this.setImage("../../../public/civleaders/catherine.png");
// this.setImageClassName("image");
