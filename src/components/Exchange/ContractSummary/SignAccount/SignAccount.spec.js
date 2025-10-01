import React from "react";
import { shallow, mount } from "enzyme";
import { SummaryRow } from "./styles";
import SignAccount from "./SignAccount";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  isZhCN: () => false
}));

describe("SignAccount component", () => {
  describe("one group", () => {
    it("should match snapshot for status complete", () => {
      const props = {
        groups: [
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Complete",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Complete",
                type: "type"
              }
            ]
          }
        ],
        contractId: "stringID"
      };
      expect(shallow(<SignAccount {...props} />)).toMatchSnapshot();
    });

    it("should match snapshot for status pending", () => {
      const props = {
        groups: [
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Pending",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Pending",
                type: "type"
              }
            ]
          }
        ],
        contractId: "stringID"
      };
      expect(shallow(<SignAccount {...props} />)).toMatchSnapshot();
    });
  });

  describe("two groups", () => {
    it("should match snapshot both status complete", () => {
      const props = {
        groups: [
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Complete",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Complete",
                type: "type"
              }
            ]
          },
          {
            id: "id",
            name: "name",
            signOrder: 2,
            status: "Complete",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Complete",
                type: "type"
              }
            ]
          }
        ],
        contractId: "stringID"
      };
      expect(shallow(<SignAccount {...props} />)).toMatchSnapshot();
    });

    it("should match snapshot both status pending", () => {
      const props = {
        groups: [
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Pending",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Pending",
                type: "type"
              }
            ]
          },
          {
            id: "id",
            name: "name",
            signOrder: 2,
            status: "Pending",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Pending",
                type: "type"
              }
            ]
          }
        ],
        contractId: "stringID2"
      };
      expect(shallow(<SignAccount {...props} />)).toMatchSnapshot();
    });

    it("should match snapshot one status pending and one status complete", () => {
      const props = {
        groups: [
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Pending",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Pending",
                type: "type"
              }
            ]
          },
          {
            id: "id",
            name: "name",
            signOrder: 2,
            status: "Complete",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Complete",
                type: "type"
              }
            ]
          }
        ],
        contractId: "stringID2"
      };
      expect(shallow(<SignAccount {...props} />)).toMatchSnapshot();
    });
  });

  describe("SummaryRow comp", () => {
    it("test 1 ", () => {
      const props = {
        groups: [
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Pending",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Pending",
                type: "type"
              }
            ]
          },
          {
            id: "id",
            name: "name",
            signOrder: 1,
            status: "Pending",
            recipients: [
              {
                email: "email",
                embedded: false,
                name: "name",
                status: "Pending",
                type: "type"
              }
            ]
          }
        ],
        contractId: "stringID"
      };
      const wrapped = mount(<SignAccount {...props} />);
      wrapped.find(<SummaryRow />);
      expect(wrapped.props()).toBeTruthy();
    });
  });
});
