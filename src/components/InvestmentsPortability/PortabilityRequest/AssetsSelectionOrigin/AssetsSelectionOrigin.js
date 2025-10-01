import React, { useState, useContext, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import {
    Container,
    Text,
    FooterButtonsContainer,
    TextGroup,
    WrapperIcon,
    TransferFlowCard,
    CustodiansAccountsWrapper,
    InputGroup,
    StyledLine,
    WrapperFlow,
    TableWrapper,
    CheckBox,
    CheckBoxWrapper
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { gray200, gray500, darkGreen } from "../../../../styles/settings";
import { InstanceContext } from "../portabilityRequestContext";
import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import Input from "../../../common/Input";
import Table from "../../../common/Table";
import Checkbox2 from "../../../common/Checkbox2";
import { rem } from "../../../../styles/tools";
import { formatCNPJ } from "../../../../utils/formatNumber";
import { redirect } from "../../../../utils/redirect";
import formatNumber from "../../../../utils/formatNumber";
import { isPtBR } from "../../../../utils/i18n";

const AssetsSelectionOrigin = ({ stepBack, goToStep, currentStep }) => {
    const [selectedLines, setSelectedLines] = useState([]);
    const [allChecked, setAllChecked] = useState(false);
    const [portAll, setPortAll] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(true);
    const [assets, setAssets] = useState([]);

    const {
        loading,
        selectedInstitutions,
        cleanCustodianAccounts,
        assetCategory,
        custodianAccounts,
        requestPortability,
        positions,
        userInfo,
        company
    } = useContext(InstanceContext);

    useEffect(() => {
        currentStep === 5 && setAssets(positions?.filter(item => item.assetCategory === assetCategory));
    }, [positions, currentStep]);

    useEffect(() => {
        const selectedAssetsIndex = [];
        assets?.map((item, index) => {
            if (item.checked) selectedAssetsIndex.push(index)
        });
        setSelectedLines(selectedAssetsIndex)
    }, [assets]);

    const handleSelectAsset = (_, index) => {
        setAllChecked(false);
        const updatedAssets = assets?.map((item, i) =>
            i === index ? {
                ...item,
                transferQuantity: !item.checked ? item.quantity : 0,
                checked: !item.checked
            }
                : item
        );
        setAssets(updatedAssets);
    };

    const formatQuantity = (value) => {
        if (isPtBR()) {
            return formatNumber(value, { digits: 8 }).replace(/0+$/, "").replace(/,(?!\d)/g, "")
        } else {
            return formatNumber(value, { digits: 8 }).replace(/0+$/, "").replace(/\.$/, "");
        }
    };

    const handleAssetQuantity = (value, index) => {


        const assetsWithTransferQuantity = assets?.map((asset, i) =>
            i === index ? {
                ...asset,
                transferQuantity: value
            }
                : asset
        );
        setAssets(assetsWithTransferQuantity);
    };

    const isAllowedTransferQuantity = (values, index) => {

        const { floatValue } = values;

        if (floatValue > assets[index].quantity) return

        if (floatValue === undefined) return true;

        const [integerPart, decimalPart] = floatValue.toString().split(".");

        const isIntegerValid = integerPart.length <= 11;

        const isDecimalValid = !decimalPart || decimalPart.length <= 8;

        return isIntegerValid && isDecimalValid;
    };

    const handleCheckAll = () => {
        if (!allChecked) {
            setAssets(assets.map((asset) => ({
                ...asset,
                checked: true,
                transferQuantity: asset.quantity
            })));
        } else {
            setAssets(assets.map((asset) => ({
                ...asset,
                checked: false,
                transferQuantity: 0
            })));
        }
        setAllChecked(!allChecked);
    };

    const handleStepBack = () => {
        if (assetCategory === "Listados") {
            stepBack();
        } else {
            goToStep(3);
        }
        setSelectedLines([]);
        setAllChecked(false);
        setPortAll(false);
        setAcceptTerms(true);
        setAssets([]);
    };

    const handleSubmit = () => {
        const portabilityItems = () => {
            if (!portAll) {
                const items = assets?.map(asset => {
                    if (asset.checked && asset.transferQuantity) {
                        return (
                            {
                                assetCategory: asset?.assetCategory || null,
                                assetCode: asset?.assetCode || null,
                                assetType: asset?.assetType || null,
                                totalTransferAssetIndicator: false,
                                transferQuantity: Number(asset?.transferQuantity) || null,
                                originAccount: custodianAccounts?.originAccount || null,
                                destinationAccount: custodianAccounts?.destinationAccount || null,
                            }
                        )
                    }
                })
                return (
                    items.filter(item => item != null)
                )
            } else {
                return (
                    [
                        {
                            assetCategory: assetCategory,
                            assetCode: null,
                            assetType: null,
                            totalTransferAssetIndicator: true,
                            transferQuantity: null,
                            originAccount: custodianAccounts?.originAccount || null,
                            destinationAccount: custodianAccounts?.destinationAccount || null,
                        }
                    ]
                )
            }
        };

        const body = {
            id: null,
            investor: {
                documentNumber: userInfo?.tenants[0] === "Individual" ?
                    userInfo?.document : company?.document,
                documentType: userInfo?.tenants[0] === "Individual" ?
                    "CPF" : "CNPJ",
                name: userInfo?.tenants[0] === "Individual" ?
                    userInfo?.givenName + " " + userInfo?.surname : company?.document
            },
            channel: {
                id: 4
            },
            originInstitution: {
                id: selectedInstitutions?.originInstitution?.id || null
            },
            destinationInstitution: {
                id: selectedInstitutions?.destinationInstitution?.id || null
            },
            totalPortabilityIndicator: !acceptTerms,
            portabilityItems: portabilityItems()
        };

        requestPortability(body);
        redirect("/investments-portability");
        setSelectedLines([]);
        setAllChecked(false);
        setPortAll(true);
        setAssets([]);
        cleanCustodianAccounts();
    };



    const headers = [
        {
            title: <CheckBox
                data-test='checkboxAllAssets'
                onChange={() => handleCheckAll()}
                name="checkboxAllAssets"
                checked={allChecked}
            />,
            field: "checkbox",
            style: {
                width: `${rem(10)}`,
                paddingBottom: `${rem(2)}`
            },
        },
        {
            field: "asset",
            title: "ATIVO",
            style: {
                paddingBottom: `${rem(8)}`,
                fontFamily: "Lato"
            }
        },
        {
            field: "type",
            title: "TIPO",
            style: {
                paddingBottom: `${rem(8)}`,
                fontFamily: "Lato",
                width: `${rem(75)}`
            }
        },
        {
            field: "quantityAvalilable",
            title: "QUANTIDADE",
            style: {
                paddingBottom: `${rem(8)}`,
                fontFamily: "Lato",
                width: `${rem(134)}`
            }
        },
        {
            field: "quantityToTransfer",
            title: "QUANTIDADE A TRANSFERIR",
            style: {
                paddingBottom: `${rem(0)}`,
                fontFamily: "Lato",
                width: `${rem(120)}`
            }
        },
    ];


    const buildRows = () => {
        return assets?.map((asset, index) => ({
            checkbox: (
                <CheckBox
                    data-test="checkboxAssets"
                    onChange={() => handleSelectAsset(asset, index)}
                    name="checkboxAssets"
                    checked={asset.checked}
                />
            ),
            asset: (
                <StyledLine>
                    {asset.assetCode}
                </StyledLine>
            ),
            type: (
                <StyledLine>
                    {asset.assetType}
                </StyledLine>
            ),
            quantityAvalilable: (
                <StyledLine>
                    {formatQuantity(asset?.quantity)}
                </StyledLine>
            ),
            quantityToTransfer: (
                <NumericFormat
                    dataTest="quantityToTransfer"
                    name="quantityToTransfer"
                    customInput={Input}
                    placeholder={0}
                    maxLength={21}
                    disabled={!asset.checked}
                    value={asset?.transferQuantity}
                    thousandSeparator={isPtBR() ? "." : ","}
                    decimalSeparator={isPtBR() ? "," : "."}
                    decimalScale={8}
                    fixedDecimalScale={false}
                    allowNegative={false}
                    isAllowed={(values) => isAllowedTransferQuantity(values, index)}
                    onValueChange={(values) => handleAssetQuantity(values.floatValue, index)}
                />
            )
        }));
    };

    return (
        <>
            {currentStep === 5 &&
                <>
                    {loading ? (
                        <DefaultShimmerLoading dataTest="shimmer-loading" repeat={4} innerRepeat={2} />
                    ) : (
                        <>
                            <Container>
                                <TransferFlowCard>
                                    <WrapperFlow>
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
                                    </WrapperFlow>
                                    <InputGroup>
                                        <CheckBoxWrapper>
                                            <Checkbox2
                                                dataTest="PortAllAssetsCheckbox"
                                                onChange={() => setPortAll(!portAll)}
                                                checked={portAll}
                                            />
                                        </CheckBoxWrapper>
                                        <Text
                                            color={darkGreen}
                                            fontSize={14}
                                            lineHeight={16}
                                            fontWeight={400}
                                            letterSpacing={0.4}
                                            data-test="PortAllAssetsDescription"
                                        >
                                            {translate('PORTABILITY_PORTALLASSETS_DESCRIPTION')}
                                        </Text>
                                    </InputGroup>
                                </TransferFlowCard>
                                {!portAll &&
                                    <>
                                        <Text
                                            fontSize={24}
                                            color={gray500}
                                            lineHeight={30}
                                            fontWeight={700}
                                            marginBottom={24}
                                            letterSpacing={0.4}
                                            data-test="PortabilitySelectAssetsTitle"
                                        >
                                            {translate("PORTABILITY_SELECT_ASSETS_TITLE")}
                                        </Text>
                                        <TableWrapper>
                                            <Table
                                                selectedLines={selectedLines}
                                                headers={headers}
                                                data={buildRows()}
                                                borderSpacing={16}
                                                styleTr={{
                                                    height: `${rem(80.5)}`,
                                                    paddingLeft: `-${rem(80.5)}`,
                                                }}
                                            />
                                        </TableWrapper>
                                    </>
                                }
                                <CustodiansAccountsWrapper>
                                    <InputGroup>
                                        <div>
                                            <CheckBox
                                                data-test="acceptPortCheckbox"
                                                onChange={() => setAcceptTerms(!acceptTerms)}
                                                name="acceptPortCheckbox"
                                                checked={acceptTerms}
                                                style={{ marginRight: `${rem(10)}` }}
                                            />
                                        </div>
                                        <Text
                                            color={darkGreen}
                                            fontSize={14}
                                            lineHeight={18}
                                            fontWeight={400}
                                            letterSpacing={0.45}
                                            data-test="SourceAccount"
                                        >
                                            {translate('PORTABILITY_ACCEPT_PORT_ASSETS')}
                                        </Text>
                                    </InputGroup>
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
                                    dataTest="TransferButton"
                                    actionSecondary
                                    onClick={() => handleSubmit()}
                                    disabled={!assets?.some(asset => asset.checked === true) && !portAll}
                                    padding={0}
                                    width={100}
                                >
                                    {translate("CONFIRM_TRANSFER")}
                                </Button>
                            </FooterButtonsContainer>
                        </>
                    )}
                </>
            }
        </ >
    );
};

export default AssetsSelectionOrigin;
