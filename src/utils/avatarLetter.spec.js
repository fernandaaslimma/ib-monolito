import avatarLetter from "./avatarLetter";

describe("avatarLetter", () => {
  it("Should return avatarLetter", () => {
    expect(avatarLetter("User Test")).toBe("UT");
  });
});
