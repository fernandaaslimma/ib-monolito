import React from "react";
import { shallow } from "enzyme";

import SetListNameGroups from "./SetListNameGroups";

const defaultProps = {
  id: "id",
  name: "name",
  signOrder: 1,
  groups: {
    group: {
      recipients: [
        {
          email: "email@gmail.com",
          embedded: false,
          name: "name",
          status: "Completed",
          type: "type"
        }
      ]
    }
  }
};
describe("SetListNameGroups component", () => {
  it("defaultProps", () => {
    const wrapper = shallow(
      <SetListNameGroups
        recipients={defaultProps.groups.group.recipients}
        group={defaultProps.groups.group}
        groups={defaultProps.groups}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  // it("Truncate long names", () => {
  //   const wrapper = shallow(
  //     <SetListNameGroups
  //       recipients={defaultProps.groups.group.recipients}
  //       group={defaultProps.groups.group}
  //       groups={defaultProps.groups}
  //     />
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
});
