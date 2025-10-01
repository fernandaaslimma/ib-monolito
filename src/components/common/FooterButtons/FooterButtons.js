import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import { translate } from "../../../utils/i18n";

const FooterButtons = ({
  firstButton = translate("BACK"),
  onClickFirst = () => {},
  secondButton = translate("CONTINUE"),
  secondButtonStyle = {},
  onClickSecond = () => {},
  style = {},
  margin = { r: 16 },
  showButtons = true,
  dataTest = "container"
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    showButtons && (
      <Container style={style} data-test={dataTest}>
        <Button
          dataTest="firstButton"
          type="outline"
          onClick={() => {
            scrollToTop();
            onClickFirst();
          }}
          margin={margin}
          style={{
            width: "100%"
          }}
        >
          {firstButton}
        </Button>
        <Button
          dataTest="secondButton"
          actionSecondary
          onClick={() => {
            scrollToTop();
            onClickSecond();
          }}
          style={{
            width: "100%",
            ...secondButtonStyle
          }}
        >
          {secondButton}
        </Button>
      </Container>
    )
  );
};

export default FooterButtons;
