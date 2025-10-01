import React from "react";
import { shallow } from "enzyme";
import DetailsCard from "./DetailsCard";
import { InstanceContext } from "../Funds/fundsContext";

const API = {
  id: 1,
  name: "BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO",
  cnpj: "29.733.842/0001-34",
  description: null,
  manager: "Bahia Asset Management",
  administrator: null,
  minimumBalance: 20000,
  minimumTransaction: 10000,
  initialInvestment: 20000,
  riskProfile: "Moderate",
  riskProfileLabel: "Moderado",
  returns: {
    twelveMonths: null,
    year: null,
    thirtySixMonths: null,
    fortyEightMonths: null,
    sinceInception: null
  },
  class: "Hedge Funds",
  classLabel: "Multimercado",
  subscription: {
    type: "Corrido",
    conversionDays: 20,
    settlementDays: 1
  },
  redemption: {
    type: "Corrido",
    conversionDays: 1,
    settlementDays: 0
  },
  benchmark: "CDI",
  quotaDate: "2020-12-21",
  administrationFee: 0.2,
  performanceFee: 0.2,
  inceptionDate: null
};
const profitabilityObj = {
  yearFunds: API["returns"]["year"],
  twelveMonths: API["returns"]["twelveMonths"],
  thirtySixMonths: API["returns"]["thirtySixMonths"],
  fortyEightMonths: API["returns"]["fortyEightMonths"]
};
const generalInfo = {
  minimumTransaction: API["minimumTransaction"], // Movimentação mín.
  minimumBalance: API["minimumBalance"], // Saldo mínimo
  subsConversionDays: API["subscription"]["conversionDays"],
  redempConversionDays: API["redemption"]["conversionDays"],
  redempSettlementDays: API["redemption"]["settlementDays"]
};
const fundsDetails = {
  administratorFunds: API["administrator"], // Administrador
  managerFunds: API["manager"], // Gestor
  custodianFunds: API["custodian"], // Custodiante
  inceptionDateFunds: API["inceptionDate"], // Data de ínicio do fundo
  benchmarkFunds: API["benchmark"], // Benckmark
  performanceFeeFunds: API["performanceFee"], // Taxa de perfomance
  administrationFeeFunds: API["administrationFee"] // Taxa de administração
};

const thisProps = {
  stepForward: jest.fn()
};

const props = {
  handleUserInputTransferCurrency: jest.fn()
};

const colors = {
  moderate: "#E3F1D4",
  aggressive: "#E2DCF5",
  conservative: "#DAE6F2"
};

const context = {
  props,
  state: { selectedFund: API },
  colors,
  selectFund: jest.fn()
};

describe("ListStep component", () => {
  let setState, useStateSpy;
  beforeEach(() => {
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);
  });

  describe("Different period activity", () => {
    it("Should match snapshpt", () => {
      const component = shallow(
        <InstanceContext.Provider value={context}>
          <DetailsCard
            {...thisProps}
            list={profitabilityObj}
            periodActive={5}
            initialInvestment={API.initialInvestment}
            profitabilitySoFar={API["returns"]["sinceInception"]}
            clickInfo={jest.fn()}
          />
        </InstanceContext.Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it("Should match snapshpt", () => {
      const component = shallow(
        <InstanceContext.Provider value={context}>
          <DetailsCard
            {...thisProps}
            list={profitabilityObj}
            periodActive={7}
            initialInvestment={API.initialInvestment}
            profitabilitySoFar={API["returns"]["sinceInception"]}
            clickInfo={jest.fn()}
          />
        </InstanceContext.Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it("Should match snapshpt", () => {
      const component = shallow(
        <InstanceContext.Provider value={context}>
          <DetailsCard
            {...thisProps}
            list={profitabilityObj}
            periodActive={12}
            initialInvestment={API.initialInvestment}
            profitabilitySoFar={API["returns"]["sinceInception"]}
            clickInfo={jest.fn()}
          />
        </InstanceContext.Provider>
      );
      expect(component).toMatchSnapshot();
    });
  });

  it("Should match snapshot", () => {
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <DetailsCard {...thisProps} title="bla" list={generalInfo} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("Should match snapshot", () => {
    const component = shallow(
      <InstanceContext.Provider value={context}>
        <DetailsCard {...thisProps} title="bla" list={fundsDetails} />
      </InstanceContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
