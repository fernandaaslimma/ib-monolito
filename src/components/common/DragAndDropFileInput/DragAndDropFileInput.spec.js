/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import DragAndDropFileInput from "./DragAndDropFileInput";
import Button from "../Button";
import { act } from "react-dom/test-utils";

const mockOpenToastr = jest.fn();

const props = {
  handleInputFiles: jest.fn(),
  isPropagationStopped: true,
  acceptedFileTypes: ".jpg, .pdf, .exe",
  fileMaxBytesSize: 80000000,
  labels: {
    placeholder: "Arraste e solte documentos aqui ou",
    button: "Busque um Arquivo",
    dragginValue: "Carregar Arquivo(s)...",
    excededSize:
      "O(s) seguinte(s) arquivo(s) não foram enviado(s) pois excederam o limite de"
  },
  openToastr: mockOpenToastr
};

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe("(Component) DragAndDropFileInput", () => {
  const createFile = (name, size, type) => ({
    name,
    path: name,
    size,
    type
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should renders without crashing", () => {
    const wrapper = mount(<DragAndDropFileInput {...props} />);
    expect(wrapper.length).toEqual(1);
  });
  it(`should match snapshot`, () => {
    const newProps = {
      ...props,
      documentsState: {
        uploading: false
      }
    };
    const wrapper = mount(<DragAndDropFileInput {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should test click button", () => {
    const ui = <DragAndDropFileInput {...props} />;

    const shallow = mount(ui);

    const dropzone = shallow.find(Button);

    dropzone.simulate("click");
    expect(shallow).toMatchSnapshot();
  });

  it("Should test add file button", () => {
    const files = [
      createFile("foo.png", 200, "image.png"),
      createFile("bar.jpg", 200, "image.jpeg")
    ];
    const ui = <DragAndDropFileInput {...props} />;

    const wrapper = mount(ui);

    act(() => {
      wrapper.find("input").simulate("change", {
        target: { files },
        preventDefault: () => { },
        persist: () => { }
      });
    });

    expect(wrapper).toMatchSnapshot();
  });


  it("Should add a file without size limitation", () => {
    const newProps = { ...props, fileMaxBytesSize: null };
    const files = [
      createFile("foo.png", 200, "image.png"),
      createFile("bar.jpg", 80000001, "image.jpeg")
    ];

    const ui = <DragAndDropFileInput {...newProps} />;

    const wrapper = mount(ui);

    act(() => {
      wrapper.find("input").simulate("change", {
        target: { files },
        preventDefault: () => { },
        persist: () => { }
      });
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("Should try to add a file bigger than maximum supported", () => {
    const mockUseDropzone = jest.spyOn(require('react-dropzone'), 'useDropzone');
    jest.useFakeTimers();

    const files = [
      createFile("foo.png", 200, "image.png"),
      createFile("bar.jpg", 80000001, "image.jpeg")
    ];
  
    mockUseDropzone.mockImplementation(({ onDrop }) => {
      setTimeout(() => {
        onDrop([], files);
      }, 0);

      return {
        getRootProps: () => ({}),
        getInputProps: () => ({}),
        isDragActive: false,
        isDragReject: false
      };
    });

    const ui = <DragAndDropFileInput {...props} />;

    mount(ui);
    
    act(() => {
      jest.runAllTimers();
    });
    
    expect(mockOpenToastr).toHaveBeenCalled();
    
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("Should try to add a file when extension is not supported", () => {
    const mockUseDropzone = jest.spyOn(require('react-dropzone'), 'useDropzone');
    jest.useFakeTimers();

    const files = [
      createFile("foo.png", 200, "image.png")      
    ];
  
    mockUseDropzone.mockImplementation(({ onDrop }) => {
      setTimeout(() => {
        onDrop([files[0]], []);
      }, 0);

      return {
        getRootProps: () => ({}),
        getInputProps: () => ({}),
        isDragActive: false,
        isDragReject: false
      };
    });

    const ui = <DragAndDropFileInput {...props} acceptedOneFileType={".rem"} />;

    mount(ui);
    
    act(() => {
      jest.runAllTimers();
    });
    
    expect(mockOpenToastr).toHaveBeenCalled();
    
    jest.useRealTimers();
    jest.clearAllMocks();
  });
});