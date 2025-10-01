import React, { Fragment } from "react";
import { generate } from "shortid";
import { string, shape, arrayOf, bool } from "prop-types";
import Hide from "../../common/Hide";
import {
  isSelf,
  recipientsWithSelfAsFirst,
  isBlocked
} from "../../../utils/exchanges";

import { translate } from "../../../utils/i18n";
const MAX_CHARS = 65;
const MAX_DIFF = 25;

import {
  NameWeight,
  SpacerForName,
  SignDate,
  NamesBox,
  NameLinedTrough
} from "./styles";

function SetListNameGroups({ recipients, groups, group }) {
  const returnedNames = [];
  const truncatedReturnedNames = [];
  const blockedNames = [];
  let chars = 0;
  let items = [];
  const checkUsersAlreadySigned = (groups, group, name) => {
    if (isBlocked(groups, group, name)) {
      blockedNames.push(name);
      return <NameLinedTrough>{name}</NameLinedTrough>;
    }
    return name;
  };

  const checkBeforeLastOr = (group, i) => {
    if (i === group.recipients.length - 1) {
      return "";
    }
    return <SpacerForName> {translate("OR")} </SpacerForName>;
  };

  if (recipients.find(isSelf)) {
    items = recipientsWithSelfAsFirst(recipients);
  } else {
    items = recipients;
  }
  items.map((recipient, i) => {
    chars += recipient.name.length;
    if (i === items.length) {
      const item = (
        <NameWeight
          key={generate()}
          isSelf={isSelf(recipient)}
          data-test={isSelf(recipient) ? "mySignature" : `signer${i}`}
        >
          {recipient.name}
        </NameWeight>
      );
      returnedNames.push(item);

      if (chars <= MAX_CHARS) {
        truncatedReturnedNames.push(item);
      } else {
        const diff = chars - MAX_CHARS;
        if (diff < MAX_DIFF) {
          const name = recipient.name.substring(0, diff);
          const reducedItem = (
            <NameWeight
              key={generate()}
              isSelf={isSelf(recipient)}
              data-test={isSelf(recipient) ? "mySignature" : `signer${i}`}
            >
              {name}
            </NameWeight>
          );
          truncatedReturnedNames.push(reducedItem);
        }
      }
    } else {
      const item = (
        <NameWeight
          key={generate()}
          isSelf={isSelf(recipient)}
          data-test={`signer${i}`}
        >
          {checkUsersAlreadySigned(groups, group, recipient.name)}
          {checkBeforeLastOr(group, i)}
        </NameWeight>
      );
      returnedNames.push(item);

      if (chars <= MAX_CHARS) {
        truncatedReturnedNames.push(item);
      } else {
        const diff = chars - MAX_CHARS;
        if (diff <= MAX_DIFF) {
          const name = recipient.name.substring(0, diff);
          const reducedItem = (
            <NameWeight
              key={generate()}
              isSelf={isSelf(recipient)}
              data-test={isSelf(recipient) ? "mySignature" : `signer${i}`}
            >
              {name}
            </NameWeight>
          );
          truncatedReturnedNames.push(reducedItem);
        }
      }
    }
  });

  return (
    <Fragment>
      <Hide above="lg">
        {returnedNames}
        <SignDate nameSigned positionY>
          {blockedNames &&
            blockedNames.map((c, i) => {
              if (blockedNames.length > 1 && i !== blockedNames.length - 1) {
                return `${c} and `;
              }
              if (blockedNames.length > 1 && i === blockedNames.length - 1) {
                return `${c} ${translate("MORE_THAN_ONE_SIGNED")}`;
              }
              return `${c} ${translate("ALREADY_SIGNED")}`;
            })}
        </SignDate>
      </Hide>
      <Hide below="lg">
        {chars > MAX_CHARS ? (
          <NamesBox
            onMouseEnter={() => this.toggleTooltip(returnedNames)}
            onMouseLeave={() => this.toggleTooltip()}
          >
            {truncatedReturnedNames}...
          </NamesBox>
        ) : (
          <NamesBox>
            {returnedNames}
            <SignDate nameSigned>
              {blockedNames &&
                blockedNames.map((c, i) => {
                  if (
                    blockedNames.length > 1 &&
                    i !== blockedNames.length - 1
                  ) {
                    return `${c} and `;
                  }
                  if (
                    blockedNames.length > 1 &&
                    i === blockedNames.length - 1
                  ) {
                    return `${c} ${translate("MORE_THAN_ONE_SIGNED")}`;
                  }
                  return `${c} ${translate("ALREADY_SIGNED")}`;
                })}
            </SignDate>
          </NamesBox>
        )}
      </Hide>
    </Fragment>
  );
}

SetListNameGroups.propTypes = {
  groups: arrayOf(
    shape({
      group: shape({
        recipients: arrayOf(
          shape({
            email: string,
            embedded: bool,
            name: string,
            status: string,
            type: string
          })
        )
      })
    })
  )
};

export default SetListNameGroups;
