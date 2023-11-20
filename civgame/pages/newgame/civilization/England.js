import { Component } from "../../../core/component";

export class England extends Component {
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
                  src: "../../public/civicons/england.png",
                  alt: "england",
                  className: "icon",
                }),
              ],
            }),
            new Component({
              tagName: "h2",
              className: "civ-title",
              textContent: "ENGLAND",
            }),
            new Component({
              tagName: "div",
              className: "civ-leader",
              textContent: "QUEEN VICTORIA",
            }),
            new Component({
              tagName: "p",
              className: "civ-description",
              textContent: `“Just close your eyes – and think of England.”`,
            }),
          ],
        }),
        new Component({
          tagName: "div",
          className: "picked-civ-img",
          children: [
            new Component({
              tagName: "img",
              src: "../../public/civleaders/victoria.png",
              alt: "victoria",
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
// this.setIcon("../../../public/civicons/england.png");
// this.setIconClassName("icon");
// this.setCivTitle("ENGLAND");
// this.setTitleClassName("civ-title");
// this.setLeader("QUEEN VICTORIA");
// this.setLeaderClassName("civ-leader");
// this.setDescription(`“Just close your eyes – and think of England.”`);
// this.setDescriptionClassName("civ-description");
// this.setImageWrapperClassName("civ-image");
// this.setImage("../../../public/civleaders/victoria.png");
// this.setImageClassName("image");
