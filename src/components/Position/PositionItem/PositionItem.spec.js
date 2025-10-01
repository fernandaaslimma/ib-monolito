import { configure, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { setTranslations } from "../../../utils/i18n";
import translations from "../../../../i18n/en-US.json";
import PosistionItem from "./PositionItem";
import { Context } from "../../common/OffshoreSelect/offshoreContext";

configure({ testIdAttribute: "data-test" });

const item = {
  name: "TIME DEPOSIT BOCOM BBM 30",
  notionalBalance: 30000,
  accruedBalance: 33333.33,
  accruedInterest: 55000,
  yieldIndex: "SOFR",
  yieldFixedRate: 12,
  yieldLabel: "SOFR + 12.0%",
  applicationDate: "2024-07-04",
  positionDate: "2024-07-04",
  maturityDate: "2024-07-04"
};

const context = {
  currentCoin: "USD"
};

describe("Offshore position item", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
    setTranslations(translations);
  });
  it("Should render position item", () => {
    const { getByTestId } = render(
      <Context.Provider value={context}>
        <PosistionItem item={item} />
      </Context.Provider>
    );

    expect(getByTestId("positionName")).toBeInTheDocument();
    expect(getByTestId("notionalBalance")).toBeInTheDocument();
    expect(getByTestId("accruedInterest")).toBeInTheDocument();
    expect(getByTestId("accruedBalance")).toBeInTheDocument();
    expect(getByTestId("applicationDate")).toBeInTheDocument();
    expect(getByTestId("maturityDate")).toBeInTheDocument();
    expect(getByTestId("yieldIndex")).toBeInTheDocument();
    expect(getByTestId("yieldFixedRate")).toBeInTheDocument();
    expect(getByTestId("percentage")).toBeInTheDocument();
  });
});
