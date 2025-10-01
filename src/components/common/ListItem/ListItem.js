import React from "react";
import {
  Card,
  CardSubTitle,
  CardTitle,
  Header,
  Info,
  ItemDate,
  Label,
  ListItemContainer,
  Body,
  InfoContainer,
  SecondInfoContainer,
  TitleContainer
} from "./styles";
import Icon from "../Icon";

const ListItem = ({
  date = "",
  title = "",
  subTitle = "",
  label = "",
  info = "",
  secondLabel = "",
  secondInfo = "",
  stepForward = () => {},
  dataTest = "container"
}) => {
  return (
    <ListItemContainer data-test={dataTest}>
      <ItemDate data-test="date">{date}</ItemDate>
      <Card onClick={stepForward} data-test="card">
        <Header>
          <TitleContainer>
            <CardTitle data-test="title">{title}</CardTitle>
            <CardSubTitle data-test="subtitle">{subTitle}</CardSubTitle>
          </TitleContainer>
          <Icon type="ArrowRight" dataTest="icon" />
        </Header>
        <Body>
          <InfoContainer>
            <Label data-test="label">{label}</Label>
            <Info data-test="info">{info}</Info>
          </InfoContainer>
          <SecondInfoContainer>
            <Label data-test="secondLabel">{secondLabel}</Label>
            <Info data-test="secondInfo">{secondInfo}</Info>
          </SecondInfoContainer>
        </Body>
      </Card>
    </ListItemContainer>
  );
};

export default ListItem;
