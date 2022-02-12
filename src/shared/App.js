import React from "react";
import "./App.css";

import { Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Create from "../pages/Create";
import Detail from "../pages/Detail";

function App() {
  return (
    <React.Fragment>
      <header></header>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/create" exact component={Create} />
        <Route path="/detail" exact component={Detail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
