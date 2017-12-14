import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router , IndexRoute } from 'react-router-dom';
import Layout from './pages/index';
import TechnicalStation from './pages/technicalStation/index';
import Tool from './pages/tool/index';
//import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Layout}></Route>
                    <Route path={'technicalStation'} component={TechnicalStation} />
                    <Route path={'tool'} component={Tool} />
                </Switch>
            </Router>
        );
    }
}

export default App;

