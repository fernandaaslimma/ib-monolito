import React, { useContext } from "react";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import {
    Container,
    TitleWrapper,
    Text,
    FooterButtonsContainer,
    WrapperCard,
    TextGroup,
    WrapperIcon,
    EmptyCard
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { gray200, gray500, gray300, blueGray } from "../../../../styles/settings";
import { InstanceContext } from "../portabilityRequestContext";
import Button from "../../../common/Button";
import Card from "../../../common/Card";
import Icon from "../../../common/Icon";
import { checkUserType } from "../../../common/CanAccess/CanAccess";
import { CORPORATION } from "../../../../utils/constants";

const OriginAccountTypeSelection = ({ stepBack, goToStep, currentStep }) => {
    const {
        loading,
        setAssetCategory,
        userInfo,
        positions,
        isOriginBocom
    } = useContext(InstanceContext);

    const isCorporativeUser = checkUserType(userInfo, CORPORATION);

    const handleGoBack = () => {
        if (isCorporativeUser && isOriginBocom) {
            stepBack();
        } else {
            goToStep(1);
        }
    };

    const handleNextStep = (item) => {
        setAssetCategory(item.assetCategory);
        goToStep(item.nextStep);
    };

    const assetsListed = positions?.filter(item => item.assetCategory === "Listados");

    const assetsCounter = positions?.filter(item => item.assetCategory === "Balcao");

    const assetsOthers = positions?.filter(item => item.assetCategory === "Outros");

    const accountTypes = [
        {
            title: "PORTABILITY_SOURCE_ACCOUNT_TYPE_LISTED_TITLE",
            description: "PORTABILITY_SOURCE_ACCOUNT_TYPE_LISTED_DESCRIPTION",
            nextStep: 4,
            emptyState: assetsListed?.length === 0 && isOriginBocom,
            assetCategory: "Listados"
        },
        {
            title: "PORTABILITY_SOURCE_ACCOUNT_TYPE_COUNTER_TITLE",
            description: "PORTABILITY_SOURCE_ACCOUNT_TYPE_COUNTER_DESCRIPTION",
            nextStep: isOriginBocom ? 5 : 4,
            emptyState: assetsCounter?.length === 0 && isOriginBocom,
            assetCategory: "Balcao"
        },
        {
            title: "PORTABILITY_SOURCE_ACCOUNT_TYPE_OTHERS_TITLE",
            description: "PORTABILITY_SOURCE_ACCOUNT_TYPE_OTHERS_DESCRIPTION",
            nextStep: isOriginBocom ? 5 : 6,
            emptyState: assetsOthers?.length === 0 && isOriginBocom,
            assetCategory: "Outros"
        }
    ];

    return (
        <>
            {currentStep === 3 &&
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
                                        data-test="SourceAccountTypeTitle"
                                    >
                                        {translate("PORTABILITY_SOURCE_ACCOUNT_TYPE_TITLE")}
                                    </Text>
                                    <Text
                                        color={gray200}
                                        fontSize={14}
                                        lineHeight={16}
                                        fontWeight={400}
                                        marginBottom={24}
                                        letterSpacing={0.4}
                                        data-test="SourceAccountTypeDescription"
                                    >
                                        {translate("PORTABILITY_SOURCE_ACCOUNT_TYPE_DESCRIPTION")}
                                    </Text>
                                </TitleWrapper>
                                {accountTypes?.map((item, i) => {
                                    return (
                                        <>
                                            <Card
                                                styles={!item.emptyState && `margin-bottom: 16px`}
                                                key={i}
                                            >
                                                <WrapperCard
                                                    onClick={() => !item.emptyState && handleNextStep(item)}                                                >
                                                    <TextGroup>
                                                        <Text
                                                            fontSize={16}
                                                            color={item.emptyState ? blueGray : gray500}
                                                            lineHeight={20}
                                                            fontWeight={700}
                                                            marginBottom={8}
                                                            letterSpacing={0.4}
                                                            data-test="AccountTypeTitle"
                                                        >
                                                            {translate(item.title)}
                                                        </Text>
                                                        <Text
                                                            color={item.emptyState ? blueGray : gray500}
                                                            fontSize={12}
                                                            lineHeight={16}
                                                            fontWeight={400}
                                                            marginBottom={0}
                                                            marginRight={75}
                                                            letterSpacing={0.4}
                                                            data-test="AccountTypeDescription"
                                                        >
                                                            {translate(item.description)}
                                                        </Text>
                                                    </TextGroup>
                                                    {!item.emptyState && <WrapperIcon
                                                        data-test="nextButton"
                                                    >
                                                        <Icon
                                                            type="Arrow"
                                                            width="16"
                                                            height="16"
                                                        />
                                                    </WrapperIcon>}
                                                </WrapperCard>
                                            </Card>
                                            {item.emptyState &&
                                                <EmptyCard>
                                                    <Text
                                                        color={gray300}
                                                        fontSize={12}
                                                        fontWeight={600}
                                                        marginBottom={0}
                                                        marginRight={6}
                                                        data-test="EmptyPositionCard"
                                                    >
                                                        {translate("PORTABILITY_EMPTY_POSITION")}
                                                    </Text>
                                                    <Icon
                                                        type="Attention"
                                                        width="16"
                                                        height="16"
                                                    />
                                                </EmptyCard>}
                                        </>
                                    )
                                }
                                )}
                            </Container>
                            <FooterButtonsContainer>
                                <Button
                                    dataTest="BackButton"
                                    type="outline"
                                    onClick={() => handleGoBack()}
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

export default OriginAccountTypeSelection;
