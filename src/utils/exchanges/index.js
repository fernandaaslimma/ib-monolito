import store from "../store";
import { PENDING, COMPLETED, SIGNED, IN_PROGRESS, BLOCKED } from "../constants";

export function getMinByAttribute(array, attrib) {
  return array.reduce((prev, curr) => {
    return prev[attrib] < curr[attrib] ? prev : curr;
  }, {});
}

export function isSelf({ email }) {
  const { userInfo } = store.getState();
  return userInfo.email === email;
}

export function nextToSign(groups) {
  return getMinByAttribute(
    groups.filter(e => e.status === PENDING || e.status === IN_PROGRESS),
    "signOrder"
  );
}

export function isThereAnyWaitingGroup(groups) {
  const pendingGroups = groups.filter(e => e.status === PENDING);
  return pendingGroups.length > 0;
}

export function sameSignOrder(groups) {
  const firstSignOrder = groups[0].signOrder;
  return groups.every(group => {
    return group.signOrder === firstSignOrder;
  });
}

export function isBlocked(groups, group, name, email) {
  const arr = group.recipients.filter(c => c.status === BLOCKED);
  const sameName = arr.find(c => {
    if (email) {
      return c.email === email;
    }
    return c.name === name;
  });
  return !!sameName;
}

export function isWaiting(groups, group) {
  if (group.status !== PENDING) {
    return false;
  }
  const filterGroup = group.recipients.filter(isSelf);
  if (filterGroup.length === 0) {
    return false;
  }

  const same = sameSignOrder(groups);
  if (same) {
    return false;
  }

  const isNext = nextToSign(groups);

  return isNext.id !== group.id;
}

export function isPending(groups, group) {
  const filterGroup = group.recipients.filter(isSelf);
  if (filterGroup.length === 0) {
    return false;
  }
  if (filterGroup.length > 0) {
    if (group.status !== PENDING && group.status !== IN_PROGRESS) {
      return false;
    }
  }

  const same = sameSignOrder(groups);
  if (same) {
    return true;
  }

  const isNext = nextToSign(groups);

  return isNext.id === group.id;
}

export function isThereAnySigned(recipients) {
  return !!recipients.find(e => e.status === COMPLETED || e.status === SIGNED);
}

export function isPendingOrWaiting(groups) {
  const isPendingOrWaiting = groups.find(e => {
    return isPending(groups, e) || isWaiting(groups, e);
  });

  return !!isPendingOrWaiting;
}

export function getLengthSpecialBoxes(groups) {
  const groupsByPending = groups.filter(
    c => isPending(groups, c) || isWaiting(groups, c)
  );

  return groupsByPending.filter(v => v).length;
}

export function reorderArrayItemWithSlice(items, index = -1) {
  if (index === -1) {
    return items;
  }
  return [
    items.find(isSelf),
    ...items.slice(0, index),
    ...items.slice(index + 1)
  ];
}

export function recipientsWithSelfAsFirst(recipients) {
  return reorderArrayItemWithSlice(
    recipients,
    recipients.indexOf(recipients.find(isSelf))
  );
}

export function getUserInProgress(group) {
  const { recipients } = group;
  const findInProgress = recipients.find(
    recipient => recipient.status === IN_PROGRESS
  );
  return !!findInProgress && `${findInProgress.name} `;
}

export function isInProgress(group) {
  const { userInfo } = store.getState();
  const { recipients } = group;

  if (!recipients.find(isSelf)) {
    return false;
  }

  return recipients.some(
    recipient =>
      recipient.status === IN_PROGRESS && recipient.email !== userInfo.email
  );
}
