import React, { Component } from 'react';
import { HashRouter, Switch, Route, HashRouter as Router } from 'react-router-dom';
import Layout from './pages/index';
import IndexContent from './pages/indexPage'
import TechnicalStation from './pages/technicalStation';
import Tool from './pages/tool';
//import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Switch>
                        <Route exact path={'/'} component={IndexContent} />
                        <Route path={'/technicalStation'} component={TechnicalStation} />
                        <Route path={'/tool'} component={Tool} />
                    </Switch>
                </Layout>
            </HashRouter>
        );
    }
}

export default App;

