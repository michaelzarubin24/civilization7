import { Component } from "../../../../core/component";

export class Tile extends Component {
  constructor({ color, className, row, col }) {
    super({
      tagName: "div",
      className: `earth-tile ${color} ${className}`,
      "data-row": row,
      "data-col": col,
    });
  }
}
