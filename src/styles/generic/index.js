import { injectGlobal } from "styled-components";
import { grey60, white } from "../settings";

export default injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    background-color: ${grey60};
  }
  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
  li {
    list-style-type : none;
  }
  body {
    position: relative;
    height: 100vh;
    overflow: visible;
    font-size: 16px;
    background-color: ${grey60};
    margin: 0;
    padding: 0;
    @media print {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: ${white};
    }
  }
  h1{
    font-size: 12px;
  }
`;
