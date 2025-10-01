import React from "react";
import { arrayOf, string, shape, node, func, bool } from "prop-types";

export const checkUserType = (userInfo, userType) => {
  if (Array.isArray(userType)) {
    return userType.includes(userInfo.tenants && userInfo.tenants[0]);
  }
  return userInfo.tenants && userInfo.tenants[0] === userType;
};

export const checkIfHasAccess = (userInfo, roles = [], anyRole = false) => {
  if (roles.length === 0) {
    return true;
  }

  if (anyRole) {
    return roles.some(role => {
      return (
        userInfo &&
        userInfo.roles &&
        userInfo.roles.length > 0 &&
        userInfo.roles.includes(role)
      );
    });
  }

  return roles.every(
    role =>
      userInfo &&
      userInfo.roles &&
      userInfo.roles.length > 0 &&
      userInfo.roles.includes(role)
  );
};

class CanAccess extends React.Component {
  render() {
    const { render, children, userInfo, roles, anyRole, tenants } = this.props;
    const isValidTenants = tenants ? checkUserType(userInfo, tenants) : true;
    const isValidRoles = checkIfHasAccess(userInfo, roles, anyRole);
    if (isValidRoles && isValidTenants) {
      if (children) {
        return children;
      }
      return render();
    }

    return null;
  }
}

CanAccess.defaultProps = {
  roles: [],
  anyRole: false,
  userInfo: {
    roles: []
  }
};

CanAccess.propTypes = {
  roles: arrayOf(string),
  anyRole: bool,
  userInfo: shape({
    roles: arrayOf(string)
  }),
  children: node,
  render: func
};

export default CanAccess;
