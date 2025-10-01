import resetObjectFields from "./resetObjectFields";

const objectWithStrings = {
  teste: "teste",
  teste2: "teste2",
  teste3: "teste3"
};

const objectWithBooleans = {
  teste: true,
  teste2: false
};

const objectWithNumbers = {
  teste: 14,
  teste2: 0
};

const objectWithArray = {
  teste: [1, 2, 3, 4]
};

const objectWithUndefined = {
  teste: undefined
};

const objectWithObjects = {
  teste: {
    teste_nested: 84,
    teste_nested2: "string",
    teste_nested3: [1, 2, 3, 4],
    teste_nested4: true,
    teste_nested5: undefined,

    teste_nested6: {
      teste_nested: 84,
      teste_nested2: "string",
      teste_nested3: [1, 2, 3, 4],
      teste_nested4: true,
      teste_nested5: undefined
    }
  },
  teste2: "João"
};
describe("resetObjectValues", () => {
  it("should reset selected strings", () => {
    expect(resetObjectFields(["teste", "teste3"], objectWithStrings)).toEqual({
      teste: "",
      teste2: "teste2",
      teste3: ""
    });
  });

  it("should reset selected booleans", () => {
    expect(resetObjectFields(["teste"], objectWithBooleans)).toEqual({
      teste: false,
      teste2: false
    });
  });

  it("should reset selected numbers", () => {
    expect(resetObjectFields(["teste"], objectWithNumbers)).toEqual({
      teste: 0,
      teste2: 0
    });
  });

  it("should not reset array content", () => {
    expect(resetObjectFields(["teste"], objectWithArray)).toEqual({
      teste: [1, 2, 3, 4]
    });
  });

  it("should not reset undefined", () => {
    expect(resetObjectFields(["teste"], objectWithUndefined)).toEqual({
      teste: undefined
    });
  });

  it("should reset object content", () => {
    expect(resetObjectFields(["teste", "teste2"], objectWithObjects)).toEqual({
      teste: {
        teste_nested: 0,
        teste_nested2: "",
        teste_nested3: [1, 2, 3, 4],
        teste_nested4: false,
        teste_nested5: undefined,
        teste_nested6: {
          teste_nested: 0,
          teste_nested2: "",
          teste_nested3: [1, 2, 3, 4],
          teste_nested4: false,
          teste_nested5: undefined
        }
      },
      teste2: ""
    });
  });
});
