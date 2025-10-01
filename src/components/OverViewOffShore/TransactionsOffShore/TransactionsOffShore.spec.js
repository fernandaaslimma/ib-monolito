import React from "react";
import TransactionsOffShore from "./TransactionsOffShore";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButtonRounded from "../../common/RadioButtonRounded";


jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "DD/MM/YYYY",
  getShortDateByLocale: () => "MM/DD/YYY",
}));

configure({ testIdAttribute: "data-test" });

const props = {
  transactions: [
    {
      name: "Time Deposit BOCOM BBM 60",
      notionalBalance: 118984.23,
      transactionValue: 133952.45,
      accruedInterest: 14968.22,
      type: "REDEMPTION",
      counterparty: "Nassau Branch",
      applicationDate: "2024-07-04",
      transactionDate: "2024-10-01",
      maturityDate: "2024-10-04"
    }
  ],
  loading: false,
  isEmpty: false,
  totalCount: 20,
  currentCoin: 'USD',
  getTransactions: jest.fn()
};

const props2 = {
  transactions: [
    {
      name: "Time Deposit BOCOM BBM 60",
      notionalBalance: 118984.23,
      transactionValue: 133952.45,
      accruedInterest: 14968.22,
      type: "REDEMPTION",
      counterparty: "Nassau Branch",
      applicationDate: "2024-07-04",
      transactionDate: "2024-10-01",
      maturityDate: "2024-10-04"
    },
    {
      name: "Time Deposit BOCOM BBM 60",
      notionalBalance: 118984.23,
      transactionValue: 133952.45,
      accruedInterest: 14968.22,
      type: "REDEMPTION",
      counterparty: "Nassau Branch",
      applicationDate: "2024-07-04",
      transactionDate: "2024-10-01",
      maturityDate: "2024-10-04"
    },
    {
      name: "Time Deposit BOCOM BBM 60",
      notionalBalance: 118984.23,
      transactionValue: 133952.45,
      accruedInterest: 14968.22,
      type: "REDEMPTION",
      counterparty: "Nassau Branch",
      applicationDate: "2024-07-04",
      transactionDate: "2024-10-01",
      maturityDate: "2024-10-04"
    },
    {
      name: "Time Deposit BOCOM BBM 60",
      notionalBalance: 118984.23,
      transactionValue: 133952.45,
      accruedInterest: 14968.22,
      type: "REDEMPTION",
      counterparty: "Nassau Branch",
      applicationDate: "2024-07-04",
      transactionDate: "2024-10-01",
      maturityDate: "2024-10-04"
    },
    {
      name: "Time Deposit BOCOM BBM 60",
      notionalBalance: 118984.23,
      transactionValue: 133952.45,
      accruedInterest: 14968.22,
      type: "REDEMPTION",
      counterparty: "Nassau Branch",
      applicationDate: "2024-07-04",
      transactionDate: "2024-10-01",
      maturityDate: "2024-10-04"
    }
  ],
  loading: false,
  isEmpty: false,
  totalCount: 20,
  currentCoin: 'USD',
  getTransactions: jest.fn()
};

describe("TransactionsOffshore", () => {
  it("Should match Snapshot With Loading is false", () => {
    expect(
      render(
        <TransactionsOffShore  {...props} />
      )
    ).toMatchSnapshot();
  });

  it("Should match Snapshot With Loading is true", () => {
    props.loading = true;
    expect(
      render(
        <TransactionsOffShore  {...props} />
      )
    ).toMatchSnapshot();
  });

  it("Should render TransactionsCard", () => {
    props.loading = false;
    render(
      <TransactionsOffShore {...props} />
    );

    const transactionsCard = screen.getByTestId("card_0")
    expect(transactionsCard).toBeInTheDocument();
  });

  it("Should render EmptyState message", () => {
    props.isEmpty = true;
    render(
      <TransactionsOffShore {...props} />
    );

    const transactionsCard = screen.getByTestId("emptyStatements")
    expect(transactionsCard).toBeInTheDocument();
  });

  it("Should open filter on changeContent", () => {
    render(
      <TransactionsOffShore {...props} />
    );

    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const select = screen.getByText('OVERVIEW_TRANSACTION_SELECT_PERIOD')

    expect(select).toBeInTheDocument()
  });

  it("Should close filter on changeFilter ", () => {
    render(
      <TransactionsOffShore {...props} />
    );

    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const selectPeriod = screen.getByTestId("periodRadio_0");

    fireEvent.change(selectPeriod, { target: { checked: true } });

    expect(selectPeriod).toBeChecked();
  });

  it("Should close filter on clearFilterButton", () => {
    render(
      <TransactionsOffShore {...props} />
    );

    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const clearFilterButton = screen.getByTestId("clearFilterButton");

    fireEvent.click(clearFilterButton);

    expect(clearFilterButton).not.toBeInTheDocument();
  });

  it("On clearFilterButton should call getTransactions", () => {
    render(
      <TransactionsOffShore {...props} />
    );

    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const clearFilterButton = screen.getByTestId("clearFilterButton");

    fireEvent.click(clearFilterButton);

    expect(props.getTransactions).toHaveBeenCalled();
  });


  it("View More button should be in the document if totalCount > transactions.lenght", () => {
    render(
      <TransactionsOffShore  {...props2} />
    );

    const viewMoreButton = screen.getByTestId('viewMore');

    expect(viewMoreButton).toBeInTheDocument();
  });

  it("Should call getTransactions on click View More button", () => {
    render(
      <TransactionsOffShore  {...props2} />
    );

    const viewMoreButton = screen.getByTestId('viewMore');

    fireEvent.click(viewMoreButton);

    expect(props.getTransactions).toHaveBeenCalled();
  });

  it("Should load initial items", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const item = screen.getByText("Time Deposit BOCOM BBM 60");

    expect(item).toBeInTheDocument();
  });

  it("Should scroll to top on click goToTopButton", () => {
    render(
      <TransactionsOffShore  {...props} />
    );
    const scrollMock = jest.fn();
    global.scrollTo = scrollMock;

    Object.defineProperty(document.documentElement, 'scrollTop', { value: 0, writable: true })

    document.documentElement.scrollTop = 100;
    fireEvent.scroll(window);

    const goToTopButton = screen.getByTestId('goToTopButton');

    fireEvent.click(goToTopButton);

    expect(scrollMock).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth"
    });
  });

  it("Should format input on filterDateTo", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const filterDateToButton = screen.getByTestId('filterDateTo');

    fireEvent.change(filterDateToButton, { target: { value: 10102020 } });

    expect(filterDateToButton).toHaveValue('10/10/2020');
  });

  it("Should format input on filterDateFrom", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const filterDateFromButton = screen.getByTestId('filterDateFrom');

    fireEvent.change(filterDateFromButton, { target: { value: 10102020 } });

    expect(filterDateFromButton).toHaveValue('10/10/2020');
  });

  it("Should clear format input on filterDateFrom", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const filterDateFromButton = screen.getByTestId('filterDateFrom');

    fireEvent.change(filterDateFromButton, { target: { value: 10102020 } });

    const clearFilterButton = screen.getByTestId('clearAllFiltersButton');

    fireEvent.click(clearFilterButton);

    expect(filterDateFromButton).toHaveValue("");
  });

  it("Should close modal on click reset filter Button", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const select = screen.getByText('OVERVIEW_TRANSACTION_SELECT_PERIOD')

    expect(select).toBeVisible();

    const resetFilterButton = screen.getByTestId('clearFilterButton');

    fireEvent.click(resetFilterButton);

    expect(select).not.toBeVisible();
  });

  it("Should open modal on click filterButton", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const filterModal = screen.getByTestId("filterModal");

    expect(filterModal).toBeInTheDocument()

  });


  it("Should call getTransactions on click applyFilterButton", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const filterDateFromButton = screen.getByTestId('filterDateFrom');

    fireEvent.change(filterDateFromButton, { target: { value: 10102020 } });

    const applyFilterButton = screen.getByTestId('applyFilterButton');

    fireEvent.click(applyFilterButton);

    expect(props.getTransactions).toHaveBeenCalled();
  });

  it("should trigger setValue on click", () => {
    let props3 = {
      inputName: "inputName",
      itemKey: "itemKey",
      setValue: jest.fn(),
      buttonValue: "buttonValue",
      isChecked: jest.fn(),
      storedValue: "mock"
    };

    render(<RadioButtonRounded {...props3} />);
    fireEvent.click(screen.getByTestId("undefined_itemKey"));
    expect(props3.setValue).toHaveBeenCalled();
  })

  it("Should open modal on click filterButton", () => {
    props.isEmpty = false;

    render(
      <TransactionsOffShore  {...props} />
    );

    const openFilterButton = screen.getByTestId("filterButton");

    fireEvent.click(openFilterButton);

    const filterModal = screen.getByTestId("filterModal");

    const filterSheetBack = screen.getByTestId("filterModal-bottomSheetBack");

    fireEvent.click(filterSheetBack);

    expect(filterModal).not.toBeInTheDocument()

  });

  it("Should render filterButton on select period", () => {
    render(
      <TransactionsOffShore {...props} />
    );

    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const selectPeriod = screen.getByTestId("periodRadio_0");

    fireEvent.click(selectPeriod);

    const applyFilterButton = screen.getByTestId('applyFilterButton');


    expect(applyFilterButton).toBeInTheDocument();
  });

  it("Should call getTransactions after select period", () => {
    render(
      <TransactionsOffShore {...props} />
    );

    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const selectPeriod = screen.getByTestId("periodRadio_0");

    fireEvent.click(selectPeriod);

    const applyFilterButton = screen.getByTestId('applyFilterButton');

    fireEvent.click(applyFilterButton);

    expect(props.getTransactions).toHaveBeenCalled();
  });


  it("If period was selected, it should be selected when open filter", () => {
    render(
      <TransactionsOffShore {...props} />
    );
    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const selectPeriod = screen.getByTestId("periodRadio_0");

    fireEvent.click(selectPeriod);

    const applyFilterButton = screen.getByTestId('applyFilterButton');

    fireEvent.click(applyFilterButton);

    fireEvent.click(openButton);

    expect(selectPeriod).toBeChecked()
  });

  it("If range was selected, it should be filled when open filter", () => {

    render(
      <TransactionsOffShore {...props} />
    );
    const openButton = screen.getByTestId("filterButton");

    fireEvent.click(openButton);

    const filterDateFromButton = screen.getByTestId('filterDateFrom');

    fireEvent.change(filterDateFromButton, { target: { value: 10102020 } });

    const filterDateToButton = screen.getByTestId('filterDateTo');

    fireEvent.change(filterDateToButton, { target: { value: 10102020 } });

    const applyFilterButton = screen.getByTestId('applyFilterButton');

    fireEvent.click(applyFilterButton);

    expect(filterDateFromButton).toHaveValue('10/10/2020');
    expect(filterDateToButton).toHaveValue('10/10/2020');
  });
})
