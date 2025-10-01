import React from "react";
import { shallow, mount } from "enzyme";
import CompositeInput from "./CompositeInput";

const props = {
  inputs: [
    {
      id: 1,
      step: 1,
      title:
        "Fundos de Investimento de Renda Fixa e Referenciado DI, Poupança, Títulos Públicos e Conta Corrente"
    },
    {
      id: 2,
      step: 2,
      title:
        "Fundos de Investimento de Renda Fixa Crédito Privado (incluindo FIDICs e Fundos de Crédito)"
    }
  ],
  total: 100,
  changeComposite: jest.fn()
};

describe("CompositeInput component", () => {
  it("should match snapshot", () => {
    expect(shallow(<CompositeInput {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with sum > 100", () => {
    const event = {
      target: {
        value: 150
      }
    };
    const component = mount(<CompositeInput {...props} />);
    component
      .find("input")
      .at(0)
      .prop("onChange")(event);
  });

  it("should match snapshot with sum < 0", () => {
    const event = {
      target: {
        value: -150
      }
    };
    const component = mount(<CompositeInput {...props} />);
    component
      .find("input")
      .at(0)
      .prop("onChange")(event);
  });
});
