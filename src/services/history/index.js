let history;

if (typeof window === "object") {
  const createBrowserHistory = require("history/createBrowserHistory").default;

  history = createBrowserHistory();
} else {
  history = {};
}

export default history;
