import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <React.Fragment>
      {/* <Grid> */}
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />{" "}
        <Route path="/login" exact component={Login} />{" "}
        <Route path="/sign_up" exact component={SignUp} />{" "}
        <Route path="/write" exact component={PostWrite} />{" "}
        <Route path="/write/:id" component={PostWrite} />{" "}
        <Route path="/post/:id" exact component={PostDetail} />{" "}
        <Route path="/noti" exact component={Notification} />{" "}
      </ConnectedRouter>
      {/* </Grid>{" "} */}
    </React.Fragment>
  );
}

export default App;
