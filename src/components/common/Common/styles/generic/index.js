import { injectGlobal } from "styled-components";
import { grey60 } from "../settings";

export default injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    position: relative;
    height: 100vh;
    font-size: 16px;
    background-color: ${grey60};
  }
`;
