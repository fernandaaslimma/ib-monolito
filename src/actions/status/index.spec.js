import status from "./index";

describe("status actions", () => {
  it("should return an action object", () => {
    expect(Object.keys(status())).toEqual(["resetMaintenance"]);
  });

  describe("resetMaintenance", () => {
    it("should the updated state", async () => {
      const { resetMaintenance } = status();
      const state = resetMaintenance();
      expect(state).toEqual({ isMaintenance: false });
    });
  });
});
