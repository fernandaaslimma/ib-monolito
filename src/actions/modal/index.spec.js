import modal from "./index";

describe("modal action", () => {
  it("Should return an action object", () => {
    expect(typeof modal() === "object").toBeTruthy();
    expect(Object.keys(modal())).toEqual(["openModal", "closeModal"]);
  });

  describe("openModal", () => {
    it("Should change state to have an open modal", () => {
      const { openModal } = modal();
      expect(openModal(null, { title: "Test" })).toEqual({
        modalSettings: { title: "Test", isOpen: true }
      });
    });
  });

  describe("closeModal", () => {
    it("Should change state to have no modal", () => {
      const { closeModal } = modal();
      expect(closeModal()).toEqual({
        modalSettings: false
      });
    });

    it("Should change state to have no modal and trow back page error", () => {
      const { closeModal } = modal();
      expect(closeModal(null, "error")).toEqual({
        modalSettings: false,
        error: "error"
      });
    });
  });
});
