import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router'; 

import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route component={Home} path="/" />
        <Route component={Users} path="/users"/>
        <Route component={User} path="/user"/>
    </Router>,
    document.getElementById('app')
)

if (module.hot) {  
    module.hot.accept();
}