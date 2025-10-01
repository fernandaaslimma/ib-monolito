import getColorForAsset, { colorRange } from "./getColorForAsset";

describe("getColorForAsset", () => {
  it("Should return colors based on the index", () => {
    colorRange.forEach((color, i) => {
      expect(getColorForAsset(i)).toBe(color);
    });
  });

  it("Should return a default color for a invalid index", () => {
    expect(getColorForAsset(-1)).toEqual("#ccc");
  });

  it("Should have a default colors list", () => {
    expect(colorRange).toEqual([
      "#5b4a8a",
      "#af5761",
      "#96b974",
      "#5a71a3",
      "#98749a",
      "#939598"
    ]);
  });
});
