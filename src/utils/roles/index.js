import store from "../store";

import { CORPORATION, INDIVIDUAL, VISUALIZATION, SIGNING } from "../constants";

export function isCorporationUser() {
  const { userInfo } = store.getState();
  return userInfo.tenants.includes(CORPORATION);
}

export function isIndividualUser() {
  const { userInfo } = store.getState();
  return userInfo.tenants.includes(INDIVIDUAL);
}

export function hasVisualization() {
  const { userInfo } = store.getState();
  return userInfo.roles.includes(VISUALIZATION);
}

export function hasSigning() {
  const { userInfo } = store.getState();
  return userInfo.roles.includes(SIGNING);
}
