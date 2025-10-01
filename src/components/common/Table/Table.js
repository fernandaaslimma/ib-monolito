import React, { Fragment } from "react";
import { isInternetExplorer as isIe } from "../../../utils/getNavigator";
import RejectWhite from "../../../assets/imgs/reject-white.png";
import Button from "../../common/Button";
import {
  arrayOf,
  string,
  object,
  bool,
  func,
  shape,
  array,
  number
} from "prop-types";
import {
  Title,
  Table,
  CollapseTable,
  Thead,
  Th,
  Tbody,
  BodyTr,
  Td,
  CollapseTd,
  CollapseTotalTd,
  TotalTable,
  TotalBodyTr,
  TotalTd,
  TotalTh,
  TotalTdLabel,
  Background,
  IconWrapper,
  ActionWrapper,
  DenyWhiteImg,
  ButtonWrapper,
  Separator,
  Tr
} from "./styles";

import { Container } from "../../../styles/grid";
import { translate } from "../../../utils/i18n";
import { UP, DOWN, CREATE_TRANSACTION } from "../../../utils/constants";
import formatNumber from "../../../utils/formatNumber";
import capitalize from "../../../utils/capitalize";
import Icon from "../Icon";
import { black50, white } from "../../../styles/settings";
import ShimmerLoading from "../ShimmerLoading";
import { rem } from "../../../styles/tools";
import PendingTransactions from "../PendingTransactions";
import { checkIfHasAccess } from "../CanAccess/CanAccess";

export const generateTotalTable = (headers, total) => {
  const shimmerTotalRows = buildShimmerTotalRow(headers);

  const header = headers.map(h =>
    h.total && shimmerTotalRows[h.field] !== undefined ? (
      <TotalTh align={h.align} width={h.width} key={h.field}>
        {h.title}
        {h.currency && " (R$)"}
        {h.percent && " (%)"}
      </TotalTh>
    ) : (
      <TotalTh align={h.align} width={h.width} key={h.field} />
    )
  );

  const row = headers.map((h, i) => {
    if (h.total && shimmerTotalRows[h.field] !== undefined) {
      return (
        <TotalTd align={h.align} width={h.width} key={h.field}>
          {total
            ? formatNumber(total[h.field], h.currency ? { digits: 2 } : {})
            : shimmerTotalRows[h.field]}
        </TotalTd>
      );
    } else if (i === 0) {
      return (
        <TotalTdLabel align={h.align} width={h.width} key={h.field}>
          {translate("TOTAL")}
        </TotalTdLabel>
      );
    } else {
      return <TotalTd align={h.align} width={h.width} key={h.field} />;
    }
  });

  return (
    <TotalTable>
      <Thead>
        <tr>{header}</tr>
      </Thead>
      <Tbody>
        <TotalBodyTr>{row}</TotalBodyTr>
      </Tbody>
    </TotalTable>
  );
};

export const generateCollapseTable = (collapse, headers, totalData) => {
  const rows = getRows(collapse.shimmerLoading, collapse.data, headers);
  const rowsTotal = getRows(collapse.shimmerLoading, totalData, headers);
  const total = rowsTotal && rowsTotal?.length > 0 ? rowsTotal[0] : rowsTotal;

  return (
    <BodyTr>
      <td colSpan={headers?.length}>
        <Background withBackground withCollapse>
          <CollapseTable>
            <Tbody>
              {rows?.map((d, i) => (
                <BodyTr key={`row-${i}`} zebra>
                  {headers.map(h => (
                    <CollapseTd
                      shimmerLoading={collapse.shimmerLoading}
                      align={h.align}
                      width={h.width}
                      key={`${h.field}-${i}`}
                    >
                      <Fragment>{d[h.field] || ""}</Fragment>
                    </CollapseTd>
                  ))}
                </BodyTr>
              ))}
              <BodyTr>
                {headers.map((h, i) => {
                  return (
                    <CollapseTotalTd
                      shimmerLoading={collapse.shimmerLoading}
                      align={h.align}
                      width={h.width}
                      key={h.field}
                    >
                      {i === 0 ? (
                        translate("TOTAL")
                      ) : (
                        <Fragment>{total[h.field] || ""}</Fragment>
                      )}
                    </CollapseTotalTd>
                  );
                })}
              </BodyTr>
            </Tbody>
          </CollapseTable>
          {collapse.render}
        </Background>
      </td>
    </BodyTr>
  );
};

export const renderIcon = (collapse, i, isFirstItem) => {
  if (collapse && isFirstItem) {
    return (
      <IconWrapper collapse={collapse.index === i}>
        <Icon type="Arrow" color={black50} width="10" />
      </IconWrapper>
    );
  }
  return null;
};

export const renderAction = (data, header, pendency, approveModal) => {
  const isDisabled = data["disabled"];
  if (
    (header.action === "approve" || header.action === "deny") &&
    data.sameApprover
  ) {
    return (
      <ActionWrapper disabled={isDisabled}>
        {header.action === "deny" && (
          <ButtonWrapper>
            <Button
              isWarning
              disabled={isDisabled}
              width={24}
              height={24}
              paddingSize={0}
              onClick={() => header.callback(data[header.field], "deny")}
            >
              {isIe() ? (
                <DenyWhiteImg src={RejectWhite} alt="checkWhite" />
              ) : (
                <Icon
                  type="Deny2"
                  color={white}
                  width="11%"
                  height="11%"
                  fixCrossAxisAlign={-12.8}
                />
              )}
            </Button>
          </ButtonWrapper>
        )}
        {header.action === "approve" && (
          <ButtonWrapper>
            <Button
              isCallToAction
              width={90}
              height={30}
              paddingSize={0}
              approveButton
              disabled={isDisabled}
              onClick={() =>
                isDisabled ? false : approveModal(pendency, header, data)
              }
            >
              {/* {isIe() ? (
                <CheckWhiteImg src={CheckWhite} alt="checkWhite" />
              ) : (
                <Icon
                  type="Check2"
                  data-test="approveTransferBtn"
                  color={white}
                  width="13%"
                  height="13%"
                  fixCrossAxisAlign={-11.8}
                />
              )} */
              /* Enable this button when cancel EFT is enabled */}
              <span>{translate("APPROVE")}</span>
            </Button>
          </ButtonWrapper>
        )}
      </ActionWrapper>
    );
  }

  return null;
};

export const renderInfo = (data, header, collapse, index, isFirstItem) => {
  if (!isFirstItem && collapse && collapse.index === index) {
    return null;
  }
  return <Fragment>{data[header.field] || ""}</Fragment>;
};

export const buildShimmerTotalRow = headers => {
  const shimmerTotal = {};
  headers.forEach(header => {
    if (header.field !== "") {
      shimmerTotal[header.field] = <ShimmerLoading darker />;
    }
  });
  return shimmerTotal;
};

export const buildShimmerRows = (headers, shimmerLoading) => {
  const rows = [];
  for (let i = 0; i < shimmerLoading.rows; i++) {
    const row = [];
    headers.forEach(header => {
      if (header.field !== "") {
        row[header.field] = (
          <ShimmerLoading index={i} inverse={shimmerLoading.inverse} />
        );
      }
    });
    rows.push(row);
  }
  return rows;
};

export const getRows = (shimmerLoading, data, headers) => {
  if (shimmerLoading && shimmerLoading.loading) {
    return buildShimmerRows(headers, shimmerLoading);
  }
  return data;
};

const CustomTable = ({
  title,
  data,
  headers,
  total,
  id,
  totalPosition,
  zebra,
  collapse,
  withBackground,
  render,
  shimmerLoading,
  increaseHeight,
  approveModal,
  pendencies,
  pendingTransactions,
  withSeparator,
  selectedLine,
  selectedLines,
  borderSpacing,
  spaceBetweenHeadAndBody,
  userInfo,
  styleTr,
  noBorderSpacing
}) => {
  const rows = getRows(shimmerLoading, data, headers);

  return (
    <Container id={id}>
      {title && <Title>{capitalize(title)}</Title>}
      {totalPosition === UP && generateTotalTable(headers, total)}
      {checkIfHasAccess(userInfo, [CREATE_TRANSACTION]) &&
        pendingTransactions &&
        pendingTransactions?.length > 0 && (
          <PendingTransactions
            backgroundColor={"#EEF1F3"}
            pendingTransactions={pendingTransactions}
            mode={"desktop"}
          />
        )}
      <Background withBackground={withBackground}>
        <Table
          noBorderSpacing={noBorderSpacing}
          zebra={zebra}
          withBackground={withBackground}
          increaseHeight={increaseHeight}
          borderSpacing={borderSpacing}
        >
          <Thead>
            <Tr spaceBetweenHeadAndBody={spaceBetweenHeadAndBody}>
              {data?.length > 0 &&
                headers &&
                headers.map((h, i) => (
                  <Th
                    withBackground={withBackground}
                    align={h.align}
                    width={h.width}
                    style={h.style}
                    key={i}
                  >
                    {h.title}
                    {h.currency && " (R$)"}
                    {h.percent && " (%)"}
                  </Th>
                ))}
            </Tr>
          </Thead>
          {spaceBetweenHeadAndBody && (
            <div style={{ paddingBottom: `${rem(spaceBetweenHeadAndBody)}` }} />
          )}
          <Tbody>
            {rows?.map((d, i) => (
              <Fragment key={`row-${i}`} style={{ border: "1px solid #000" }}>
                <BodyTr
                  data-test={`Row_${d["id"] ? d["id"] : i}`}
                  onClick={() => collapse && collapse.onCollapse(i)}
                  zebra={zebra}
                  collapse={!!collapse}
                  selectedLine={selectedLine === i}
                  selectedLines={selectedLines?.find(line => line === i) != undefined}
                  style={styleTr}
                >
                  {headers.map((h, index) => (
                    <Td
                      shimmerLoading={shimmerLoading}
                      style={h.style}
                      align={h.align}
                      width={h.width}
                      noPadding={h.noPadding}
                      key={`${h.field}-${i}${h.action}`}
                    >
                      {h.action &&
                        renderAction(d, h, pendencies.content[i], approveModal)}
                      {renderIcon(collapse, i, index === 0)}
                      {!h.action && renderInfo(d, h, collapse, i, index === 0)}
                    </Td>
                  ))}
                </BodyTr>
                {collapse &&
                  collapse.index === i &&
                  generateCollapseTable(collapse, headers, d)}
                {withSeparator && i < rows?.length - 1 && <Separator />}
              </Fragment>
            )
            )}
          </Tbody>
        </Table>
        {render}
      </Background>
      {totalPosition === DOWN && generateTotalTable(headers, total)}
    </Container >
  );
};

CustomTable.defaultProps = {
  headers: [],
  total: null,
  title: "",
  totalPosition: null,
  zebra: false,
  withBackground: false,
  render: null,
  style: null,
  shimmerLoading: null
};

CustomTable.propTypes = {
  headers: arrayOf(object),
  data: arrayOf(object).isRequired,
  total: object,
  totalPosition: string,
  title: string,
  zebra: bool,
  collapse: shape({
    onCollapse: func,
    data: array,
    index: number,
    render: object,
    shimmerLoading: shape({
      rows: number,
      loading: bool,
      inverse: bool
    })
  }),
  shimmerLoading: shape({
    rows: number,
    loading: bool
  }),
  withBackground: bool,
  render: object
};

export default CustomTable;
