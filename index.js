import React from "react";
import { render } from "react-dom";
import Slides from "./slides";

require("normalize.css");
require("src/themes/default/index.css");

main();

function main() {
  render(<Slides />, document.getElementById("root"));
}
