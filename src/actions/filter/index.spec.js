import actions from "./index";

jest.mock("react-day-picker", () => ({
  DateUtils: {
    addDayToRange: () => ({ from: "2010/01/01", to: "2011/01/01" })
  }
}));

describe("filter actions", () => {
  it("Should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "setProps",
      "onChangeOption",
      "onChangeDateFrom",
      "onChangeDateRange"
    ]);
  });

  describe("setProps", () => {
    it("shouldn't change the state when currentRoute is the same", () => {
      const { setProps } = actions();
      const currentRoute = "/transactions";
      const filter = {};
      const state = {
        filter: {
          currentRoute: "/transactions",
          selectedOption: "",
          from: "",
          range: {
            from: "",
            to: ""
          }
        }
      };

      expect(setProps(state, filter, currentRoute)).toEqual(state);
    });

    it("should change the state when currentRoute is different", () => {
      const { setProps } = actions();
      const currentRoute = "/transactions";
      const filter = {
        from: "2011/02/02",
        range: {
          from: "",
          to: ""
        },
        selectedOption: "option2"
      };
      const state = {
        filter: {
          currentRoute: "/resume",
          selectedOption: "",
          from: "",
          range: {
            from: "",
            to: ""
          }
        }
      };

      expect(setProps(state, filter, currentRoute)).toEqual({
        filter: {
          currentRoute: "/transactions",
          from: "2011/02/02",
          range: {
            from: "",
            to: ""
          },
          selectedOption: "option2"
        }
      });
    });
  });

  describe("onChangeOption", () => {
    it("should return the updated state", () => {
      const { onChangeOption } = actions();
      const selectedOption = "option2";
      const state = {
        filter: {
          selectedOption: "",
          from: "",
          range: {
            from: "",
            to: ""
          }
        }
      };

      expect(onChangeOption(state, selectedOption)).toEqual({
        filter: {
          selectedOption: "option2",
          from: "",
          range: {
            from: "",
            to: ""
          }
        }
      });
    });

    describe("onChangeDateFrom", () => {
      it("should return the updated state", () => {
        const { onChangeDateFrom } = actions();
        const from = "05/05/2015";

        const state = {
          filter: {
            selectedOption: "",
            from: "",
            range: {
              from: "",
              to: ""
            }
          }
        };

        expect(onChangeDateFrom(state, from)).toEqual({
          filter: {
            from: "05/05/2015",
            range: { from: "", to: "" },
            selectedOption: ""
          }
        });
      });
    });

    describe("onChangeDateRange", () => {
      it("should return the updated state", () => {
        const { onChangeDateRange } = actions();
        const day = "05/05/2015";

        const state = {
          filter: {
            selectedOption: "",
            from: "",
            range: {
              from: "",
              to: ""
            }
          }
        };

        expect(onChangeDateRange(state, day)).toEqual({
          filter: {
            from: "",
            range: { from: "2010/01/01", to: "2011/01/01" },
            selectedOption: ""
          }
        });
      });
    });
  });
});
