import React, { Fragment } from 'react'
import Intro from './intro/Intro';
import Advantages from './advantages/Advantages';
import Products from './products/Products'
import Presentation from './presentation/Presentation'

//////////
// TEST //
//////////
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'

const WelcomePage = () => (
    <Fragment>
        <Header />
        <Intro /> 
        <Advantages />
        <Products />
        <Presentation />
        <Footer />
    </Fragment>
);

export default WelcomePage;