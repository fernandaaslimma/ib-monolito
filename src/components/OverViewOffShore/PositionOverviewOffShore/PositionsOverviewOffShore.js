import React, { useState } from 'react'
import { Container, Wrapper } from './styles';
import SwipeableViews from 'react-swipeable-views';
import DonutChart from '../../common/DonutChart';
import ConsolidatedInfoChart from '../../Overview/PositionsOverview/ConsolidatedInfoChart';
import { translate } from '../../../utils/i18n';
import { ONE_HUNDRED } from '../../../utils/constants';
import DetailsPositionChartsOffShore from '../DetailsPositionChartsOffShore';

const PositionsOverviewOffShore = ({ consolidatedPosition, loading, currentCoin }) => {
    const [hideValues, setHideValues] = useState(false);

    const generateSum = consolidatedPosition => {
        const initialConsolidatedPosition = {
            grossBalance: 0,
            portfolioShare: ONE_HUNDRED
        };

        return consolidatedPosition.reduce((acc, current) => {
            acc.grossBalance += current.grossBalance;
            return acc;
        }, initialConsolidatedPosition);
    };

    const totalConsolidatedPosition = () => consolidatedPosition.length === 0 ? 0 : generateSum(consolidatedPosition);

    return (
        <React.Fragment>
            <Wrapper>
                {consolidatedPosition?.length > 0 && (
                    <React.Fragment>
                        <SwipeableViews disabled={true}>
                            <section>
                                <DonutChart
                                    assets={consolidatedPosition}
                                    dataTest="donutChatOffShore"
                                    loading={loading}
                                    title={translate("OVERVIEW_CHART_PRODUCTS")}
                                >
                                    <ConsolidatedInfoChart
                                        hideValues={hideValues}
                                        total={totalConsolidatedPosition()}
                                        callback={() => setHideValues(!hideValues)}
                                        currentCoin={currentCoin}
                                    />
                                </DonutChart>
                            </section>
                        </SwipeableViews>
                    </React.Fragment>
                )}
            </Wrapper>

            <Container>
                <DetailsPositionChartsOffShore
                    assets={consolidatedPosition}
                    loading={loading}
                    hideValues={hideValues}
                    currentCoint={currentCoin}
                />
            </Container>
        </React.Fragment>
    )
}

export default PositionsOverviewOffShore
