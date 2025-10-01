import React from "react";
import { shallow } from "enzyme";
import FinancialInformation from "./FinancialInformation";
import Dropdown from "../../../common/Dropdown";
import SectionedFormContent from "../../../common/SectionedFormContent";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));

const props = {
  onChange: jest.fn(),
  validateSection: jest.fn(),
  temporaryInvalidFields: {}
};

const nullValues = {
  estimatedEquity: {
    rangeId: null
  },
  liquidAssets: {
    stocks: {
      rangeId: null
    },
    funds: {
      rangeId: null
    },
    bonds: {
      rangeId: null
    },
    savings: {
      rangeId: null
    }
  },
  fixedAssets: {
    realProperty: {
      rangeId: null
    },
    personalProperty: {
      rangeId: null
    }
  },
  estimatedAnnualIncome: {
    bonusesAndCommissions: {
      rangeId: null,
      exactValue: null
    },
    salary: {
      rangeId: null,
      exactValue: null
    },
    others: {
      rangeId: null,
      exactValue: null
    }
  }
};

const state = {
  formModel: {
    content: {
      investmentDetails: {
        sourceOfFunds: [
          {
            name: "work",
            text: "Trabalho",
            value: true
          },
          {
            name: "inheritance",
            text: "Herança",
            value: false
          },
          {
            name: "donation",
            text: "Doação",
            value: false
          },
          {
            name: "others",
            text: "Outros, especificar",
            value: true,
            additionalValue: "outra origem"
          }
        ],
        estimatedEquity: {
          rangeId: 7,
          exactValue: 500000000000
        },
        liquidAssets: {
          stocks: {
            rangeId: 1
          },
          funds: {
            rangeId: 2
          },
          bonds: {
            rangeId: 3
          },
          savings: {
            rangeId: 4
          }
        },
        fixedAssets: {
          realProperty: {
            rangeId: 5
          },
          personalProperty: {
            rangeId: 6
          }
        },
        estimatedAnnualIncome: {
          bonusesAndCommissions: {
            rangeId: 1,
            exactValue: null
          },
          salary: {
            rangeId: 5,
            exactValue: null
          },
          others: {
            rangeId: 3,
            exactValue: null
          }
        },
        rangeOptions: [
          {
            id: 1,
            min: 0,
            max: 0
          },
          {
            id: 2,
            min: 1,
            max: 500000
          },
          {
            id: 3,
            min: 500001,
            max: 1000000
          },
          {
            id: 4,
            min: 1000001,
            max: 3000000
          },
          {
            id: 5,
            min: 3000001,
            max: 5000000
          },
          {
            id: 6,
            min: 5000001,
            max: 10000000
          },
          {
            id: 7,
            min: 10000001,
            max: null
          }
        ]
      }
    }
  },
  isFilled: {
    investmentDetails: true,
    documents: {}
  },
  temporaryInvalidFields: {}
};

const newState = {
  formModel: {
    ...state.formModel,
    content: {
      ...state.formModel.content,
      investmentDetails: {
        ...state.formModel.content.investmentDetails,
        ...nullValues
      }
    }
  },
  isFilled: {
    investmentDetails: true,
    documents: {}
  }
};

describe("FinancialInformation component", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => state);
  });

  it.skip("should match snapshot with props", () => {
    expect(shallow(<FinancialInformation {...props} />)).toMatchSnapshot();
  });

  it.skip("should match snapshot with null values", () => {
    React.useContext = jest.fn(() => newState);
    expect(shallow(<FinancialInformation {...props} />)).toMatchSnapshot();
  });

  it.skip("should trigger change when edit a field", () => {
    const shallowWrapper = shallow(<FinancialInformation {...props} />);

    shallowWrapper.find(Dropdown).forEach(item => {
      item.prop("onChange")({ target: { value: 3 } });
      expect(props.onChange).toHaveBeenCalled();
    });
  });

  it.skip("should validate section when toggle section container show/hide", () => {
    const wrapper = shallow(<FinancialInformation {...props} />);
    const fileInput = wrapper.find(SectionedFormContent);

    fileInput.prop("callback")();
    expect(props.validateSection).toHaveBeenCalled();
  });

  it.skip("should display AlertMessage", () => {
    state.temporaryInvalidFields = {
      estimatedEquity: ["rangeId"],
      liquidAssets: {
        stocks: ["rangeId"],
        funds: ["rangeId"],
        bonds: ["rangeId"],
        savings: ["rangeId"]
      },
      fixedAssets: { realProperty: ["rangeId"], personalProperty: ["rangeId"] },
      estimatedAnnualIncome: {
        bonusesAndCommissions: ["rangeId"],
        salary: ["rangeId"],
        others: ["rangeId"]
      }
    };
    const wrapper = shallow(<FinancialInformation {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
