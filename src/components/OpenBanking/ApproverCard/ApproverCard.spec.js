import React from "react";
import { shallow } from "enzyme";
import ApproverCard from "./ApproverCard";

const props = {
  item: {
    status: "AUTHORISED",
    Cpf: "11021550205"
  },
  tagConf: {
    AUTHORISED: ["#CCE9E1", "#004933", "Autorizado"],
    AWAITING_AUTHORISATION: ["#FFD46A", "#80521B", "Pendente"],
    REJECTED: ["#D9E0E4", "#244859", "Rejeitado"]
  },
  Name: "Mock Name",
  title: "Autorizador"
};

describe("ApproverCard", () => {
  it("should match snapshot", () => {
    expect(shallow(<ApproverCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with status rejected", () => {
    props.item.status = "REJECTED";
    expect(shallow(<ApproverCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with status pending", () => {
    props.item.status = "AWAITING_AUTHORISATION";
    expect(shallow(<ApproverCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot without status", () => {
    props.item.status = null;
    expect(shallow(<ApproverCard {...props} />)).toMatchSnapshot();
  });
});
