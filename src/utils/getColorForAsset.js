const defaultColor = "#ccc";

export const colorRange = [
  "#5b4a8a",
  "#af5761",
  "#96b974",
  "#5a71a3",
  "#98749a",
  "#939598"
];

export default function getColorForAsset(i) {
  const color = colorRange[i];
  if (color) {
    return color;
  }
  return defaultColor;
}
