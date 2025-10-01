import React from "react";
import ReactDOM from "react-dom";

import Card from "./";

describe("CARD COMPONENT", () => {
  it("+++ renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Card>
        <h1>Test</h1>
      </Card>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
