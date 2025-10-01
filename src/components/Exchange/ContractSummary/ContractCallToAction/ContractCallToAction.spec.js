import React from "react";
import { shallow } from "enzyme";

import ContractCallToAction from "./ContractCallToAction";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false
}));

let signMock;

beforeEach(() => {
  signMock = jest.fn();
});

describe("ContractCallToAction component", () => {
  it("should match snapshot with values", () => {
    expect(
      shallow(<ContractCallToAction contractId="9999" sign={signMock} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with disabled", () => {
    expect(
      shallow(
        <ContractCallToAction contractId="9999" sign={signMock} disabled />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <ContractCallToAction contractId="9999" sign={signMock} loading />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with disabled and loading", () => {
    expect(
      shallow(
        <ContractCallToAction
          contractId="9999"
          sign={signMock}
          disabled
          loading
        />
      )
    ).toMatchSnapshot();
  });

  it("should have procced sign link", () => {
    const wrapper = shallow(
      <ContractCallToAction contractId="9999" sign={signMock} />
    );
    const signBtn = wrapper.find('[data-test="link"]');

    expect(signBtn.length).toBe(1);
  });

  it("should call sign action when click on procced sign link", () => {
    const wrapper = shallow(
      <ContractCallToAction
        contractId="9999"
        group={{ id: "111" }}
        sign={signMock}
      />
    );
    const signBtn = wrapper.find('[data-test="link"]');

    signBtn.simulate("click");

    expect(signMock).toHaveBeenCalledWith("9999", "111");
  });
});
