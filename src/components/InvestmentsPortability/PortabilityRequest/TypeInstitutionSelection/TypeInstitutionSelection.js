import React, { useState, useEffect, useContext } from "react";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import {
    Container,
    DropDownWrapper,
    Text,
    FooterButtonsContainer,
    SecondaryText,
    LinkText
} from "./styles";
import { translate } from "../../../../utils/i18n";
import Dropdown from "../components/Dropdown";
import { gray200, gray500 } from "../../../../styles/settings";
import { InstanceContext } from "../portabilityRequestContext";
import Button from "../../../common/Button";
import { checkUserType } from "../../../common/CanAccess/CanAccess";
import { CORPORATION } from "../../../../utils/constants";

const TypeInstitutionSelection = ({ stepForward, currentStep, goToStep }) => {
    const [selectedInstitution, setSelectedInstitution] = useState(null);

    const {
        loading,
        getInstitutions,
        institutions,
        setSelectedInstitutions,
        userInfo,
        setIsOriginBocom,
        isOriginBocom,
        getPositions,
    } = useContext(InstanceContext);

    const investorId = userInfo?.tenantsMembers[0].corpId;

    const isCorporativeUser = checkUserType(userInfo, CORPORATION);

    useEffect(() => {
        if (currentStep === 1) {
            getInstitutions();
            !isCorporativeUser && getPositions(investorId);
            setSelectedInstitution(null);
            setIsOriginBocom(undefined);
        }
    }, [currentStep]);

    const handleNextStep = () => {
        if (isOriginBocom) {
            setSelectedInstitutions({
                originInstitution: { name: "Bocom BBM S.A" },
                destinationInstitution: selectedInstitution
            });
        } else {
            setSelectedInstitutions({
                originInstitution: selectedInstitution,
                destinationInstitution: { name: "Bocom BBM S.A" },
            });
        }
        if (isCorporativeUser) {
            stepForward();
        } else {
            goToStep(3);
        }
    };

    const portabilityTypeOptions = [
        {
            name: translate("PORTABILITY_TYPE_OPTIONS_DROPDOWN_1"),
            isOriginBocom: true
        },
        {
            name: translate("PORTABILITY_TYPE_OPTIONS_DROPDOWN_2"),
            isOriginBocom: false
        }
    ];

    return (
        <>
            {currentStep === 1 &&
                <>
                    {loading ? (
                        <DefaultShimmerLoading dataTest="shimmer-loading" repeat={4} innerRepeat={2} />
                    ) : (
                        <>
                            <Container>
                                <DropDownWrapper>
                                    <Text
                                        fontSize={24}
                                        color={gray500}
                                        lineHeight={20}
                                        fontWeight={700}
                                        marginBottom={16}
                                        letterSpacing={0.4}
                                        data-test="PortabilityTypeTitle"
                                    >
                                        {translate("PORTABILITY_TYPE_OPTIONS_TITLE")}
                                    </Text>
                                    <Text
                                        color={gray200}
                                        fontSize={14}
                                        lineHeight={16}
                                        fontWeight={400}
                                        marginBottom={24}
                                        letterSpacing={0.4}
                                        data-test="PortabilityTypeDescription"
                                    >
                                        {translate("PORTABILITY_TYPE_OPTIONS_DESCRIPTION")}
                                    </Text>
                                    <Dropdown
                                        optionsKey={["name"]}
                                        options={portabilityTypeOptions}
                                        label={translate("PORTABILITY_TYPE_OPTIONS_DROPDOWN_PLACEHOLDER")}
                                        onChange={value => {
                                            if (value.isOriginBocom) {
                                                setIsOriginBocom(true);
                                            } else {
                                                setIsOriginBocom(false);
                                            }
                                        }}
                                        dataTest="DropDownSelectPortabilityType"
                                    />
                                </DropDownWrapper>
                                <DropDownWrapper>
                                    <Text
                                        fontSize={24}
                                        color={gray500}
                                        lineHeight={20}
                                        fontWeight={700}
                                        marginBottom={16}
                                        letterSpacing={0.4}
                                        data-test="PortabilityInstitutionTitle"
                                    >
                                        {translate("ATUCAD_INSTITUTION")}
                                    </Text>
                                    <Text
                                        color={gray200}
                                        fontSize={14}
                                        lineHeight={16}
                                        fontWeight={400}
                                        marginBottom={24}
                                        letterSpacing={0.4}
                                        data-test="PortabilityInstitutionDescription"
                                    >
                                        {translate("PORTABILITY_INSTITUTION_OPTIONS_DESCRIPTION")}
                                    </Text>
                                    <Dropdown
                                        optionsKey={["documentNumber", "name"]}
                                        options={institutions}
                                        label={translate("ATUCAD_INSTITUTION")}
                                        setSourceInstitution
                                        onChange={value => setSelectedInstitution(value)}
                                        dataTest="DropDownSelectInstitution"
                                    />
                                </DropDownWrapper>
                                <SecondaryText>
                                    {translate("PORTABILITY_NO_INSTITUTION_HELP_CONTACT")}
                                    <LinkText href={`mailto:${translate("CONTACT_EMAIL")}`}>
                                        {translate("CONTACT_EMAIL")}.
                                    </LinkText>
                                </SecondaryText>
                            </Container>
                            <FooterButtonsContainer>
                                <Button
                                    dataTest="BackButton"
                                    type="outline"
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                    padding={0}
                                    width={100}
                                    margin={{ r: 16 }}
                                >
                                    {translate("BACK")}
                                </Button>
                                <Button
                                    dataTest="ContinueButton"
                                    actionSecondary
                                    onClick={() => handleNextStep()}
                                    disabled={isOriginBocom === undefined || !selectedInstitution}
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

export default TypeInstitutionSelection;