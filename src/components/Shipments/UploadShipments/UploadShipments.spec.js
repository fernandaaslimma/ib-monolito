import React from "react";
import { shallow } from "enzyme";
import UploadShipments, { initialState } from "./UploadShipments";

describe("UploadShipments Component", () => {
  it("should match snapshot", () => {
    expect(shallow(<UploadShipments />)).toMatchSnapshot();
  });
  it("should call componentWillUnmount", () => {
    const wrapper = shallow(<UploadShipments />);
    const instance = wrapper.instance();
    const componentWillUnmountSpy = jest.spyOn(
      instance,
      "componentWillUnmount"
    );

    expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
  });

  it("should return the initial state object", () => {
    const expectedInitialState = {
      loading: false,
      getingMore: false,
      dropdowOptions: [
        { id: "10", name: "10" },
        { id: "20", name: "20" },
        { id: "30", name: "30" }
      ],
      remittances: {
        remmitances: [],
        pagination: {}
      },
      pageSize: "",
      range: {
        from: "",
        to: ""
      },
      getMoreSize: "",
      dateToApi: "",
      dateFromApi: "",
      showWarningEndOfYear: false
    };

    expect(initialState()).toEqual(expectedInitialState);
  });
  it("should clear date range correctly when calling onClearDateRange", () => {
    const wrapper = shallow(<UploadShipments />);
    const instance = wrapper.instance();
    instance.setState({ range: { from: "2023-07-15", to: "2023-07-20" } });

    instance.onClearDateRange();
    expect(instance.state.range).toEqual({ from: "", to: "" });
  });
  it("should call postRemmitance with the correct parameters when calling uploadFile", async () => {
    const mockPostRemmitance = jest.fn();
    const wrapper = shallow(
      <UploadShipments postRemmitance={mockPostRemmitance} />
    );
    const instance = wrapper.instance();

    const mockProgressFunction = jest.fn();

    const formDataFile = new FormData();
    instance.uploadFile(formDataFile, mockProgressFunction);

    expect(mockPostRemmitance).toHaveBeenCalledWith(
      formDataFile,
      expect.any(Function),
      instance.filterOperations
    );
  });
  it("should call getAllOperations when calling filterOperations", () => {
    const wrapper = shallow(<UploadShipments />);
    const instance = wrapper.instance();
    const getAllOperationsSpy = jest.spyOn(instance, "getAllOperations");

    instance.filterOperations();

    expect(getAllOperationsSpy).toHaveBeenCalled();
  });
});
