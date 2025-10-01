import React, { useState, useContext } from "react";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import {
    Container,
    TitleWrapper,
    Text,
    FooterButtonsContainer,
    TextGroup,
    WrapperIcon,
    TransferFlowCard,
    CustodiansAccountsWrapper,
    InputGroup,
    InputWrapper,
    InputGroupCounter
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { gray200, gray500 } from "../../../../styles/settings";
import { InstanceContext } from "../portabilityRequestContext";
import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import Input from "../../../common/Input";
import { formatCNPJ, formatBankAccount, extractNumber } from "../../../../utils/formatNumber";

const ReportCustodianAccounts = ({ stepBack, goToStep, currentStep }) => {
    const [destinationAccount, setDestinationAccount] = useState(null);
    const [originAccount, setOriginAccount] = useState(null);

    const {
        loading,
        setCustodianAccounts,
        cleanCustodianAccounts,
        selectedInstitutions,
        isOriginBocom,
        assetCategory
    } = useContext(InstanceContext);

    const handleNextStep = () => {
        setCustodianAccounts({
            originAccount: originAccount && extractNumber(originAccount),
            destinationAccount: destinationAccount && extractNumber(destinationAccount)
        })
        if (isOriginBocom) {
            goToStep(5);
        } else {
            goToStep(6);
        }
    };

    const handleStepBack = () => {
        setDestinationAccount(null);
        setOriginAccount(null);
        cleanCustodianAccounts();
        stepBack();
    };

    return (
        <>
            {currentStep === 4 &&
                <>
                    {loading ? (
                        <DefaultShimmerLoading dataTest="shimmer-loading" repeat={4} innerRepeat={2} />
                    ) : (
                        <>
                            <Container>
                                <TransferFlowCard>
                                    <TextGroup>
                                        <Text
                                            color={gray200}
                                            fontSize={16}
                                            lineHeight={16}
                                            fontWeight={550}
                                            marginBottom={10}
                                            letterSpacing={0.45}
                                            data-test="OriginInstitutionTitle"
                                        >
                                            {translate('PORTABILITY_SOURCE_INSTITUTION_TITLE')}
                                        </Text>
                                        <Text
                                            fontSize={20}
                                            color={gray500}
                                            lineHeight={20}
                                            fontWeight={900}
                                            letterSpacing={0.45}
                                            data-test="OriginInstitutionName"
                                        >
                                            {selectedInstitutions?.originInstitution?.name || selectedInstitutions?.originInstitution && formatCNPJ(selectedInstitutions?.originInstitution?.documentNumber)}
                                        </Text>
                                    </TextGroup>
                                    <WrapperIcon>
                                        <Icon
                                            type="ArrowRightDefault"
                                        />
                                    </WrapperIcon>
                                    <TextGroup>
                                        <Text
                                            color={gray200}
                                            fontSize={16}
                                            lineHeight={16}
                                            fontWeight={500}
                                            marginBottom={10}
                                            letterSpacing={0.45}
                                            data-test="DestinationInstutionTitle"
                                        >
                                            {translate('PORTABILITY_TARGET_INSTITUTION_TITLE')}
                                        </Text>
                                        <Text
                                            fontSize={20}
                                            color={gray500}
                                            lineHeight={20}
                                            fontWeight={900}
                                            letterSpacing={0.45}
                                            data-test="DestinationInstutionName"
                                        >
                                            {selectedInstitutions?.destinationInstitution?.name || selectedInstitutions?.destinationInstitution && formatCNPJ(selectedInstitutions?.destinationInstitution?.documentNumber)}
                                        </Text>
                                    </TextGroup>
                                </TransferFlowCard>
                                <TitleWrapper>
                                    <Text
                                        fontSize={24}
                                        color={gray500}
                                        lineHeight={20}
                                        fontWeight={700}
                                        marginBottom={16}
                                        marginTop={16}
                                        letterSpacing={0.4}
                                        data-test="CustodiansAccountsTitle"
                                    >
                                        {translate("PORTABILITY_CUSTODIANS_ACCOUNTS_TITLE")}
                                    </Text>
                                    <Text
                                        color={gray200}
                                        fontSize={14}
                                        lineHeight={16}
                                        fontWeight={400}
                                        marginBottom={24}
                                        letterSpacing={0.4}
                                        data-test="CustodiansAccountsDescription"
                                    >
                                        {isOriginBocom ?
                                            translate("PORTABILITY_CUSTODIANS_ACCOUNTS_DESCRIPTION") :
                                            assetCategory === "Listados" ?
                                                translate("PORTABILITY_CUSTODIANS_ACCOUNTS_DESCRIPTION_OTHER_ORIGIN_INSTITUTION") :
                                                translate("PORTABILITY_CUSTODIANS_ACCOUNTS_DESCRIPTION_OTHER_ORIGIN_INSTITUTION_COUNTER")
                                        }
                                    </Text>
                                </TitleWrapper>
                                <CustodiansAccountsWrapper>
                                    {assetCategory === "Listados" &&
                                        <>
                                            <InputGroup>
                                                <Text
                                                    color={gray500}
                                                    fontSize={16}
                                                    lineHeight={16}
                                                    fontWeight={700}
                                                    marginBottom={16}
                                                    letterSpacing={0.4}
                                                    data-test="OriginAccount"
                                                >
                                                    {translate('PORTABILITY_CUSTODIAN_SOURCE_ACCOUNT')}
                                                </Text>
                                                <InputWrapper>
                                                    <Input
                                                        dataTest="originAccount"
                                                        type="text"
                                                        maxlength="10"
                                                        name="originAccount"
                                                        autoComplete="off"
                                                        onChange={e => setOriginAccount(formatBankAccount(e.target.value))}
                                                        label={originAccount && translate("PORTABILITY_CUSTODIAN_SOURCE_ACCOUNT")}
                                                        value={originAccount}
                                                    />
                                                </InputWrapper>
                                            </InputGroup>
                                            <InputGroup>
                                                <Text
                                                    color={gray500}
                                                    fontSize={16}
                                                    lineHeight={16}
                                                    fontWeight={700}
                                                    marginBottom={16}
                                                    letterSpacing={0.4}
                                                    data-test="DestinationAccount"
                                                >
                                                    {translate('PORTABILITY_CUSTODIAN_TARGET_ACCOUNT')}
                                                </Text>
                                                <InputWrapper>
                                                    <Input
                                                        dataTest="destinationAccount"
                                                        type="text"
                                                        name="destinationAccount"
                                                        autoComplete="off"
                                                        onChange={e => setDestinationAccount(formatBankAccount(e.target.value))}
                                                        label={destinationAccount && translate("PORTABILITY_CUSTODIAN_TARGET_ACCOUNT")}
                                                        value={destinationAccount}
                                                    />
                                                </InputWrapper>
                                            </InputGroup>
                                        </>
                                    }
                                    {assetCategory === "Balcao" &&
                                        <InputGroupCounter>
                                            <Text
                                                color={gray500}
                                                fontSize={16}
                                                lineHeight={16}
                                                fontWeight={700}
                                                marginBottom={16}
                                                letterSpacing={0.4}
                                                data-test="DestinationAccountBalcao"
                                            >
                                                {translate('PORTABILITY_CUSTODIAN_TARGET_ACCOUNT')}
                                            </Text>
                                            <InputWrapper>
                                                <Input
                                                    dataTest="destinationAccountBalcao"
                                                    type="text"
                                                    name="destinationAccountBalcao"
                                                    autoComplete="off"
                                                    onChange={e => setDestinationAccount(formatBankAccount(e.target.value))}
                                                    label={destinationAccount && translate("PORTABILITY_CUSTODIAN_TARGET_ACCOUNT")}
                                                    value={destinationAccount}
                                                />
                                            </InputWrapper>
                                        </InputGroupCounter>
                                    }
                                </CustodiansAccountsWrapper>
                            </Container>
                            <FooterButtonsContainer>
                                <Button
                                    dataTest="BackButton"
                                    type="outline"
                                    onClick={() => handleStepBack()}
                                    margin={{ r: 16 }}
                                    padding={0}
                                    width={100}
                                >
                                    {translate("BACK")}
                                </Button>
                                <Button
                                    dataTest="ContinueButton"
                                    actionSecondary
                                    onClick={() => handleNextStep()}
                                    disabled={
                                        assetCategory === "Listados" && !originAccount
                                        || !destinationAccount
                                        || originAccount?.length < 9
                                        || destinationAccount?.length < 9
                                    }
                                    padding={0}
                                    width={100}
                                >
                                    {translate("PORTABILITY_FOWARD_BUTTON")}
                                </Button>
                            </FooterButtonsContainer>
                        </>
                    )}
                </>
            }
        </>
    );
};

export default ReportCustodianAccounts;
