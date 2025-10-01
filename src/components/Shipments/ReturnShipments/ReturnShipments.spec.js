import React from "react";
import ReturnShipments from "./ReturnShipments";
import { configure, render } from "@testing-library/react";
configure({ testIdAttribute: "data-test" });
const props = {
  getReceivables: jest.fn(),
  shipments: {
    receivables: [
      {
        id: 0,
        creationDate: "2022-08-01T17:48:06.443Z",
        fileName: "string",
        client: {
          name: "string",
          document: "string"
        }
      },
      {
        id: 1,
        creationDate: "2022-08-01T17:48:06.443Z",
        fileName: "string 2",
        client: {
          name: "string 2",
          document: "string 2"
        }
      }
    ],
    pagination: {
      totalPages: 1,
      totalPageSize: 10,
      totalRecords: 20
    }
  },
  receivables: [
    {
      id: 0,
      creationDate: "2022-08-01T17:48:06.443Z",
      fileName: "string",
      client: {
        name: "string",
        document: "string"
      }
    },
    {
      id: 1,
      creationDate: "2022-08-01T17:48:06.443Z",
      fileName: "string 2",
      client: {
        name: "string 2",
        document: "string 2"
      }
    }
  ],
  pagination: {
    totalPages: 1,
    totalPageSize: 10,
    totalRecords: 20
  }
};

describe("ReturnShipments", () => {
  it("should match snapshot", () => {
    expect(render(<ReturnShipments {...props} />)).toMatchSnapshot();
  });
});
