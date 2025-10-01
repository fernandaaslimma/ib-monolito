import React, { useState, useRef } from "react";
import { string, bool, func } from "prop-types";
import {
  Wrapper,
  Content,
  ShowHideHead,
  Description,
  OpenEditIcon
} from "./styles";
import { Icon } from "react-bocombbm-components";

function SectionedFormContent({
  closedDescription,
  openedDescription,
  children,
  dataTest,
  valid,
  callback,
  close
}) {
  const [isShown, update] = useState(false);
  const innerRef = useRef();

  React.useEffect(() => {
    !!close && update(!close);
  }, [close]);

  const toggle = () => {
    callback && callback();
    update(!isShown);
  };

  const currentHeight = isShown
    ? innerRef.current && innerRef.current.clientHeight
    : 0;
  return (
    <Wrapper>
      <ShowHideHead
        onClick={toggle}
        isShown={isShown}
        valid={valid}
        data-test={dataTest}
      >
        <Description>
          {isShown ? openedDescription : closedDescription}
        </Description>
        {!isShown && !valid && <Icon type="Attention" width="24" height="24" />}
        <OpenEditIcon type="Arrow" width="14" height="14" />
      </ShowHideHead>
      <Content heightToCalc={currentHeight} isShown={isShown}>
        <div ref={innerRef}>{children}</div>
      </Content>
    </Wrapper>
  );
}

SectionedFormContent.defaultProps = {
  dataTest: "SectionedFormContent",
  valid: true
};

SectionedFormContent.propTypes = {
  closedDescription: string,
  openedDescription: string.isRequired,
  dataTest: string,
  valid: bool,
  callback: func
};

export default SectionedFormContent;
