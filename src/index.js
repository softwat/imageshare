import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
