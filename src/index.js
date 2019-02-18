import React from 'react';
import ReactDOM from 'react-dom';

import WelcomePage from './components/front-office/welcome/WelcomePage';
import Admin from './components/back-office/Admin';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'; 
import * as serviceWorker from './serviceWorker';
import Contact from "./components/front-office/contact/Contact";
import Login from "./components/front-office/login/Login";
import Signin from "./components/front-office/sigin/Signin";

import User from "./components/front-office/user/User";
import UserUpdate from "./components/front-office/user/user-update/UserUpdate";

import EmployeeCreate from "./components/front-office/employee/employee-create/EmployeeCreate";
import EmployeeUpdate from "./components/front-office/employee/employee-update/EmployeeUpdate";
import EmployeeDelete from "./components/front-office/employee/employee-delete/EmployeeDelete";
import EmployeeShare from "./components/front-office/employee/employee-share/EmployeeShare";
import NotFound from "./components/front-office/not-found/NotFound";

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/Admin" component={Admin} />

            <Route exact path = "/" component = {WelcomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />

            <Route exact path="/user" component={User} />
            <Route exact path="/user/me" component={UserUpdate} />

            <Route exact path="/user/create" component={EmployeeCreate} />
            <Route exact path="/user/update/:id" component={EmployeeUpdate} />
            <Route exact path="/user/delete/:id" component={EmployeeDelete}/>
            <Route exact path="/user/share/:id" component={EmployeeShare} />

            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    
 ), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
