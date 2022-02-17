import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import { Header, MyList, MyLike, Result } from './components/index.js';
import { Main, MyProfile } from './pages/index.js';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Create from './pages/Create';
import Detail from './pages/Detail';
import { getCookie } from './shared/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from './redux/modules/user';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    let token = getCookie('token');

    React.useEffect(() => {
        if (user?.is_login) {
            return;
        } else if (!token) {
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
            <Route path="/myprofile/mylist" exact component={MyList}></Route>
            <Route path="/myprofile/mylike" exact component={MyLike}></Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/create" exact component={Create} />
            <Route path="/pictures/:id" component={Detail} />
            <Route path="/result" component={Result} />
        </React.Fragment>
    );
}

export default App;
