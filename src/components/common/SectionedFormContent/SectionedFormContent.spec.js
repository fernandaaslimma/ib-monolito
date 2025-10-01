import React from "react";
import { shallow, mount } from "enzyme";

import SectionedFormContent from "./SectionedFormContent";
import { ShowHideHead, Content } from "./styles";
import { Icon } from "react-bocombbm-components";

describe("SectionedFormContent component", () => {
  let closedDescription;
  let openedDescription;

  beforeEach(() => {
    closedDescription = "mock";
    openedDescription = "mock_2";
  });

  it("should call match snapshot", () => {
    expect(
      shallow(
        <SectionedFormContent
          closedDescription={closedDescription}
          openedDescription={openedDescription}
        />
      )
    ).toMatchSnapshot();
  });

  it("should display invalid icon on head", () => {
    const wrapper = mount(
      <SectionedFormContent
        closedDescription={closedDescription}
        openedDescription={openedDescription}
        valid={false}
      />
    );

    expect(wrapper.find(Icon).length).toEqual(2);
  });

  it("should toggle exibition", () => {
    const shallowComponent = mount(
      <SectionedFormContent
        closedDescription={closedDescription}
        openedDescription={openedDescription}
      />
    );

    shallowComponent
      .find(ShowHideHead)
      .at(0)
      .simulate("click");

    expect(shallowComponent.find(Content).prop("isShown")).toBeTruthy();
  });
});
