import React, { Fragment } from "react";
import {
  WrapperBottomSheet,
  BottomSheet,
  BottomSheetBack,
  Head,
  Title,
  FullHeightWrapper,
  ClickableItem,
  StyledContent,
  DesktopContainer,
  WrapperDesktop,
  Footer,
  FooterAdapt
} from "./styles";
import ReactDOM from "react-dom";
import Icon from "../Icon";

function removeScrollBody() {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function addScrollBody() {
  document.getElementsByTagName("body")[0].style.overflow = "visible";
}

function AnimatedBottonSheet({
  isOpen,
  velocity,
  onClickInBack,
  children,
  head = { icon: "BorderedClose" },
  footer,
  fullHeight,
  fromLeft,
  dataTest,
  ellipsis = false,
  widthTagEllipsis = "100%",
  bottomsheetBlue,
  zIndex // For a second bottom sheet at the same time, use more than 2002
}) {
  const domWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const [isMobileSize, setIsMobileSize] = React.useState(
    domWidth <= 980 ? true : false
  );

  React.useEffect(() => {
    const handleIsMobile = () =>
      setIsMobileSize(
        (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 980
          ? true
          : false
      );
    window.addEventListener("resize", handleIsMobile);
    return () => window.removeEventListener("resize", handleIsMobile);
  }, []);

  let backgroundBack = (
    <BottomSheetBack
      data-test={`${dataTest}-bottomSheetBack`}
      zIndex={zIndex}
      onClick={() => {
        onClickInBack();
        addScrollBody();
      }}
    />
  );

  let info = (
    <Fragment>
      {head && (
        <Head>
          <Title
            data-test={dataTest || "title"}
            data-visible={isOpen}
            ellipsis={ellipsis}
            widthTagEllipsis={widthTagEllipsis}
          >
            {head.title}
          </Title>
          {head.close && (
            <ClickableItem
              data-test={`${dataTest}-onClickInBack`}
              onClick={() => {
                onClickInBack();
                addScrollBody();
              }}
            >
              <Icon dataTest="closeKnowMoreButton" type={head.icon} />
            </ClickableItem>
          )}
        </Head>
      )}
      {fullHeight ? (
        <FullHeightWrapper>
          <StyledContent>{children}</StyledContent>
        </FullHeightWrapper>
      ) : (
        children
      )}
      {footer && (
        <Footer fullHeight={fullHeight}>
          <FooterAdapt>{footer}</FooterAdapt>
        </Footer>
      )}
    </Fragment>
  );

  let bottomCheat = (
    <Fragment>
      {isOpen ? removeScrollBody() : addScrollBody()}
      {isMobileSize
        ? isOpen && (
            <WrapperBottomSheet>
              {backgroundBack}
              <BottomSheet
                isOpen={isOpen}
                velocity={velocity}
                fromLeft={fromLeft}
                zIndex={zIndex}
                bottomsheetBlue={bottomsheetBlue}
              >
                {info}
              </BottomSheet>
            </WrapperBottomSheet>
          )
        : isOpen && (
            <WrapperDesktop>
              {backgroundBack}
              <DesktopContainer>{info}</DesktopContainer>
            </WrapperDesktop>
          )}
    </Fragment>
  );

  return ReactDOM.createPortal(bottomCheat, document.body);
}

export default AnimatedBottonSheet;
