import React, { Fragment } from "react";
import { node } from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import Impersonate from "../Impersonate";
import { Content } from "./styles";
import SessionExpiration from "../../common/SessionExpiration";

function Layout({ children, notVisible }) {
  return (
    <Fragment>
      <Impersonate />
      <Header />
      <SessionExpiration />
      <Content visible={notVisible}>{children}</Content>
      <Footer visible={notVisible} />
    </Fragment>
  );
}

Layout.propTypes = {
  children: node.isRequired // eslint-disable-line
};

export default Layout;
