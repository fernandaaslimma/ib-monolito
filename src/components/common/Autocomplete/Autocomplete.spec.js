import React from "react";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { ClickOutsideHandler } from "react-bocombbm-components";
import Autocomplete from "./Autocomplete";
import { SuggestionsList, Input, Element } from "./styles";

const props = {
  list: [{ name: "mock1" }, { name: "mock2" }],
  change: jest.fn(),
  label: "mock label",
  value: "",
  fieldToFilter: "name",
  noMatchMessage: "no message error"
};

describe("Autocomplete component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("should match snapshot", () => {
    const wrapper = shallow(<Autocomplete {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with datatest", () => {
    const wrapper = shallow(<Autocomplete {...props} dataTest="mock" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with with initial value", () => {
    const wrapper = shallow(<Autocomplete {...props} value="mock2" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show dropdown suggestions", () => {
    const wrapper = mount(<Autocomplete {...props} />);
    wrapper.find(Input).simulate("focus");

    expect(wrapper.find(SuggestionsList).length).toEqual(1);
  });

  it("should match snapshot with empty message", () => {
    const wrapper = mount(<Autocomplete {...props} />);

    act(() => {
      wrapper.find(Input).prop("onChange")({
        currentTarget: { value: "xpto" }
      });
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger match snapshot with error input", () => {
    const wrapper = mount(<Autocomplete {...props} />);

    act(() => {
      wrapper.find(Input).simulate("blur");
      expect(wrapper).toMatchSnapshot();
    });
  });

  it("should check if has to trigger change", () => {
    const wrapper = mount(<Autocomplete {...props} />);

    act(() => {
      wrapper.find(Input).prop("onBlur")();
      expect(wrapper).toMatchSnapshot();
    });
  });

  it("should trigger change function onMouseDown", () => {
    const wrapper = mount(<Autocomplete {...props} />);

    act(() => {
      wrapper.find(Input).simulate("focus");
      setTimeout(() => {
        wrapper.find(Element).at[0].prop("onMouseDown")({
          currentTarget: { innerText: "mock1" }
        });
      });
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should close suggestion list when clickoutside", () => {
    const wrapper = mount(<Autocomplete {...props} />);

    wrapper.find(Input).simulate("focus");

    act(() => {
      setTimeout(() => {
        wrapper.find(ClickOutsideHandler).prop("onClickOutside")();
      });
    });

    expect(wrapper).toMatchSnapshot();
  });
});

describe("onMouseDown", () => {
  it("should trigger change function onMouseDown", () => {
    const wrapper = mount(<Autocomplete {...props} />);

    act(() => {
      wrapper.find(Input).simulate("focus");
    });

    setTimeout(() => {
      act(() => {
        wrapper
          .find(Element)
          .at(0)
          .prop("onMouseDown")({
          currentTarget: { innerText: "mock1" }
        });
      });

      expect(props.change).toHaveBeenCalledWith({ name: "mock1" });
    }, 10);
  });
});

describe("checkIfHasToTriggerChange", () => {
  const changeMock = jest.fn();

  it("should call the change function with the selected item when it is found", () => {
    const wrapper = mount(<Autocomplete {...props} change={changeMock} />);

    act(() => {
      wrapper.find(Input).prop("onChange")({
        currentTarget: { value: "mock2" }
      });
    });

    act(() => {
      wrapper.find(Input).simulate("blur");
    });

    expect(changeMock).toHaveBeenCalledWith({ name: "mock2" });
  });

  it("should call the change function with a value object when the item is not found", () => {
    const wrapper = mount(<Autocomplete {...props} change={changeMock} />);

    act(() => {
      wrapper.find(Input).prop("onChange")({
        currentTarget: { value: "nonexistent" }
      });
    });

    act(() => {
      wrapper.find(Input).simulate("blur");
    });

    expect(changeMock).toHaveBeenCalledWith({ value: "nonexistent" });
  });
});
