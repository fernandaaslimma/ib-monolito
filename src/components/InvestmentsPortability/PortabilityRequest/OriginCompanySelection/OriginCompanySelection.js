import React, { useContext } from "react";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import {
    Container,
    TitleWrapper,
    Text,
    FooterButtonsContainer,
    WrapperCard,
    TextGroup,
    WrapperIcon
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { gray200, gray500 } from "../../../../styles/settings";
import { InstanceContext } from "../portabilityRequestContext";
import Button from "../../../common/Button";
import Card from "../../../common/Card";
import Icon from "../../../common/Icon";
import { formatCNPJ } from "../../../../utils/formatNumber";
import { rem } from "../../../../styles/tools";

const OriginCompanySelection = ({ stepBack, stepForward, currentStep }) => {
    const {
        loading,
        userInfo,
        isOriginBocom,
        getPositions,
        setCompany
    } = useContext(InstanceContext);

    const handleNextStep = (item) => {
        stepForward();
        getPositions(item.corpId);
        setCompany(item);
    };

    return (
        <>
            {currentStep === 2 &&
                <>
                    {loading ? (
                        <DefaultShimmerLoading dataTest="shimmer-loading" repeat={4} innerRepeat={2} />
                    ) : (
                        <>
                            <Container>
                                <TitleWrapper>
                                    <Text
                                        fontSize={24}
                                        color={gray500}
                                        lineHeight={20}
                                        fontWeight={700}
                                        marginBottom={16}
                                        letterSpacing={0.4}
                                        data-test="CompanySelectionTitle"
                                    >
                                        {isOriginBocom ? translate("PORTABILITY_COMPANY_SELECTION_TITLE") : translate("PORTABILITY_OTHER_COMPANY_SELECTION_TITLE")}
                                    </Text>
                                    <Text
                                        color={gray200}
                                        fontSize={14}
                                        lineHeight={16}
                                        fontWeight={400}
                                        marginBottom={24}
                                        letterSpacing={0.4}
                                        data-test="CompanySelectionDescription"
                                    >
                                        {isOriginBocom ? translate("PORTABILITY_COMPANY_SELECTION_DESCRIPTION") : translate("PORTABILITY_OTHER_COMPANY_SELECTION_DESCRIPTION")}
                                    </Text>
                                </TitleWrapper>
                                {userInfo?.tenantsMembers?.map((item, index) => {
                                    return (
                                        <>
                                            <Card
                                                key={index}
                                                styles={`margin-bottom: ${rem(16)}`}
                                            >
                                                <WrapperCard onClick={() => handleNextStep(item)}>
                                                    <TextGroup>
                                                        <Text
                                                            fontSize={16}
                                                            color={gray500}
                                                            lineHeight={20}
                                                            fontWeight={700}
                                                            letterSpacing={0.4}
                                                            data-test="AccountTypeTitle"
                                                        >
                                                            {item?.document && formatCNPJ(item?.document)}
                                                        </Text>
                                                    </TextGroup>
                                                    <WrapperIcon data-test="nextButton">
                                                        <Icon
                                                            type="Arrow"
                                                            width="16"
                                                            height="16"
                                                        />
                                                    </WrapperIcon>
                                                </WrapperCard>
                                            </Card>

                                        </>
                                    )
                                }
                                )}
                            </Container>
                            <FooterButtonsContainer>
                                <Button
                                    dataTest="BackButton"
                                    type="outline"
                                    onClick={() => stepBack()}
                                    padding={0}
                                    width={100}
                                >
                                    {translate("BACK")}
                                </Button>
                            </FooterButtonsContainer>
                        </>
                    )}
                </>
            }
        </>
    );
};

export default OriginCompanySelection;
