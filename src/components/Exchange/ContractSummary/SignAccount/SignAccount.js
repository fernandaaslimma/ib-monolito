import React from "react";
import { string, arrayOf, shape, bool, number } from "prop-types";
import ContractCallToAction from "../ContractCallToAction";
import { EMPTY } from "../../../../utils/constants";
import {
  Wrapper,
  SummaryRow,
  ContainerBox,
  IconWrapper,
  Paragraph,
  Spacer
} from "./styles";

import NameItem from "../../NameItem";
import GroupCard from "../../../common/GroupCard";
import Icon from "../../../common/Icon";
import {
  isThereAnyWaitingGroup,
  isWaiting,
  isPending,
  isThereAnySigned,
  isPendingOrWaiting,
  isInProgress,
  getUserInProgress,
  getLengthSpecialBoxes,
  isBlocked
} from "../../../../utils/exchanges";
import { translate } from "../../../../utils/i18n";

import { generate } from "shortid";
import { white, grey90 } from "../../../../styles/settings";

const groupIsInProgress = groupsInProgress => group =>
  groupsInProgress.includes(group.id);

function SignAccount({ groups, contractId, groupsInProgress, email }) {
  const groupInProgress = groupIsInProgress(groupsInProgress);

  return (
    <Wrapper data-test="signatures">
      {groups.map((group, i) => {
        const inProgress = isInProgress(group) || groupInProgress(group);
        return (
          <SummaryRow
            status={group.status}
            pendingBox={
              isPending(groups, group) &&
              !isBlocked(groups, group, EMPTY, email)
            }
            waitingBox={
              isWaiting(groups, group) &&
              !isBlocked(groups, group, EMPTY, email)
            }
            key={generate()}
            by3Multiple={groups.length % 3 === 0}
            groupsSize={groups.length}
            isThereAnyWaitingGroup={isThereAnyWaitingGroup(groups)}
            recipientsSize={group.recipients.length}
            data-test={`group${i}`}
            isPendingOrWaiting={isPendingOrWaiting(groups)}
            inProgressBox={
              inProgress && !isBlocked(groups, group, EMPTY, email)
            }
            getLengthSpecialBoxes={getLengthSpecialBoxes(groups)}
            blockedBox={isBlocked(groups, group, EMPTY, email)}
          >
            {!inProgress && (
              <GroupCard
                status={group.status}
                icon={"SignatureGroup"}
                iconColor={grey90}
                waitingBox={isWaiting(groups, group)}
                pendingBox={isPending(groups, group)}
                recipientsSize={group.recipients.length}
                title={
                  isWaiting(groups, group) ||
                  isPending(groups, group) ||
                  !isThereAnySigned(group.recipients)
                    ? `${translate("PENDING_SIGNATURE")}`
                    : `${translate("COMPLETED_SIGNATURE")}`
                }
                blockedBox={isBlocked(groups, group, EMPTY, email)}
                titleSignatures
              >
                <NameItem data={group} groups={groups} />
              </GroupCard>
            )}
            {isWaiting(groups, group) &&
              !inProgress &&
              !isBlocked(groups, group, EMPTY, email) && (
                <ContainerBox data-test="waiting_signature">
                  {" "}
                  <Paragraph>
                    <IconWrapper>
                      <Icon type="WaitingWarning" color={white} />
                    </IconWrapper>

                    {translate("WAITING_THE_PREVIOUS_SIGNATURES")}
                  </Paragraph>
                </ContainerBox>
              )}
            {isPending(groups, group) &&
              !inProgress &&
              !isBlocked(groups, group, EMPTY, email) && (
                <ContractCallToAction
                  contractId={contractId}
                  group={group}
                  width="190"
                  data-test="signBtn"
                  marginTop="0"
                  isPending={isPending(groups, group)}
                />
              )}
            {inProgress && !isBlocked(groups, group, EMPTY, email) && (
              <ContainerBox blockUser data-test="SignInProgress">
                <Paragraph>
                  <IconWrapper highPadding>
                    <Icon type="WaitingWarning" color={white} />
                  </IconWrapper>
                  <Spacer>
                    {getUserInProgress(group)}
                    {translate(
                      "IS_SIGNING_TRY_TO_CHECK_THE_STATUS_OF_THIS_CONTRACT_AGAIN_IN_5_MINUTES"
                    )}
                  </Spacer>
                </Paragraph>
              </ContainerBox>
            )}
            {isBlocked(groups, group, EMPTY, email) && inProgress && (
              <GroupCard
                titleSignatures
                status={group.status}
                icon={"SignatureGroup"}
                iconColor={grey90}
                title={`${translate("PENDING_SIGNATURE")}`}
              >
                <NameItem data={group} groups={groups} />
              </GroupCard>
            )}
          </SummaryRow>
        );
      })}
    </Wrapper>
  );
}

SignAccount.defaultProps = {
  groupsInProgress: []
};

SignAccount.propTypes = {
  groupsInProgress: arrayOf(string),
  groups: arrayOf(
    shape({
      id: string,
      name: string,
      recipients: arrayOf(
        shape({
          email: string,
          embedded: bool,
          name: string,
          status: string,
          type: string
        })
      ),
      signOrder: number,
      status: string
    })
  ).isRequired,
  contractId: string
};

export default SignAccount;
