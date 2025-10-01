import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-bocombbm-components";
import { INVESTMENT_PRODUCTS_LIST_URL } from "../../utils/constants";
import { translate } from "../../utils/i18n";
import Overview from "./Overview";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

jest.mock("../../utils/redirect");
const redirect = require("../../utils/redirect").redirect;

const transactions = [
  {
    date: "2017-01-01",
    grossValue: 123.123,
    type: "Ativo",
    assetName: "LCI"
  }
];

const consolidatedPosition = [
  {
    name: "Fixed Income",
    assetType: "FixedIncome",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  },
  {
    name: "Cash Accounts",
    assetType: "CashAccount",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  },
  {
    name: "Funds",
    assetType: "Funds",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

const consolidatedAssets = [
  {
    assetClass: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

const pendingTransactions = [
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-22",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Moderate",
      riskProfileLabel: "Moderado",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  },
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-17",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Aggressive",
      riskProfileLabel: "Agressivo",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  }
];

describe("Overview component", () => {
  let props;

  beforeEach(() => {
    props = {
      getConsolidatedPosition: jest.fn(),
      getConsolidatedAssets: jest.fn(),
      getPendingTransactions: jest.fn(),
      getFundsIncomeTransactions: jest.fn(),
      getFixedIncomeTransactions: jest.fn(),
      getEquityIncomeTransactions: jest.fn(),
      consolidatedPosition,
      consolidatedAssets,
      transactions,
      pendingTransactions,
      fundsIncomeTransactions: [],
      fixedIncomeTransactions: [],
      equityIncomeTransactions: []
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    expect(shallow(<Overview {...props} />)).toMatchSnapshot();
  });

  it("should invoke getConsolidatedPosition", () => {
    shallow(<Overview {...props} />);
    expect(props.getConsolidatedPosition).toHaveBeenCalledTimes(1);
  });

  it("should invoke getConsolidatedAssets", () => {
    shallow(<Overview {...props} />);
    expect(props.getConsolidatedAssets).toHaveBeenCalledTimes(1);
  });

  it("should invoke getPendingTransactions", () => {
    shallow(<Overview {...props} />);
    expect(props.getPendingTransactions).toHaveBeenCalledTimes(1);
  });

  it("should redirect to the investments url", () => {
    const component = shallow(<Overview {...props} />);
    component.setState({ loading: false });

    component.find(Button).simulate("click");
    expect(redirect).toHaveBeenCalledWith(INVESTMENT_PRODUCTS_LIST_URL);
  });

  it("should call getMovimentationData with filters as undefined", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.setState({
      goToFilterFunds: undefined,
      goToFilterFixedIncome: undefined,
      goToFilterEquityIncome: undefined
    });

    component.getMovimentationData();
  });

  it("should call getMovimentationData with filters defined and picked date selected to funds tab", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.setState({
      goToFilterFunds: false,
      pickedActive: translate("OVERVIEW_FUNDS_SUBTAB")
    });

    component.getMovimentationData();
  });

  it("should call getMovimentationData with filters defined and picked date selected to fixed income tab", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.setState({
      goToFilterFixedIncome: false,
      pickedActive: translate("OVERVIEW_FIXED_INCOME_SUBTAB")
    });

    component.getMovimentationData();
  });

  it("should call getMovimentationData with filters defined", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.setState({
      goToFilterFixedIncome: true,
      pickedActive: translate("OVERVIEW_FIXED_INCOME_SUBTAB")
    });

    component.getMovimentationData();
  });

  it("should call onFilter with picked active as funds", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.onFilter(
      {
        range: {
          from: "2025-06-14T10:43:30-03:00",
          to: "2026-06-14T10:43:30-03:00"
        },
        filterButtonFill: true
      },
      translate("OVERVIEW_FUNDS_SUBTAB")
    );
  });

  it("should call onFilter with picked active as funds", () => {
    const component = shallow(<Overview {...props} />).instance();
    component.setState({
      goToFilterFixedIncome: true,
      pickedActive: translate("OVERVIEW_FUNDS_SUBTAB")
    });

    component.filterMovimentation();
  });

  it("should call onFilter with picked active as fixed income", () => {
    const component = shallow(<Overview {...props} />).instance();
    component.setState({
      goToFilterFixedIncome: true,
      pickedActive: translate("OVERVIEW_FIXED_INCOME_SUBTAB")
    });

    component.filterMovimentation();
  });

  it("should call onFilter with picked active as equities", () => {
    const component = shallow(<Overview {...props} />).instance();
    component.setState({
      goToFilterEquityIncome: true,
      pickedActive: translate("OVERVIEW_EQUITES_SUBTAB")
    });

    component.filterMovimentation();
  });

  it("should call resetStates with picked active as funds", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.resetStates(translate("OVERVIEW_FUNDS_SUBTAB"));
  });

  it("should call resetStates with picked active as fixed income", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.resetStates(translate("OVERVIEW_FIXED_INCOME_SUBTAB"));
  });

  it("should call resetStates with picked active as equities", () => {
    const component = shallow(<Overview {...props} />).instance();

    component.resetStates(translate("OVERVIEW_EQUITES_SUBTAB"));
  });

  it("should call seeMoreMovimentations with picked active as funds", () => {
    const component = shallow(<Overview {...props} />).instance();

    const spyState = jest.spyOn(component, "setState");

    component.seeMoreMovimentations(translate("OVERVIEW_FUNDS_SUBTAB"));
    expect(spyState).toHaveBeenCalledWith({ loadingFundsMovimentations: true });
  });
  it("should call seeMoreMovimentations with picked active as fixed income", () => {
    const component = shallow(<Overview {...props} />).instance();

    const spyState = jest.spyOn(component, "setState");

    component.seeMoreMovimentations(translate("OVERVIEW_FIXED_INCOME_SUBTAB"));
    expect(spyState).toHaveBeenCalledWith({
      loadingFixedIncomeMovimentations: true
    });
  });

  it("should call seeMoreMovimentations with picked active as equities", () => {
    const component = shallow(<Overview {...props} />).instance();

    const spyState = jest.spyOn(component, "setState");

    component.seeMoreMovimentations(translate("OVERVIEW_EQUITES_SUBTAB"));

    expect(spyState).toHaveBeenCalledWith({
      loadingEquitesIncomeMovimentations: true
    });
  });

  it("should call setPickedActive with first picked active as 0", () => {
    const component = shallow(<Overview {...props} />).instance();

    const spyState = jest.spyOn(component, "setState");

    component.setPickedActive(0);
    expect(spyState).toHaveBeenCalledWith({ sessionPickedActive: 0 });
  });

  it("should call setSelectedTab with first tab selected", () => {
    const component = shallow(<Overview {...props} />).instance();

    const spyState = jest.spyOn(component, "setState");

    component.setSelectedTab(0);
    expect(spyState).toHaveBeenCalledWith({ selectedTab: 0 });
  });
});
