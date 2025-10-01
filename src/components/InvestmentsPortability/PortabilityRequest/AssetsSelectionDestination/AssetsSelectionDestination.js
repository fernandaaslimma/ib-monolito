import React, { useState, useContext } from "react";
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
    WrapperFlow,
    TableWrapper,
    CheckBox,
    CheckBoxWrapper,
    AddLineButton,
    AddLineText,
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { gray200, gray500, darkGreen, gray100 } from "../../../../styles/settings";
import { InstanceContext } from "../portabilityRequestContext";
import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import Input from "../../../common/Input";
import Table from "../../../common/Table";
import Checkbox2 from "../../../common/Checkbox2";
import { rem } from "../../../../styles/tools";
import { formatCNPJ } from "../../../../utils/formatNumber";
import { redirect } from "../../../../utils/redirect";
import { v4 as uuidv4 } from "uuid";
import { isPtBR } from "../../../../utils/i18n";

const AssetsSelectionDestination = ({ goToStep, currentStep }) => {
    const [portAll, setPortAll] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(true);
    const [assets, setAssets] = useState([{
        assetCode: null,
        transferQuantity: null,
        id: uuidv4(),
    }]);

    const {
        loading,
        selectedInstitutions,
        cleanCustodianAccounts,
        assetCategory,
        custodianAccounts,
        requestPortability,
        userInfo,
        company
    } = useContext(InstanceContext);

    const handleAssetQuantity = (value, item) => {
        if (!value) return

        const assetsWithTransferQuantity = assets?.map((asset) =>
            asset.id === item.id ? {
                ...asset,
                transferQuantity: value
            }
                : asset
        );
        setAssets(assetsWithTransferQuantity);
    };

    const isAllowedTransferQuantity = (values) => {

        const { floatValue } = values;

        if (floatValue === undefined) return true;

        const [integerPart, decimalPart] = floatValue.toString().split(".");

        const isIntegerValid = integerPart.length <= 11;

        const isDecimalValid = !decimalPart || decimalPart.length <= 8;

        return isIntegerValid && isDecimalValid;
    };

    const handleAssetCode = (value, item) => {
        const assetsWithAssetCode = assets?.map((asset) =>
            asset.id === item.id ? {
                ...asset,
                assetCode: value
            }
                : asset
        );
        setAssets(assetsWithAssetCode);
    };

    const handleAddItem = () => {
        setAssets(prevState => [...prevState, {
            assetCode: null,
            transferQuantity: null,
            id: uuidv4()
        }])
    };

    const handleDeleteItem = (item) => {
        if (assets?.length === 1) {
            setAssets([{
                assetCode: null,
                transferQuantity: null,
                id: uuidv4(),
            }])
            return
        }

        const filteredAssets = assets.filter(asset => asset.id !== item.id);
        setAssets(filteredAssets);
    };

    const handleStepBack = () => {
        if (assetCategory === "Listados" || assetCategory === "Balcao") {
            goToStep(4);
        } else {
            goToStep(3);
        }
        setPortAll(false);
        setAcceptTerms(true);
        setAssets([{
            assetCode: null,
            transferQuantity: null,
            id: uuidv4(),
        }]);
    };

    const handleSubmit = () => {
        const portabilityItems = () => {
            if (!portAll) {
                const items = assets?.map(asset => {
                    if (asset.transferQuantity) {
                        return (
                            {
                                assetCategory: assetCategory,
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
                id: 3
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
        setPortAll(true);
        setAssets([]);
        cleanCustodianAccounts();
    };

    const handleValidLastItemInput = () => {
        const lastItem = assets.at(-1);

        if (lastItem?.assetCode && lastItem?.transferQuantity) {
            return true
        }
    };

    const handleValidInput = (index) => {
        const item = assets[index];
        const lastItem = assets.at(-1);

        if (assets.length > 1 && lastItem === item ||
            item?.assetCode && item?.transferQuantity) {
            return true
        }
    };

    const headers = [
        {
            field: "asset",
            title: "ATIVO",
            height: `${rem(48)}`,
            width: `${rem(260)}`,
            style: {
                fontFamily: "Lato",
                padding: `${rem(0)}`,
                paddingLeft: `${rem(1)}`,
                paddingRight: `${rem(8)}`,
                paddingBottom: `${rem(16)}`,
            }
        },
        {
            field: "transferQuantity",
            title: "QUANTIDADE A TRANSFERIR",
            height: `${rem(48)}`,
            width: `${rem(260)}`,
            style: {
                padding: `${rem(0)}`,
                paddingBottom: `${rem(16)}`,
                paddingLeft: `${rem(8)}`,
                fontFamily: "Lato"
            }
        },
        {
            field: "deleteItem",
            style: {
                width: `${rem(34)}`,
                padding: `${rem(0)}`,
                paddingLeft: `${rem(17)}`,
                paddingBottom: `${rem(10)}`,
            }
        },
    ];

    const buildRows = () => {
        return assets?.map((asset, index) => ({
            asset: (
                <Input
                    dataTest="assetCode"
                    type="text"
                    name="assetCode"
                    maxLength={14}
                    onChange={(e) => handleAssetCode(e.target.value, asset)}
                    value={asset?.assetCode}
                />
            ),
            transferQuantity: (
                <NumericFormat
                    dataTest="quantityToTransfer"
                    name="quantityToTransfer"
                    customInput={Input}
                    maxLength={21}
                    value={asset?.transferQuantity || ''}
                    thousandSeparator={isPtBR() ? "." : ","}
                    decimalSeparator={isPtBR() ? "," : "."}
                    decimalScale={8}
                    fixedDecimalScale={false}
                    allowNegative={false}
                    isAllowed={(values) => isAllowedTransferQuantity(values)}
                    onValueChange={(values) => handleAssetQuantity(values.floatValue, asset)}
                />
            ),
            deleteItem: (
                <Icon
                    onClick={() => handleDeleteItem(asset)}
                    type="TrashCan"
                    width="15"
                    height="16.88"
                    dataTest="trashcan"
                    iconColor={handleValidInput(index) ? "red" : gray100}
                />
            )
        }))
    };


    return (
        <>
            {currentStep === 6 &&
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
                                            marginBottom={28}
                                            letterSpacing={0.4}
                                            data-test="PortabilitySelectAssetsTitle"
                                        >
                                            {translate("PORTABILITY_SELECT_ASSETS_TITLE_OTHER_ORIGIN_INSTITUTION")}
                                        </Text>
                                        <TableWrapper>
                                            <Table
                                                key={assets?.length + assets[0].id}
                                                headers={headers}
                                                data={buildRows()}
                                                noBorderSpacing
                                                spaceBetweenHeadAndBody={24}
                                                styleTr={{
                                                    height: `${rem(64)}`,
                                                }}
                                            />
                                        </TableWrapper>
                                        <AddLineButton
                                            valid={handleValidLastItemInput()}
                                            data-test="addLineButton"
                                            onClick={() => handleValidLastItemInput() && handleAddItem()}
                                        >
                                            +<AddLineText> Novo Ativo</AddLineText>
                                        </AddLineButton>
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
                                    disabled={(!assets.at(-1)?.transferQuantity || !assets.at(-1)?.assetCode) && !portAll}
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
        </>
    );
};

export default AssetsSelectionDestination;