import React from "react";
import { shallow } from "enzyme";

import NameItem from "./NameItem";

const defaultProps = {
  id: "id",
  name: "name",
  signOrder: 1,
  status: "Completed",
  recipients: [
    {
      email: "email",
      embedded: false,
      name: "name",
      status: "Completed",
      type: "type"
    }
  ]
};

describe("NameItem component", () => {
  describe("state", () => {
    it("has an initial state", () => {
      const wrapper = shallow(<NameItem data={defaultProps} />).instance();
      expect(wrapper.state).toEqual({ tooltip: "" });
    });
  });

  describe("toggleTooltip", () => {
    it("updates the state with an empty value when recipients length is 0", () => {
      const wrapper = shallow(<NameItem data={defaultProps} />).instance();
      const recipients = [];
      wrapper.toggleTooltip(recipients);
      expect(wrapper.state).toEqual({ tooltip: "" });
    });

    it("updates the state with an empty value when recipients length is less or equal than 3", () => {
      const wrapper = shallow(<NameItem data={defaultProps} />).instance();
      const recipients = [1, 2, 3];
      wrapper.toggleTooltip(recipients);
      expect(wrapper.state).toEqual({ tooltip: "" });
    });

    it("updates the state with the recipients list when recipients length is bigger than 3", () => {
      const wrapper = shallow(<NameItem data={defaultProps} />).instance();
      const recipients = [1, 2, 3, 4];
      wrapper.toggleTooltip(recipients);
      expect(wrapper.state).toEqual({ tooltip: recipients });
    });
  });

  describe("one recipient", () => {
    it("should match snapshot with status completed", () => {
      const props = {
        id: "id",
        name: "name",
        signOrder: 1,
        status: "Completed",
        recipients: [
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Completed",
            type: "type"
          }
        ]
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });

    it("should match snapshot with status signed", () => {
      const props = {
        id: "id",
        name: "name",
        signOrder: 1,
        status: "Completed",
        recipients: [
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Signed",
            type: "type"
          }
        ]
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });

    it("should match snapshot with status pending", () => {
      const props = {
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
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });
  });

  describe("two recipients", () => {
    it("should match snapshot with status completed", () => {
      const props = {
        id: "id",
        name: "name",
        signOrder: 1,
        status: "Completed",
        recipients: [
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Completed",
            type: "type"
          },
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Pending",
            type: "type"
          }
        ]
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });

    it("should match snapshot with status pending", () => {
      const props = {
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
          },
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Pending",
            type: "type"
          }
        ]
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });
  });

  describe("three recipients", () => {
    it("should match snapshot with status completed", () => {
      const props = {
        id: "id",
        name: "name",
        signOrder: 1,
        status: "Completed",
        recipients: [
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Completed",
            type: "type"
          },
          {
            email: "email",
            embedded: false,
            name: "name2",
            status: "Pending",
            type: "type"
          },
          {
            email: "email",
            embedded: false,
            name: "name3",
            status: "Pending",
            type: "type"
          }
        ]
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });

    it("should match snapshot with status pending", () => {
      const props = {
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
          },
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Pending",
            type: "type"
          },
          {
            email: "email",
            embedded: false,
            name: "name",
            status: "Pending",
            type: "type"
          }
        ]
      };
      expect(shallow(<NameItem data={props} />)).toMatchSnapshot();
    });
  });
});
