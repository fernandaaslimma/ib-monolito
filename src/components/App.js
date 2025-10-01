import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Provider } from "redux-zero/react";
import { ThemeProvider } from "styled-components";

import "../styles/settings/fonts";
import "../styles/generic";
import "../../config/globals";

import Toastr from "./common/Toastr";
import Modal from "./common/Modal";
import GlobalLoading from "./common/GlobalLoading";

import { translate, withI18n } from "../utils/i18n";
import { rem } from "../styles/tools";
import Routes from "./Routes";

function App(store) {
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={{
          // space: [0, rem(5), rem(10), rem(15), rem(20)],
          breakpoints: [rem(320), rem(450), rem(767), rem(992), rem(1199)]
        }}
      >
        <Fragment>
          <Helmet defaultTitle={translate("INTERNET_BANKING_TITLE")} />
          <Routes />
          <GlobalLoading />
          <Modal />
          <Toastr />
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default withI18n(App);
