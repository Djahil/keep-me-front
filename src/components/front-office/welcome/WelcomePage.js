import React, { Fragment } from 'react'
import Intro from './intro/Intro';
import Advantages from './advantages/Advantages';
import Products from './products/Products'
import Presentation from './presentation/Presentation'

//////////
// TEST //
//////////
import Header from '../layouts/header/Header'
const WelcomePage = () => (
    <Fragment>
        <Header />
        <Intro /> 
        <Advantages />
        <Products />
        <Presentation />
    </Fragment>
);

export default WelcomePage;