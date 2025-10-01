import React from "react";
import ReactDOM from "react-dom";
import EmptyPage from ".";

describe("EmptyPage component", () => {
  it("should renders without crashing.", () => {
    const element = (
      <EmptyPage title="Title" text="Text" buttonText="buttonText" />
    );
    const div = document.createElement("div");
    ReactDOM.render(element, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
