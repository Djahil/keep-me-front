import React, { Fragment } from 'react';

import Header from './header/Header'

const HeadLayout = ({ children }) => (
    <Fragment>
        <Header />
        { children }
    </Fragment>
);
export default HeadLayout; 