import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import IndexPage from './pages/index';
//import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

