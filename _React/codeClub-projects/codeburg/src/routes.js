import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import Home from './pages/home';
import Requests from './pages/requests';

function RouteList() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Requests' component={Requests} />
            </Switch>
        </Router>
    )
}

export default RouteList;