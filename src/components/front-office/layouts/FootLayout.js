import React, { Fragment } from 'react';

import Footer from './footer/Footer'

const HeadLayout = ({ children }) => (
    <Fragment>
        { children }
        <Footer />
    </Fragment>
);
export default HeadLayout; 