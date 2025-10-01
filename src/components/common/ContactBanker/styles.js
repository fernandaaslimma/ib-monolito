import styled, { css } from "styled-components";
import { rem, remFontSize, media } from "../../../styles/tools";
import {
  grey70,
  white,
  blue60,
  blue30,
  coolgrey,
  lighestgrey
} from "../../../styles/settings";
import { default as ButtonRaw } from "../../common/Button";
import Icon from "../../common/Icon";

export const PrevItem = styled(Icon)`
  position: absolute;
  left: 32px;
  top: 50%;
  stroke: #d3dde4;
  ${media.xxs(css`
    display: none;
  `)};
  ${media.xs(css`
    display: block;
  `)};
  ${media.md(css`
    display: block;
  `)};

  ${({ disablePrev }) =>
    !disablePrev &&
    css`
      stroke: #27445f;
    `};
`;

export const NextItem = styled(Icon)`
  position: absolute;
  right: 32px;
  top: 50%;
  stroke: #d3dde4;
  ${media.xxs(css`
    display: none;
  `)};
  ${media.xs(css`
    display: block;
  `)};
  ${media.md(css`
    display: block;
  `)};

  ${({ disableNext }) =>
    !disableNext &&
    css`
      stroke: #27445f;
    `};
`;

export const Wrapper = styled.form`
  background: ${white};
  font-family: "Lato";
`;

export const MainContainer = styled.div`
  padding: ${rem(40)} ${rem(20)} ${rem(10)};
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  display: inline-flex;
  margin-bottom: 24px;
  width: ${rem(334)};
  justify-content: space-between;
  ${media.xxs(css`
    flex-direction: column;
    width: 90%;
  `)};
  ${media.xs(css`
    flex-direction: row;
    width: ${rem(334)};
  `)};
  ${media.md(css`
    flex-direction: row;
    width: ${rem(334)};
  `)};
`;

export const BankerContainer = styled.div`
  display: flex;
  justify-content: end;
  width: ${rem(334)};
  margin: 0 auto;
  ${media.xxs(css`
    display: none;
    padding: 0;
  `)};
  ${media.xs(css`
    display: flex;
    padding: 0;
  `)};
  ${media.md(css`
    display: flex;
    /* padding: 0 100px 0 100px; */
  `)};
`;

export const BankerContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 ${rem(20)};
  width: 304px;
  ${media.xxs(css`
    display: flex;
    padding: 0;
  `)};
  ${media.xs(css`
    display: none;
    padding: 0;
  `)};
  ${media.md(css`
    display: none;
    padding: 0 100px 0 100px;
  `)};
`;

export const BankerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rem(254)};
`;

export const BankerAvatar = styled.img`
  width: ${rem(64)};
  height: ${rem(64)};
  border-radius: ${rem(32)};
  margin-right: ${rem(16)};
`;

export const BankerName = styled.p`
  color: ${grey70};
  font-family: Lato;
  font-size: ${remFontSize(20)};
  font-weight: bold;
  letter-spacing: ${rem(0.4)};
  text-align: left;
  padding-bottom: ${rem(5)};
  width: ${rem(254)};
  word-break: unset;

  ${media.xxs(css`
    font-size: ${remFontSize(18)};
  `)};
`;

export const BankerMail = styled.p`
  color: ${grey70};
  font-family: Lato;
  font-size: ${remFontSize(13.3)};
  letter-spacing: ${rem(0.4)};
  text-align: left;
  word-break: break-all;
  width: ${rem(224)};
`;

export const BankerPhone = styled.p`
  color: ${grey70};
  font-family: Lato;
  font-size: ${remFontSize(13.3)};
  letter-spacing: ${rem(0.4)};
  text-align: left;
  width: 180%;
`;

export const Button = styled(ButtonRaw)`
  margin-top: ${rem(10)};
  height: ${rem(40)};
  line-height: ${rem(40)};
  background-color: ${white};
  border: 1px solid ${blue60};
  color: ${blue60};
  width: 100%;

  ${media.xxs(css`
    height: ${rem(48)};
  `)};
  ${media.xs(css`
    height: ${rem(40)};
  `)};
  ${media.md(css`
    height: ${rem(40)};
  `)};

  :not(:last-child) {
    margin-right: ${rem(12)};
  }

  :hover:not([disabled]) {
    background-color: ${white};
    border: 1px solid ${blue60};
    color: ${blue60};
    opacity: 0.7;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${lighestgrey};
      border: 1px solid ${lighestgrey};
    `};
`;

export const ContainerQuickMessages = styled.div`
  text-align: center;
  margin: 20px auto;
  width: ${rem(334)};
  ${media.xxs(css`
    width: ${rem(304)};
  `)};
  ${media.xs(css`
    width: ${rem(334)};
  `)};
  ${media.md(css`
    width: ${rem(334)};
  `)};
`;

export const Line = styled.div`
  padding: 0 10px;
  border-top: 1px solid ${blue30};
  height: 1px;
  line-height: 0.1em;
  position: relative;
`;

export const QuickMessages = styled.h3`
  color: ${coolgrey};
  font-family: Lato;
  font-size: ${remFontSize(10)};
  letter-spacing: ${rem(0.4)};
  text-align: center;
  text-transform: uppercase;
  background-color: ${white};
  padding: 10px 20px;
  position: absolute;
  z-index: 9999;
  top: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 180px;
`;

export const IconWrapper = styled.div`
  text-align: center;
  padding-right: ${rem(12)};
`;

export const BankerInfoWrapper = styled.div`
  padding-top: ${rem(7)};
  display: flex;
  align-items: normal;
`;

export const BankerAvatarNameWrapper = styled.div`
  padding-top: ${rem(5)};
  display: flex;
  align-items: center;
  margin-bottom: ${rem(29)};
`;

export const ChartController = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(5)};
`;

export const Dot = styled.div`
  width: ${rem(7)};
  height: ${rem(7)};
  border: solid ${rem(1)} ${coolgrey};
  margin: ${rem(2)};
  border-radius: ${rem(10)};

  ${({ active }) =>
    active &&
    css`
      background-color: ${coolgrey};
    `};
`;
