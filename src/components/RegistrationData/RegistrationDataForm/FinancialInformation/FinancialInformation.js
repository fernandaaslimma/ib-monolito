import React, { Fragment, useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  InnerTitle,
  Item
} from "../styles";

import Dropdown from "../../../common/Dropdown";
import { AlertMessage } from "react-bocombbm-components";
import { DEFAULT_VALUE, INVESTMENT_DETAILS } from "../../../../utils/constants";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { StateContext } from "../RegistrationDataForm";

function FinancialInformation({ onChange, validateSection, disabled }) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields;

  const { investmentDetails } = formModel.content;

  const changeRange = (e, field, fieldDeep) => {
    const value = e.target.value;

    fieldDeep
      ? (investmentDetails[field][fieldDeep].rangeId = value)
      : (investmentDetails[field].rangeId = value);

    onChange(investmentDetails, INVESTMENT_DETAILS);
  };

  const renderInvalidMessage = () => {
    const renderByKeys = object => {
      const keys = Object.keys(object);
      return keys.map(key => renderGroup(object[key], key));
    };
    const renderGroup = (collection, key) =>
      collection.map(item => (
        <Item data-last={translate("ATUCAD_AND")} key={item}>
          {translate(`ATUCAD_${key.toUpperCase()}`)}
        </Item>
      ));
    return (
      <Fragment>
        {invalidFields.estimatedEquity &&
          renderGroup(invalidFields.estimatedEquity, "total")}
        {invalidFields.liquidAssets && renderByKeys(invalidFields.liquidAssets)}
        {invalidFields.fixedAssets && renderByKeys(invalidFields.fixedAssets)}
        {invalidFields.estimatedAnnualIncome &&
          renderByKeys(invalidFields.estimatedAnnualIncome)}
      </Fragment>
    );
  };

  return (
    <SectionedFormContent
      openedDescription={translate(
        "ATUCAD_FINANCIAL_SITUATION_OWNERSHIP"
      ).toUpperCase()}
      dataTest="SectionedFinancialInformation"
      closedDescription={translate("ATUCAD_FINANCIAL_SITUATION_OWNERSHIP")}
      valid={isFilled.investmentDetails}
      close={closeAll}
      callback={() => validateSection(investmentDetails, INVESTMENT_DETAILS)}
    >
      <GridWrapper>
        {invalidFields &&
          (invalidFields.estimatedAnnualIncome ||
            invalidFields.estimatedEquity ||
            invalidFields.fixedAssets ||
            invalidFields.liquidAssets) && (
            <Block span={[1, 3]}>
              <AlertMessage type="error" icon="Attention">
                {translate("ATUCAD_REQUIRED_FIELDS_OMMITED")}:<br />
                {renderInvalidMessage()}
              </AlertMessage>
            </Block>
          )}
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <InnerTitle>{translate("ATUCAD_TOTAL").toUpperCase()}</InnerTitle>
            </InnerBlock>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <Dropdown
                dataTest="SelectTotalNetWorth"
                list={investmentDetails.estimatedEquity.rangeOptions}
                label={translate("ATUCAD_TOTAL_NET_WORTH", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                onChange={e => changeRange(e, "estimatedEquity")}
                name="financial_total_net_worth"
                value={
                  isValueNullOrUndefined(
                    investmentDetails.estimatedEquity.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.estimatedEquity.rangeId
                }
                width={100}
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <InnerTitle>
                {translate("ATUCAD_LIQUID_ASSETS").toUpperCase()}
              </InnerTitle>
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectShares"
                list={investmentDetails.liquidAssets.stocks.rangeOptions}
                label={translate("ATUCAD_SHARES", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_shares"
                width={100}
                onChange={e => changeRange(e, "liquidAssets", "stocks")}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.liquidAssets.stocks.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.liquidAssets.stocks.rangeId
                }
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectFunds"
                list={investmentDetails.liquidAssets.funds.rangeOptions}
                label={translate("ATUCAD_FUNDS", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_funds"
                onChange={e => changeRange(e, "liquidAssets", "funds")}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.liquidAssets.funds.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.liquidAssets.funds.rangeId
                }
                width={100}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectBonds"
                list={investmentDetails.liquidAssets.bonds.rangeOptions}
                label={translate("ATUCAD_BONDS", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_bonds"
                onChange={e => changeRange(e, "liquidAssets", "bonds")}
                width={100}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.liquidAssets.bonds.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.liquidAssets.bonds.rangeId
                }
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectPassbookSavings"
                list={investmentDetails.liquidAssets.savings.rangeOptions}
                label={translate("ATUCAD_SAVINGS", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_savings"
                onChange={e => changeRange(e, "liquidAssets", "savings")}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.liquidAssets.savings.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.liquidAssets.savings.rangeId
                }
                width={100}
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <InnerTitle>
                {translate("ATUCAD_ILLIQUID_ASSETS").toUpperCase()}
              </InnerTitle>
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectImmovables"
                list={investmentDetails.fixedAssets.realProperty.rangeOptions}
                label={translate("ATUCAD_IMMOVABLES", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_immovables"
                onChange={e => changeRange(e, "fixedAssets", "realProperty")}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.fixedAssets.realProperty.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.fixedAssets.realProperty.rangeId
                }
                width={100}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectMovables"
                list={
                  investmentDetails.fixedAssets.personalProperty.rangeOptions
                }
                label={translate("ATUCAD_MOVABLES", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_movables"
                onChange={e =>
                  changeRange(e, "fixedAssets", "personalProperty")
                }
                width={100}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.fixedAssets.personalProperty.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.fixedAssets.personalProperty.rangeId
                }
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <InnerTitle>
                {translate("ATUCAD_ESTIMATED_ANUAL_INCOME").toUpperCase()}
              </InnerTitle>
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectSalaryOrPartnersFee"
                list={
                  investmentDetails.estimatedAnnualIncome.salary.rangeOptions
                }
                label={translate(
                  "ATUCAD_SALARY_OR_PARTNERS_FEE",
                  "REQUIRED_MARKER"
                )}
                tinyLabels
                noMargin
                name="financial_salary"
                onChange={e =>
                  changeRange(e, "estimatedAnnualIncome", "salary")
                }
                width={100}
                value={
                  isValueNullOrUndefined(
                    investmentDetails.estimatedAnnualIncome.salary.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.estimatedAnnualIncome.salary.rangeId
                }
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Dropdown
                dataTest="SelectBonusesGratificationsAndCommisions"
                list={
                  investmentDetails.estimatedAnnualIncome.bonusesAndCommissions
                    .rangeOptions
                }
                label={translate(
                  "ATUCAD_BONUSES_GRATIFICATIONS_AND_COMMISIONS",
                  "REQUIRED_MARKER"
                )}
                tinyLabels
                noMargin
                name="financial_bonuses"
                width={100}
                onChange={e =>
                  changeRange(
                    e,
                    "estimatedAnnualIncome",
                    "bonusesAndCommissions"
                  )
                }
                value={
                  isValueNullOrUndefined(
                    investmentDetails.estimatedAnnualIncome
                      .bonusesAndCommissions.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.estimatedAnnualIncome
                        .bonusesAndCommissions.rangeId
                }
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <Dropdown
                dataTest="SelectOtherIncome"
                list={
                  investmentDetails.estimatedAnnualIncome.others.rangeOptions
                }
                label={translate("ATUCAD_OTHER_INCOME", "REQUIRED_MARKER")}
                tinyLabels
                noMargin
                name="financial_others"
                width={100}
                onChange={e =>
                  changeRange(e, "estimatedAnnualIncome", "others")
                }
                value={
                  isValueNullOrUndefined(
                    investmentDetails.estimatedAnnualIncome.others.rangeId
                  )
                    ? DEFAULT_VALUE
                    : investmentDetails.estimatedAnnualIncome.others.rangeId
                }
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default FinancialInformation;
