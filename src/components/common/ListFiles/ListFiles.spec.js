import React from "react";
import { shallow, mount } from "enzyme";

import ListFiles from "./ListFiles";
import { ListShowHide, IconButton, ListItem } from "./styles";

const folders = [
  {
    typeId: "Informe de Rendimentos",
    name: "Earnings Report",
    files: [
      {
        creationTime: "2018-12-17T18:31:05.7039242-02:00",
        id: "Informe de Rendimentos_2015-Banco",
        lastWriteTime: "2018-12-14T18:43:17.0688198-02:00",
        name: "2015-Banco",
        typeId: "Informe de Rendimentos"
      }
    ]
  }
];

describe("ListFiles Component", () => {
  let clickAction;

  beforeEach(() => {
    clickAction = jest.fn();
  });

  it("should match snapshot", () => {
    expect(shallow(<ListFiles folders={folders} />)).toMatchSnapshot();
  });

  it("should match snapshot with shimmerload", () => {
    expect(
      shallow(<ListFiles folders={folders} shimmerloading />)
    ).toMatchSnapshot();
  });

  it("should trigger click action", () => {
    const instance = mount(
      <ListFiles folders={folders} clickAction={clickAction} />
    );

    instance
      .find(IconButton)
      .at(0)
      .simulate("click");

    expect(clickAction).toHaveBeenCalled();
  });

  it("should trigger shown state", () => {
    const instance = mount(
      <ListFiles folders={folders} clickAction={clickAction} />
    );

    instance
      .find(ListShowHide)
      .at(0)
      .simulate("click");

    expect(instance.state().isShown).toEqual([true]);
  });

  it("should render a empty folder", () => {
    const folders = [
      {
        typeId: "Informe de Rendimentos",
        name: "Empty Folder",
        files: []
      }
    ];

    const instance = mount(
      <ListFiles folders={folders} clickAction={clickAction} />
    );

    expect(instance.find(ListItem)).toHaveLength(0);
  });
});
