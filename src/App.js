import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import HeadFootLayoutRoute from './components/front-office/layouts/HeadFootLayoutRoute';

import AdminController from './components/back-office/AdminController';
import WelcomePage from './components/front-office/welcome/WelcomePage';
import VisitCardPage from './components/front-office/visit-card/VisitCardPage';
import Contact from "./components/front-office/contact/Contact";
import Login from "./components/front-office/login-page/Login";
import Signin from "./components/front-office/signin/Signin";
import ForgotPassword from "./components/front-office/forgot-password/ForgotPassword";
import User from "./components/front-office/user/User";
import UserUpdate from "./components/front-office/user/user-update-page/UserUpdate";
import EmployeeCreate from "./components/front-office/employee/employee-create-page/EmployeeCreate";
import EmployeeUpdate from "./components/front-office/employee/employee-update-page/EmployeeUpdate";
import EmployeeShare from "./components/front-office/employee/employee-share/EmployeeShare";

const App = () => (
    <BrowserRouter>
        <Switch>
            <HeadFootLayoutRoute exact path = "/" component = {WelcomePage} />
            <Route path="/admin" component={AdminController} />
            <Route path="/card" component={VisitCardPage} />

            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/forgot-password" component={ForgotPassword} />

            <Route exact path="/user" component={User} />
            <Route exact path="/user/me" component={UserUpdate} />

            <Route exact path="/user/create" component={EmployeeCreate} />
            <Route exact path="/user/update/:id(\d+)" component={EmployeeUpdate} />
            <Route exact path="/user/share/:id" component={EmployeeShare} />
        </Switch>
    </BrowserRouter>
);

export default App;
