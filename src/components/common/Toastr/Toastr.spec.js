import React from "react";
import { shallow } from "enzyme";
import { spy } from "sinon";

import Toastr from "./Toastr";

const listenMock = jest.fn();

const history = {
  listen: listenMock
};

const closeToastr = jest.fn();

describe("Toastr component", () => {
  it("should match snapshot with toastrSettings as false", () => {
    expect(
      shallow(<Toastr toastrSettings={false} history={history} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with toastrSettings as an object with only text", () => {
    expect(
      shallow(<Toastr toastrSettings={{ text: "text" }} history={history} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with toastrSettings with isBelow", () => {
    expect(
      shallow(
        <Toastr
          toastrSettings={{ text: "text", isBelow: true }}
          history={history}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with toastrSettings without isBelow", () => {
    expect(
      shallow(
        <Toastr
          toastrSettings={{ text: "text", isBelow: false }}
          history={history}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with toastrSettings with isScrolling", () => {
    expect(
      shallow(
        <Toastr
          toastrSettings={{ text: "text", isScrolling: true }}
          history={history}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with toastrSettings without isBelow", () => {
    expect(
      shallow(
        <Toastr
          toastrSettings={{ text: "text", isScrolling: false }}
          history={history}
        />
      )
    ).toMatchSnapshot();
  });

  it("should call closeToastr on render", done => {
    shallow(
      <Toastr
        toastrSettings={{ text: "text", isBelow: true, timeout: 200 }}
        history={history}
        closeToastr={closeToastr}
      />
    );

    setTimeout(() => {
      expect(closeToastr).toHaveBeenCalled();
      done();
    }, 300);
  });

  it("should invoke listen function", () => {
    shallow(
      <Toastr
        toastrSettings={{ text: "text", isBelow: false }}
        history={history}
      />
    );
    expect(listenMock).toHaveBeenCalled();
  });

  describe("toggle", () => {
    it("shouldn't update the state before the timeout", () => {
      const instance = shallow(
        <Toastr toastrSettings={{ text: "text" }} history={history} />
      ).instance();

      instance.toggle();

      expect(instance.state.mounted).toBe(false);
    });

    it("should update the state after the timeout", done => {
      const instance = shallow(
        <Toastr toastrSettings={{ text: "text" }} history={history} />
      ).instance();

      instance.toggle();

      setTimeout(() => {
        expect(instance.state.mounted).toBe(true);
        done();
      }, 500);
    });

    it("should unmount properly, calling history listen", () => {
      spy(Toastr.prototype, "componentWillUnmount");
      spy(Toastr.prototype, "listen");

      const wrapper = shallow(
        <Toastr
          toastrSettings={{ text: "text", isScrolling: false }}
          history={history}
        />
      );
      wrapper.unmount();

      expect(Toastr.prototype.componentWillUnmount.calledOnce);
      expect(Toastr.prototype.listen.calledOnce);

      Toastr.prototype.componentWillUnmount.restore();
      Toastr.prototype.listen.restore();
    });
  });
});
