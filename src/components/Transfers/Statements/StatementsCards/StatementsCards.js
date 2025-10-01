import moment from "moment";
import React, { Fragment } from "react";
import { darkGreen } from "../../../../styles/settings";
import { rem, remFontSize } from "../../../../styles/tools";
import { DEFAULT_API_RESPONSE_DATE_FORMAT } from "../../../../utils/constants";
import {
  isInternetExplorer,
  isMsBrowser,
  isMsEdge
} from "../../../../utils/getNavigator";
import {
  getDateFieldPlaceholderByLocale,
  translate
} from "../../../../utils/i18n";
import Card from "../../../common/Card";
import HideableValue from "../../../common/HideableValue";
import {
  AmountTextItem,
  Balance,
  CardWrapper,
  ContentCard,
  DescriptionItem,
  DescriptionTextItem,
  EmptyItem,
  Events,
  InfoWrapper,
  InnerLabel,
  Line,
  Status
} from "../styles";

import { Content } from "./styles";

function StatementsCards({ list, withDayBalance, dataTest }) {
  const currency = "(R$)";

  return (
    <Content>
      {list.map((item, index) => (
        <Fragment key={index}>
          <CardWrapper>
            <Card
              dataTest={dataTest}
              title={moment(item.date, DEFAULT_API_RESPONSE_DATE_FORMAT).format(
                getDateFieldPlaceholderByLocale()
              )}
              icon="Calendar"
              styles={`margin-bottom: ${rem(16)}`}
              titleColor={darkGreen}
            >
              <ContentCard>
                <Events>
                  <Line>
                    <EmptyItem />
                    <DescriptionTextItem>
                      {translate("DESCRIPTION")}
                    </DescriptionTextItem>
                    <AmountTextItem>
                      {`${translate("AMOUNT")} ${currency}`}
                    </AmountTextItem>
                  </Line>
                  {item.events &&
                    item.events.map((item, i) => (
                      <Line key={i}>
                        <EmptyItem />
                        <DescriptionItem>{item.description}</DescriptionItem>
                        <HideableValue value={item.amount} colorized />
                      </Line>
                    ))}
                </Events>
                {withDayBalance === true && (
                  <Balance>
                    <EmptyItem />
                    <Status initial>
                      <InnerLabel expanded>{translate("TOTAL")}</InnerLabel>
                    </Status>
                    {item.blockedAmount > 0 && (
                      <Status total>
                        <InfoWrapper>
                          <InnerLabel>{`${translate(
                            "BLOCKED_BALANCE"
                          )} ${currency}`}</InnerLabel>
                          <HideableValue
                            value={item.blockedAmount}
                            styles={`font-size: ${remFontSize(
                              14
                            )}; font-family: Lato; color: #4e768f`}
                          />
                        </InfoWrapper>
                      </Status>
                    )}
                    <Status total>
                      <InfoWrapper>
                        <InnerLabel>
                          {`${translate(
                            "DAY_FINAL_AVAILABLE_BALANCE"
                          )} ${currency}`}
                        </InnerLabel>
                        <HideableValue
                          value={item.availableAmount}
                          styles={`font-size: ${remFontSize(
                            14
                          )}; font-family: Lato; color: #4e768f`}
                        />
                      </InfoWrapper>
                    </Status>
                  </Balance>
                )}
              </ContentCard>
            </Card>
          </CardWrapper>
          {isInternetExplorer() ||
            isMsBrowser() ||
            (isMsEdge() && <div key={index} />)}
        </Fragment>
      ))}
    </Content>
  );
}

export default StatementsCards;
