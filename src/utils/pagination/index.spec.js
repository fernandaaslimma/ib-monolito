import fetchDataForFilter from ".";

jest.mock("../formatDate");

const date = "2010/10/10";

const formatToQueryMock = require("../formatDate").formatToQuery;
formatToQueryMock.mockReturnValue(date);

const fnMock = jest.fn();
const activePage = 1;
const pageSize = 10;

describe("fetchDataForFilter", () => {
  it("should return the function when from is passed", () => {
    const filter = {
      from: date
    };
    fetchDataForFilter(fnMock, filter, activePage, pageSize);
    expect(fnMock).toHaveBeenCalledWith(date, "", 0);
  });

  it("should return the function when ranged is passed", () => {
    const filter = {
      range: {
        from: date,
        to: date
      }
    };
    fetchDataForFilter(fnMock, filter, activePage, pageSize);
    expect(fnMock).toHaveBeenCalledWith(date, date, 0);
  });

  it("should return the function when no filter is passed", () => {
    const filter = {};
    fetchDataForFilter(fnMock, filter, activePage, pageSize);
    expect(fnMock).toHaveBeenCalledWith("", "", 0);
  });
});
