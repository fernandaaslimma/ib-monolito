import React from "react";
import { shallow } from "enzyme";
import Desktop from "./Desktop";

const props = {
  loading: false,
  userInfo: {
    email: "string",
    roles: ["ApproveEFT"]
  },
  pendencies: {
    content: [
      {
        transferOrderId: "string",
        originAccount: "string",
        dueDate: "number",
        bankBranch: "string",
        bankAccount: "string",
        recipient: {
          name: "string",
          bankId: "string",
          bankName: "string",
          bankAccount: "string",
          taxId: "string"
        },
        ammount: 123,
        approvers: [
          {
            approverId: "string",
            name: "string",
            hasApproved: true
          },
          {
            approverId: "string1",
            name: "string1",
            hasApproved: false
          }
        ],
        status: "settled"
      },
      {
        transferOrderId: "string",
        originAccount: "string",
        dueDate: "number",
        bankBranch: "string",
        bankAccount: "string",
        recipient: {
          name: "string",
          bankId: "string",
          bankName: "string",
          bankAccount: "string",
          taxId: "string"
        },
        ammount: 123,
        approvers: [
          {
            approverId: "string2",
            name: "string2",
            hasApproved: false
          }
        ],
        status: "waitingSettlement"
      }
    ]
  },
  isEmpty: false
};

it("should match snapshot", () => {
  expect(shallow(<Desktop {...props} />)).toMatchSnapshot();
});

it("should match snapshot - empty state", () => {
  const newProps = {
    isEmpty: true
  };

  const allProps = { ...props, ...newProps };

  expect(shallow(<Desktop {...allProps} />)).toMatchSnapshot();
});
