import React from "react";
import { shallow } from "enzyme";

import Filter from "./Filter";
import { FilterGroupCombos, RadioButtion } from "./styles";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

jest.mock("../../../../utils/formatDate", () => ({
  formatDateForDayPicker: date => date,
  formatToQuery: date => date,
  formatDateToLocale: date => date
}));

jest.mock("moment");

const localeMock = require("moment").locale;

const e = {
  preventDefault: jest.fn()
};

const props = {
  filter: {
    from: "",
    range: {
      from: "",
      to: ""
    },
    selectedOption: "option1",
    currentRoute: ""
  },
  search: jest.fn(),
  onChangeOption: jest.fn(),
  onChangeDateFrom: jest.fn(),
  onChangeDateRange: jest.fn(),
  setProps: jest.fn()
};

describe("Filter component", () => {
  // it("should match snapshot with props", () => {
  //   expect(shallow(<Filter {...props} />)).toMatchSnapshot();
  // });

  describe("componentWillMount", () => {
    it("should invoke locale from moment", () => {
      shallow(<Filter {...props} />);
      expect(localeMock).toHaveBeenCalledWith("en");
    });

    it("should invoke setProps", () => {
      shallow(<Filter {...props} />);
      expect(props.setProps).toHaveBeenCalledWith(props.filter, "/");
    });
  });

  describe("Click In Combos", () => {
    it("should trigger onchange function for range 'from' by click the label", () => {
      shallow(<Filter {...props} />)
        .find(FilterGroupCombos)
        .at(0)
        .simulate("click");

      expect(props.onChangeOption).toHaveBeenCalled();
    });

    it("should trigger onchange function for range 'from' by change the radio button", () => {
      shallow(<Filter {...props} />)
        .find(FilterGroupCombos)
        .at(0)
        .find(RadioButtion)
        .simulate("change");

      expect(props.onChangeOption).toHaveBeenCalled();
    });

    it("should trigger onchange function for range 'from to' by click the label", () => {
      shallow(<Filter {...props} />)
        .find(FilterGroupCombos)
        .at(1)
        .simulate("click");

      expect(props.onChangeOption).toHaveBeenCalled();
    });

    it("should trigger onchange function for range 'from to' by change the radio button", () => {
      shallow(<Filter {...props} />)
        .find(FilterGroupCombos)
        .at(1)
        .find(RadioButtion)
        .simulate("change");

      expect(props.onChangeOption).toHaveBeenCalled();
    });
  });

  describe("handleFormSubmit", () => {
    it("should invoke preventDefault", () => {
      const component = shallow(<Filter {...props} />);
      component.instance().handleFormSubmit(e);
      expect(e.preventDefault).toHaveBeenCalledWith();
    });

    it("should invoke search for range", () => {
      const customProps = {
        ...props,
        filter: {
          ...props.filter,
          range: {
            from: "01/01/2010",
            to: "10/01/2010"
          }
        }
      };
      const component = shallow(<Filter {...customProps} />);
      component.instance().handleFormSubmit(e);
      expect(props.search).toHaveBeenCalledWith("01/01/2010", "10/01/2010");
    });

    it("should invoke search for date", () => {
      const customProps = {
        ...props,
        filter: {
          ...props.filter,
          from: "01/01/2010"
        }
      };
      const component = shallow(<Filter {...customProps} />);
      component.instance().handleFormSubmit(e);
      expect(props.search).toHaveBeenCalledWith("01/01/2010");
    });
  });
});
