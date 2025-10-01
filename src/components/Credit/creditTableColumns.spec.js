import React from "react";
import { shallow } from "enzyme";
import { contractColumns, installmentColumns } from "./creditTableColumns";
import { DataTable } from "react-bocombbm-components";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY"
}));

export const creditContracts = [
  {
    number: "1234567890",
    product: "CCB",
    paymentMethod: "TED",
    rates: {
      annual: 10.5,
      nominal: 20.5,
      effective: 30
    },
    date: "2019-11-16T12:33:54.271Z",
    tenure: {
      total: 200,
      remaining: 10
    }
  },
  {
    number: "9876543210",
    product: "CCB",
    paymentMethod: "TED",
    rates: {
      annual: 10,
      nominal: 12,
      effective: 15
    },
    date: "2018-11-16T12:33:54.271Z",
    tenure: {
      total: 360,
      remaining: 300
    }
  },
  {
    number: "1111114444444",
    product: "XPTO",
    paymentMethod: "TED",
    rates: {
      annual: 5.3,
      nominal: 5.1,
      effective: 10
    },
    date: "2018-11-16T12:33:54.271Z",
    tenure: {
      total: 400,
      remaining: 200
    }
  }
];

const installData = [
  {
    referenceDate: "2018-11-16T12:33:54.271Z",
    maturityDate: "2018-11-16T12:33:54.271Z",
    principalValue: 45000.0,
    monetaryAdjustmentValue: 120000,
    interestValue: 220000,
    latePaymentCommisionValue: 5500,
    iofValue: 10000,
    defaultInterestValue: null,
    fineValue: 180000,
    totalValue: 100000
  }
];

describe("Credit component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("should match snapshot with correct contract column configuration", () => {
    const component = shallow(
      <DataTable
        data={creditContracts}
        columns={contractColumns}
        config={{
          rowClick: () => true,
          title: "Credit"
        }}
        loading={false}
      />
    );
    expect(
      component.render().find('tr[data-test^="DataTable"]').length
    ).toEqual(3);
  });

  it("should match snapshot with correct contract installmentColumns configuration", () => {
    const component = shallow(
      <DataTable
        data={installData}
        totalData={installData[0]}
        columns={installmentColumns}
        config={{
          rowClick: () => true,
          title: "Credit"
        }}
        loading={false}
      />
    );
    expect(component.find('[data-test="DataTableTotal"]').length).toEqual(1);
  });
});
