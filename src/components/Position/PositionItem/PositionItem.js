import React, { useContext } from "react";
import {
  Container,
  Divider,
  Info,
  InfoContainer,
  InfoItem,
  InfoValue,
  Item,
  Subtitle,
  Title,
  Value,
  ValueItem,
  ValuesContainer
} from "./styles";
import formatNumber from "../../../utils/formatNumber";
import moment from "moment";
import {
  getDateFieldPlaceholderByLocale,
  translate
} from "../../../utils/i18n";
import { Context } from "../../common/OffshoreSelect/offshoreContext";

const PosistionItem = ({ item = {}, style = {} }) => {
  const { currentCoin } = useContext(Context);

  const values = [
    {
      item: translate("POSITION_NOTIONAL_BALANCE") + "(" + currentCoin + ")",
      value: item.notionalBalance,
      dataTest: "notionalBalance"
    },
    {
      item:
        translate("POSITION_ACCRUED_INTEREST_ITEM") + "(" + currentCoin + ")",
      value: item.accruedInterest,
      dataTest: "accruedInterest"
    },
    {
      item: translate("POSITION_ACCRUED_BALANCE") + "(" + currentCoin + ")",
      value: item.accruedBalance,
      dataTest: "accruedBalance"
    }
  ];
  return (
    <Container style={style}>
      <Title data-test="positionName">{item.name}</Title>
      <Divider />
      <ValuesContainer>
        <ValueItem>
          <Subtitle>{translate("POSITION_DESCRIPTION")}</Subtitle>
          <Subtitle>
            {translate("POSITION_VALUE") + "(" + currentCoin + ")"}
          </Subtitle>
        </ValueItem>
        {values.map((row, index) => (
          <ValueItem key={index}>
            <Item>{row.item}</Item>
            <Value data-test={row.dataTest}>
              {formatNumber(row.value, {
                digits: 2
              })}
            </Value>
          </ValueItem>
        ))}
      </ValuesContainer>
      <Divider />
      <InfoContainer>
        <InfoItem>
          <Info>{translate("APLICATION_DATE_FUND")}</Info>
          <InfoValue data-test="applicationDate">
            {moment(item.applicationDate).format(
              getDateFieldPlaceholderByLocale()
            )}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <Info>{translate("REFERENCE_DATE")}</Info>
          <InfoValue data-test="positionDate">
            {moment(item.positionDate).format(
              getDateFieldPlaceholderByLocale()
            )}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <Info>{translate("MATURITY")}</Info>
          <InfoValue data-test="maturityDate">
            {moment(item.maturityDate).format(
              getDateFieldPlaceholderByLocale()
            )}
          </InfoValue>
        </InfoItem>
      </InfoContainer>
      <InfoContainer>
        <InfoItem>
          <Info>{translate("POSITION_INDEX")}</Info>
          <InfoValue data-test="yieldIndex">{item.yieldIndex}</InfoValue>
        </InfoItem>
        <InfoItem>
          <Info>{`${translate("FIXED_RATE")} (%)`}</Info>
          <InfoValue data-test="yieldFixedRate">
            {formatNumber(item.yieldFixedRate)}
          </InfoValue>
        </InfoItem>
        <InfoItem>
          <Info>{translate("POSITION_WALLET")}</Info>
          <InfoValue data-test="percentage">
            {formatNumber(item.percentage, { digits: 2 })}
          </InfoValue>
        </InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default PosistionItem;
