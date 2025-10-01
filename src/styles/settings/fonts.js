import { injectGlobal } from "styled-components";

const fonts = {
  "Roboto Bold": [
    require("../../assets/fonts/roboto/roboto-bold-webfont.woff2"),
    require("../../assets/fonts/roboto/roboto-bold-webfont.woff")
  ],
  "Roboto Medium": [
    require("../../assets/fonts/roboto/roboto-medium-webfont.woff2"),
    require("../../assets/fonts/roboto/roboto-medium-webfont.woff")
  ],
  Roboto: [
    require("../../assets/fonts/roboto/roboto-regular-webfont.woff2"),
    require("../../assets/fonts/roboto/roboto-regular-webfont.woff")
  ],
  "Lato Light": [
    require("../../assets/fonts/lato/lato-light-webfont.woff2"),
    require("../../assets/fonts/lato/lato-light-webfont.woff")
  ],
  Lato: [
    require("../../assets/fonts/lato/lato-regular-webfont.woff2"),
    require("../../assets/fonts/lato/lato-regular-webfont.woff")
  ],
  "Lato Semibold": [
    require("../../assets/fonts/lato/lato-semibold-webfont.woff2"),
    require("../../assets/fonts/lato/lato-semibold-webfont.woff")
  ],
  "Lato Bold": [
    require("../../assets/fonts/lato/lato-bold-webfont.woff2"),
    require("../../assets/fonts/lato/lato-bold-webfont.woff")
  ]
};

const injectFonts = Object.keys(fonts)
  .map(font => {
    return `
    @font-face {
      font-family: ${font};
      src: url(${fonts[font][0]}) format('woff2'),
          url(${fonts[font][1]}) format('woff');
    }
  `;
  })
  .join("\n");

injectGlobal`
  ${injectFonts}
`;
