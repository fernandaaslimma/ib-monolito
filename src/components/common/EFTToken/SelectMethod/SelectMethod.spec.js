import React from "react";
import { shallow } from "enzyme";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../../utils/clickWrapper";
import SelectMethod from "./SelectMethod";
import { ButtonsWrapper } from "./styles";

const props = {
  methods: [
    {
      id: "e80857d6-8f81-408d-84b8-90f49b302da7",
      defaultAuth: true,
      authUri: "pj_franciscogoncalez@bocombbm.com.br",
      type: "mail",
      actions: [
        "wiretransfer",
        "passwordreset",
        "approvemailfactor",
        "approvetotpfactor",
        "personRegistration.confirmInformation",
        "approvemobilefactor",
        "approveinvestment",
        "approvesuitability"
      ],
      activated: true,
      plataformIdentifier: null,
      approved: true,
      isSelf: true
    },
    {
      id: "8c82c0e1-12c4-4ba2-b9b0-b3c01265c9d4",
      defaultAuth: false,
      authUri: "totp",
      type: "totp",
      actions: [
        "wiretransfer",
        "passwordreset",
        "personRegistration.confirmInformation",
        "approvemobilefactor",
        "approvetotpfactor",
        "approveinvestment",
        "approvesuitability"
      ],
      activated: true,
      plataformIdentifier: null,
      approved: true,
      isSelf: false
    }
  ],
  changeCurrentMethod: jest.fn(),
  handleChildrenClick: jest.fn()
};

describe("SelectMethod component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<SelectMethod {...props} />)).toMatchSnapshot();
  });

  it("should call changeCurrentMethod when clicked", () => {
    const shallowComponent = shallow(<SelectMethod {...props} />);
    shallowComponent
      .find(ButtonsWrapper)
      .find(ClickWrapper)
      .at(0)
      .find(Button)
      .simulate("click");
    expect(props.changeCurrentMethod).toHaveBeenCalledWith(
      "e80857d6-8f81-408d-84b8-90f49b302da7"
    );
  });
});
