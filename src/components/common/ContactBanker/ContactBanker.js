import React, { Component, Fragment } from "react";
import Swipe, { SwipeItem } from "swipejs/react";
import { object, func } from "prop-types";
import { translate } from "../../../utils/i18n";
import { formatTel } from "../../../utils/formatNumber";
import Header from "../../common/Modal/Header";
import Icon from "../../common/Icon";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import { grey70 } from "../../../styles/settings";
import Avatar from "../../../assets/imgs/icons/avatar.png";
import ClickWrapper from "../../../utils/clickWrapper";

import {
  Wrapper,
  MainContainer,
  FooterContainer,
  BankerAvatar,
  BankerContainer,
  BankerContainerMobile,
  BankerAvatarNameWrapper,
  BankerInfo,
  BankerName,
  BankerMail,
  BankerPhone,
  Button,
  ContainerQuickMessages,
  QuickMessages,
  Line,
  BankerInfoWrapper,
  IconWrapper,
  ChartController,
  Dot,
  PrevItem,
  NextItem
} from "./styles";

class ContactBanker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChart: 0,
      isLoading: false,
      bankers: [],
      buttonMessages: [],
      disableButtons: false,
      disableNext: false,
      disablePrev: true,
      currentEmail: null
    };
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.props.getAccountManagers();
    await this.props.getButtonsMessages();

    this.setState({
      bankers: this.props.responseAccountManagers,
      buttonMessages: this.props.responseButtonMessage,
      isLoading: false
    });
    this.resizeSwipe(0);
    this.setState({
      currentEmail: this.props.responseAccountManagers[0].mail
    });
  }

  resizeSwipe(index) {
    let elmSwipeWrap = document.getElementsByClassName("swipe-wrap");
    elmSwipeWrap = Array.from(elmSwipeWrap);
    let elements = document.getElementsByClassName("custom-swipe-item-class");
    elements = Array.from(elements);

    elements.map((elm, indexElm) => {
      if (indexElm == index)
        elmSwipeWrap[0].style.height = elm.offsetHeight + "px";
    });
  }

  onTransactionEnd(index) {
    this.setState({
      activeChart: index,
      currentEmail: this.props.responseAccountManagers[index].mail
    });
    this.state.activeChart > 0
      ? this.setState({ disablePrev: false })
      : this.setState({ disablePrev: true });
    this.state.activeChart == this.state.bankers.length - 1
      ? this.setState({ disableNext: true })
      : this.setState({ disableNext: false });
  }

  async handleConfirmButton(message, email) {
    const { openToastr, postEmail, addError } = this.props;
    this.setState({
      disableButtons: true
    });

    try {
      await postEmail({
        message,
        to: email
      });
      openToastr({
        text: translate("MESSAGE_SENT_SUCCESSFULLY"),
        isBelow: false,
        isTop: true
      });
    } catch (error) {
      addError(error);
      openToastr({
        text: translate("MESSAGE_NOT_SENT"),
        isBelow: false,
        isTop: true,
        error: true
      });
    }
  }

  renderAllBankers(banker, idx) {
    return (
      <SwipeItem className="custom-swipe-item-class" key={idx}>
        <BankerContainer>
          <BankerAvatar
            src={
              banker.avatar ? `data:image/png;base64,${banker.avatar}` : Avatar
            }
          />
          <BankerInfo>
            <BankerName>{banker.name || ""}</BankerName>
            {banker.mail && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Email" />
                </IconWrapper>
                <BankerMail>{banker.mail}</BankerMail>
              </BankerInfoWrapper>
            )}
            {banker.telephone.ddd && banker.telephone.number && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Phone" />
                </IconWrapper>
                <BankerPhone>
                  {formatTel(banker.telephone.ddd, banker.telephone.number)}
                </BankerPhone>
              </BankerInfoWrapper>
            )}
          </BankerInfo>
        </BankerContainer>

        <BankerContainerMobile>
          <BankerAvatarNameWrapper>
            <BankerAvatar
              src={
                banker.avatar
                  ? `data:image/jpeg;base64,${banker.avatar}`
                  : Avatar
              }
            />
            <BankerName>{banker.name}</BankerName>
          </BankerAvatarNameWrapper>
          <BankerInfo>
            {banker.mail && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Email" />
                </IconWrapper>
                <BankerMail>{banker.mail}</BankerMail>
              </BankerInfoWrapper>
            )}
            {banker.telephone.ddd && banker.telephone.number && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Phone" />
                </IconWrapper>
                <BankerPhone>
                  {formatTel(banker.telephone.ddd, banker.telephone.number)}
                </BankerPhone>
              </BankerInfoWrapper>
            )}
          </BankerInfo>
        </BankerContainerMobile>
      </SwipeItem>
    );
  }

  renderOneBanker(banker) {
    return (
      <Fragment>
        <BankerContainer>
          <BankerAvatar
            src={
              banker.avatar ? `data:image/png;base64,${banker.avatar}` : Avatar
            }
          />
          <BankerInfo>
            <BankerName>{banker.name || ""}</BankerName>
            {banker.mail && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Email" />
                </IconWrapper>
                <BankerMail>{banker.mail}</BankerMail>
              </BankerInfoWrapper>
            )}
            {banker.telephone.ddd && banker.telephone.number && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Phone" />
                </IconWrapper>
                <BankerPhone>
                  {formatTel(banker.telephone.ddd, banker.telephone.number)}
                </BankerPhone>
              </BankerInfoWrapper>
            )}
          </BankerInfo>
        </BankerContainer>

        <BankerContainerMobile>
          <BankerAvatarNameWrapper>
            <BankerAvatar
              src={
                banker.avatar
                  ? `data:image/jpeg;base64,${banker.avatar}`
                  : Avatar
              }
            />
            <BankerName>{banker.name}</BankerName>
          </BankerAvatarNameWrapper>
          <BankerInfo>
            {banker.mail && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Email" />
                </IconWrapper>
                <BankerMail>{banker.mail}</BankerMail>
              </BankerInfoWrapper>
            )}
            {banker.telephone.ddd && banker.telephone.number && (
              <BankerInfoWrapper>
                <IconWrapper>
                  <Icon color={grey70} type="Phone" />
                </IconWrapper>
                <BankerPhone>
                  {formatTel(banker.telephone.ddd, banker.telephone.number)}
                </BankerPhone>
              </BankerInfoWrapper>
            )}
          </BankerInfo>
        </BankerContainerMobile>
      </Fragment>
    );
  }

  render() {
    const { closeModal, error } = this.props;
    const {
      isLoading,
      bankers,
      buttonMessages,
      activeChart,
      disableButtons,
      disableNext,
      disablePrev,
      currentEmail
    } = this.state;

    return (
      <Wrapper>
        {error ? (
          closeModal()
        ) : (
          <Fragment>
            <Header
              title={translate("CONTACT_BOCOM_BBM")}
              onClickClose={() => closeModal()}
              dataTest="contact-data-close"
            />
            {isLoading && <DefaultShimmerLoading repeat={1} innerRepeat={4} />}
            {!isLoading && (
              <Fragment>
                <MainContainer>
                  {bankers.length === 1 && this.renderOneBanker(bankers[0])}
                  {bankers.length > 1 && (
                    <Swipe
                      className="custom-swipe-container-class"
                      ref={o => (this.swipe = o)}
                      startSlide={0}
                      auto={0}
                      speed={0}
                      draggable={false}
                      continuous={false}
                      autoRestart={false}
                      disableScroll={false}
                      stopPropagation={true}
                      transitionEnd={indexVar =>
                        this.onTransactionEnd(indexVar)
                      }
                      callback={i => this.resizeSwipe(i)}
                    >
                      {bankers.map((banker, index) =>
                        this.renderAllBankers(banker, index)
                      )}
                    </Swipe>
                  )}

                  {bankers.length > 1 && (
                    <Fragment>
                      <PrevItem
                        type="PrevItem"
                        width="26"
                        height="26"
                        onClick={() => this.swipe.prev()}
                        disablePrev={disablePrev}
                      />
                      <NextItem
                        type="NextItem"
                        width="26"
                        height="26"
                        onClick={() => this.swipe.next()}
                        disableNext={disableNext}
                      />
                    </Fragment>
                  )}
                </MainContainer>
                <ContainerQuickMessages>
                  <Line>
                    <QuickMessages>{translate("QUICK_MESSAGES")}</QuickMessages>
                  </Line>
                </ContainerQuickMessages>
                <FooterContainer>
                  {buttonMessages.map((msg, index) => (
                    <ClickWrapper key={index}>
                      <Button
                        id="Cancel"
                        onClick={() =>
                          this.handleConfirmButton(msg.message, currentEmail)
                        }
                        dataTest="Cancel"
                        actionSecondary
                        disabled={!!isLoading || disableButtons}
                      >
                        {msg.message}
                      </Button>
                    </ClickWrapper>
                  ))}
                </FooterContainer>

                {bankers.length > 1 && (
                  <ChartController>
                    {bankers.map((banker, index) => (
                      <Dot key={index} active={activeChart === index} />
                    ))}
                  </ChartController>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </Wrapper>
    );
  }
}

ContactBanker.defaultProps = {
  transferData: null,
  favoredData: null,
  originAccount: null
};

ContactBanker.propTypes = {
  transferData: object,
  favoredData: object,
  originAccount: object,
  closeCallback: func
};

export default ContactBanker;
