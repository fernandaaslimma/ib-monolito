import React from "react";
import { shallow } from "enzyme";
import Paginator from "paginator";

import Pagination, { generatePageRange } from "./Pagination";

jest.mock("paginator");

const buildMock = jest.fn();
buildMock.mockReturnValue({
  first_page: 10,
  last_page: 15,
  has_next_page: true,
  has_previous_page: true,
  total_pages: 12
});

const PaginatorMock = {
  build: buildMock
};

const onChangePageMock = jest.fn();

Paginator.mockImplementation(() => PaginatorMock);

describe("Pagination component", () => {
  it("should match snapshot with blank data", () => {
    expect(
      shallow(
        <Pagination
          pageTotal={10}
          onChangePage={onChangePageMock}
          activePage={1}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with full props", () => {
    expect(
      shallow(
        <Pagination
          pageTotal={15}
          onChangePage={onChangePageMock}
          activePage={2}
          pageSize={5}
          initialPage={3}
          pageRange={20}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without pagination", () => {
    buildMock.mockReturnValueOnce({
      has_next_page: false,
      has_previous_page: false
    });
    expect(
      shallow(
        <Pagination
          pageTotal={10}
          onChangePage={onChangePageMock}
          activePage={1}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke Paginator.build", () => {
    shallow(
      <Pagination
        pageTotal={10}
        onChangePage={onChangePageMock}
        activePage={1}
      />
    );
    expect(PaginatorMock.build).toHaveBeenCalledWith(10, 1);
  });

  it("should have an initial state", () => {
    const component = shallow(
      <Pagination
        pageTotal={10}
        onChangePage={onChangePageMock}
        activePage={1}
      />
    );
    expect(component.state()).toEqual({ pages: [10, 11, 12, 13, 14, 15] });
  });

  describe("_onChangePage", () => {
    it("should not invoke onChangePage when is disabled", () => {
      const nextPage = 2;
      const disabled = true;

      const component = shallow(
        <Pagination
          pageTotal={10}
          onChangePage={onChangePageMock}
          activePage={1}
        />
      );

      component.instance()._onChangePage(nextPage, disabled);
      expect(onChangePageMock).not.toHaveBeenCalledWith();
    });

    it("should not invoke onChangePage when nextPage === activePage", () => {
      const nextPage = 1;
      const disabled = true;

      const component = shallow(
        <Pagination
          pageTotal={10}
          onChangePage={onChangePageMock}
          activePage={nextPage}
        />
      );

      component.instance()._onChangePage(nextPage, disabled);
      expect(onChangePageMock).not.toHaveBeenCalledWith();
    });

    it("should invoke onChangePage otherwise", () => {
      const nextPage = 2;

      const component = shallow(
        <Pagination
          pageTotal={10}
          onChangePage={onChangePageMock}
          activePage={1}
        />
      );

      component.instance()._onChangePage(nextPage);
      expect(onChangePageMock).toHaveBeenCalledWith(nextPage);
    });
  });
});

describe("_setupPages", () => {
  it("should invoke build", () => {
    const component = shallow(
      <Pagination
        pageTotal={10}
        onChangePage={onChangePageMock}
        activePage={1}
      />
    );

    const props = {
      activePage: 1,
      pageTotal: 50,
      pageSize: 10,
      pageRange: 5
    };

    component.instance()._setupPages(props);
    expect(buildMock).toHaveBeenCalled();
  });

  it("should return the generated page range", () => {
    const component = shallow(
      <Pagination
        pageTotal={10}
        onChangePage={onChangePageMock}
        activePage={1}
      />
    );

    const props = {
      activePage: 1,
      pageTotal: 50,
      pageSize: 10,
      pageRange: 5
    };

    const result = component.instance()._setupPages(props);
    expect(result).toEqual([10, 11, 12, 13, 14, 15]);
  });
});

describe("generatePageRange", () => {
  it("should return a pages array", () => {
    expect(generatePageRange({ first_page: 1, last_page: 3 })).toEqual([
      1,
      2,
      3
    ]);
  });
});

describe("componentWillReceiveProps", () => {
  it("should update the state when new props are received", () => {
    const props = {
      pageTotal: 10,
      onChangePage: onChangePageMock,
      activePage: 1
    };

    const nextProps = {
      pageTotal: 15,
      onChangePage: onChangePageMock,
      activePage: 2
    };

    const component = shallow(<Pagination {...props} />);
    const instance = component.instance();
    expect(component.state("pages")).toEqual([10, 11, 12, 13, 14, 15]);
    instance.componentWillReceiveProps(nextProps);
    expect(component.state("pages")).toEqual([10, 11, 12, 13, 14, 15]);
  });
});
