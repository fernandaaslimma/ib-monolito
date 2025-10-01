import React from "react";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import store from "../utils/store";
import history from "../services/history";
import { Router } from "react-router-dom";

function Root() {
  return (
    <AppContainer>
      <Router history={history}>
        <App {...store} />
      </Router>
    </AppContainer>
  );
}

export default Root;
