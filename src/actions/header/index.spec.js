import header from "./index";

describe("error", () => {
  let funFunction = jest.fn();
  it("Should add an clickBack Function to header", async () => {
    const { addHeaderOnClickClose } = header();

    expect(addHeaderOnClickClose(null, funFunction)).toEqual({
      headerOnClickClose: funFunction
    });
  });

  it("Should add an clickClose Function to header", async () => {
    const { addHeaderOnClickBack } = header();

    expect(addHeaderOnClickBack(null, funFunction)).toEqual({
      headerOnClickBack: funFunction
    });
  });
});
