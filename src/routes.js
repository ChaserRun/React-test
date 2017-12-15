import React, { Component } from 'react';
import { HashRouter, Switch, Route, HashRouter as Router } from 'react-router-dom';
import Layout from './pages/layout';
import Index from './pages/indexPage'
import TechnicalStation from './pages/technicalStation';
import Tool from './pages/tool';
//import logo from './logo.svg';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path={'/'} component={Index} />
                        <Route path={'/technicalStation'} component={TechnicalStation} />
                        <Route path={'/tool'} component={Tool} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default Routers;
