import { configure, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Success from "./Success";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

const exchangeData = {
  favored: {
    name: "Matheus Favari",
    account: {
      number: "123456",
      bank: {
        name: "Santander",
        swift: "BBINBRRJXXX"
      }
    }
  },
  transactionValues: {
    target: {
      currency: "USD",
      total: "75000",
      settleDate: "d+2"
    },
    origin: {
      settleDate: "d+0"
    }
  }
};

describe("Result Success", () => {
  it("Should match snapshot", () => {
    expect(render(<Success exchangeData={exchangeData} />)).toMatchSnapshot();
  });

  it("Should open Modal when icon got tapped", () => {
    render(<Success exchangeData={exchangeData} />);

    expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
    expect(screen.queryByTestId("ModalMsg")).not.toBeInTheDocument();
    expect(screen.queryByTestId("ModalBtn")).not.toBeInTheDocument();

    const attentionIcon = screen.getByTestId("ExReqCreditDateIcon");
    fireEvent.click(attentionIcon);

    expect(screen.getByTestId("Modal")).toBeInTheDocument();
    expect(screen.getByTestId("ModalMsg")).toBeInTheDocument();
    expect(screen.getByTestId("ModalBtn")).toBeInTheDocument();
  });

  it("Should render all fields", () => {
    render(<Success exchangeData={exchangeData} />);

    expect(screen.getByTestId("SuccessImage")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqDate")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqFavoredSpan")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqFavoredName")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqFavoredAccNr")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqFavoredBankName")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqFavoredBankSwift")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqValueSpan")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqValue")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqDebitDateSpan")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqDebitDate")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqCreditDateSpan")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqCreditDate")).toBeInTheDocument();
    expect(screen.getByTestId("ExReqCreditDateIcon")).toBeInTheDocument();
  });
});
