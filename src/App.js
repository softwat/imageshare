import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import { Header } from './components/index.js';
import { Main, MyProfile } from './pages/index.js';

function App() {
    return (
        <React.Fragment>
            <Route path="/" component={Header}></Route>
            <Route path="/" exact component={Main}></Route>
            <Route path="/myprofile" exact component={MyProfile}></Route>
        </React.Fragment>
    );
}

export default App;

// import React, { Component } from 'react';
// import { Route } from 'react-router';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class App extends Component {
//     goToHome = () => {
//         this.props.history.push('/');
//     };

//     goToExplain = () => {
//         this.props.history.push('/explain');
//     };
//     render() {
//         return (
//             <div>
//                 <span onClick={this.goToHome}>홈으로</span>
//                 <span onClick={this.goToExplain}>설명으로</span>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/explain" component={Explain} />
//             </div>
//         );
//     }
// }

// class Home extends Component {
//     render() {
//         return <div>안녕하세요 여기는 / 입니다.</div>;
//     }
// }

// class Explain extends Component {
//     render() {
//         return <div>여기는 explain 입니다.</div>;
//     }
// }

// export default connect(null, null)(withRouter(App));
