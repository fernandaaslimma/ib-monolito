import React from "react";
import { arrayOf, shape, number, string, bool, func } from "prop-types";
import { Wrapper, WarningSpan } from "./styles";
import formatNumber from "../../../../utils/formatNumber";
import { formatDateToLocale } from "../../../../utils/formatDate";
import { UP } from "../../../../utils/constants";
import DefaultContent from "../../../common/DefaultContent";
import { black30, darkBlue } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import Table from "../../../common/Table";
import Tooltip from "../../../common/Tooltip";
import { translate } from "../../../../utils/i18n";
import { rem } from "../../../../styles/tools";
import ProgressThermometer from "../../../common/ProgressThermometer";

const isDisabledByStatus = status => status !== "pendingApprovement";
const hasApproved = (approvers, document) => {
  const approver = approvers.find(a => a.approverId === document);
  if (approver) {
    return approver.hasApproved;
  }
  return false;
};

const isButtonDisabled = (status, approvers, document) =>
  isDisabledByStatus(status) || hasApproved(approvers, document);

const buildRows = (rows, document) =>
  rows.map((b, i) => ({
    id: b.transferOrderId,
    originAccount: <span>{b.originAccount}</span>,
    schedulingDate: <span>{formatDateToLocale(parseInt(b.dueDate))}</span>,
    favored: <span>{b.recipient.name}</span>,
    agencyAccount: (
      <span>
        {b.recipient.bankBranch} / {b.recipient.bankAccount}
      </span>
    ),
    value: <span>{formatNumber(b.amount, { digits: 2 })}</span>,
    status: returnStatus(b.status, b.approvers, b.requiredApprovements, i),
    disabled: isButtonDisabled(b.status, b.approvers, document),
    sameApprover: !!b.approvers.find(a => a.approverId === document),
    info: (
      <span>
        {b.status === "pendingApprovement" && !b.recipient.accountSaved && (
          <Tooltip
            dataTest="tooltipInfoIcon"
            position={UP}
            width={238}
            texts={[translate("EFT_TOOLTIP_ACCOUNT_NOT_SAVED")]}
          >
            <Icon
              dataTest="tooltipSaveAccount"
              type="Info"
              color={darkBlue}
              width={14}
            />
          </Tooltip>
        )}
      </span>
    )
  }));

export const returnStatus = (
  status,
  approvers,
  requiredApprovements,
  index
) => {
  const approvedLength = approvers.filter(approver => approver.hasApproved)
    .length;
  switch (status) {
    case "expired":
      return <WarningSpan>{translate("EXPIRED")}</WarningSpan>;
    case "reproved":
      return <WarningSpan>{translate("REPROVED")}</WarningSpan>;
    case "pendingApprovement":
      return (
        <ProgressThermometer
          steps={requiredApprovements}
          fill={approvedLength}
          msDelay={index * 100}
        />
      );
    case "canceled":
      return <span>{translate("CANCELED")}</span>;
    case "waitingSettlement":
      return <span>{translate("WAITING_SETTLEMENT")}</span>;
    case "settled":
      return <span>{translate("SETTLED")}</span>;
    default:
      return <span>{translate("PENDING")}</span>;
  }
};

const makeHeaders = (hasAccess, tokenModal) => {
  const customHeaders = [
    {
      title: translate("ORIGIN_ACCOUNT"),
      field: "originAccount",
      width: "15%"
    },
    {
      title: translate("SCHEDULING_DATE"),
      field: "schedulingDate",
      width: "10%"
    },
    {
      title: translate("FAVORED"),
      field: "favored",
      width: "15%"
    },
    {
      title: translate("AGENCY_ACCOUNT"),
      field: "agencyAccount",
      width: "12%"
    },
    {
      title: translate("CURRENCY_HEADER"),
      field: "value",
      width: "11%",
      align: "right"
    },
    {
      title: translate("STATUS"),
      field: "status",
      width: "21%",
      style: { padding: `${rem(5)} ${rem(7)} ${rem(5)} ${rem(50)}` }
    },
    {
      title: "",
      field: "info",
      width: "6%"
    }
  ];

  const aproveHeaders = [
    // TODO Enable cancel button
    // {
    //   title: "",
    //   field: "id",
    //   action: "deny",
    //   width: "4%",
    //   noPadding: true,
    //   callback: this.tokenModal
    // },
    {
      title: "",
      field: "id",
      action: "approve",
      width: "10%",
      noPadding: true,
      callback: tokenModal
    }
  ];

  if (hasAccess) {
    return [...customHeaders, ...aproveHeaders];
  }

  return customHeaders;
};
function Desktop({
  isEmpty,
  pendencies,
  loading,
  hasAccess,
  userInfo,
  tokenModal,
  approveModal
}) {
  if (isEmpty && !loading) {
    return (
      <Wrapper>
        <DefaultContent
          data-test="Empty_Position"
          Icon={() => <Icon type="EmptyWallet" color={black30} />}
          primaryText={translate("NO_RECORDS")}
          secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Table
        headers={makeHeaders(hasAccess, tokenModal)}
        data={buildRows(pendencies.content, userInfo.document)}
        shimmerLoading={{ rows: 10, loading }}
        id="MyPendenciesTable"
        increaseHeight
        approveModal={approveModal}
        pendencies={pendencies}
      />
    </Wrapper>
  );
}

export default Desktop;

Desktop.defaultProps = {
  pendencies: {},
  loading: false,
  isEmpty: false,
  transferOrderId: null
};

Desktop.propTypes = {
  pendencies: shape({
    content: arrayOf(
      shape({
        transferOrderId: string,
        originAccount: string,
        dueDate: number,
        recipient: shape({
          name: string,
          bankId: string,
          bankName: string,
          bankBranch: string,
          bankAccount: string,
          taxId: string
        }),
        amount: number,
        approvers: arrayOf(
          shape({
            approverId: string,
            name: string,
            hasApproved: bool
          })
        )
      })
    ),
    statusCode: number,
    messages: arrayOf(string)
  }),
  loading: bool,
  isEmpty: bool,
  disableButtons: bool,
  hasAccess: bool,
  transferOrderId: string,
  userInfo: shape({
    document: string
  }),
  tokenModal: func
};
