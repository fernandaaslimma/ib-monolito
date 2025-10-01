import React from "react";
import { shallow, mount } from "enzyme";

import EFTPassword from "./EFTPassword";

describe("EFTPassword component", () => {
  const props = {
    transferData: {
      date: "12/07/2018",
      value: "98.765,43"
    },
    favoredData: {
      favored: "GTL Logística de transporte",
      CNPJ: "59.272.491/0001-72",
      bank: "Itaú Unibanco",
      agency: "8230-2",
      account: "19323-2"
    },
    originAccount: {
      number: "106 2 300431-1"
    },
    approvers: [
      {
        name: "Yuri Ramos"
      },
      { name: "André Leitão" }
    ]
  };

  it("should match snapshot", () => {
    expect(shallow(<EFTPassword {...props} />)).toMatchSnapshot();
  });

  it('should render an "EFTPassword" tag', () => {
    expect(shallow(<EFTPassword {...props} />)).toMatchSnapshot();
    expect(mount(<EFTPassword {...props} />).find("EFTPassword").length).toBe(
      1
    );
  });
});
