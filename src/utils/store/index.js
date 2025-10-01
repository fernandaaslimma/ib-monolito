import createStore from "redux-zero";
import loadingMiddleware from "redux-loading-middleware";
import { applyMiddleware } from "redux-zero/middleware";

import commonState from "./commonState";
const middlewares = applyMiddleware(loadingMiddleware);
let initialState;

if (typeof window === "object") {
  initialState = Object.assign({}, window.__INITIAL_STATE__, commonState);
} else {
  initialState = commonState;
}

const store = createStore(initialState, middlewares);

export default store;
