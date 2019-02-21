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
import EmployeeUpdate from "./components/front-office/employee/employee-update-page/EmployeeUpdate";
import EmployeeShare from "./components/front-office/employee/employee-share/EmployeeShare";
import EmployeeCreateContainer from './components/front-office/employee/employee-create-page/EmployeeCreateContainer';

const App = () => (
    <BrowserRouter>
        <Switch>
            <HeadFootLayoutRoute exact path = "/" component = {WelcomePage} />
            <Route path="/admin" component={AdminController} />
            <Route path="/card" component={VisitCardPage} />

            <HeadFootLayoutRoute exact path="/contact" component={Contact} />
            <HeadFootLayoutRoute exact path="/login" component={Login} />
            <HeadFootLayoutRoute exact path="/signin" component={Signin} />
            <HeadFootLayoutRoute exact path="/forgot-password" component={ForgotPassword} />

            <HeadFootLayoutRoute exact path="/user" component={User} />
            <HeadFootLayoutRoute exact path="/user/me" component={UserUpdate} />

            <HeadFootLayoutRoute exact path="/user/create" component={EmployeeCreateContainer} />
            <HeadFootLayoutRoute exact path="/user/update/:id(\d+)" component={EmployeeUpdate} />
            <HeadFootLayoutRoute exact path="/user/share/:id" component={EmployeeShare} />
        </Switch>
    </BrowserRouter>
);

export default App;
