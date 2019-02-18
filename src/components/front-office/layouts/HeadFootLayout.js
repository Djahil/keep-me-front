import React, { Fragment } from 'react';

import Header from './header/Header'
import Footer from './footer/Footer'

const HeadFootLayout = ({ children }) => (
    <Fragment>
        <Header />
        { children }
        <Footer />
    </Fragment>
);
export default HeadFootLayout; 