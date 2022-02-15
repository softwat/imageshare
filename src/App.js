import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import { Header, MyList, MyLike, Result } from "./components/index.js";
import { Main, MyProfile } from "./pages/index.js";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import { loginInCheck } from "./shared/common";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // let token = sessionStorage.getItem("token").split("BEARER ")[1].toString();
  let token = sessionStorage.getItem("token");
  React.useEffect(() => {
    if (user?.is_login) {
      return;
    } else {
      dispatch(userActions.checkLoginApi(token));
    }
  }, []);

  return (
    <React.Fragment>
      <Route path="/" component={Header}></Route>
      <Route path="/" exact component={Main}></Route>
      <Route path="/myprofile" exact component={MyProfile}></Route>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/create" exact component={Create} />
      <Route path="/pictures/:id" component={Detail} />
    </React.Fragment>
  );
}

export default App;
