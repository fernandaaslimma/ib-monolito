import React from "react";
import { configure, fireEvent, render } from "@testing-library/react";
import { InstanceContext } from "../sendMoneyContext";
import "@testing-library/jest-dom";
import WhoIsFavored from "./WhoIsFavored";

configure({ testIdAttribute: "data-test" });

const context = {
  exchangeRecipientAccounts: [
    {
      id: 1,
      name: "Maria Lima",
      isThirdParty: true,
      account: {
        number: "303030",
        bank: {
          name: "Bocom BBM",
          swift: "BBINBRRJXXX",
          intermediary: {
            number: "4555",
            bank: {
              name: "Banco Intermediario",
              swift: "BINTBRRJXXX"
            }
          }
        }
      },
      fxNatures: ["Disponibilidade para o exterior"]
    },
    {
      id: 2,
      name: "João Yaha",
      isThirdParty: true,
      account: {
        number: "333333",
        bank: {
          name: "Bocom BBM",
          swift: "BBINBRRJXXX",
          intermediary: {
            number: "4224",
            bank: {
              name: "Banco Intermediario",
              swift: "BINTBRRJXXX"
            }
          }
        }
      },
      fxNatures: ["Manutenção de residente"]
    },
    {
      id: 3,
      name: "Carlos Almeida",
      isThirdParty: false,
      account: {
        number: "333333",
        bank: {
          name: "Bocom BBM",
          swift: "BBINBRRJXXX",
          intermediary: {
            number: "4224",
            bank: {
              name: "Banco Intermediario",
              swift: "BINTBRRJXXX"
            }
          }
        }
      },
      fxNatures: ["Manutenção de residente"]
    }
  ],
  getExchangeRecipientAccounts: jest.fn()
};

function returnProps(value) {
  return {
    currentStep: value
  };
}

describe("Select favored tab options", () => {
  beforeEach(() => {
    React.useContext = jest.fn(() => context);
  });

  it("Should render mine favored accounts", () => {
    const text1 = "Maria Lima";
    const text2 = "João Yaha";
    const text3 = "Carlos Almeida";

    const { getByTestId, queryByText } = render(
      <InstanceContext.Provider value={context}>
        <WhoIsFavored {...returnProps(2)} />
      </InstanceContext.Provider>
    );

    const button = getByTestId("changeFavoredMe");
    fireEvent.click(button);

    expect(queryByText(text1)).not.toBeInTheDocument();
    expect(queryByText(text2)).not.toBeInTheDocument();
    expect(queryByText(text3)).toBeInTheDocument();
  });

  it("Should render thirdparty favored accounts", () => {
    const text1 = "Maria Lima";
    const text2 = "João Yaha";
    const text3 = "Carlos Almeida";

    const { getByTestId, queryByText } = render(
      <InstanceContext.Provider value={context}>
        <WhoIsFavored {...returnProps(2)} />
      </InstanceContext.Provider>
    );

    const button = getByTestId("changeFavoredOthers");
    fireEvent.click(button);

    expect(queryByText(text1)).toBeInTheDocument();
    expect(queryByText(text2)).toBeInTheDocument();
    expect(queryByText(text3)).not.toBeInTheDocument();
  });

  it("Continue button should be disabled", () => {
    const { getByTestId } = render(
      <InstanceContext.Provider value={context}>
        <WhoIsFavored {...returnProps(2)} />
      </InstanceContext.Provider>
    );

    const button = getByTestId("ContinueButtonSelectAccount");

    expect(button).not.toBeEnabled();
  });

  it("Continue button should be enabled", () => {
    const text = "Carlos Almeida";

    const { getByTestId, queryByText } = render(
      <InstanceContext.Provider value={context}>
        <WhoIsFavored {...returnProps(2)} />
      </InstanceContext.Provider>
    );

    const item = queryByText(text);
    fireEvent.click(item);

    const button = getByTestId("ContinueButtonSelectAccount");

    expect(button).toBeEnabled();
  });
});
