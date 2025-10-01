import React from "react";
import { shallow } from "enzyme";
import CorrespondenceAndContacts from "./CorrespondenceAndContacts";
import deepClone from "../../../../utils/deepClone";
import {
  DragAndDropFileInput,
  Input,
  Dropdown
} from "react-bocombbm-components";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { StateContext } from "../RegistrationDataForm";

jest.mock("../../../../utils/fetchHandler");
jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));
jest.mock("../../../../utils/attachMultipleDocuments", () =>
  jest.fn(() => Promise.resolve(["mock"]))
);

const addresses = [
  {
    type: "home",
    address: "Rua brigadeiro Faria Limas",
    number: "124",
    complement: "casa 2",
    cep: "22631-902",
    country: "Brazil",
    city: "São Paulo",
    state: "SP",
    district: "Bairro"
  },
  {
    type: "commercial",
    address: "Rua brigadeiro Faria Limas",
    number: "124",
    complement: "casa 2",
    cep: "22631-902",
    country: "Brazil",
    city: "São Paulo",
    state: "SP",
    district: "Bairro"
  },
  {
    type: "correspondence",
    address: "Rua brigadeiro Faria Limas",
    number: "124",
    complement: "casa 2",
    cep: "22631-902",
    country: "Brazil",
    city: "São Paulo",
    state: "SP",
    district: "Bairro"
  }
];
const telephones = [
  {
    type: "home",
    ddd: 11,
    number: "29820911"
  },
  {
    type: "commercial",
    ddd: 11,
    number: "29820911"
  }
];
const emails = [
  {
    type: "personal",
    address: "joao.da.silva@gmail.com"
  },
  {
    type: "commercial",
    address: "joaosilva@bocombbm.com.br"
  }
];

const props = {
  onChange: jest.fn(),
  validateSection: jest.fn(),
  originalData: {
    addresses: addresses,
    telephones: telephones,
    emails: emails
  }
};

const state = {
  formModel: {
    content: {
      contacts: {
        addresses: addresses,
        telephones: telephones,
        emails: emails
      },
      documents: {
        addresses: [deepClone(addresses)[0]]
      }
    }
  },
  isFilled: {
    contacts: true,
    documents: {}
  },
  temporaryInvalidFields: {}
};

const newState = deepClone(state);
newState.formModel.content.contacts.telephones = [];
newState.formModel.content.contacts.addresses = [];
newState.formModel.content.contacts.emails = [];

const unequalProps = deepClone(props);
const unequalState = deepClone(state);

unequalProps.originalData.addresses = [
  {
    type: "home",
    country: "outro"
  }
];

const e = {
  target: {
    name: "mock",
    value: "mock"
  }
};

describe("CorrespondenceAndContacts component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <CorrespondenceAndContacts {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with some empty information", () => {
    expect(
      shallow(
        <StateContext.Provider value={newState}>
          <CorrespondenceAndContacts {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should trigger change when edit a value", () => {
    const shallowWrapper = shallow(
      <StateContext.Provider value={state}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    shallowWrapper.find(Input).forEach(item => {
      item.prop("onChange")(e);
      expect(props.onChange).toHaveBeenCalled();
    });
  });

  it.skip("should trigger change when select dropdown value without docs", () => {
    delete unequalState.formModel.content.documents.addresses;
    const shallowWrapper = shallow(
      <StateContext.Provider value={unequalState}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    shallowWrapper
      .find(Dropdown)
      .at(2)
      .prop("onChange")(e);
    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should trigger change when select dropdown value with docs", () => {
    unequalState.formModel.content.documents.addresses = [
      deepClone(addresses)[0]
    ];
    const shallowWrapper = shallow(
      <StateContext.Provider value={unequalState}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    shallowWrapper
      .find(Dropdown)
      .at(2)
      .prop("onChange")(e);
    expect(props.onChange).toHaveBeenCalled();
  });

  it("should trigger change when edit a field that has no information from the backend", () => {
    const shallowWrapper = shallow(
      <StateContext.Provider value={newState}>
        <CorrespondenceAndContacts {...props} onChange={jest.fn()} />
      </StateContext.Provider>
    );

    shallowWrapper.find(Input).forEach(item => {
      item.prop("onChange")(e);
      expect(props.onChange).toHaveBeenCalled();
    });
  });

  it.skip("should attach files", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <CorrespondenceAndContacts {...unequalProps} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(DragAndDropFileInput);

    fileInput.prop("handleInputFiles")([{ name: "xpto" }]);
  });

  it.skip("should attach files and not have previous attached", () => {
    delete unequalState.formModel.content.documents.addresses;
    const wrapper = shallow(
      <StateContext.Provider value={unequalState}>
        <CorrespondenceAndContacts {...unequalProps} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(DragAndDropFileInput);

    fileInput.prop("handleInputFiles")([{ name: "xpto" }]);
  });

  it.skip("should validate section when toggle section container show/hide", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(SectionedFormContent);

    fileInput.prop("callback")();
    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should render AlertMessage", () => {
    unequalState.temporaryInvalidFields = {
      documents: {
        addresses: false
      },
      contacts: {
        addresses: ["address", "number", "cep", "city", "state"],
        emails: ["email"],
        telephones: ["phoneNumber"]
      }
    };
    const wrapper = shallow(
      <StateContext.Provider value={unequalState}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it("should fill holes from type comercial", () => {
    newState.formModel.content.contacts.addresses = [
      {
        type: "home",
        address: "Rua brigadeiro Faria Limas",
        number: "124",
        complement: "casa 2",
        cep: "22631-902",
        country: "Brazil",
        city: "São Paulo",
        state: "SP",
        district: "Bairro"
      }
    ];

    const wrapper = shallow(
      <StateContext.Provider value={newState}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it("should fill holes from type home", () => {
    newState.formModel.content.contacts.addresses = [
      {
        type: "commercial",
        address: "Rua brigadeiro Faria Limas",
        number: "124",
        complement: "casa 2",
        cep: "22631-902",
        country: "Brazil",
        city: "São Paulo",
        state: "SP",
        district: "Bairro"
      }
    ];

    const wrapper = shallow(
      <StateContext.Provider value={newState}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should be empty addresses", () => {
    const wrapper = shallow(
      <StateContext.Provider value={newState}>
        <CorrespondenceAndContacts {...props} />
      </StateContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
