import React from "react";
import { shallow } from "enzyme";
import ProfessionalInfo from "./ProfessionalInfo";
import { StateContext } from "../RegistrationDataForm";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/fetchHandler");
jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));

const props = {
  onChange: jest.fn(),
  validateSection: jest.fn()
};

const e = {
  target: {
    value: "developer"
  }
};

const state = {
  formModel: {
    content: {
      professionalInformation: {
        activity: "retired",
        otherActivitySpecified: "",
        occupation: "developer",
        company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
        admissionDate: "2015-07-19"
      }
    }
  },
  isFilled: {
    professionalInformation: true
  },
  temporaryInvalidFields: {}
};

describe("ProfessionalInfo", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("call onChange by activity Dropdown event", () => {
    render(
      <StateContext.Provider value={state}>
        <ProfessionalInfo {...props} />
      </StateContext.Provider>
    );

    const inputs = screen.getAllByRole("textbox");
    const input = inputs[1];

    fireEvent.change(input, { target: { value: "retired" } });

    expect(props.onChange).toHaveBeenCalled();
  });
});

describe("Activity Retired", () => {
  it("should select retired as activity", () => {
    render(
      <StateContext.Provider value={state}>
        <ProfessionalInfo {...props} />
      </StateContext.Provider>
    );

    const inputs = screen.getAllByRole("textbox");
    const input = inputs[1];

    fireEvent.change(input, { target: { value: "retired" } });

    expect(props.onChange).toHaveBeenCalled();
  });

  it("should check profession input change as developer", () => {
    state.formModel = {
      content: {
        professionalInformation: {
          activity: "retired",
          otherActivitySpecified: "",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        }
      }
    };
    render(
      <StateContext.Provider value={state}>
        <ProfessionalInfo {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("InputOccupation");
    fireEvent.change(component, e, "occupation");
  });
});

describe("Activity Private Sector Employee", () => {
  it("call onChange by Dropdown event", () => {
    state.formModel = {
      content: {
        professionalInformation: {
          activity: "privateSectorEmployee",
          otherActivitySpecified: "",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        }
      }
    };
    render(
      <StateContext.Provider value={state}>
        <ProfessionalInfo {...props} />
      </StateContext.Provider>
    );

    const inputs = screen.getAllByRole("textbox");
    const input = inputs[1];
    fireEvent.change(input, { target: { value: "privateSectorEmployee" } });

    expect(props.onChange).toHaveBeenCalled();
  });
  it("should check profession input change as developer", () => {
    state.formModel = {
      content: {
        professionalInformation: {
          activity: "privateSectorEmployee",
          otherActivitySpecified: "",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        }
      }
    };
    render(
      <StateContext.Provider value={state}>
        <ProfessionalInfo {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("InputOccupation");
    fireEvent.change(component, e, "occupation");

    expect(props.onChange).toHaveBeenCalled();
  });

  it("should change company input to Concrete Solutions", () => {
    state.formModel = {
      content: {
        professionalInformation: {
          activity: "privateSectorEmployee",
          otherActivitySpecified: "",
          occupation: "developer",
          company: { name: "Concrete Solutions", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        }
      }
    };
    render(
      <StateContext.Provider value={state}>
        <ProfessionalInfo {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("InputOccupation");
    fireEvent.change(component, e, "company", "name");

    expect(props.onChange).toHaveBeenCalled();
  });

  describe("Activity Public Sector Employee", () => {
    it("call onChange by Dropdown event", () => {
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const inputs = screen.getAllByRole("textbox");
      const input = inputs[1];

      fireEvent.change(input, {
        value: "publicSectorEmployee"
      });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should check profession input change as developer", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "publicSectorEmployee",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputOccupation");
      fireEvent.change(component, e, "occupation");
    });

    it("should change company input to Receita Federal", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "publicSectorEmployee",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Receita Federal", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputOccupation");
      fireEvent.change(component, e, "occupation");

      expect(props.onChange).toHaveBeenCalled();
    });
  });

  describe("Activity Owner", () => {
    it("call onChange by Dropdown event", () => {
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const inputs = screen.getAllByRole("textbox");
      const input = inputs[1];

      fireEvent.change(input, {
        value: "owner"
      });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should change company input to Concrete Solutions", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "owner",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputCompanyName");
      fireEvent.change(component, e, "company", "name");

      expect(props.onChange).toHaveBeenCalled();
    });
  });

  describe("Activity Self-Employed", () => {
    it("call onChange by Dropdown event", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "selfEmployed",
            otherActivitySpecified: null,
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputActivitySpecified");
      fireEvent.change(component, { value: "selfEmployed" });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should change others input to musician", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "selfEmployed",
            otherActivitySpecified: "musician",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputActivitySpecified");
      fireEvent.change(component, e, "otherActivitySpecified");

      expect(props.onChange).toHaveBeenCalled();
    });
  });

  describe("Activity Others", () => {
    it("call onChange by Dropdown event", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "selfEmployed",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const inputs = screen.getAllByRole("textbox");
      const input = inputs[1];

      fireEvent.change(input, {
        value: "others"
      });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should change others input to musician", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "others",
            otherActivitySpecified: "musician",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputActivitySpecified");
      fireEvent.change(component, e, "otherActivitySpecified");

      expect(props.onChange).toHaveBeenCalled();
    });
  });

  describe("Activity Professional", () => {
    it("call onChange by Dropdown event", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "professional",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const inputs = screen.getAllByRole("textbox");
      const input = inputs[1];

      fireEvent.change(input, {
        value: "others"
      });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should change others input to musician", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "professional",
            otherActivitySpecified: "musician",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputActivitySpecified");
      fireEvent.change(component, e, "otherActivitySpecified");

      expect(props.onChange).toHaveBeenCalled();
    });
  });

  describe("Activity Owner Partner", () => {
    it("call onChange by Dropdown event", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "socioOwner",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const inputs = screen.getAllByRole("textbox");
      const input = inputs[1];

      fireEvent.change(input, {
        value: "professional"
      });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should change others input to musician", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "others",
            otherActivitySpecified: "musician",
            occupation: "developer",
            company: { name: "Concrete Solutions", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("InputActivitySpecified");
      fireEvent.change(component, e, "otherActivitySpecified");

      expect(props.onChange).toHaveBeenCalled();
    });
  });

  describe("Activity From Home", () => {
    it("call onChange by Dropdown event", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "fromHome",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Receita Federal", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("activitySelection");
      fireEvent.change(component, { value: "fromHome" });

      expect(props.onChange).toHaveBeenCalled();
    });

    it("call onChange by Dropdown event", () => {
      state.formModel = {
        content: {
          professionalInformation: {
            activity: "",
            otherActivitySpecified: "",
            occupation: "developer",
            company: { name: "Receita Federal", cnpj: "15114366000169" },
            admissionDate: "2015-07-19"
          }
        }
      };

      expect(
        shallow(
          <StateContext.Provider value={state}>
            <ProfessionalInfo {...props} />
          </StateContext.Provider>
        )
      ).toMatchSnapshot();
    });
  });

  describe("Validation tests", () => {
    it("should validate section when toggle section container show/hide", () => {
      render(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      const component = screen.getByTestId("SectionedProfessionalInfo");
      fireEvent.click(component);

      expect(props.validateSection).toHaveBeenCalled();
    });

    it("should validate section when toggle section container show/hide", () => {
      state.temporaryInvalidFields = {
        professionalInformation: {
          company: ["company_name"],
          occupation: ["occupation"],
          otherActivitySpecified: ["kind_of_activity"]
        }
      };
      const wrapper = shallow(
        <StateContext.Provider value={state}>
          <ProfessionalInfo {...props} />
        </StateContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
