import React, { Fragment, useState } from 'react'
import { ChartInfo, ChartTitle, ExpandCollapseArrow, Title, WrapperButton, WrapperCard, WrapperChart, WrapperIcon, WrapperSubCard, WrapperSubChart } from './styles';
import Card from '../../common/Card';
import ShimmerLoading from '../../common/ShimmerLoading';
import getColorForAsset from '../../../utils/getColorForAsset';
import SimpleChartPie from "../../common/SimpleChartPie";
import { gray300, gray90 } from '../../../styles/settings';
import HideableValue from '../../common/HideableValue';
import Icon from '../../common/Icon';
import { formatDateToLocale } from '../../../utils/formatDate';
import { translate } from '../../../utils/i18n';
import { Button } from 'react-bocombbm-components';
import { redirect } from '../../../utils/redirect';

const DetailsPositionChartsOffShore = ({ loading, assets, hideValues, colorForAsset, currentCoint }) => {
    const [typesSelected, setTypeAtual] = useState([]);
    const handleClick = (type) => setTypeAtual(typesSelected?.includes(type) ? typesSelected?.filter(item => item !== type) : [...typesSelected, type]);
    const hasIncludeType = (type) => typesSelected?.includes(type);
    
    const renderLoadingMode = () => {
        return (
            <Fragment>
                {[0, 1, 2].map((_, index) => (
                    <WrapperChart
                        key={index}
                        data-test={`ConsolidatedPositionOffShore_loading_${index}`}
                        loading={loading}
                    >
                        <Card>
                            <WrapperCard>
                                <ShimmerLoading circle width={48} height={48} />
                                <ChartInfo>
                                    <ChartTitle>
                                        <ShimmerLoading width={80} height={14} />
                                    </ChartTitle>
                                    <ShimmerLoading width={80} height={12} darker />
                                </ChartInfo>
                            </WrapperCard>
                        </Card>
                    </WrapperChart>
                ))}
            </Fragment>
        );
    };

    const buildSubCard = (assets) => {
        return assets?.length > 0 ? (
            assets?.map((asset, index) => (
                <WrapperSubChart key={index} data-test={`ConsolidatedPositionOffShore_subCard_${index}`}>
                    <Card styles={"background: #F9FAFB; box-shadow: none;"}>
                        <WrapperCard>
                            <SimpleChartPie
                                dataTest={`chart_${index}`}
                                percentage={asset.portfolioShare ? asset.portfolioShare : 0}
                                background={gray90}
                                color={getColorForAsset(1)}
                                width={48}
                            />
                            <ChartInfo>
                                <ChartTitle
                                    data-test="productName_subCard"
                                    ellipsis={true}
                                    widthTagEllipsis="100%"
                                >
                                    {asset.name}
                                </ChartTitle>
                                <HideableValue
                                    hide={hideValues}
                                    currency={currentCoint}
                                    value={asset.accruedBalance}
                                    currencyColor={gray300}
                                    currencySize={12}
                                />
                            </ChartInfo>
                        </WrapperCard>
                    </Card>
                </WrapperSubChart>
            ))
        ) : (
            <WrapperChart data-test={"ConsolidatedPositionOffShore_subCard_default_loading"}>
                <Card styles={"background: #F9FAFB; box-shadow: none;"}>
                    <WrapperCard>
                        <ShimmerLoading circle width={48} height={48} />
                        <ChartInfo>
                            <ChartTitle data-test="productName_subCard">
                                <ShimmerLoading width={80} height={14} />
                            </ChartTitle>
                            <ShimmerLoading width={80} height={12} darker />
                        </ChartInfo>
                    </WrapperCard>
                </Card>
            </WrapperChart>
        );
    };

    return loading ? (
        renderLoadingMode()
    ) : (
        <Fragment>
            {assets?.map((position, index) => (
                <WrapperChart key={index} data-test={`ConsolidatedPositionOffShore_main_card_${index}`}>
                    <Card>
                        <WrapperCard>
                            {loading ? (
                                <ShimmerLoading circle width={48} height={48} />
                            ) : (
                                <SimpleChartPie
                                    dataTest={`chart_${index}`}
                                    percentage={
                                        position.portfolioShare ? position.portfolioShare : 0
                                    }
                                    background={gray90}
                                    color={getColorForAsset(
                                        colorForAsset ? colorForAsset : index
                                    )}
                                    width={48}
                                />
                            )}

                            <ChartInfo>
                                <ChartTitle data-test={`productName_${index}`}>
                                    {loading ? (
                                        <ShimmerLoading width={30} height={14} />
                                    ) : (
                                        position.name
                                    )}
                                </ChartTitle>
                                {loading ? (
                                    <ShimmerLoading width={30} height={12} darker />
                                ) : (
                                    <HideableValue
                                        hide={hideValues}
                                        currency={currentCoint}
                                        value={position.grossBalance}
                                        currencyColor={gray300}
                                        currencySize={12}
                                    />
                                )}
                            </ChartInfo>
                            <WrapperIcon
                                data-test={`buttonIcon_${index}`}
                                onClick={() => handleClick(position.assetType)}
                            >
                                <ExpandCollapseArrow
                                    collapse={hasIncludeType(position.assetType)}
                                >
                                    <Icon
                                        type="Arrow"
                                        width="16"
                                        height="16"
                                    />
                                </ExpandCollapseArrow>
                            </WrapperIcon>
                        </WrapperCard>
                        {hasIncludeType(position.assetType) && (
                            <WrapperSubCard>
                                <Title>{`${translate(
                                    "OVERVIEW_CONSOLIDATED_DATE"
                                )}${formatDateToLocale(position.date)}`}</Title>
                                {buildSubCard(position.assets)}
                                <WrapperButton>
                                    <Button
                                        onClick={() => redirect(position.route)}
                                        disabled={position.route ? false : true}
                                        dataTest="showButtonDetailedOffShore"
                                        spacing={{
                                            top: "s",
                                            bottom: "s",
                                            right: "s",
                                            left: "s"
                                        }}
                                        type="outline"
                                    >
                                        {translate("OVERVIEW_REDIRECT_BUTTON")}
                                    </Button>
                                </WrapperButton>
                            </WrapperSubCard>
                        )}
                    </Card>
                </WrapperChart>
            ))}
        </Fragment>
    );
}

export default DetailsPositionChartsOffShore
