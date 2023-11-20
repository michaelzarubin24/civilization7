import { Component } from "../../../core/component";

export class India extends Component {
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
                  src: "../../public/civicons/india.png",
                  alt: "india",
                  className: "icon",
                }),
              ],
            }),
            new Component({
              tagName: "h2",
              className: "civ-title",
              textContent: "INDIA",
            }),
            new Component({
              tagName: "div",
              className: "civ-leader",
              textContent: "GANDHI",
            }),
            new Component({
              tagName: "p",
              className: "civ-description",
              textContent:
                "“It’s easy to stand with the crowd. It takes courage to stand alone.”",
            }),
          ],
        }),
        new Component({
          tagName: "div",
          className: "picked-civ-img",
          children: [
            new Component({
              tagName: "img",
              src: "../../public/civleaders/gandhi.png",
              alt: "gandhi",
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
// this.setIcon("../../../public/civicons/india.png");
// this.setIconClassName("icon");
// this.setCivTitle("INDIA");
// this.setTitleClassName("civ-title");
// this.setLeader("GANDHI");
// this.setLeaderClassName("civ-leader");
// this.setDescription(
//   `“It’s easy to stand with the crowd. It takes courage to stand alone.”`
// );
// this.setDescriptionClassName("civ-description");
// this.setImageWrapperClassName("civ-image");
// this.setImage("../../../public/civleaders/gandhi.png");
// this.setImageClassName("image");
