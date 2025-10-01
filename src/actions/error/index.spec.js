import error from "./index";

describe("error", () => {
  it("Should add an error", async () => {
    const { addError } = error();

    expect(addError(null, "error")).toEqual({ error: "error" });
  });

  it("Should clear errors", async () => {
    const { resetErrors } = error();

    expect(resetErrors()).toEqual({ error: null });
  });
});
