import React from 'react';
import { Route } from 'react-router-dom';
import FootLayout from './FootLayout';


const FootLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <FootLayout>
          <Component {...matchProps} />
        </FootLayout>
      )} />
    )
};

export default FootLayoutRoute;