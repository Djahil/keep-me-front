import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import HeadFootLayoutRoute from './components/front-office/layouts/HeadFootLayoutRoute';
import HeadLayoutRoute from './components/front-office/layouts/HeadLayoutRoute';
import FootLayoutRoute from './components/front-office/layouts/FootLayoutRoute';

import AdminController from './components/back-office/AdminController';
import WelcomePage from './components/front-office/welcome/WelcomePage';
import VisitCardPage from './components/front-office/visit-card/VisitCardPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <HeadFootLayoutRoute exact path = "/" component = {WelcomePage} />
            <Route path="/admin" component={AdminController} />
            <Route path="/card" component={VisitCardPage} />
            {/* Exemples d'utilisation des différents composants *LayoutRoutes */}
            <HeadFootLayoutRoute path="/hfl" component={WelcomePage} />
            <HeadLayoutRoute path="/hl" component={WelcomePage} />
            <FootLayoutRoute path="/fl" component={WelcomePage} />
        </Switch>
    </BrowserRouter>
);

export default App;
