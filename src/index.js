import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/front-office/welcome/WelcomePage';
import AdminController from './components/back-office/AdminController';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {WelcomePage} />
            <Route path="/admin" component={AdminController} />
        </Switch>
    </BrowserRouter>
 ), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
