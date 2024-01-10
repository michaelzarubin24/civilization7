import { Component } from "../../../core/component";

export class China extends Component {
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
                  src: "../../public/civicons/china.png",
                  alt: "china",
                  className: "icon",
                }),
              ],
            }),
            new Component({
              tagName: "h2",
              className: "civ-title",
              textContent: "CHINA",
            }),
            new Component({
              tagName: "div",
              className: "civ-leader",
              textContent: "QIN SHI HUANG",
            }),
            new Component({
              tagName: "p",
              className: "civ-description",
              textContent:
                "“The reason why China suffered from endless wars is because of the existence of feudal lords and kings. I corrected this.”",
            }),
          ],
        }),
        new Component({
          tagName: "div",
          className: "picked-civ-img",
          children: [
            new Component({
              tagName: "img",
              src: "../../public/civleaders/china-leader.png",
              alt: "qin",
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
// this.setIcon("../../../public/civicons/china.png");
// this.setIconClassName("icon");
// this.setCivTitle("INDIA");
// this.setTitleClassName("civ-title");
// this.setLeader("QIN SHI HUANG");
// this.setLeaderClassName("civ-leader");
// this.setDescription(
//   `The reason why China suffered from endless wars is because of the existence of feudal lords and kings. I corrected this.`
// );
// this.setDescriptionClassName("civ-description");
// this.setImageWrapperClassName("civ-image");
// this.setImage("../../../public/civleaders/qin.png");
// this.setImageClassName("image");
