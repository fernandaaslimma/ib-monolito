import React from "react";
import ReactDOM from "react-dom";

import LoadingBar from "./LoadingBar";

describe("LoadingBar component", () => {
  const element = <LoadingBar width="100%" height="100%" />;

  it("should renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(element, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
