import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import CommonLayout from './pages/layout';
import Index from './pages/indexPage'
import TechnicalStation from './pages/technicalStation';
import Tool from './pages/tool';
//import logo from './logo.svg';

class Routers extends Component {
    render() {
        console.log('props===>', this);
        return (
            <div>
                <Router>
                    <CommonLayout>
                        <Switch>
                            <Route path={'/'} exact component={Index} />
                            <Route path={'/technicalStation'} component={TechnicalStation} />
                            <Route path={'/tool'} component={Tool} />
                        </Switch>
                    </CommonLayout>
                </Router>
            </div>
        );
    }
}

export default Routers;
